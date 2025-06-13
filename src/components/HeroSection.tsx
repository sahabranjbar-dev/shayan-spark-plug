"use client";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

interface Slide {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  cta?: {
    text: string;
    link: string;
  };
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/hero-1.jpg",
    alt: "شمع خودروهای اصل و با کیفیت",
    title: "پخش تخصصی شمع خودرو",
    description: "ارائه بهترین برندهای جهانی با گارانتی اصالت کالا",
    cta: {
      text: "مشاهده محصولات",
      link: "/products",
    },
  },
  {
    id: 2,
    image: "/hero-2.jpg",
    alt: "انواع شمع خودروهای داخلی و خارجی",
    title: "شمع خودروهای داخلی و خارجی",
    description: "تامین کلیه شمع های مورد نیاز خودروهای ایرانی و خارجی",
    cta: {
      text: "مشاهده محصولات",
      link: "/products",
    },
  },
  {
    id: 3,
    image: "/hero-3.jpg",
    alt: "مشاوره فنی تخصصی",
    title: "مشاوره رایگان فنی",
    description: "کارشناسان ما آماده پاسخگویی به سوالات فنی شما هستند",
    cta: {
      text: "تماس با کارشناس",
      link: "/contact",
    },
  },
  {
  id: 4,
  image: "/hero-4.jpg",
  alt: "ارسال سریع و مطمئن به سراسر ایران",
  title: "ارسال سریع به سراسر کشور",
  description: "سفارشات شما در کوتاه‌ترین زمان ممکن و با بسته‌بندی ایمن به دستتان می‌رسد.",
  cta: {
    text: "نحوه ارسال",
    link: "/shipping-policy",
  },
}
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const HeroSection = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Check on mount
    handleResize();

    // Listen to resize
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const swiperConfig = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    navigation: isDesktop,
    modules: [Autoplay, Pagination, Navigation],
    loop: true,
    grabCursor: true,
  };

  return (
    <section className="relative bg-gray-800 h-[600px] max-h-[650px] p-4">
      <Swiper {...swiperConfig} className="h-full w-full rounded-2xl">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="!h-[600px]">
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                loading="eager"
                fetchPriority="high"
                priority={slide.id === 1}
                className="object-contain rounded-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* متن فارسی با انیمیشن */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.id}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={textVariants}
                    transition={{ duration: 0.5 }}
                    className="text-center text-white px-4 max-w-3xl"
                  >
                    <motion.h1
                      className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg"
                      variants={textVariants}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      className="text-xl md:text-2xl mb-6 drop-shadow-md leading-relaxed"
                      variants={textVariants}
                      transition={{ delay: 0.1 }}
                    >
                      {slide.description}
                    </motion.p>
                    {slide.cta && (
                      <motion.a
                        href={slide.cta.link}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300"
                        variants={textVariants}
                        transition={{ delay: 0.2 }}
                      >
                        {slide.cta.text}
                      </motion.a>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
