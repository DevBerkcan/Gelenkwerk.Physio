import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { GelenkwerkLogo } from "@/components/ui";
import { buildBreadcrumbSchema, buildWebPageSchema, buildServiceSchema, buildOrganizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Leistungen — Physiotherapie, Massage & Lymphdrainage Basel | Gelenkwerk",
  description:
    "Alle Leistungen der Praxis Gelenkwerk in Basel: Physiotherapie (krankenkassen-anerkannt), klassische Massage (CHF 77–152) und manuelle Lymphdrainage. Elisabethenstrasse 41, Basel.",
  alternates: { canonical: `${SITE_CONFIG.url}/leistungen` },
  openGraph: {
    title: "Leistungen — Physiotherapie, Massage & Lymphdrainage | Gelenkwerk Basel",
    description:
      "Physiotherapie mit Krankenkasse, klassische Massage ab CHF 77 und zertifizierte Lymphdrainage in Basel.",
    url: `${SITE_CONFIG.url}/leistungen`,
    type: "website",
  },
};

const SERVICES = [
  {
    slug: "physiotherapie",
    title: "Physiotherapie",
    label: "Krankenkassen-anerkannt",
    description:
      "Individuelle physiotherapeutische Behandlung bei akuten und chronischen Beschwerden des Bewegungsapparates — mit ärztlicher Verordnung über KVG, UVG, IV oder MV abrechenbar.",
    highlights: ["KVG / UVG / IV / MV", "~ 25 oder 40 Min.", "Domizilbehandlung möglich", "Verordnung erforderlich"],
    image: "/rueckenschmerzen.jpeg",
    color: "bg-teal/5 border-teal/15",
  },
  {
    slug: "massage",
    title: "Klassische Massage",
    label: "Privatleistung — kein Rezept nötig",
    description:
      "Therapeutische Massagen zur Muskelentspannung, Durchblutungsförderung und Regeneration. Ohne ärztliche Verordnung direkt buchbar — in 30, 45 oder 60 Minuten.",
    highlights: ["30 Min. — CHF 77", "45 Min. — CHF 114.50", "60 Min. — CHF 152", "Kein Rezept nötig"],
    image: "/massage.jpeg",
    color: "bg-[#fdf0e8]/50 border-[#c4622d]/10",
  },
  {
    slug: "lymphdrainage",
    title: "Manuelle Lymphdrainage",
    label: "Zertifiziert & krankenkassen-anerkannt",
    description:
      "Sanfte, spezialisierte Entstauungstherapie bei Ödemen, nach Operationen und bei Lymphödemen. Durchgeführt von zertifizierter Therapeutin mit Lymphdrainage-Urkunde.",
    highlights: ["Lymphödem / Ödem", "Postoperative Schwellungen", "Krankenkassen-anerkannt", "Zertifizierte Therapeutin"],
    image: "/Lymphdrenage.jpeg",
    color: "bg-[#eef4fb]/50 border-[#2d6a9f]/10",
  },
];

export default function LeistungenPage() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Leistungen Gelenkwerk Physiotherapie Basel",
      numberOfItems: 3,
      itemListElement: [
        { "@type": "ListItem", position: 1, item: buildServiceSchema("physio") },
        { "@type": "ListItem", position: 2, item: buildServiceSchema("massage") },
        { "@type": "ListItem", position: 3, item: buildServiceSchema("lymph") },
      ],
    },
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_CONFIG.url },
      { name: "Leistungen", url: `${SITE_CONFIG.url}/leistungen` },
    ]),
    buildWebPageSchema({
      url: `${SITE_CONFIG.url}/leistungen`,
      name: "Leistungen — Physiotherapie, Massage & Lymphdrainage Basel",
      description: "Alle Leistungen der Praxis Gelenkwerk in Basel: Physiotherapie, Massage und Lymphdrainage.",
    }),
  ];

  return (
    <div className="min-h-screen bg-cream font-body">
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <header className="bg-white border-b border-teal-pale py-4 px-6 sticky top-0 z-50">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <GelenkwerkLogo size={36} />
          </Link>
          <Link href="/" className="inline-flex items-center gap-1.5 text-teal font-body text-[13px] font-semibold no-underline hover:underline">
            <ChevronLeft size={15} />
            Zur Praxis
          </Link>
        </div>
      </header>

      <main className="max-w-[1000px] mx-auto px-6 py-16">
        <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 font-body text-[12px] text-brand-muted">
          <Link href="/" className="hover:text-teal no-underline transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-brand-text font-semibold">Leistungen</span>
        </nav>

        <div className="text-center mb-16">
          <div className="section-label text-teal mb-2">Praxis Gelenkwerk · Basel</div>
          <h1 className="font-display text-[clamp(30px,5vw,50px)] font-normal text-brand-text leading-tight mb-4">
            Physiotherapie, Massage & Lymphdrainage
          </h1>
          <div className="w-12 h-[3px] bg-teal-light rounded-sm mx-auto mb-5" />
          <p className="font-body text-[15px] text-brand-muted max-w-[560px] mx-auto">
            Alle Behandlungen sind individuell auf Ihre Beschwerden abgestimmt.
            Krankenkassen-anerkannt mit ärztlicher Verordnung.
          </p>
        </div>

        <div className="space-y-8">
          {SERVICES.map((s) => (
            <article key={s.slug} className={`rounded-2xl border p-0 overflow-hidden bg-white shadow-sm ${s.color}`}>
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2 h-48 md:h-auto">
                  <img
                    src={s.image}
                    alt={`${s.title} in Basel — Praxis Gelenkwerk`}
                    className="w-full h-full object-cover"
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                </div>
                <div className="md:col-span-3 p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-teal/10 text-teal font-body text-[11px] font-bold tracking-wide mb-3">
                    {s.label}
                  </span>
                  <h2 className="font-display text-[24px] text-brand-text mb-3">{s.title}</h2>
                  <p className="font-body text-[14px] text-brand-muted leading-relaxed mb-5">{s.description}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {s.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 font-body text-[13px] text-brand-text">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/leistungen/${s.slug}`}
                    className="inline-flex items-center gap-2 text-teal font-body text-[14px] font-semibold no-underline hover:underline"
                  >
                    Mehr erfahren <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 p-8 rounded-2xl bg-teal/5 border border-teal/15 text-center">
          <div className="font-display text-[22px] text-brand-text mb-2">Termin vereinbaren</div>
          <p className="font-body text-[14px] text-brand-muted mb-5">
            Praxis Gelenkwerk · Elisabethenstrasse 41 · 4051 Basel
          </p>
          <Link
            href="/termin"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-teal text-white font-body text-[14px] font-semibold no-underline hover:bg-teal-dark transition-colors duration-300"
          >
            Jetzt online buchen <ChevronRight size={15} />
          </Link>
        </div>
      </main>

      <footer className="mt-10 bg-brand-dark py-8 px-6 text-center">
        <Link href="/" className="no-underline">
          <GelenkwerkLogo size={28} className="mx-auto mb-2 opacity-70" />
        </Link>
        <p className="font-body text-[12px] text-white/40">
          © {new Date().getFullYear()} Gelenkwerk · Praxis Elisabethen, Basel
        </p>
      </footer>
    </div>
  );
}
