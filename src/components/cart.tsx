"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

// Mock data for clothing items
const mockItems = [
  {
    id: 1,
    name: "Classic T-Shirt",
    image: "/placeholder.svg",
    prices: { S: 19.99, M: 19.99, L: 21.99, XL: 21.99 },
    defaultSize: "M",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    image: "/placeholder.svg",
    prices: { 28: 49.99, 30: 49.99, 32: 54.99, 34: 54.99 },
    defaultSize: "30",
  },
];

const BagItem = ({ item, onQuantityChange, onSizeChange }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(item.defaultSize);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    onQuantityChange(item.id, newQuantity, size);
  };

  const handleSizeChange = (newSize) => {
    setSize(newSize);
    onSizeChange(item.id, quantity, newSize);
  };

  return (
    <Card className="mb-4">
      <CardContent className="flex items-center p-4">
        <Image
          src={item.image}
          alt={item.name}
          width={80}
          height={80}
          className="rounded-md mr-4"
        />
        <div className="flex-grow">
          <h3 className="font-semibold">{item.name}</h3>
          <div className="flex items-center mt-2">
            <Select onValueChange={handleSizeChange} defaultValue={size}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Size" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(item.prices).map((sizeOption) => (
                  <SelectItem key={sizeOption} value={sizeOption}>
                    {sizeOption}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-16 ml-4"
            />
          </div>
        </div>
        <div className="text-right">
          <p className="font-semibold">
            ${(item.prices[size] * quantity).toFixed(2)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

const CostSummary = ({ items }) => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 10; // Flat rate shipping
  const total = subtotal + shipping;

  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg mt-4">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <Button className="w-full mt-4">Proceed to Checkout</Button>
      </CardContent>
    </Card>
  );
};

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState(
    mockItems.map((item) => ({
      ...item,
      quantity: 1,
      size: item.defaultSize,
      price: item.prices[item.defaultSize],
    }))
  );

  const updateItem = (id, quantity, size) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity, size, price: item.prices[size] }
          : item
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Shopping Bag</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {cartItems.map((item) => (
            <BagItem
              key={item.id}
              item={item}
              onQuantityChange={updateItem}
              onSizeChange={updateItem}
            />
          ))}
        </div>
        <div>
          <CostSummary items={cartItems} />
        </div>
      </div>
    </div>
  );
}
