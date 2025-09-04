"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  product: any;
  index: number;
}

const ProductCard = ({ product, index }: Props) => {
  return (
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
  );
};

export default ProductCard;
