import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/schema";
import TerminClient from "./TerminClient";

export const metadata: Metadata = {
  title: "Online Termin buchen | Physiotherapie & Massage Basel — Gelenkwerk",
  description:
    "Jetzt bequem online Ihren Termin für Physiotherapie, Massage oder Lymphdrainage in Basel buchen. Praxis Gelenkwerk, Elisabethenstrasse 41, 4051 Basel.",
  alternates: { canonical: `${SITE_CONFIG.url}/termin` },
  openGraph: {
    title: "Termin buchen — Gelenkwerk Physiotherapie Basel",
    description:
      "Online Terminbuchung für Physiotherapie, Massage & Lymphdrainage. Praxis Elisabethen, Basel.",
    url: `${SITE_CONFIG.url}/termin`,
    type: "website",
  },
};

export default function TerminPage() {
  const schemas = [
    buildWebPageSchema({
      url: `${SITE_CONFIG.url}/termin`,
      name: "Online Termin buchen — Gelenkwerk Physiotherapie Basel",
      description:
        "Online-Terminbuchung für Physiotherapie, Massage und Lymphdrainage in der Praxis Gelenkwerk, Basel.",
    }),
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_CONFIG.url },
      { name: "Termin buchen", url: `${SITE_CONFIG.url}/termin` },
    ]),
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <TerminClient />
    </>
  );
}
