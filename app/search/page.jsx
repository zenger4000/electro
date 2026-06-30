"use client";

import { useState , useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchPage() {

  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState((urlQuery));
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
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

      setFoods(data.foods || []);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  return (
    <main className="mx-auto max-w-4xl p-8 bg-[#25aaaa]">

      <h1 className="text-4xl font-bold mb-8">
        Search Foods
      </h1>

      <form
        onSubmit={handleClick}
        className="flex gap-3 mb-8"
      >
        <input
          className="flex-1 rounded-lg border p-3"
          placeholder="Search foods..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          className="rounded-lg bg-blue-600 px-6 text-white"
        >
          Search
        </button>
      </form>

      {loading && <p>Searching...</p>}

      <div className="space-y-3">

        {foods.map((food) => (

          <div
            key={food.fdcId}
            className="rounded-lg border p-4 hover:bg-gray-100 transition"
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
  );
}