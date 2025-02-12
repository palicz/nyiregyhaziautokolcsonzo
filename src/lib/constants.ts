export const CONTACT_INFO = {
  address: {
    street: "Lujza utca 20",
    city: "Nyíregyháza",
    zip: "4405",
    fullAddress: "4405, Nyíregyháza Lujza utca 20.",
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=4405+Nyíregyháza+Lujza+utca+20",
  },
  phone: {
    display: "+36 70 214 8844",
    href: "+36702148844",
  },
  email: "nyiregyhaziautokolcsonzo@gmail.com",
  openingHours: {
    weekdays: "8:00 - 17:00",
    weekend: "Zárva",
  },
};

export const HERO_ROTATE_TEXTS = [
  "megbízható ⭐",
  "kényelmes 🚗",
  "prémium ✨",
  "modern 🔥",
  "családi 👨‍👩‍👧‍👦",
  "sportos 🏎️",
];

export const RENTAL_LIMITS = {
  dailyKmLimit: 500,
};

export const CAUTION_MONEY = {
  kiskategoria: 50000,
  kozepkategoria: 100000,
} as const;

export const SECTION_IDS = {
  cars: "autoink",
  info: "informaciok",
  contact: "kapcsolat",
} as const; 