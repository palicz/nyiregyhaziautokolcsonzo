import { Car, CarCategory } from "@/types/car";

export const cars: Car[] = [
  {
    id: 1,
    name: "Suzuki Swift",
    imageUrl: "/images/cars/tesztauto.jpg",
    price: 12000,
    features: {
      passengers: 5,
      transmission: "Manuális",
      fuelType: "Benzin",
      doors: 5,
    },
    description: "Megbízható, gazdaságos városi autó",
    category: "economy",
    available: true,
  },
  {
    id: 2,
    name: "Toyota Corolla",
    imageUrl: "/images/cars/tesztauto.jpg",
    price: 15000,
    features: {
      passengers: 5,
      transmission: "Automata",
      fuelType: "Hibrid",
      doors: 5,
    },
    description: "Környezetbarát családi autó",
    category: "economy",
    available: true,
  },
  {
    id: 3,
    name: "BMW 5",
    imageUrl: "/images/cars/tesztauto.jpg",
    price: 35000,
    features: {
      passengers: 5,
      transmission: "Automata",
      fuelType: "Benzin",
      doors: 4,
    },
    description: "Prémium kategóriás német autó",
    category: "premium",
    available: true,
  },
  {
    id: 4,
    name: "Mercedes E-Class",
    imageUrl: "/images/cars/tesztauto.jpg",
    price: 40000,
    features: {
      passengers: 5,
      transmission: "Automata",
      fuelType: "Dízel",
      doors: 4,
    },
    description: "Luxus üzleti limuzin",
    category: "premium",
    available: true,
  },
];

// Helper functions for car data management
export function getCarById(id: string | number): Car | undefined {
  return cars.find(car => car.id === id);
}

export function getCarsByCategory(category: CarCategory): Car[] {
  return cars.filter(car => car.category === category);
}

export function getAvailableCars(): Car[] {
  return cars.filter(car => car.available);
}

// Categories with their display names
export const CATEGORY_NAMES: Record<CarCategory, string> = {
  economy: "Gazdaságos autók",
  premium: "Prémium autók",
}; 