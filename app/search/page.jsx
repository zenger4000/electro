"use client";

import { useState , useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchPage() {

  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState((urlQuery));
  const [foods, setFoods] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null)
  const router = useRouter()
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
  setQuery(urlQuery)
  },[urlQuery , urlPage])

  function handleClick(e) {
    e.preventDefault()
    const trimmedQuery = query.trim()
    if (!trimmedQuery) return;
    router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
  }

  async function handleSearch(searchQuery) {
    if (!searchQuery.trim()) return;
    setLoading(true);
    setErr(null)

    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(searchQuery)}&page=${urlPage}`
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
    <main className=" mx-auto w-11/12 border border-white rounded-3xl mb-12 md:p-24 p-8 min-h-[80vh] text-white bg-zinc-950 transition-all">

      <h1 className="inline-block text-2xl md:text-4xl font-bold mb-8">
        Search Foods
      </h1>

      {loading && <p className="inline-block mx-8">Searching...</p>}

      <form
        onSubmit={handleClick}
        className="flex gap-3 mb-8"
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
      </form>

      {err && <p>{err.message}</p>}
      {foods?.length === 0 && <p>No foods found.</p>}

      {/* pagination */}
      {!!pagination.totalHits && <div className="flex justify-center items-center flex-col"><p className="mb-8">
        {pagination.totalHits} results • Page {urlPage} of{" "}{pagination.totalPages}
      </p>
        <div className="mb-3 ">
        <button
        disabled={urlPage === 1}
        onClick={() => router.push(
          `/search?q=${encodeURIComponent(urlQuery)}&page=${urlPage - 1}`)}
        className="hover:text-[#83cccc]"
      >
        Prev
      </button>
      {pages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() =>router.push(
           (pageNumber === 1)
          ? `/search?q=${encodeURIComponent(urlQuery)}`
          : `/search?q=${encodeURIComponent(urlQuery)}&page=${pageNumber}`
            )}
          className={`${pagination.currentPage === pageNumber  ? "text-[#25aaaa]" : ""} mx-2 hover:text-[#83cccc]`}
        >
          {pageNumber}
        </button>
      ))}

      <button
        disabled={urlPage === pagination.totalPages}
        onClick={() => router.push(`/search?q=${encodeURIComponent(urlQuery)}&page=${urlPage + 1}`)}
        className="hover:text-[#83cccc]"
      >
        Next
      </button>
        </div>
      </div>
      }

      {/* Food Results */}
      <div className="space-y-3">

        {foods && foods.map((food) => (

          <div
            key={food.fdcId}
            className="rounded-lg border border-white hover:border-[#25aaaa] p-4 hover:bg-white hover:text-black transition"
          >
            <h2 className="font-semibold">
              {food.description}
            </h2>

            <p className="text-sm text-gray-500">
              {food.dataType}{food.dataType==="Branded" && `: ${food.brandName ?? food.brandOwner}`}
            </p>
          </div>

        ))}

      </div>
    </main>
    </div>
  );
}