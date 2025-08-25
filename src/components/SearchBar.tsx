"use client";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Send query back to parent
  };

  return (
    <div className="flex items-center w-full max-w-md mx-auto mt-5">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search products..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
      <button
        onClick={() => onSearch(query)}
        className="px-4 py-2 bg-amber-600 text-white rounded-r-xl hover:bg-amber-700 transition"
      >
        Search
      </button>
    </div>
  );
}
