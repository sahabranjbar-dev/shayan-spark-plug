/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Product {
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  "technical-specifications": any[];
  "benefits-and-properties": any[];
  cars: string[];
  price: number;
  images: string[];
  rating: number;
  discountPrice?: number;
}
