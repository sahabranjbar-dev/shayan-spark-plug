/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Heart,
  Check,
  Truck,
  Shield,
  PhoneOutgoing,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface ProductPageProps {
  product: Product;
}

export interface Product {
  id?: string;
  name?: string;
  price?: number;
  rating?: string;
  benefitsAndProperties?: string[];
  cars?: string[];
  images?: string[];
  createdAt?: string;
  updatedAt?: string;
  technicalSpecifications?: { id: string; key: string; value: string }[];
}

const ProductPage = ({ product }: ProductPageProps) => {
  const [selectedImage, setSelectedImage] = useState(
    product.images && product.images.length > 0 ? 0 : -1
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* هدر */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-6 px-4 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            {product.name}
          </h1>
          <div className="flex items-center mt-2">
            {product.rating && (
              <div className="flex items-center bg-white/20 px-2 py-1 rounded-full">
                <Star className="w-4 h-4 text-yellow-300 fill-yellow-300 mx-2" />
                <span className="text-white text-sm ml-1">
                  {product.rating}
                </span>
              </div>
            )}
            <span className="text-white/80 text-sm mr-2">(2 نظر)</span>
          </div>
        </div>
      </div>

      {/* محتوای اصلی */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* گالری تصاویر */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-80 md:h-96 w-full">
              <Image
                src={product?.images?.[selectedImage] || "/placeholder.png"}
                alt={product?.name || "تصویر محصول"}
                fill
                className="object-contain p-6"
              />
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
                onClick={() =>
                  setSelectedImage(
                    selectedImage === 0
                      ? product?.images && product.images.length > 0
                        ? product.images.length - 1
                        : 0
                      : selectedImage - 1
                  )
                }
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
                onClick={() =>
                  setSelectedImage(
                    selectedImage === (product?.images?.length ?? 1) - 1
                      ? 0
                      : selectedImage + 1
                  )
                }
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex p-4 space-x-2 overflow-x-auto">
              {product?.images?.map((img, index) => (
                <button
                  key={index}
                  className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={img}
                    alt={`نمایش ${index + 1}`}
                    width={64}
                    height={64}
                    className="object-contain w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* اطلاعات محصول */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            {product.price && (
              <div className="mb-6">
                <div className="text-xl font-bold text-gray-900">
                  قیمت: {product.price.toLocaleString()} تومان
                </div>
                <div className="my-4 bg-green-100 p-4 rounded-lg shadow-sm">
                  <Link
                    href="tel:+989369782424"
                    className="flex flex-col items-center justify-center gap-2 text-center text-sm md:flex-row md:gap-3 md:text-base text-black hover:underline transition"
                  >
                    <span>
                      به علت نوسانات ارز برای اطلاع از قیمت دقیق و به روز با
                      کارشناسان تماس بگیرید
                    </span>
                    <PhoneOutgoing
                      className="text-green-700 animate-pulse"
                      size={20}
                    />
                  </Link>
                </div>
              </div>
            )}

            {/* ویژگی‌ها */}
            {product?.benefitsAndProperties?.length &&
              product?.benefitsAndProperties?.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">
                    ویژگی‌های محصول:
                  </h3>
                  <ul className="space-y-2">
                    {product?.benefitsAndProperties?.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 mr-2" />
                        <span className="text-gray-700 text-sm md:text-lg">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            <div>
              {product?.cars?.length && product?.cars?.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">
                    خودروهای سازگار:
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {product?.cars?.map((car, index) => (
                      <li
                        key={index}
                        className="text-gray-700 text-sm md:text-lg"
                      >
                        {car}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* تعداد و دکمه‌ها */}
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <span className="text-gray-700 mr-3">تعداد:</span>
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 bg-white">{quantity}</span>
                  <button
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-12 text-xs md:text-sm font-semibold">
                  <ShoppingCart className="w-5 h-5" />
                  افزودن به سبد خرید
                </Button>
                <Button variant="outline" className="h-12">
                  <Heart className="w-5 h-5 ml-2" />
                  علاقه‌مندی‌ها
                </Button>
              </div>
            </div>

            {/* ارسال و گارانتی */}
            <div className="border-t pt-4">
              <div className="md:flex justify-between items-center">
                <div className="flex items-center p-2">
                  <Truck className="w-5 h-5 text-blue-500 mx-2" />
                  <span className="text-sm text-gray-600">
                    ارسال مازندران و گلستان
                  </span>
                </div>
                <div className="flex items-center p-2">
                  <Shield className="w-5 h-5 text-green-500 mx-2" />
                  <span className="text-sm text-gray-600">
                    گارانتی اصالت و کیفیت کالا
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* مشخصات فنی */}
        {product?.technicalSpecifications?.length &&
          product?.technicalSpecifications?.length > 0 && (
            <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                مشخصات فنی
              </h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full table-auto text-sm">
                  <tbody>
                    {product.technicalSpecifications.map((spec, idx) => (
                      <tr
                        key={spec.id}
                        className={`${
                          idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                        } hover:bg-gray-100 transition-colors`}
                      >
                        <td className="py-3 px-4 text-gray-800 font-bold border-b border-gray-100">
                          {spec.key}
                        </td>
                        <td className="py-3 px-4 text-gray-600 border-b border-gray-100">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default ProductPage;
