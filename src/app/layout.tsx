import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";
import { LanguageProvider } from "@/context/LanguageContext";
import CookieBanner from "@/components/CookieBanner";
import AnalyticsLoader from "@/components/AnalyticsLoader";
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildPersonSchema,
} from "@/lib/schema";
import "@/styles/globals.css";

const OG_IMAGE = {
  url: `${SITE_CONFIG.url}/office.jpeg`,
  width: 1200,
  height: 630,
  alt: "Gelenkwerk Physiotherapie — Praxis Elisabethen, Basel",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Physiotherapie & Massage Basel | Gelenkwerk — Praxis Elisabethen",
    template: "%s | Gelenkwerk Basel",
  },
  description:
    "Physiotherapie, Massage & Lymphdrainage in Basel. Kyriaki Chatzidimitriadou, dipl. Physiotherapeutin — krankenkassen-anerkannt, Elisabethenstrasse 41, 4051 Basel. Jetzt Termin buchen.",
  keywords: [
    "Physiotherapie Basel",
    "Physiotherapeutin Basel",
    "Massage Basel",
    "Lymphdrainage Basel",
    "Rückenschmerzen Basel",
    "Praxis Elisabethen Basel",
    "Gelenkwerk",
    "Physiotherapy Basel",
    "Manuelle Lymphdrainage Basel",
    "Domizilbehandlung Basel",
    "Krankenkasse Physiotherapie Basel",
  ],
  authors: [{ name: "Kyriaki Chatzidimitriadou", url: `${SITE_CONFIG.url}/about` }],
  creator: "Kyriaki Chatzidimitriadou",
  publisher: "Gelenkwerk Physiotherapie",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/logoo_transparent.png", type: "image/png" },
    ],
    shortcut: "/logoo_transparent.png",
    apple: "/logoo_transparent.png",
  },
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: { "de-CH": SITE_CONFIG.url, "en": `${SITE_CONFIG.url}/en` },
  },
  openGraph: {
    title: "Physiotherapie & Massage Basel | Gelenkwerk",
    description:
      "Individuelle Physiotherapie, Massage & Lymphdrainage in Basel. Krankenkassen-anerkannt. Elisabethenstrasse 41, 4051 Basel — jetzt online Termin buchen.",
    url: SITE_CONFIG.url,
    siteName: "Gelenkwerk Physiotherapie Basel",
    locale: "de_CH",
    alternateLocale: "en_US",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapie & Massage Basel | Gelenkwerk",
    description:
      "Individuelle Physiotherapie, Massage & Lymphdrainage in Basel. Jetzt Termin buchen.",
    images: [OG_IMAGE.url],
  },
  verification: {
    google: "",
  },
  category: "health",
  classification: "Medical Practice",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    buildOrganizationSchema(),
    buildWebSiteSchema(),
    buildPersonSchema(),
  ];

  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Nunito+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="AI-readable site summary" />
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
          <CookieBanner />
          <AnalyticsLoader />
        </LanguageProvider>
      </body>
    </html>
  );
}
