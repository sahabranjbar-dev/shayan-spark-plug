/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductPage from "../components/ProductPage";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  try {
    const product = await prisma?.product.findUnique({
      where: { id },
      include: {
        technicalSpecifications: true,
      },
    });
    if (!product) {
      return <div>Product not found.</div>;
    }

    return (
      <ProductPage
        product={{
          ...product,
          rating: product.rating ?? undefined,
          createdAt:
            product.createdAt instanceof Date
              ? product.createdAt.toISOString()
              : product.createdAt,
          updatedAt:
            product.updatedAt instanceof Date
              ? product.updatedAt.toISOString()
              : product.updatedAt,
        }}
      />
    );
  } catch (error: any) {
    console.error("Error fetching product:", error);
    return <div>Error loading product.</div>;
  }
}
