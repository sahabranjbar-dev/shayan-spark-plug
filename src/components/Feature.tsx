import { BookmarkCheck, Handshake, UserRound } from "lucide-react";
import React from "react";

const Feature = () => {
  const data = [
    {
      id: 1,
      title: "مشاوره فنی تخصصی",
      icon: Handshake,
      description:
        "ارائه راهکارهای تخصصی در انتخاب شمع و لوازم یدکی متناسب با مدل خودرو و شرایط رانندگی شما توسط کارشناسان مجرب",
    },
    {
      id: 2,
      title: "تضمین کیفیت و قیمت",
      icon: BookmarkCheck,
      description:
        "تضمین اصالت کالا با ارائه گارانتی معتبر و رقابتی‌ترین قیمت‌های بازار همراه با مشاوره خرید بهینه",
    },
    {
      id: 3,
      title: "پشتیبانی همه‌جانبه",
      icon: UserRound,
      description:
        "خدمات پس از فروش 24 ساعته، پاسخگویی فنی و ارسال سریع به تمام نقاط مازندران و گلستان در کوتاه‌ترین زمان",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 rounded-lg text-center">
      <div className="max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          شمع شایان اسپارک
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          پخش و توزیع شمع و لوازم یدکی خودرو در استان مازندران و گلستان
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="group p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center bg-white hover:bg-blue-50"
          >
            {/* Icon Container - Larger size for SVG background */}
            <div className="relative w-32 h-32 md:w-36 md:h-36 mb-6 md:mb-8 flex items-center justify-center">
              {/* Larger Pentagon SVG Background */}
              <svg
                className="absolute inset-0 w-full h-full transition-all duration-500 group-hover:fill-blue-500 group-hover:scale-110"
                viewBox="0 0 283 300"
                fill="#ecf2fc"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <path d="M60.53 122L60.53 109C60.53 109 60.53 104 66.54 101L133.54 61C133.54 61 140.54 58.4 146.54 61L218.55 102C218.55 102 223.15 105 222.55 111L222.55 189C222.55 189 221.35 195.4 216.55 198L147.54 239C147.54 239 146.14 241.6 135.54 240L63.53 198C63.53 198 60.93 196.6 60.53 189L60.53 122Z" />
              </svg>

              {/* Icon - Centered perfectly */}
              <div className="relative z-10 text-blue-600 transition-all duration-500 group-hover:text-white">
                <item.icon
                  size={40}
                  strokeWidth={1.75}
                  className="group-hover:scale-110 transition-transform"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-800 group-hover:text-blue-600">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed md:leading-loose text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
