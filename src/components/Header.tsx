"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-blue-600 text-white text-sm py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <a
                href="tel:+989369782424"
                className="hover:text-blue-200 transition-colors"
              >
                0936-978-2424
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>مازندران، بابل</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-md"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-row-reverse justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="لوگو شرکت شمع شایان"
                width={60}
                height={60}
                className="object-contain hover:scale-105 transition-transform"
              />
            </Link>

            {/* Desktop Navigation - using shadcn NavigationMenu */}
            <nav className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList className="flex flex-row-reverse">
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link href="/">صفحه اصلی</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link href="/products">محصولات</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link href="/about">درباره‌ما</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link href="/contact">تماس با ما</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* Mobile Menu Button - using shadcn Sheet */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetTitle className="text-lg font-semibold mb-4">
                    منوی سایت
                  </SheetTitle>
                  <nav className="flex flex-col gap-4">
                    <Link
                      href="/"
                      className="block py-2 px-4 rounded hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      صفحه اصلی
                    </Link>
                    <Link
                      href="/products"
                      className="block py-2 px-4 rounded hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      محصولات
                    </Link>
                    <Link
                      href="/about"
                      className="block py-2 px-4 rounded hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      درباره ما
                    </Link>
                    <Link
                      href="/contact"
                      className="block py-2 px-4 rounded hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      تماس با ما
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
