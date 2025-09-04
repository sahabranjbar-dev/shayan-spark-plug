/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// آپلود فایل به کلودینری
const uploadFile = async (file: File, folder = "products") => {
  const buffer = Buffer.from(await file.arrayBuffer());
  return new Promise<string>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (err, result) => {
        if (err) reject(err);
        else resolve(result?.secure_url as string);
      }
    );
    stream.end(buffer);
  });
};

// حذف تصویر از کلودینری بر اساس URL
export const deleteImage = async (url: string) => {
  try {
    const parts = url.split("/");
    const publicIdWithExt = parts.slice(-1)[0];
    const publicId = publicIdWithExt.split(".")[0];
    await cloudinary.uploader.destroy(`products/${publicId}`);
  } catch (error) {
    console.error("❌ Error deleting image:", error);
  }
};

// CREATE محصول
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const price = Number(formData.get("price"));
    const rating = formData.get("rating") as string | null;
    const cars = JSON.parse(formData.get("cars") as string);
    const benefitsAndProperties = JSON.parse(
      formData.get("benefitsAndProperties") as string
    );
    const technicalSpecifications = JSON.parse(
      formData.get("technicalSpecifications") as string
    );

    const imagesFiles = formData.getAll("images") as File[];
    const uploadedImages: string[] = [];

    for (const file of imagesFiles) {
      if (file && file.size > 0 && file.type.startsWith("image/")) {
        const url = await uploadFile(file);
        uploadedImages.push(url);
      }
    }

    const product = await prisma.product.create({
      data: {
        name,
        price,
        rating,
        cars,
        benefitsAndProperties,
        images: uploadedImages,
        technicalSpecifications: {
          create: technicalSpecifications.map((spec: any) => ({
            key: spec.key,
            value: spec.value,
          })),
        },
      },
      include: {
        technicalSpecifications: true,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("❌ Error creating product:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// ...
// UPDATE محصول
export async function PUT(request: NextRequest) {
  try {
    const formData = await request.formData();
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const price = Number(formData.get("price"));
    const rating = formData.get("rating") as string | null;
    const cars = JSON.parse(formData.get("cars") as string);
    const benefitsAndProperties = JSON.parse(
      formData.get("benefitsAndProperties") as string
    );
    const technicalSpecifications = JSON.parse(
      formData.get("technicalSpecifications") as string
    );

    // existingImages می‌تونه یک آرایه باشد یا یک رشته
    let existingImages: string[] = [];
    const existing = formData.getAll("existingImages");
    if (existing.length) {
      existingImages = existing.map((img) => img.toString());
    }

    const newImagesFiles = formData.getAll("images") as File[];
    const uploadedImages: string[] = [...existingImages];

    for (const file of newImagesFiles) {
      if (file && file.size > 0 && file.type.startsWith("image/")) {
        const url = await uploadFile(file);
        uploadedImages.push(url);
      }
    }

    const product = await prisma.product.update({
      where: { id },
      data: {
        name,
        price,
        rating,
        cars,
        benefitsAndProperties,
        images: uploadedImages,
        technicalSpecifications: {
          deleteMany: {}, // حذف مشخصات قبلی و اضافه کردن جدید
          create: technicalSpecifications.map((spec: any) => ({
            key: spec.key,
            value: spec.value,
          })),
        },
      },
      include: { technicalSpecifications: true },
    });

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("❌ Error updating product:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE محصول
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id") as string;
    console.log({ id });

    const product = await prisma.product.findUnique({ where: { id } });
    if (!product)
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );

    // حذف تصاویر از Cloudinary
    if (product.images && product.images.length) {
      for (const url of product.images) {
        await deleteImage(url);
      }
    }

    await prisma.technicalSpecification.deleteMany({
      where: { productId: id },
    });
    await prisma.product.delete({ where: { id } });
    return NextResponse.json({ message: "Product deleted" }, { status: 200 });
  } catch (error) {
    console.error("❌ Error deleting product:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 10);
    const search = searchParams.get("search") || "";
    const sortBy = searchParams.get("sortBy") || "createdAt";
    const order = (searchParams.get("order") || "desc") as "asc" | "desc";

    const where = search
      ? {
          name: { contains: search },
        }
      : {};

    const total = await prisma.product.count({ where });

    const products = await prisma.product.findMany({
      where,
      orderBy: { [sortBy]: order },
      skip: (page - 1) * limit,
      take: limit,
    });

    // افزودن rowNumber
    const productsWithRowNumber = products.map((product, index) => ({
      ...product,
      rowNumber: (page - 1) * limit + index + 1,
    }));

    return NextResponse.json(
      {
        result: productsWithRowNumber,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    );
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
  }
}
