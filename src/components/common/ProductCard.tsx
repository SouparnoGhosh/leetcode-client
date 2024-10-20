import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types";
import { Img } from "react-image";

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-[250px] mx-2">
      <CardContent className="p-4">
        <Img
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-[200px] object-cover mb-4 rounded-md"
          loader={
            <div className="w-full h-[200px] bg-gray-200 animate-pulse mb-4 rounded-md"></div>
          }
          unloader={
            <div className="w-full h-[200px] bg-gray-200 mb-4 rounded-md">
              Image not available
            </div>
          }
        />
        <h3 className="font-semibold mb-2 truncate">{product.name}</h3>
        <p className="text-primary">${product.price.toFixed(2)}</p>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
