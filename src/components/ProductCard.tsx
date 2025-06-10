import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string | number;
  name: string;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white text-black p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        className="mx-auto"
      />
      <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
      <Link
        href={`/products/${product.id}`}
        className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        جزئیات محصول
      </Link>
    </div>
  );
}
