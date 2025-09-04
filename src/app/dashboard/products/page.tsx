"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import RowTableButtons from "./components/RowTableButtons";
import { RefreshCcw } from "lucide-react";
import { Product } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ProductsPage = () => {
  const { data, refetch, fetchStatus } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch("/api/dashboard/products", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      return response.json();
    },
    gcTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const loading = fetchStatus === "fetching";
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex justify-start items-center gap-2">
          <h1 className="text-xl font-bold">مدیریت محصولات</h1>
          <Button variant="link" onClick={() => refetch()}>
            <RefreshCcw />
          </Button>
        </div>
        <Link href="/dashboard/products/create">
          <Button className="rounded-xl">+ ایجاد محصول</Button>
        </Link>
      </div>

      <Table className="w-full border rounded-xl shadow-sm">
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="text-center">ردیف</TableHead>
            <TableHead className="text-center">نام محصول</TableHead>
            <TableHead className="text-center">قیمت</TableHead>
            <TableHead className="text-center">امتیاز</TableHead>
            <TableHead className="text-center">تاریخ ایجاد</TableHead>
            <TableHead className="text-center">تاریخ ویرایش</TableHead>
            <TableHead className="text-center">عملیات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center text-gray-500">
                <Skeleton className="w-full h-10 bg-gray-400" />
                <Skeleton className="w-full h-10 bg-gray-400 my-2  " />
                <Skeleton className="w-full h-10 bg-gray-400 my-2  " />
                <Skeleton className="w-full h-10 bg-gray-400 my-2  " />
              </TableCell>
            </TableRow>
          ) : data?.result?.length ? (
            data?.result?.map((product: Product) => (
              <TableRow
                key={product.id}
                className="hover:bg-gray-50 text-right"
              >
                <TableCell className="text-center">
                  {product?.rowNumber}
                </TableCell>
                <TableCell className="text-center">
                  {product.name ? product.name : "---"}
                </TableCell>
                <TableCell className="text-center">
                  {product.price.toLocaleString()} تومان
                </TableCell>
                <TableCell className="text-center">
                  {product.rating || "-"}
                </TableCell>
                <TableCell className="text-center">
                  {new Date(product.createdAt).toLocaleDateString("fa") || "-"}
                </TableCell>
                <TableCell className="text-center">
                  {new Date(product.updatedAt)?.toLocaleDateString("fa") || "-"}
                </TableCell>
                <TableCell className="flex gap-2 justify-center">
                  <RowTableButtons
                    id={product.id}
                    key={product.id}
                    refetch={refetch}
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-6 text-gray-500">
                محصولی یافت نشد
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={`/api/dashboard/products?page=${
                data?.pagination?.page - 1
              }`}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href={`/api/dashboard/products?page=${data?.pagination?.page}`}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href={`/api/dashboard/products?page=${
                data?.pagination?.page + 1
              }`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProductsPage;
