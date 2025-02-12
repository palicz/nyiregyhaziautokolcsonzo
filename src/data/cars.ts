import { Car, CarCategory } from "@/types/car";

export const cars: Car[] = [
  {
    id: 1,
    name: "Skoda Fabia 1.6 TDI",
    imageUrl: "/images/cars/skoda-fabia.png",
    price: 12000,
    features: {
      passengers: 5,
      transmission: "Manuális",
      fuelType: "Dízel",
      doors: 5,
    },
    category: "kiskategoria",
    available: true,
  },
  {
    id: 2,
    name: "Volkswagen Golf",
    imageUrl: "/images/cars/volkswagen-golf-kombi.png",
    price: 15000,
    features: {
      passengers: 5,
      transmission: "Manuális",
      fuelType: "Dízel",
      doors: 5,
      hasAC: true,
    },
    category: "kozepkategoria",
    available: true,
  },
  {
    id: 3,
    name: "Volkswagen Golf Kombi",
    imageUrl: "/images/cars/volkswagen-golf-kombi-2.png",
    price: 15000,
    features: {
      passengers: 5,
      transmission: "Manuális",
      fuelType: "Dízel",
      doors: 5,
      hasAC: true,
    },
    category: "kozepkategoria",
    available: true,
  },
  {
    id: 4,
    name: "Mazda 2 1.2",
    imageUrl: "/images/cars/mazda-2.png",
    price: 8000,
    features: {
      passengers: 5,
      transmission: "Manuális",
      fuelType: "Benzin",
      doors: 5,
      hasAC: true,
    },
    category: "kiskategoria",
    available: true,
  },
  {
    id: 5,
    name: "Mazda 2 1.4",
    imageUrl: "/images/cars/mazda-2-2.png",
    price: 8000,
    features: {
      passengers: 5,
      transmission: "Manuális",
      fuelType: "Benzin",
      doors: 5,
      hasAC: false,
    },
    category: "kiskategoria",
    available: true,
  },
  {
    id: 6,
    name: "Volkswagen Golf 1.6 TDI",
    imageUrl: "/images/cars/volkswagen-golf-kombi-3.png",
    price: 15000,
    features: {
      passengers: 5,
      transmission: "Manuális",
      fuelType: "Dízel",
      doors: 5,
      hasAC: true,
    },
    category: "kozepkategoria",
    available: true,
  },
  {
    id: 7,
    name: "Opel Astra G 1.6",
    imageUrl: "/images/cars/opel-g-astra.png",
    price: 8000,
    features: {
      passengers: 5,
      transmission: "Manuális",
      fuelType: "Benzin",
      doors: 5,
      hasAC: true,
    },
    category: "kiskategoria",
    available: true,
  },
  {
    id: 8,
    name: "Opel Meriva",
    imageUrl: "/images/cars/opel-meriva.png",
    price: 8000,
    features: {
      passengers: 5,
      transmission: "Manuális",
      fuelType: "Benzin",
      doors: 5,
      hasAC: true,
    },
    category: "kiskategoria",
    available: true,
  },
  {
    id: 9,
    name: "Opel Astra G",
    imageUrl: "/images/cars/opel-astra-g-2.png",
    price: 8000,
    features: {
      passengers: 5,
      transmission: "Manuális",
      fuelType: "Benzin",
      doors: 5,
      hasAC: true,
    },
    category: "kiskategoria",
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
  kiskategoria: "Kiskategóriás gépjárműveink",
  kozepkategoria: "Középkategóriás gépjárműveink",
}; 