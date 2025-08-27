"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Introduce = () => {
  return (
    <>
      {/* متن */}
      <motion.div
        className="flex-1 space-y-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-gray-800">
          کیفیت، تخصص و رضایت شما برای ما اولویت است
        </h2>
        <p className="text-gray-600 leading-7">
          تیم ما با رعایت استانداردهای بین‌المللی، همواره در تلاش است تا بهترین
          محصولات را با نهایت دقت و کیفیت به دست شما برساند.
        </p>
        <p className="text-gray-600 leading-7">
          اعتماد شما سرمایه ماست و ما با ارائه خدمات سریع و پشتیبانی قوی در کنار
          شما هستیم.
        </p>
      </motion.div>

      {/* تصویر */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/about.jpg"
          alt="درباره ما"
          width={600}
          height={400}
          className="rounded-xl shadow-lg object-cover"
        />
      </motion.div>
    </>
  );
};

export default Introduce;
