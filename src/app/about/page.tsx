"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Award, Truck, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10">
      {/* هدر */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          درباره ما
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          من در شرکت شایان با سال‌ها تجربه در زمینه توزیع شمع خودرو، بهترین
          کیفیت و خدمات را به شما ارائه می‌دهیم.
        </p>
      </div>

      {/* بخش معرفی */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4 mb-16">
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
            تیم ما با بهره‌گیری از تکنولوژی‌های روز دنیا و رعایت استانداردهای
            بین‌المللی، همواره در تلاش است تا بهترین محصولات را با نهایت دقت و
            کیفیت به دست شما برساند.
          </p>
          <p className="text-gray-600 leading-7">
            اعتماد شما سرمایه ماست و ما با ارائه خدمات سریع و پشتیبانی قوی در
            کنار شما هستیم.
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
      </div>

      {/* مزایا */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {advantages.map((adv, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <adv.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h4 className="font-bold text-gray-800 mb-2">{adv.title}</h4>
            <p className="text-gray-600 text-sm">{adv.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;

// داده‌های مزایا
const advantages = [
  {
    icon: Award,
    title: "کیفیت برتر",
    description:
      "ما از بهترین مواد اولیه برای تولید شمع‌های خودرو استفاده می‌کنیم.",
  },
  {
    icon: Truck,
    title: "ارسال سریع",
    description: "سفارشات شما در کوتاه‌ترین زمان ممکن به دست‌تان می‌رسد.",
  },
  {
    icon: ShieldCheck,
    title: "ضمانت اصالت کالا",
    description: "تمامی محصولات ما با ضمانت اصالت و کیفیت عرضه می‌شوند.",
  },
  {
    icon: CheckCircle,
    title: "پشتیبانی قوی",
    description: "تیم پشتیبانی ما همیشه آماده پاسخگویی به سوالات شماست.",
  },
];
