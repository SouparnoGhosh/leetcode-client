"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown, ChevronLeft, ChevronRight, Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const productImages = [
  "/placeholder.svg?height=450&width=300",
  "/placeholder.svg?height=450&width=300",
  "/placeholder.svg?height=450&width=300",
  "/placeholder.svg?height=450&width=300",
  "/placeholder.svg?height=450&width=300",
];

export default function ItemDetailsPage() {
  const [galleryIndex, setGalleryIndex] = useState(-1);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [sizeFitOpen, setSizeFitOpen] = useState(false);
  const galleryRef = useRef(null);
  const stickyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current && stickyRef.current) {
        const galleryBottom =
          galleryRef.current.offsetTop + galleryRef.current.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        const stickyTop = Math.max(0, galleryBottom - scrollPosition);
        stickyRef.current.style.top = `${stickyTop}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ExpandableSection = ({ title, isOpen, setIsOpen, children }) => (
    <div className="border-t border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <ChevronDown
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3" ref={galleryRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {productImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Product image ${index + 1}`}
                width={300}
                height={450}
                className="w-full h-auto cursor-pointer"
                onClick={() => setGalleryIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="lg:w-1/3">
          <div ref={stickyRef} className="lg:sticky">
            <h1 className="text-2xl font-bold mb-2">The Frankie Shop</h1>
            <p className="text-xl mb-4">Faux leather coat</p>
            <p className="text-2xl font-bold mb-4">$1,426</p>
            <Select>
              <SelectTrigger className="w-full mb-4">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="xs">XS</SelectItem>
                <SelectItem value="s">S</SelectItem>
                <SelectItem value="m">M</SelectItem>
                <SelectItem value="l">L</SelectItem>
                <SelectItem value="xl">XL</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full mb-2">Add to Bag</Button>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center"
            >
              <Heart className="mr-2" /> Wishlist
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <ExpandableSection
          title="The Details"
          isOpen={detailsOpen}
          setIsOpen={setDetailsOpen}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/2">
              <h3 className="font-bold mb-2">Composition</h3>
              <p>Outer: Polyurethane 100%</p>
              <p>Lining: Polyester 100%</p>
              <h3 className="font-bold mt-4 mb-2">Product Care</h3>
              <p>Specialist Cleaning</p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=300&width=200"
                alt="Product detail"
                width={200}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </ExpandableSection>
        <ExpandableSection
          title="Size & Fit"
          isOpen={sizeFitOpen}
          setIsOpen={setSizeFitOpen}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/2">
              <h3 className="font-bold mb-2">Model Measurements</h3>
              <p>Height: 179 cm</p>
              <p>Bust: 83 cm</p>
              <p>Waist: 61 cm</p>
              <p>Hips: 89 cm</p>
              <p>The model is wearing size S</p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=300&width=200"
                alt="Size guide"
                width={200}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </ExpandableSection>
      </div>
      {galleryIndex !== -1 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
          onClick={() => setGalleryIndex(-1)}
        >
          <div className="relative">
            <Image
              src={productImages[galleryIndex]}
              alt={`Product image ${galleryIndex + 1}`}
              width={600}
              height={900}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation();
                setGalleryIndex(-1);
              }}
            >
              <X size={24} />
            </button>
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation();
                setGalleryIndex(
                  (prev) =>
                    (prev - 1 + productImages.length) % productImages.length
                );
              }}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation();
                setGalleryIndex((prev) => (prev + 1) % productImages.length);
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
