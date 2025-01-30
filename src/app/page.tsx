import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CarsGrid } from "@/components/layout/cars-grid";
import { cars, CATEGORY_NAMES } from "@/data/cars";
import { HeroTextRotate } from "@/components/sections/hero-text-rotate";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-6rem)] relative flex items-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 -mt-28">
          {/* Left Content Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6">
            <div className="space-y-4 w-full">
              <p className="text-gray-600 uppercase tracking-wide text-center md:text-left">
                Megbízható autókölcsönzés!
              </p>
              <div className="min-h-[4rem] md:min-h-[4.5rem] flex items-center justify-center md:justify-start">
                <HeroTextRotate />
              </div>
              <p className="text-xl text-gray-800 text-center md:text-left">
                Nálunk megtalálja, amit keres!
              </p>
              <p className="text-lg text-gray-600 text-center md:text-left">
                4400, Nyíregyháza Lujza utca 20.
                <br />
                +36702148899
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start w-full">
              <Button asChild className="bg-green-500 hover:bg-green-600">
                <a href="#autoink">Autóink</a>
              </Button>
              <Button variant="outline">Tudnivalók</Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative h-[250px] sm:h-[350px] md:h-[450px]">
            <div className="absolute inset-[15%] md:inset-0 bg-gradient-to-br from-green-400 to-green-500 rounded-[2rem]" />
            <div className="absolute inset-[-10%] md:inset-[-15%]">
              <Image
                src="/images/car.png"
                alt="Luxury car"
                fill
                priority
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-gray-600 font-medium">Autóink</span>
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      <section id="autoink" className="min-h-screen bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Autóink</h2>
          <p className="text-gray-600 text-center text-lg mb-16">
            Fedezze fel prémium autóflottánkat, amely minden igényt kielégít
          </p>

          {/* Economy Cars */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-3">
              {CATEGORY_NAMES.economy}
            </h3>
            <p className="text-gray-600 mb-8">
              Megbízható, üzemanyag-takarékos autók kedvező áron
            </p>
            <CarsGrid cars={cars} category="economy" showUnavailable={true} />
          </div>

          {/* Premium Cars */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              {CATEGORY_NAMES.premium}
            </h3>
            <p className="text-gray-600 mb-8">
              Luxus és kényelem a legmagasabb színvonalon
            </p>
            <CarsGrid cars={cars} category="premium" showUnavailable={true} />
          </div>
        </div>
      </section>
    </>
  );
}
