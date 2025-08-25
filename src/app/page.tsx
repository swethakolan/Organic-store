'use client';
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { products } from "../data/products";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-5">
      {/* Search Bar */}
      <SearchBar onSearch={setSearchQuery} />

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              {/* Image Section */}
              <div className="h-56 bg-gray-100 overflow-hidden flex items-center justify-center rounded-t-2xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text Section */}
              <div className="p-4 text-ce">
                <h2 className="text-lg font-bold text-gray-800 group-hover:text-amber-700 transition-colors">
                  {item.name}
                </h2>
                <p className="text-gray-500 text-sm mt-1">{item.category}</p>
                <p className="text-gray-900 font-semibold text-base mt-2">{item.price}</p>

                {/* Button */}
                <Link href={`/product/${item.id}`}>
                  <button className="w-full mt-4 py-2 rounded-xl bg-amber-600 text-white font-medium shadow hover:bg-amber-700 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    Know more
                  </button>
                </Link>
                
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3 mt-6">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
