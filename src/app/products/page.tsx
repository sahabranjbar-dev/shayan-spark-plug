"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Product } from "@/lib/types";
import Link from "next/link";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/data/products.json");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data?.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10">
      {/* هدر */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          محصولات ما
        </h1>
        <p className="text-gray-600 text-lg">
          بهترین شمع‌های خودرو با کیفیت و عملکرد بالا
        </p>
      </div>

      {/* گرید محصولات */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product, index) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="relative h-48">
              <Image
                src={product.images?.[0] || "/placeholder.png"}
                alt={product.name}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 overflow-ellipsis">
                {product.name}
              </h3>
              <div className="flex items-center justify-center mb-3">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 ml-1" />
                <span className="text-sm text-gray-500">{product.rating}</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-blue-600 text-lg">
                  {product.price.toLocaleString()} تومان
                </span>
                <Button
                  size="icon"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full"
                >
                  <ShoppingCart className="w-5 h-5" />
                </Button>
              </div>
              <Button
                variant="outline"
                className="w-full hover:bg-gray-100 transition-colors"
              >
                <Link href={`/products/${product.id}`}>مشاهده جزئیات</Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
