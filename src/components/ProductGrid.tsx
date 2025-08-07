"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/lib/types";

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const response = async () => {
      const res = await fetch("/data/products.json");
      const data = await res.json();
      setProducts(data.products);
    };
    response();
  }, []);
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-2xl font-bold text-center mb-8">محصولات پرفروش</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
