import { Service, NavItem, ContactInfo } from "@/types";

// ─── Site Metadata ───

export const SITE_CONFIG = {
  name: "Gelenkwerk",
  fullName: "Praxis Elisabethen – Gelenkwerk Physiotherapie",
  tagline: "Physiotherapie & Massage",
  description:
    "Individuelle physiotherapeutische Behandlungen und therapeutische Massagen in Basel.",
  url: "https://www.gelenkwerk.ch",
  bookingUrl:
    "https://www.tbooking.ch/de/book/4743-6727?embedded=true&primary-color=cb4f53&secondary-color=0274be",
} as const;

// ─── Contact Information ───

export const CONTACT: ContactInfo = {
  address: {
    street: "Elisabethenstrasse 41",
    zip: "4051",
    city: "Basel",
  },
  phone: ["+41 61 220 50 00", "+41 76 624 58 50"],
  businessId: "CHE-261.683.274",
  instagram: "https://www.instagram.com/gelenkwerk/",
};

// ─── Navigation ───

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "physiotherapie", label: "Physiotherapie", href: "#physiotherapie" },
  { id: "massage", label: "Massage", href: "#massage" },
  { id: "ueber-uns", label: "Über uns", href: "#ueber-uns" },
  { id: "zeugnisse", label: "Zeugnisse", href: "#zeugnisse" },
  { id: "kontakt", label: "Kontakt", href: "#kontakt" },
];

// ─── Services ───

export const SERVICES: Service[] = [
  {
    id: "physio",
    name: "Physiotherapie",
    duration: 25,
    durationLabel: "~ 25 Min.",
    price: null,
    category: "physio",
    description:
      "Individuelle Behandlung bei akuten und chronischen Beschwerden",
  },
  {
    id: "physio-ext",
    name: "Physiotherapie aufwändig",
    duration: 40,
    durationLabel: "~ 40 Min.",
    price: null,
    category: "physio",
    description: "Umfassende Therapie bei komplexen Krankheitsbildern",
  },
  {
    id: "massage-30",
    name: "Klassische Massage 30 Min.",
    duration: 30,
    durationLabel: "~ 30 Min.",
    price: "CHF 77.00",
    category: "massage",
    description: "Private Leistung, individuell abgestimmt",
  },
  {
    id: "massage-45",
    name: "Klassische Massage 45 Min.",
    duration: 45,
    durationLabel: "~ 45 Min.",
    price: "CHF 114.50",
    category: "massage",
    description: "Private Leistung, individuell abgestimmt",
  },
  {
    id: "massage-60",
    name: "Klassische Massage 60 Min.",
    duration: 60,
    durationLabel: "~ 60 Min.",
    price: "CHF 152.00",
    category: "massage",
    description: "Private Leistung, individuell abgestimmt",
  },
  {
    id: "lymph",
    name: "Manuelle Lymphdrainage",
    duration: 30,
    durationLabel: "~ 30 Min.",
    price: null,
    category: "physio",
    description:
      "Sanfte Entstauungstherapie zur Förderung des Lymphflusses",
  },
];

// ─── Stock Photos ───

export const PHOTOS = {
  hero: "https://images.unsplash.com/photo-1645005512968-0c1fe99f0093?w=1400&q=80",
  physio1:
    "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
  physio2:
    "https://images.unsplash.com/photo-1706353399656-210cca727a33?w=800&q=80",
  massage1:
    "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?w=800&q=80",
  massage2:
    "https://images.unsplash.com/photo-1741522509438-a120c0bb5e88?w=800&q=80",
  about:
    "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?w=1400&q=80",
  contact:
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
  wellness:
    "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&q=80",
} as const;

// ─── Booking Time Slots ───

export const BOOKING_CONFIG = {
  weekdayStart: 8,
  weekdayEnd: 18,
  saturdayStart: 9,
  saturdayEnd: 14,
  slotIntervalMinutes: 30,
  sundayClosed: true,
} as const;
