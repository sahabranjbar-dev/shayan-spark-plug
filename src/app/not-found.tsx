// app/not-found.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
      {/* آیکون متحرک */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mb-8"
      >
        <Wrench size={150} strokeWidth={1.5} className="text-blue-500" />
      </motion.div>

      {/* متن و دکمه */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          صفحه مورد نظر یافت نشد!
        </h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-md leading-relaxed">
          آدرس اشتباهه یا این صفحه حذف شده.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300"
        >
          بازگشت به صفحه اصلی
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFoundPage;
