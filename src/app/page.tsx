import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CarsGrid } from "@/components/layout/cars-grid";
import { cars, CATEGORY_NAMES } from "@/data/cars";
import { HeroTextRotate } from "@/components/sections/hero-text-rotate";
import { CategoryCaution } from "@/components/layout/category-caution";
import {
  RiShieldCheckLine,
  RiSofaLine,
  RiFileList3Line,
  RiMoneyDollarCircleLine,
  RiEarthLine,
  RiSpeedLine,
  RiRoadMapLine,
  RiTimeLine,
  RiPhoneLine,
} from "@remixicon/react";
import { StatusBadge } from "@/components/status-badge";
import { CONTACT_INFO, RENTAL_LIMITS, SECTION_IDS } from "@/lib/constants";

// FAQ items konstans a memória optimalizálásért
const FAQ_ITEMS = [
  {
    icon: RiFileList3Line,
    color: "green",
    title: "Milyen dokumentumokra van szükségem bérlés esetén?",
    content:
      "Személyi igazolvány, lakcím kártya, adóigazolvány, vezetői engedély.",
  },
  {
    icon: RiMoneyDollarCircleLine,
    color: "blue",
    title: "Mikor és mit kell fizetnem?",
    content:
      "A bérleti díjat és a kauciót is a bérléskor, előre szükséges teljesíteni.",
  },
  {
    icon: RiEarthLine,
    color: "purple",
    title: "Utazhatok külföldre a bérelt gépjárművel?",
    content:
      "A legtöbb országba lehetséges utazni. Ugyanakkor amennyiben a gépjárművel el kívánja hagyni az országot, ezt átvetelkor feltétlenül jelezze ügyfélszolgálatunknak. Bővebb információkért kérjük, vegye fel a kapcsolatot kollégáinkkal.",
  },
  {
    icon: RiSpeedLine,
    color: "red",
    title: "Mennyivel(km/h) haladhatok a gépjárművel?",
    content:
      "A KRESZ szerint megengedett sebességet betartva. Ha az autó folyamatosan meghaladja az előírt legnagyobb sebességi korlátozást +10km/h-val, akkor az teljes kaució megvonásához vezet. Autóink GPS rendszerrel vannak ellátva, így ellenőrizhető a fenti kitétel.",
  },
  {
    icon: RiRoadMapLine,
    color: "amber",
    title: "Mennyi km-használatot tartalmaz a bérlés?",
    content: `Napi ${RENTAL_LIMITS.dailyKmLimit} km a limit, ezen felül megtett km díjáról kérjük tájékozódjon kollégáinktól. Nemzetközi autóbérlés esetén nincs km megkötés, a bérlés bővebb információiról kérjük vegye fel a kapcsolatot kollégáinkkal.`,
  },
  {
    icon: RiTimeLine,
    color: "teal",
    title: "Mennyi időtartamra szól a bérlés?",
    content:
      "1 bérlési egység 24 óra. A bérlési időtartam nem betartása esetén, +1 bérlési egységet számolunk fel.",
  },
];

