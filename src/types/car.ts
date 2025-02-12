export interface CarFeatures {
  passengers: number;
  transmission: string;
  fuelType: string;
  doors: number;
  hasAC?: boolean;
}

export type CarCategory = "kiskategoria" | "kozepkategoria";

export interface Car {
  id: string | number;
  name: string;
  imageUrl: string;
  price: number;
  features: CarFeatures;
  category: CarCategory;
  available?: boolean;
} 