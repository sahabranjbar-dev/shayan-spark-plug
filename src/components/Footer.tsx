"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Instagram,
  MessageCircleMore,
  PhoneOutgoing,
  Send,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const isAuthPage =
    pathname?.startsWith("/auth") || pathname?.startsWith("/dashboard");
  if (isAuthPage) return;
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* موج دکوراتیو بالای فوتر */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 to-purple-500"></div>

      {/* محتوای اصلی فوتر */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* بخش لوگو و توضیحات */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4 gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Shayan Spark Plug
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              پیشرو در توزیع شمع‌های با کیفیت برای صنایع خودروسازی
            </p>

            {/* شبکه‌های اجتماعی */}
            <div className="flex space-x-4 mt-14">
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href="https://www.instagram.com/shayansparkplug"
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transition-all duration-300 flex items-center justify-center group"
                  >
                    <Instagram className="group-hover:text-white" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href="https://t.me/Shshohadaee4048"
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-gray-700 hover:bg-[#24A1DE] transition-all duration-300 flex items-center justify-center"
                  >
                    <Send className="hover:text-white" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Telegram</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href="https://wa.me/+989369782424"
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-gray-700 hover:bg-green-500 transition-all duration-300 flex items-center justify-center"
                  >
                    <MessageCircleMore className="hover:text-white" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>WhatsApp</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href="tel:+989369782424"
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-500 transition-all duration-300 flex items-center justify-center"
                  >
                    <PhoneOutgoing className="hover:text-white" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Call</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* بقیه کد بدون تغییر ... */}

          {/* لینک‌های سریع */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              لینک‌های سریع
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  محصولات
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  وبلاگ
                </Link>
              </li>
            </ul>
          </div>

          {/* اطلاعات تماس */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              تماس با ما
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-400 mt-1 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-300">مازندران، بابل</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:+989369782424" className="text-gray-300">
                  0936-978-2424
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@shayansparkplug.com"
                  className="text-gray-300"
                >
                  info@shayansparkplug.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* خبرنامه */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-bold text-center mb-6">
            عضویت در خبرنامه
          </h3>
          <div className="max-w-lg mx-auto flex">
            <input
              type="email"
              placeholder="آدرس ایمیل شما"
              className="placeholder:text-gray-500 flex-grow px-4 py-3 rounded-r-lg focus:outline-none border border-gray-500 border-l-0"
            />
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-l-lg font-medium hover:opacity-90 transition-opacity">
              عضویت
            </button>
          </div>
        </div>
      </div>

      {/* کپی رایت */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>تمامی حقوق برای شرکت Shayan Spark Plug محفوظ است © ۱۴۰۴</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="#" className="hover:text-blue-400 transition-colors">
                قوانین و مقررات
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                حریم خصوصی
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* عنصر دکوراتیو */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute top-20 left-0 w-24 h-24 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
    </footer>
  );
}
