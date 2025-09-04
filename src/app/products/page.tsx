import ProductCard from "./components/ProductCard";
import prisma from "@/lib/prisma";

const Products = async () => {
  const products = await prisma?.product.findMany({});
  console.log({ products });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      {/* هدر */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          محصولات ما
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          بهترین شمع‌های خودرو با کیفیت و عملکرد بالا. شما می‌توانید محصول مورد
          نظر خود را مشاهده و خریداری کنید.
        </p>
      </div>

      {products && products.length > 0 ? (
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-3xl font-semibold text-gray-700">
            محصولی یافت نشد
          </h2>
        </div>
      )}
    </div>
  );
};

export default Products;
