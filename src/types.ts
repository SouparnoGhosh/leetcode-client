export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export type Section = {
  title: string;
  products: Product[];
};
