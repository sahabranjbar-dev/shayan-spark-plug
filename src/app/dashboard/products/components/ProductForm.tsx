/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useState } from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";

type ProductFormInputs = {
  name: string;
  price: number;
  rating: string;
  technicalSpecifications: { key: string; value: string }[];
  benefitsAndProperties: any;
  cars: any;
  images: (File | string)[];
};

interface Props {
  productData?: any;
}

const ProductForm = ({ productData }: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const fieldRef = useRef<HTMLInputElement | null>(null);
  const [previewImages, setPreviewImages] = useState<string[]>(
    productData?.images || []
  );
  const form = useForm<ProductFormInputs>({
    defaultValues: {
      name: productData?.name || "",
      price: productData?.price || undefined,
      rating: productData?.rating || "",
      technicalSpecifications: productData?.technicalSpecifications || [
        { key: "", value: "" },
      ],
      benefitsAndProperties: productData?.benefitsAndProperties || [""],
      cars: productData?.cars || [""],
      images: productData?.images || [],
    },
  });

  const { control, handleSubmit, setValue } = form;

  const specs = useFieldArray({ control, name: "technicalSpecifications" });
  const benefits = useFieldArray({ control, name: "benefitsAndProperties" });
  const cars = useFieldArray({ control, name: "cars" });
  const images = useFieldArray({ control, name: "images" });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const newFiles = Array.from(files);
    setValue("images", [...(previewImages || []), ...newFiles]);
    setPreviewImages([
      ...previewImages,
      ...newFiles.map((f) => URL.createObjectURL(f)),
    ]);
  };

  const handleRemoveImage = (index: number) => {
    const updated = [...previewImages];
    updated.splice(index, 1);
    setPreviewImages(updated);

    const updatedFiles = [...(images.fields as any)];
    updatedFiles.splice(index, 1);
    setValue("images", updatedFiles);
  };

  const onSubmit: SubmitHandler<ProductFormInputs> = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();
      if (productData?.id) {
        formData.append("id", productData?.id || undefined);
      }
      formData.append("name", data.name);
      formData.append("price", String(data.price).replace(/,/g, ""));
      if (data.rating) formData.append("rating", data.rating);

      formData.append(
        "cars",
        JSON.stringify(data.cars?.filter((c) => c?.trim()))
      );
      formData.append(
        "benefitsAndProperties",
        JSON.stringify(data.benefitsAndProperties?.filter((b) => b?.trim()))
      );
      formData.append(
        "technicalSpecifications",
        JSON.stringify(
          data.technicalSpecifications?.filter(
            (spec) => spec.key?.trim() && spec.value?.trim()
          )
        )
      );

      // تصاویر
      const existingImages: string[] = [];
      for (let i = 0; i < data.images.length; i++) {
        const img = data.images[i];
        if (img instanceof File) {
          formData.append("images", img); // تصویر جدید
        } else if (typeof img === "string") {
          existingImages.push(img); // تصویر قبلی
        }
      }

      existingImages.forEach((url) => formData.append("existingImages", url));

      const response = await fetch("/api/dashboard/products", {
        method: productData?.id ? "PUT" : "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success(
          productData?.id ? "محصول ویرایش شد" : "محصول جدید ایجاد شد",
          { position: "top-center" }
        );
        router.push("/dashboard/products");
      } else {
        const error = await response.json();
        console.log({ error });
        toast.error("خطا در ذخیره محصول", { position: "top-center" });
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      toast.error("خطا در ارسال فرم", { position: "top-center" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <Link href="/dashboard/products" className="flex items-center gap-2 mb-6">
        <ArrowRight /> بازگشت به لیست
      </Link>

      <h2 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {productData?.id ? "ویرایش محصول" : "ایجاد محصول جدید"}
      </h2>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {/* نام محصول */}
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>نام محصول</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="نام محصول" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* قیمت و امتیاز */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>قیمت (تومان)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      value={
                        field.value !== null && field.value !== undefined
                          ? field.value.toLocaleString("fa")
                          : ""
                      }
                      onChange={(e) => {
                        field.onChange(
                          e.target.value
                            .replace(/[٬,]/g, "")
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        );
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>امتیاز</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="مثلا 4" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* مشخصات فنی */}
          <Section
            title="مشخصات فنی"
            onAdd={() => {
              specs.append({ key: "", value: "" });
              fieldRef.current?.focus();
            }}
          >
            {specs.fields.map((field, index) => (
              <div key={field.id} className="flex gap-2 items-center">
                <FormField
                  control={control}
                  name={`technicalSpecifications.${index}.key`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="عنوان" ref={fieldRef} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name={`technicalSpecifications.${index}.value`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="مقدار" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <RemoveBtn onClick={() => specs.remove(index)} />
              </div>
            ))}
          </Section>

          {/* مزایا */}
          <Section title="مزایا و ویژگی‌ها" onAdd={() => benefits.append("")}>
            {benefits.fields.map((field, index) => (
              <div key={field.id} className="flex gap-2 items-center">
                <FormField
                  control={control}
                  name={`benefitsAndProperties.${index}`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="ویژگی" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <RemoveBtn onClick={() => benefits.remove(index)} />
              </div>
            ))}
          </Section>

          {/* خودروها */}
          <Section title="خودروهای سازگار" onAdd={() => cars.append("")}>
            {cars.fields.map((field, index) => (
              <div key={field.id} className="flex gap-2 items-center">
                <FormField
                  control={control}
                  name={`cars.${index}`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="نام خودرو" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <RemoveBtn onClick={() => cars.remove(index)} />
              </div>
            ))}
          </Section>

          {/* تصاویر */}
          <div>
            <h3 className="font-semibold mb-2 text-gray-700">تصاویر محصول</h3>
            <Input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
            />
            <div className="flex flex-wrap gap-4 mt-4">
              {previewImages.map((src, index) => (
                <div key={index} className="relative w-32 h-32">
                  <Image
                    src={src}
                    alt="preview"
                    fill
                    className="object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1"
                    onClick={() => handleRemoveImage(index)}
                  >
                    <Trash size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <Button type="submit" disabled={loading}>
            {loading
              ? "در حال ارسال..."
              : productData?.id
              ? "ویرایش محصول"
              : "ایجاد محصول"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

const Section = ({
  title,
  onAdd,
  children,
}: {
  title: string;
  onAdd: () => void;
  children: React.ReactNode;
}) => {
  const inputWrapper = useRef<HTMLDivElement | null>(null);

  const handleAdd = () => {
    onAdd();

    // یک تایم کوتاه تا React بچه جدید را رندر کند
    setTimeout(() => {
      if (!inputWrapper.current) return;

      // آخرین فیلد (div) در این Section
      const lastChild = inputWrapper.current.lastElementChild;
      if (!lastChild) return;

      // اولین input در آن child
      const firstInput = lastChild.querySelector<HTMLInputElement>("input");
      firstInput?.focus();
    }, 0);
  };

  return (
    <div className="border p-2 rounded">
      <h3 className="font-semibold mb-2 text-gray-700 flex justify-between items-center">
        {title}
        <Button type="button" variant="outline" size="sm" onClick={handleAdd}>
          <Plus size={16} /> افزودن
        </Button>
      </h3>
      <div className="flex flex-col gap-2" ref={inputWrapper}>
        {children}
      </div>
    </div>
  );
};

const RemoveBtn = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    className="p-2 bg-red-100 rounded hover:bg-red-200 transition"
    onClick={onClick}
  >
    <Trash size={16} />
  </button>
);

export default ProductForm;
