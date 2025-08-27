"use client";

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
import { MapPin, Menu, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      <div className="bg-blue-600 text-white text-sm py-2 px-4 overflow-auto">
        <div className="container mx-auto flex justify-between items-center w-full">
          <div className="flex justify-between items-center gap-2 whitespace-nowrap text-xs sm:text-sm md:text-base w-full">
            <div className="flex items-center gap-2 ">
              <Phone size={16} />
              <a
                href="tel:+989369782424"
                className="hover:text-blue-200 transition-colors"
              >
                0936-978-2424
              </a>
              |
              <a
                href="tel:+989142990300"
                className="hover:text-blue-200 transition-colors"
              >
                0914-2990-300
              </a>
            </div>

            <div className="flex justify-between items-center gap-2 ">
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
              <Sheet open={open}>
                <SheetTrigger asChild onClick={() => setOpen(!open)}>
                  <Menu size={24} />
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetTitle className="self-end p-4">
                    {/* <Search /> */}
                  </SheetTitle>
                  <nav className="flex flex-col gap-4">
                    <Link
                      href="/"
                      onClick={() => setOpen(false)}
                      className={`block py-2 px-4 rounded transition-colors ${
                        pathname === "/"
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      صفحه اصلی
                    </Link>
                    <Link
                      href="/products"
                      onClick={() => setOpen(false)}
                      className={`block py-2 px-4 rounded transition-colors ${
                        pathname === "/products"
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      محصولات
                    </Link>
                    <Link
                      href="/about"
                      onClick={() => setOpen(false)}
                      className={`block py-2 px-4 rounded transition-colors ${
                        pathname === "/about"
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      درباره ما
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setOpen(false)}
                      className={`block py-2 px-4 rounded transition-colors ${
                        pathname === "/contact"
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-accent hover:text-accent-foreground"
                      }`}
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
