"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone, Send, Instagram } from "lucide-react";
import Link from "next/link";

const CTAButtons = () => {
  return (
    <>
      <motion.div
        className="flex flex-col sm:flex-row gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* تلگرام */}
        <Link
          href="https://t.me/Shshohadaee4048"
          target="_blank"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl flex justify-center items-center gap-2 shadow-lg transition-all"
        >
          <Send className="w-5 h-5" />
          پیام در تلگرام
        </Link>

        {/* اینستاگرام */}
        <Link
          href="https://www.instagram.com/shayansparkplug"
          target="_blank"
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg transition-all"
        >
          <Instagram className="w-5 h-5" />
          صفحه اینستاگرام
        </Link>
      </motion.div>

      {/* شماره تماس */}
      <motion.div
        className="w-60 max-w-60 min-w-60 flex justify-center items-center gap-3 text-gray-800 text-lg font-semibold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a
          href="tel:+989369782424"
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl flex justify-between gap-2 items-center"
        >
          <Phone className="w-6 h-6" />
          0936-978-2424{" "}
        </a>
      </motion.div>
      <motion.div
        className="w-60 max-w-60 min-w-60 flex justify-center items-center gap-3 text-gray-800 text-lg font-semibold"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a
          href="tel:+989142990300"
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl flex justify-between gap-2 items-center"
        >
          <Phone className="w-6 h-6" />
          0914-299-0300
        </a>
      </motion.div>
    </>
  );
};

export default CTAButtons;
