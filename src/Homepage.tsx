import { useState } from "react";
import { Img } from "react-image";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product, Section } from "@/types.ts";

type HomepageProps = {
  gender: "men" | "women";
  sections: Section[];
};

export default function Homepage({ gender, sections }: HomepageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 capitalize">{gender}swear</h1>
      {sections.map((section, index) => (
        <ProductSection key={index} section={section} gender={gender} />
      ))}
    </div>
  );
}

function ProductSection({
  section,
  gender,
}: {
  section: Section;
  gender: string;
}) {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 4;

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, section.products.length - itemsToShow)
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">{section.title}</h2>
        <Link
          to={`/${gender}/${section.title.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-primary hover:underline flex items-center"
        >
          Go to section <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      <div className="relative">
        <div className="flex overflow-hidden">
          {section.products
            .slice(startIndex, startIndex + itemsToShow)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2",
            startIndex === 0 && "hidden"
          )}
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2",
            startIndex >= section.products.length - itemsToShow && "hidden"
          )}
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}

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
