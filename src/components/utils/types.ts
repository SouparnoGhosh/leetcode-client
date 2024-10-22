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

/* For Clothing Categories in the Header */
export interface Subcategory {
  name: string;
  url: string;
}

export interface Category {
  name: string;
  url: string;
  subcategories: Subcategory[];
}

export interface Wear {
  title: string;
  description: string;
  url: string;
  categories: Category[];
}
