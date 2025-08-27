"use client";

import React from "react";
import { CheckCircle, Award, Truck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const advantages = [
  {
    icon: Award,
    title: "کیفیت برتر",
    description: "ما از بهترین شمع‌های خودرو استفاده می‌کنیم.",
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
const Benefits = () => {
  return (
    <>
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
    </>
  );
};

export default Benefits;
