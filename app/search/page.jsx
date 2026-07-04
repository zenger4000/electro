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

  useEffect(()=> {
  handleSearch(urlQuery);
  setQuery(urlQuery)
  },[urlQuery])

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
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query : searchQuery,
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Search failed.");
      }


      setFoods(data.foods || []);
    } catch (err) {
      console.error(err);
      setErr(err)
    } finally {
      setLoading(false);
    }

  }

  return (
    <div className="pt-20">
    <main className=" mx-auto md:p-24 p-8 min-h-[90vh] text-white bg-zinc-950 transition-all">

      <h1 className=" text-2xl md:text-4xl font-bold mb-8">
        Search Foods
      </h1>

      <form
        onSubmit={handleClick}
        className="flex gap-3 mb-8"
      >
        <input
          className="flex-1 rounded-lg border-2 p-3  focus:border-[#25aaaa] focus:outline-none"
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

      {loading && <p className="mb-8">Searching...</p>}
      {err && <p>{err.message}</p>}
      {foods?.length === 0 && <p>No foods found.</p>}

      <div className="space-y-3">

        {foods && foods.map((food) => (

          <div
            key={food.fdcId}
            className="rounded-lg border p-4 hover:bg-[#25aaaa] transition"
          >
            <h2 className="font-semibold">
              {food.description}
            </h2>

            <p className="text-sm text-gray-500">
              {food.dataType}
            </p>
          </div>

        ))}

      </div>
    </main>
    </div>
  );
}