import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-[calc(100vh-4rem)] relative flex items-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          {/* Left Content Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="space-y-4">
              <p className="text-gray-600 uppercase tracking-wide">
                Megbízható autókölcsönzés!
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Autót szeretne <br />
                bérelni?
              </h1>
              <p className="text-xl text-gray-800">
                Nálunk megtalálja, amit keres!
              </p>
              <p className="text-lg text-gray-600">
                4400, Nyíregyháza Lujza utca 20.
                <br />
                +36702148899
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <Button className="bg-green-500 hover:bg-green-600">
                Autóink
              </Button>
              <Button variant="outline">Tudnivalók</Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative h-[250px] sm:h-[350px] md:h-[450px]">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-500 rounded-[2rem]" />
            <div className="absolute inset-[5%] md:inset-[-15%]">
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
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
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

      <section className="min-h-screen bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Autóink</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            div
          </div>
        </div>
      </section>
    </>
  );
}
