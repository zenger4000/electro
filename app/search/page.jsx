"use client";

import { useState , useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "../Pagination";
import { hasFullElectrolyteProfile } from "../lib/Nutrition";
import CompleteDataBadge from "../components/CompleteDataBadge";
import ElectroExcellence from "../components/ElectroExcellence";
import { DAILY_VALUES } from "../components/food/ElectrolyteGrid";
import { getRating } from "../components/food/ElectrolyteGrid";
import { getSearchAmount } from "../lib/Nutrition";


export default function SearchPage() {

  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("q") ?? "";
  const urlType =searchParams.get("type") ?? "both";
  const [query, setQuery] = useState((urlQuery));
  const [foods, setFoods] = useState(null);
  const sortedFoods = foods ? [...foods].sort((a, b) => {
    return Number(hasFullElectrolyteProfile(b)) -
           Number(hasFullElectrolyteProfile(a));
}):[];
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const router = useRouter();
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 0,
    totalHits: 0,
  });
  const urlPage = Number(searchParams.get("page") ?? 1);


  

  // Pagination setup
  const maxButtons = 5;
  let startPage = Math.max(1, urlPage - Math.floor(maxButtons / 2));
  let endPage = Math.min(
    pagination.totalPages,
    startPage + maxButtons - 1
  );
  startPage = Math.max(1, endPage - maxButtons + 1);
  const pages = [];

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  useEffect(()=> {
  handleSearch(urlQuery);
  setQuery(urlQuery);
  },[urlQuery , urlPage , urlType])

  function handleClick(e) {
    e.preventDefault()
    const trimmedQuery = query.trim()
    if (!trimmedQuery) return;
    router.push(`/search?q=${encodeURIComponent(trimmedQuery)}&page=1&type=${urlType}`);
  }

  async function handleSearch(searchQuery) {
    if (!searchQuery.trim()) return;
    setLoading(true);
    setErr(null)

    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(searchQuery)}&page=${urlPage}&type=${urlType}`
      );

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Search failed.");
      }

      setFoods(data.foods);
      setPagination(data.pagination);

    } catch (err) {
      console.error(err);
      setErr(err)
    } finally {
      setLoading(false);
    }

  }
  
  return (
    <div className="pt-20">
    <main className=" mx-auto w-11/12 border border-white rounded-3xl mb-12 md:p-24 p-8 min-h-[80vh] text-white bg-[#254141] transition-all">

      <h1 className="inline-block text-2xl md:text-4xl font-bold mb-8">
        Search Foods
      </h1>

      {loading && <p className="inline-block mx-8">Searching...</p>}

      <form
        onSubmit={handleClick}
        className="flex flex-wrap justify-center gap-3 mb-8 columns-6"
      >
        <input
          className="flex-1 rounded-lg border-2 p-3 text-black focus:border-[#25aaaa] focus:outline-none"
          placeholder="Search foods..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          className="rounded-lg bg-[#25aaaa] px-2 md:px-6 text-white"
        >
          Search
        </button>
        {/* food type selection */}
        <div className="inline-flex overflow-hidden rounded-xl bg-white">
          {[
            { value: "all", label: "All" },
            { value: "branded", label: "Branded" },
            { value: "non-branded", label: "Non-Branded" },
            { value: "legacy", label: "Legacy" },
            { value: "survey", label: "Survey" },

          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() =>
                router.push(
                  `/search?q=${encodeURIComponent(urlQuery)}&page=1&type=${option.value}`
                )
              }
              className={`
                px-2 py-2 text-xs font-semibold transition-colors duration-200
                border-r last:border-r-0 border-gray-300
                ${
                  urlType === option.value
                  ? "bg-[#25aaaa] text-white"
                  : "bg-white text-gray-700 hover:bg-[#e9f8f8]"
                }
        `}
            >
              {option.label}
            </button>
          ))}
        </div>
      </form>

      {err && <p>{err.message}</p>}
      {foods?.length === 0 && <p>No foods found.</p>}

      {/* pagination */}
      <Pagination pagination={ pagination } />


      {/* Food Results */}
      <div className="space-y-3">
        
        
        {sortedFoods && sortedFoods.map((food) => {
            const ratings = {};
            //Rating setup
            [
              "Potassium, K",
              "Sodium, Na",
              "Calcium, Ca",
              "Magnesium, Mg",
          ].forEach((electrolyte)=>{
            const dailyValue = DAILY_VALUES[electrolyte.split(",")[0]];
            const percentage = (getSearchAmount(food,electrolyte) / dailyValue) * 100;
            ratings[electrolyte] = getRating(percentage);
          })

           return <div
            key={food.fdcId}
            className="rounded-lg relative border hover:scale-[1.02] p-8 bg-white text-black transition"
          >
            <div className="flex flex-row justify-between">
              <div className="-mt-6 mb-6 -ml-6 text-[#25aaaa] text-xs">
                {hasFullElectrolyteProfile(food) && <><CompleteDataBadge  size={28}/> Full Electrolyte Profile </> }
              </div>
              <div>
              {ratings["Potassium, K"]?.label === "Excellent" &&
              <ElectroExcellence ele="K" />}

              {ratings["Sodium, Na"]?.label === "Excellent" &&
                  <ElectroExcellence ele="Na" />}

              {ratings["Magnesium, Mg"]?.label === "Excellent" &&
                  <ElectroExcellence ele="Mg" />}

              {ratings["Calcium, Ca"]?.label === "Excellent" &&
                  <ElectroExcellence ele="Ca" />}
              </div>
            </div>


   
            <h2 className="font-semibold pb-1">
              {food.description} - {food.fdcId}
            </h2>
            
            <p>   
              {/* {food.foodNutrients.map((n)=> n.nutrientName )} */}
           </p>

            <p className="text-sm ">
              <span className={`p-1 text-xs text-white rounded-md
                ${food.dataType==="Branded"?"bg-[#2f3bec]":
                food.dataType==="Foundation"?" bg-[#a4bce2]":
                food.dataType==="SR Legacy"? "bg-[#6bdb60]":
                food.dataType==="Survey (FNDDS)"? "bg-[#b0fcce]":""
                }`}>
                {food.dataType}
              </span>
              {food.dataType==="Branded" && ` ${food.brandName || food.brandOwner || "Unknown Brand"}`}
            </p>
          </div>

})}

      </div>
      <Pagination pagination={pagination} />
    </main>
    </div>
  );
}