import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/utils/types";
import { Img } from "react-image";

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-[250px] mx-2 rounded-none shadow-none border-none">
      <CardContent className="p-4">
        <Img
          src={product.image}
          alt={product.name}
          className="w-full h-[300px] object-cover object-top mb-4 rounded-sm"
          loader={
            <div className="w-full h-[300px] bg-gray-200 animate-pulse mb-4 rounded-md"></div>
          }
          unloader={
            <div className="w-full h-[300px] bg-gray-200 mb-4 rounded-md">
              Image not available
            </div>
          }
        />
        <div className="space-y-1">
          <div className="text-xs text-gray-500 uppercase">New Season</div>
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.name}</p>
          <p className="font-medium">${product.price.toFixed(2)}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
