import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/utils/types";
import { Img } from "react-image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { SelectSize } from "@/components/common/SelectSize";

function WishlistCard({ product }: { product: Product }) {
  const [isAddedToBag, setIsAddedToBag] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleAddToBag = () => {
    setIsAddedToBag(true);
  };

  const handleDelete = () => {
    setIsDisabled(true);
  };

  return (
    <Card
      className={`w-[250px] mx-2 rounded-none shadow-none border-none ${
        isDisabled ? "blur-sm pointer-events-none" : ""
      }`}
    >
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
        <div className="space-y-1 pb-3">
          <div className="text-xs text-gray-500 uppercase">New Season</div>
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.name}</p>
          <p className="font-medium">${product.price.toFixed(2)}</p>
        </div>
        <SelectSize />
        <div className="mt-4 flex">
          <Button
            variant="destructive"
            className="p-2 bg-black text-white border border-black rounded-r-none hover:bg-rose-600 hover:border-red-600 hover:text-slate-100"
            onClick={handleDelete}
          >
            <FaTrash className="w-5 h-5" />
          </Button>
          <Button
            variant="default"
            onClick={handleAddToBag}
            className={`flex-1 rounded-l-none ${
              isAddedToBag
                ? "bg-gray-800 text-white"
                : "bg-white text-black border border-gray-300 hover:bg-slate-100"
            }`}
          >
            {isAddedToBag ? "Go to Bag" : "Add to Bag"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default WishlistCard;
