// src/constants/products.ts
import { Product } from "@/utils/types";
import wishlistPlaceholderImage from "@/assets/WishlistPlaceholder.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    image: wishlistPlaceholderImage,
  },
  {
    id: 2,
    name: "Product 2",
    price: 39.99,
    image: wishlistPlaceholderImage,
  },
  {
    id: 3,
    name: "Product 3",
    price: 49.99,
    image: wishlistPlaceholderImage,
  },
  {
    id: 4,
    name: "Product 4",
    price: 59.99,
    image: wishlistPlaceholderImage,
  },
  // Add more products as needed
];
