import { SITE_CONFIG, CONTACT } from "@/config/site";

const BASE_URL = SITE_CONFIG.url;

export const PRACTICE_NAME = "Gelenkwerk Physiotherapie";
export const THERAPIST_NAME = "Kyriaki Chatzidimitriadou";

// ─── Shared Address ───
const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: CONTACT.address.street,
  addressLocality: CONTACT.address.city,
  postalCode: CONTACT.address.zip,
  addressCountry: "CH",
  addressRegion: "Basel-Stadt",
};

// ─── Opening Hours ───
const openingHours = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: "09:00",
    closes: "14:00",
  },
];

// ─── Aggregate Rating ───
const aggregateRating = {
  "@type": "AggregateRating",
  ratingValue: "5",
  reviewCount: "47",
  bestRating: "5",
  worstRating: "1",
};

// ─── Geo ───
const geo = {
  "@type": "GeoCoordinates",
  latitude: 47.5496,
  longitude: 7.5874,
};

// ─── Therapist Person ───
export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: THERAPIST_NAME,
    jobTitle: "Dipl. Physiotherapeutin",
    description:
      "Diplomierte Physiotherapeutin mit Berufsausübungsbewilligung Basel-Stadt, spezialisiert auf Physiotherapie, Massage und manuelle Lymphdrainage.",
    url: `${BASE_URL}/about`,
    image: `${BASE_URL}/logoo_transparent.png`,
    telephone: CONTACT.phone[0],
    email: "info@gelenkwerk.ch",
    address: postalAddress,
    worksFor: {
      "@type": "MedicalBusiness",
      name: PRACTICE_NAME,
      url: BASE_URL,
    },
    knowsAbout: [
      "Physiotherapie",
      "Manuelle Lymphdrainage",
      "Klassische Massage",
      "Bobath-Therapie",
      "Domizilbehandlung",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Dipl. Physiotherapeutin",
        credentialCategory: "degree",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Berufsausübungsbewilligung Basel-Stadt",
        credentialCategory: "license",
        recognizedBy: { "@type": "GovernmentOrganization", name: "Kanton Basel-Stadt" },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Manuelle Lymphdrainage Zertifikat",
        credentialCategory: "certificate",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Bobath Weiterbildung",
        credentialCategory: "certificate",
      },
    ],
    memberOf: {
      "@type": "Organization",
      name: "Physioswiss",
      url: "https://www.physioswiss.ch",
    },
  };
}

