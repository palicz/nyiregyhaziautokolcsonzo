import { Car } from "@/types/car";
import { CarCard } from "./car-card";
import { memo, useMemo } from "react";

interface CarsGridProps {
  cars: Car[];
  category?: string;
  showUnavailable?: boolean;
}

export const CarsGrid = memo(function CarsGrid({
  cars,
  category,
  showUnavailable = true,
}: CarsGridProps) {
  const filteredCars = useMemo(() => {
    let filtered = [...cars];

    if (category) {
      filtered = filtered.filter((car) => car.category === category);
    }

    if (!showUnavailable) {
      filtered = filtered.filter((car) => car.available);
    }

    return filtered;
  }, [cars, category, showUnavailable]);

  if (filteredCars.length === 0) {
    return (
      <div className="text-center py-10 text-muted-foreground">
        Nincs megjeleníthető autó a kiválasztott feltételekkel.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCars.map((car) => (
        <CarCard
          key={car.id}
          name={car.name}
          imageUrl={car.imageUrl}
          price={car.price}
          features={car.features}
          description={car.description}
          available={car.available}
        />
      ))}
    </div>
  );
});
