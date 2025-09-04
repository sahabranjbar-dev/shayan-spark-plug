import React from "react";
import ProductForm from "../components/ProductForm";
import prisma from "@/lib/prisma";

interface Props {
  params: Promise<{ id: string }>;
}

const page = async ({ params }: Props) => {
  const resolvedParams = await params;

  const { id } = resolvedParams;

  if (id) {
    const productData = await prisma?.product.findUnique({
      where: {
        id,
      },
      include: {
        technicalSpecifications: true,
      },
    });

    console.log({ productData });
    return <ProductForm productData={productData} />;
  }
  return <ProductForm />;
};

export default page;
