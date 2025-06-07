import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gray-700 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-right p-6">
          <h1 className="text-3xl font-bold mb-4">
            پخش تخصصی شمع خودرو با بهترین قیمت
          </h1>
          <p className="mb-6">شمع‌های اصل برای خودروهای داخلی و خارجی</p>
          <Link
            href="/products"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            مشاهده محصولات
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/spark-plug.jpg"
            alt="شمع خودرو"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
