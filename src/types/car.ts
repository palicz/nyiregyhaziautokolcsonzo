export interface CarFeatures {
  passengers: number;
  transmission: string;
  fuelType: string;
  doors: number;
}

export type CarCategory = "economy" | "premium";

export interface Car {
  id: string | number;
  name: string;
  imageUrl: string;
  price: number;
  features: CarFeatures;
  description?: string;
  category: CarCategory;
  available?: boolean;
} 