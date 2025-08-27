import React from "react";
import Introduce from "./components/Introduce";
import Benefits from "./components/Benefits";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10">
      {/* هدر */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          درباره ما
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          ما در شرکت شایان با سال‌ها تجربه در زمینه توزیع شمع خودرو، بهترین
          کیفیت و خدمات را به شما ارائه می‌دهیم.
        </p>
      </div>

      {/* بخش معرفی */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4 mb-16">
        <Introduce />
      </div>

      {/* مزایا */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        <Benefits />
      </div>
    </div>
  );
};

export default About;
