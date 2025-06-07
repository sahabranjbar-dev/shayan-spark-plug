import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="لوگو شرکت"
            width={120}
            height={50}
          />
        </Link>
        <nav className="flex gap-6">
          <Link href="/products" className="hover:text-blue-600">
            محصولات
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            درباره ما
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            تماس
          </Link>
        </nav>
      </div>
    </header>
  );
}
