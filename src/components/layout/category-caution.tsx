import { CAUTION_MONEY } from "@/lib/constants";
import { CarCategory } from "@/types/car";
import { InfoCircledIcon } from "@radix-ui/react-icons";

interface CategoryCautionProps {
  category: CarCategory;
}

export function CategoryCaution({ category }: CategoryCautionProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border-2 border-green-500 bg-gradient-to-br from-green-50 to-white p-6 shadow-lg">
      {/* Decorative corner accent */}
      <div className="absolute -right-4 -top-4 h-16 w-16 rotate-12 bg-green-500/10" />
      
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500 shadow-sm">
            <InfoCircledIcon className="h-6 w-6 text-white" />
          </div>
          <h4 className="text-lg font-semibold text-gray-900">
            Kötelező kaució
          </h4>
        </div>

        {/* Amount */}
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-green-600">
            {new Intl.NumberFormat("hu-HU", {
              style: "currency",
              currency: "HUF",
              maximumFractionDigits: 0,
            }).format(CAUTION_MONEY[category])}
          </span>
        </div>

        {/* Info text */}
        <div className="space-y-2 text-sm text-gray-600">
          <p>
            • A kaució összege kötelezően fizetendő a bérlés megkezdésekor
          </p>
          <p>
            • A bérlés végén visszatérítjük, amennyiben az autó sértetlen állapotban kerül visszaszolgáltatásra
          </p>
        </div>
      </div>
    </div>
  );
} 