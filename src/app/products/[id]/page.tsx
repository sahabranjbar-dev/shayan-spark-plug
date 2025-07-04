"use client";

import React, { use } from "react";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
const ProductPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  // داده‌های نمونه برای محصول
  const product = {
    id,
    title: "شمع خودروی پریمیوم مدل XT-5000",
    price: 450000,
    discountPrice: 380000,
    rating: 4.8,
    reviewCount: 124,
    description:
      "شمع خودروی با کیفیت بالا با فناوری نانو برای عملکرد بهتر و مصرف سوخت بهینه. مناسب برای خودروهای سواری و اسپرت.",
    features: [
      "مقاومت بالا در برابر حرارت",
      "عمر مفید 2 برابر شمع‌های معمولی",
      "کاهش مصرف سوخت تا 15%",
      "ساختار پلاتینیومی",
    ],
    images: [
      `/hero-${id}.jpg`,
      `/hero-${id}.jpg`,
      `/hero-${id}.jpg`,
      `/hero-${id}.jpg`,
    ],
  };

  const [selectedImage, setSelectedImage] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* هدر محصول */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-6 px-4 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            {product.title}
          </h1>
          <div className="flex items-center mt-2">
            <div className="flex items-center bg-white/20 px-2 py-1 rounded-full">
              <Star className="w-4 h-4 text-yellow-300 fill-yellow-300 mx-2" />
              <span className="text-white text-sm ml-1">{product.rating}</span>
            </div>
            <span className="text-white/80 text-sm mr-2">
              ({product.reviewCount} نظر)
            </span>
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
                src={product.images[selectedImage]}
                alt={product.title}
                fill
                className="object-contain p-6"
              />
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all"
                onClick={() =>
                  setSelectedImage((prev) =>
                    prev < product.images.length - 1 ? prev + 1 : 0
                  )
                }
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all"
                onClick={() =>
                  setSelectedImage((prev) =>
                    prev > 0 ? prev - 1 : product.images.length - 1
                  )
                }
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex p-4 space-x-2 overflow-x-auto">
              {product.images.map((img, index) => (
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
            {/* قیمت و تخفیف */}
            <div className="mb-6">
              {product.discountPrice && (
                <div className="flex items-center">
                  <span className="text-xl font-bold text-gray-900 text-nowrap">
                    {product.discountPrice.toLocaleString()} تومان
                  </span>
                  {product.price > product.discountPrice && (
                    <span className="text-lg text-gray-500 line-through mr-3 text-nowrap">
                      {product.price.toLocaleString()} تومان
                    </span>
                  )}
                  {product.price > product.discountPrice && (
                    <span className="bg-red-100 text-red-800 text-xs font-semibold text-nowrap px-2 py-1 rounded mx-2">
                      {Math.round(
                        (1 - product.discountPrice / product.price) * 100
                      )}
                      % تخفیف
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* ویژگی‌ها */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">ویژگی‌های محصول:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* تعداد و دکمه‌ها */}
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <span className="text-gray-700 mr-3">تعداد:</span>
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                    onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
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
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-12">
                  <ShoppingCart className="w-5 h-5 ml-2" />
                  افزودن به سبد خرید
                </Button>
                <Button variant="outline" className="h-12">
                  <Heart className="w-5 h-5 ml-2" />
                  علاقه‌مندی‌ها
                </Button>
              </div>
            </div>

            {/* اطلاعات ارسال و گارانتی */}
            <div className="border-t pt-4">
              <div className="md:flex justify-between items-center">
                <div className="flex items-center p-2">
                  <Truck className="w-5 h-5 text-blue-500 mx-2" />
                  <span className="text-sm text-gray-600 text-nowrap">
                    ارسال رایگان برای مازندران و گلستان
                  </span>
                </div>
                <div className="flex items-center p-2">
                  <Shield className="w-5 h-5 text-green-500 mx-2" />
                  <span className="text-sm text-gray-600">
                    ضمانت اصالت کالا
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* توضیحات محصول */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            توضیحات کامل محصول
          </h2>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>

        {/* محصولات مرتبط */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            محصولات مشابه
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-40">
                  <Image
                    src={`/hero-${item}.jpg`}
                    alt={`محصول مشابه ${item}`}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">
                    شمع خودرو مدل XT-{3000 + item * 500}
                  </h3>
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs text-gray-500 mr-1">4.{item}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-600">
                      {(380000 + item * 20000).toLocaleString()} تومان
                    </span>
                    <button className="text-blue-500 hover:text-blue-700">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
