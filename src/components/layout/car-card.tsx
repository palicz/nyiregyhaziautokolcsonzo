import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Users, DoorOpen, Fuel, Cog } from "lucide-react";
import { Car } from "@/types/car";
import { useMemo } from "react";

interface CarCardProps extends Omit<Car, "id" | "category"> {
  className?: string;
}

export function CarCard({
  name,
  imageUrl,
  price,
  features,
  description,
  available,
  className,
}: CarCardProps) {
  const carFeatures = useMemo(
    () => [
      {
        icon: <Users className="h-4 w-4" />,
        label: `${features.passengers} személyes`,
      },
      {
        icon: <Cog className="h-4 w-4" />,
        label: features.transmission,
      },
      {
        icon: <Fuel className="h-4 w-4" />,
        label: features.fuelType,
      },
      {
        icon: <DoorOpen className="h-4 w-4" />,
        label: `${features.doors} ajtós`,
      },
    ],
    [features]
  );

  return (
    <Card
      className={cn(
        "overflow-hidden group transition-all duration-300 hover:shadow-xl relative bg-gradient-to-b from-white to-gray-50/50",
        !available && "opacity-75",
        className
      )}
    >
      <div className="relative">
        {/* Subtle decorative element */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-400 to-green-500" />

        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={false}
            loading="lazy"
          />
          {!available && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
              <Badge variant="destructive">Foglalt</Badge>
            </div>
          )}
        </div>
        {/* Price Tag with enhanced styling */}
        <div className="absolute -bottom-5 right-4 z-10">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full shadow-lg transition-transform group-hover:scale-105">
            <div className="text-center">
              <div className="text-xs font-medium uppercase tracking-wide opacity-90">
                napi díj
              </div>
              <div className="text-xl font-bold">
                {price.toLocaleString()} Ft
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardContent className="p-4 pt-8">
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600 transition-colors">
            {name}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground/90 line-clamp-2">
              {description}
            </p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {carFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 text-sm text-muted-foreground/90 hover:text-green-600 transition-colors p-1.5 rounded-lg hover:bg-green-50"
            >
              <div className="text-green-600/80">{feature.icon}</div>
              <span>{feature.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
