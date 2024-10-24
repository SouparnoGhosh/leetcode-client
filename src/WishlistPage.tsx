import { wishlistItems } from "@/utils/constants";
import WishlistCard from "@/components/wishlist/WishlistCard";
import Header from "@/Header";
import Footer from "@/Footer";

export default function WishlistPage() {
  return (
    <>
      <Header />
      <div className="w-10/12 mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 capitalize">Wishlist</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlistItems.map((product) => (
            <WishlistCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
