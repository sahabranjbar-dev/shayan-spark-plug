/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Product {
  products: Product[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  rating: any;
  benefitsAndProperties: string[];
  cars: string[];
  images: any[];
  createdAt: Date;
  updatedAt: Date;
  technicalSpecifications: TechnicalSpecification[];
  rowNumber?: number;
}

export interface TechnicalSpecification {
  id: string;
  productId: string;
  key: string;
  value: string;
}