// Kontakt kártyák konstans
const CONTACT_CARDS = [
  {
    icon: RiEarthLine,
    color: "green",
    title: "Pontos cím",
    content: (
      <>
        <p className="font-medium text-lg">
          {CONTACT_INFO.address.zip}, {CONTACT_INFO.address.city}
        </p>
        <p className="text-base">{CONTACT_INFO.address.street}</p>
        <div className="pt-3">
          <Button
            className="w-full bg-green-500 hover:bg-green-600 text-base font-medium shadow-sm hover:shadow-md transition-all"
            asChild
          >
            <a
              href={CONTACT_INFO.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-6"
            >
              Útvonaltervezés
            </a>
          </Button>
        </div>
      </>
    ),
  },
  {
    icon: RiTimeLine,
    color: "blue",
    title: "Nyitvatartás",
    content: (
      <>
        <div className="flex justify-between items-center text-base">
          <span>Hétfő - Péntek</span>
          <span className="font-semibold text-lg">
            {CONTACT_INFO.openingHours.weekdays}
          </span>
        </div>
        <div className="flex justify-between items-center text-base">
          <span>Szombat - Vasárnap</span>
          <span className="font-semibold text-lg text-red-500">
            {CONTACT_INFO.openingHours.weekend}
          </span>
        </div>
      </>
    ),
  },
  {
    icon: RiPhoneLine,
    color: "purple",
    title: "Telefonszám",
    content: (
      <>
        <p className="font-medium text-lg">{CONTACT_INFO.phone.display}</p>
        <div className="pt-3">
          <Button
            className="w-full bg-purple-500 hover:bg-purple-600 text-base font-medium shadow-sm hover:shadow-md transition-all"
            asChild
          >
            <a href={`tel:${CONTACT_INFO.phone.href}`} className="py-6">
              Hívás most
            </a>
          </Button>
        </div>
      </>
    ),
  },
  {
    icon: RiFileList3Line,
    color: "amber",
    title: "E-Mail cím",
    content: (
      <>
        <p className="font-medium text-lg">{CONTACT_INFO.email}</p>
        <div className="pt-3">
          <Button
            className="w-full bg-amber-500 hover:bg-amber-600 text-base font-medium shadow-sm hover:shadow-md transition-all"
            asChild
          >
            <a href={`mailto:${CONTACT_INFO.email}`} className="py-6">
              E-mail küldése
            </a>
          </Button>
        </div>
      </>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-6rem)] relative flex items-center w-full overflow-x-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-8 md:py-0 md:-mt-28">
          {/* Left Content Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6">
            <div className="space-y-4 w-full flex flex-col items-center md:items-start">
              <StatusBadge
                leftIcon={RiShieldCheckLine}
                rightIcon={RiSofaLine}
                leftLabel="Megbízható"
                rightLabel="Kényelmes"
                status="success"
                className="px-4 py-2.5 text-lg [&_svg]:size-5 mb-8"
              />
              <div className="min-h-[4rem] md:min-h-[4.5rem] flex items-center justify-center md:justify-start">
                <HeroTextRotate />
              </div>
              <p className="text-xl text-gray-800 text-center md:text-left max-w-full break-words">
                Nálunk megtalálja, amit keres!
              </p>
              <p className="text-lg text-gray-600 text-center md:text-left">
                <span className="block">
                  {CONTACT_INFO.address.fullAddress}
                </span>
                <span className="block">{CONTACT_INFO.phone.display}</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start w-full">
              <Button asChild className="bg-green-500 hover:bg-green-600">
                <a href={`#${SECTION_IDS.cars}`}>Autóink</a>
              </Button>
              <Button asChild variant="outline">
                <a href={`#${SECTION_IDS.info}`}>Információk</a>
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative h-[250px] sm:h-[350px] md:h-[450px]">
            <div className="absolute inset-[15%] md:inset-0 bg-gradient-to-br from-green-400 to-green-500 rounded-[2rem]" />
            <div className="absolute inset-[-10%] md:inset-[-15%]">
              <Image
                src="/images/car.webp"
                alt="fooldal-auto"
                fill
                priority
                className="object-contain p-4 bg-transparent"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
                loading="eager"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
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

      <section id={SECTION_IDS.cars} className="min-h-screen bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Autóink</h2>
          <p className="text-gray-600 text-center text-lg mb-16">
            Fedezze fel prémium autóflottánkat, amely minden igényt kielégít
          </p>
          {/* Economy Cars */}
          <div className="mb-16">
            <div className="flex flex-col gap-4 mb-7">
              <h3 className="text-2xl font-semibold">
                {CATEGORY_NAMES.kiskategoria}
              </h3>
              <CategoryCaution category="kiskategoria" />
            </div>
            <CarsGrid cars={cars} category="kiskategoria" showUnavailable={true} />
          </div>
          {/* Premium Cars */}
          <div className="mb-16">
            <div className="flex flex-col gap-4 mb-7">
              <h3 className="text-2xl font-semibold">
                {CATEGORY_NAMES.kozepkategoria}
              </h3>
              <CategoryCaution category="kozepkategoria" />
            </div>
            <CarsGrid cars={cars} category="kozepkategoria" showUnavailable={true} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id={SECTION_IDS.contact} className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Kapcsolat</h2>
            <p className="text-gray-600 text-lg">
              Vegye fel velünk a kapcsolatot és segítünk Önnek megtalálni a tökéletes autót.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Quick Contact */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {CONTACT_CARDS.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-${card.color}-100`}>
                      <card.icon className={`size-6 text-${card.color}-500`} />
                    </div>
                    <h3 className="font-semibold text-xl">{card.title}</h3>
                  </div>
                  <div className="space-y-3 text-gray-600">{card.content}</div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden h-full min-h-[400px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1337.7591435164054!2d21.741413200000003!3d47.939081200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47389e31700c2c31%3A0x6b8db2835ae98ce2!2sNy%C3%ADregyh%C3%A1za%2C%20Lujza%20u.%2020%2C%204405!5e0!3m2!1shu!2shu!4v1710272117090!5m2!1shu!2shu"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nyíregyházi Autókölcsönző térképes elhelyezkedése"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20" id={SECTION_IDS.info}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Információk</h2>
          <p className="text-gray-600 text-center text-lg mb-16">
            Gyakran ismételt kérdések és válaszok
          </p>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-sm border-l-4 border border-${item.color}-500 p-6 hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start gap-4">
                  <div className={`text-${item.color}-500 shrink-0 mt-1`}>
                    <item.icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white relative">
        <div className="absolute inset-0 bg-white"></div>
        <div className="container relative mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-gray-900 text-lg font-semibold mb-4">Nyíregyházi Autókölcsönző</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Minőségi autóbérlési szolgáltatások Nyíregyházán és környékén. Megbízható járművek, rugalmas feltételek.
              </p>
              <div className="pt-4">
                <p className="text-green-600 font-medium">{CONTACT_INFO.phone.display}</p>
                <p className="text-gray-600 text-sm">{CONTACT_INFO.email}</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-gray-900 text-lg font-semibold mb-4">Gyors Linkek</h3>
              <ul className="space-y-2">
                <li>
                  <a href={`#${SECTION_IDS.cars}`} className="text-gray-600 hover:text-green-600 transition-colors">
                    Autóink
                  </a>
                </li>
                <li>
                  <a href={`#${SECTION_IDS.info}`} className="text-gray-600 hover:text-green-600 transition-colors">
                    Információk
                  </a>
                </li>
                <li>
                  <a href={`#${SECTION_IDS.contact}`} className="text-gray-600 hover:text-green-600 transition-colors">
                    Kapcsolat
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-gray-900 text-lg font-semibold mb-4">Kategóriák</h3>
              <ul className="space-y-2">
                <li>
                  <a href={`#${SECTION_IDS.cars}`} className="text-gray-600 hover:text-green-600 transition-colors">
                    {CATEGORY_NAMES.kiskategoria}
                  </a>
                </li>
                <li>
                  <a href={`#${SECTION_IDS.cars}`} className="text-gray-600 hover:text-green-600 transition-colors">
                    {CATEGORY_NAMES.kozepkategoria}
                  </a>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-gray-900 text-lg font-semibold mb-4">Nyitvatartás</h3>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span className="text-gray-600">H-P:</span>
                  <span className="text-gray-900">{CONTACT_INFO.openingHours.weekdays}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-600">Szo-V:</span>
                  <span className="text-red-500">{CONTACT_INFO.openingHours.weekend}</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm">
                  <span className="text-gray-600">Cím:</span><br />
                  <span className="text-gray-900">{CONTACT_INFO.address.fullAddress}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-center items-center">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Nyíregyházi Autókölcsönző. Minden jog fenntartva.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
