import { cn } from "@/lib/utils";
import { ArrowRight, ChevronLeft, ChevronRight, Link } from "lucide-react";
import { Button } from "../ui/button";
import { Section } from "@/types";
import ProductCard from "../common/ProductCard";
import { useState } from "react";

function HomepageProductSlide({
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


export default HomepageProductSlide;