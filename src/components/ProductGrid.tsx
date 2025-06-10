import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "شمع NGK",
    price: "120,000 تومان",
    image: "/logo.jpg",
  },
  {
    id: 2,
    name: "شمع Bosch",
    price: "95,000 تومان",
    image: "/logo.jpg",
  },
  {
    id: 3,
    name: "شمع Denso",
    price: "110,000 تومان",
    image: "/logo.jpg",
  },
];

export default function ProductGrid() {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-2xl font-bold text-center mb-8">محصولات پرفروش</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
