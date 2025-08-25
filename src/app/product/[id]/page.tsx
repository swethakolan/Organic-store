"use client";

import { useRouter, useParams } from "next/navigation";
import { products } from "@/data/products";
import Image from "next/image";

export default function ProductModal() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const product = products.find((item) => item.id.toString() === id);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="inset-0 bg-white bg-opacity-40 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-lg shadow-xl relative">
        {/* Close Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl cursor-pointer"
        >
          ✕
        </button>

        {/* Product Image */}
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="rounded-lg object-cover mx-auto"
        />

        {/* Basic Info */}
        <h1 className="text-2xl font-bold mt-4 text-gray-800 text-center">
          {product.name}
        </h1>
        <p className="text-gray-500 text-center mt-1">{product.category}</p>
        <p className="text-amber-700 font-semibold text-lg text-center mt-2">
          {product.price}
        </p>

        {/* Description */}
        <p className="text-gray-600 mt-4 text-center">
          {product.description}
        </p>

        {/* Features */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-800">Features</h2>
          <ul className="list-disc list-inside text-gray-600 text-sm mt-1">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Nutrition Info */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-800">Nutrition (per serving)</h2>
          <div className="grid grid-cols-2 text-gray-600 text-sm mt-2">
            {Object.entries(product.nutrition).map(([key, value]) => (
              <div key={key} className="flex justify-between border-b py-2 px-2">
                <span className="capitalize">{key}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Traceability Info */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-800">Traceability</h2>
          <p className="text-gray-600 text-sm mt-1">
            <strong>Source:</strong> {product.traceability.source}
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Certification:</strong> {product.traceability.certification}
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Harvest Date:</strong> {product.traceability.harvestDate}
          </p>
        </div>

        {/* Action Button */}
        <button
          className="w-full mt-5 py-2 rounded-xl bg-amber-600 text-white font-medium shadow hover:bg-amber-700 transition-all duration-300"
        >
          Buy now
        </button>
      </div>
    </div>
  );
}
