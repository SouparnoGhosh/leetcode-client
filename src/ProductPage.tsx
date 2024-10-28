import { products } from "@/constants/products";
import ProductCard from "@/components/common/ProductCard";
import Header from "@/Header";
import Footer from "@/Footer";

export default function ProductPage() {
  return (
    <>
      <Header />
      <div className="w-10/12 mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 capitalize">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
