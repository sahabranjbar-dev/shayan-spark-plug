import React from "react";

import CTAButtons from "./components/CTAButtons";

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
        <CTAButtons />
      </div>
    </div>
  );
};

export default Contact;
