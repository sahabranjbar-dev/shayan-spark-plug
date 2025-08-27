"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Send, Instagram } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10">
      {/* هدر */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          تماس با ما
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          برای ارتباط سریع با ما از طریق تلگرام، اینستاگرام یا شماره تماس زیر
          اقدام کنید.
        </p>
      </div>

      {/* دکمه‌ها */}
      <div className="container mx-auto flex flex-col items-center gap-6 px-4">
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
            href="tel:+989369782424"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl flex justify-between gap-2 items-center"
          >
            <Phone className="w-6 h-6" />
            0914-299-0300
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
