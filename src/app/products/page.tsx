"use client";

import React from "react";
import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const products = [
  {
    id: "1",
    title: "شمع خودرو مدل XT-5000",
    price: 380000,
    rating: 4.8,
    image: "/products/spark-plug-1.jpg",
  },
  {
    id: "2",
    title: "شمع خودرو مدل XT-5500",
    price: 420000,
    rating: 4.6,
    image: "/products/spark-plug-2.jpg",
  },
  {
    id: "3",
    title: "شمع خودرو مدل XT-6000",
    price: 450000,
    rating: 4.7,
    image: "/products/spark-plug-3.jpg",
  },
  {
    id: "4",
    title: "شمع خودرو مدل XT-6500",
    price: 470000,
    rating: 4.9,
    image: "/products/spark-plug-4.jpg",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10">
      {/* هدر */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          محصولات ما
        </h1>
        <p className="text-gray-600 text-lg">
          بهترین شمع‌های خودرو با کیفیت پریمیوم و عملکرد بالا
        </p>
      </div>

      {/* گرید محصولات */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
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
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2 text-center">
                {product.title}
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
                مشاهده جزئیات
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
