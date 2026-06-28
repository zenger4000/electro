"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [userQuery, setUserQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedQuery = userQuery.trim();

    if (!trimmedQuery) return;

    router.push(
      `/search?q=${encodeURIComponent(trimmedQuery)}`
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-1/2 items-center rounded-3xl bg-white p-2 shadow-lg "
    >
      <input
        type="text"
        placeholder="Search for a food..."
        value={userQuery}
        onChange={(e) => setUserQuery(e.target.value)}
        className="flex-1 bg-transparent px-4 py-2 text-gray-800 placeholder:text-gray-400 outline-none"
      />

      <button
        type="submit"
        className="rounded-2xl bg-blue-600 px-6 py-2 font-medium text-white transition hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;