// ─── Organization + LocalBusiness ───
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness", "Organization"],
    "@id": `${BASE_URL}/#organization`,
    name: PRACTICE_NAME,
    alternateName: ["Gelenkwerk", "Praxis Elisabethen"],
    legalName: "Praxis Elisabethen – Gelenkwerk Physiotherapie",
    description:
      "Individuelle Physiotherapie, therapeutische Massagen und manuelle Lymphdrainage in Basel. Krankenkassen-anerkannt, mit und ohne ärztliche Verordnung.",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logoo_transparent.png`,
      width: 200,
      height: 200,
    },
    image: [`${BASE_URL}/logoo_transparent.png`, `${BASE_URL}/office.jpeg`],
    telephone: [CONTACT.phone[0], CONTACT.phone[1]],
    email: "info@gelenkwerk.ch",
    taxID: CONTACT.businessId,
    address: postalAddress,
    geo,
    openingHoursSpecification: openingHours,
    priceRange: "CHF 77–152",
    currenciesAccepted: "CHF",
    paymentAccepted: "Krankenkasse, Rechnung, Bar",
    areaServed: [
      { "@type": "City", name: "Basel" },
      { "@type": "State", name: "Basel-Stadt" },
    ],
    sameAs: [
      CONTACT.instagram,
      "https://www.physioswiss.ch",
    ],
    aggregateRating,
    employee: {
      "@type": "Person",
      name: THERAPIST_NAME,
      jobTitle: "Dipl. Physiotherapeutin",
    },
    medicalSpecialty: [
      "Physiotherapy",
      "Manual Therapy",
      "Lymphatic Drainage",
    ],
    availableService: [
      buildServiceSchema("physio"),
      buildServiceSchema("massage"),
      buildServiceSchema("lymph"),
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: CONTACT.phone[0],
        contactType: "customer service",
        availableLanguage: ["German", "Greek", "English"],
        areaServed: "CH",
      },
      {
        "@type": "ContactPoint",
        telephone: CONTACT.phone[1],
        contactType: "customer service",
        availableLanguage: ["German", "Greek", "English"],
        areaServed: "CH",
      },
    ],
  };
}

// ─── WebSite ───
export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: PRACTICE_NAME,
    url: BASE_URL,
    inLanguage: ["de-CH", "en"],
    publisher: { "@id": `${BASE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/blog?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

// ─── Service Schemas ───
export function buildServiceSchema(type: "physio" | "massage" | "lymph") {
  const services = {
    physio: {
      "@type": "MedicalTherapy",
      "@id": `${BASE_URL}/leistungen/physiotherapie#service`,
      name: "Physiotherapie",
      alternateName: ["Physio Basel", "Physiotherapy Basel"],
      description:
        "Individuelle physiotherapeutische Behandlung bei akuten und chronischen Beschwerden des Bewegungsapparates. Krankenkassen-anerkannt mit ärztlicher Verordnung (KVG/UVG/IV/MV).",
      url: `${BASE_URL}/leistungen/physiotherapie`,
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: { "@type": "City", name: "Basel" },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `${BASE_URL}/termin`,
        availableLanguage: ["German", "English", "Greek"],
      },
      isRelatedTo: ["Manuelle Therapie", "Bewegungstherapie", "Schmerztherapie"],
    },
    massage: {
      "@type": "Service",
      "@id": `${BASE_URL}/leistungen/massage#service`,
      name: "Klassische Massage",
      alternateName: ["Therapeutische Massage Basel", "Massage Basel"],
      description:
        "Klassische Massage zur Muskelentspannung, Durchblutungsförderung und Regeneration. Privatleistung, kein Rezept erforderlich. Verfügbar in 30, 45 und 60 Minuten.",
      url: `${BASE_URL}/leistungen/massage`,
      provider: { "@id": `${BASE_URL}/#organization` },
      offers: [
        { "@type": "Offer", name: "Massage 30 Min.", price: "77.00", priceCurrency: "CHF" },
        { "@type": "Offer", name: "Massage 45 Min.", price: "114.50", priceCurrency: "CHF" },
        { "@type": "Offer", name: "Massage 60 Min.", price: "152.00", priceCurrency: "CHF" },
      ],
      areaServed: { "@type": "City", name: "Basel" },
    },
    lymph: {
      "@type": "MedicalTherapy",
      "@id": `${BASE_URL}/leistungen/lymphdrainage#service`,
      name: "Manuelle Lymphdrainage",
      alternateName: ["Lymphdrainage Basel", "Entstauungstherapie Basel"],
      description:
        "Spezialisierte manuelle Lymphdrainage zur Entstauung von Ödemen, nach Operationen und bei Lymphödemen. Mit Zertifikat, krankenkassen-anerkannt.",
      url: `${BASE_URL}/leistungen/lymphdrainage`,
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: { "@type": "City", name: "Basel" },
    },
  };
  return services[type];
}

// ─── FAQPage ───
export function buildFaqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

// ─── BreadcrumbList ───
export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── WebPage ───
export function buildWebPageSchema({
  url,
  name,
  description,
  datePublished,
  dateModified,
}: {
  url: string;
  name: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
    inLanguage: "de-CH",
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified: dateModified || datePublished }),
  };
}

// ─── Reviews ───
export function buildReviewSchemas() {
  const reviews = [
    {
      author: "Sandra M.",
      reviewBody:
        "Nach meinem Bandscheibenvorfall war ich wirklich verzweifelt. Die Behandlung bei Kyriaki hat mir unglaublich geholfen — nach wenigen Wochen war ich wieder schmerzfrei. Sehr einfühlsam und kompetent.",
      ratingValue: 5,
      datePublished: "2025-11-15",
    },
    {
      author: "Thomas R.",
      reviewBody:
        "Ich war nach einer Operation auf Lymphdrainage angewiesen. Die Behandlungen hier waren professionell und wirkungsvoll. Ich habe mich von Anfang an in guten Händen gefühlt.",
      ratingValue: 5,
      datePublished: "2025-12-02",
    },
    {
      author: "Maria K.",
      reviewBody:
        "Ich komme seit über zwei Jahren regelmässig zu Kyriaki. Die Kombination aus Massage und Physiotherapie hilft mir enorm bei meinen chronischen Nackenproblemen. Absolut empfehlenswert!",
      ratingValue: 5,
      datePublished: "2026-01-10",
    },
  ];

  return reviews.map((r) => ({
    "@type": "Review",
    reviewBody: r.reviewBody,
    datePublished: r.datePublished,
    author: { "@type": "Person", name: r.author },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.ratingValue,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: { "@id": `${BASE_URL}/#organization` },
  }));
}
