import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { GelenkwerkLogo } from "@/components/ui";
import { buildFaqSchema, buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/schema";
import { translations } from "@/config/translations";

export const metadata: Metadata = {
  title: "FAQ — Häufige Fragen zur Physiotherapie & Massage Basel | Gelenkwerk",
  description:
    "Antworten auf häufige Fragen zu Physiotherapie, Massage und Lymphdrainage in Basel: Krankenkasse, Verordnung, Dauer, Hausbesuche und mehr. Praxis Gelenkwerk.",
  alternates: { canonical: `${SITE_CONFIG.url}/faq` },
  openGraph: {
    title: "FAQ — Häufige Fragen | Gelenkwerk Physiotherapie Basel",
    description:
      "Alles Wissenswerte zu Physiotherapie, Massage & Lymphdrainage in Basel. Krankenkasse, Termine, Hausbesuche und mehr.",
    url: `${SITE_CONFIG.url}/faq`,
    type: "website",
  },
};

const FAQ_ITEMS = translations.de.faq.items;

const EXTENDED_FAQ = [
  ...FAQ_ITEMS,
  {
    q: "Welche Krankenkassen erkennen Gelenkwerk an?",
    a: "Gelenkwerk ist Mitglied bei Physioswiss und bei allen Schweizer Krankenkassen anerkannt (KVG, UVG, IV, MV). Mit einer ärztlichen Verordnung wird die Behandlung nach Tarif von Ihrer Grundversicherung übernommen.",
  },
  {
    q: "Kann ich auch als Privatpatient behandelt werden?",
    a: "Ja. Massagen und andere Privatleistungen können ohne Verordnung direkt gebucht werden. Physiotherapie kann ebenfalls als Privatleistung bezogen werden — ideal für Selbstzahler oder internationale Patienten ohne Schweizer Krankenversicherung.",
  },
  {
    q: "Was ist Manuelle Lymphdrainage und wann brauche ich sie?",
    a: "Manuelle Lymphdrainage ist eine sanfte Behandlungsmethode zur Entstauung von Geweben. Sie wird eingesetzt bei Lymphödemen, nach Operationen (z.B. Gelenkersatz, Tumoroperationen), bei Sportverletzungen, Hämatomen und venösen Insuffizienzen. Kyriaki Chatzidimitriadou ist zertifizierte Lymphdrainagetherapeutin.",
  },
  {
    q: "In welchen Sprachen wird die Behandlung angeboten?",
    a: "Die Behandlungen werden auf Deutsch, Englisch und Griechisch angeboten.",
  },
  {
    q: "Wie nahe ist die Praxis beim Bahnhof Basel SBB?",
    a: "Die Praxis Gelenkwerk befindet sich an der Elisabethenstrasse 41, 4051 Basel — ca. 5 Gehminuten vom Bahnhof Basel SBB und gut mit dem Tram erreichbar.",
  },
];

export default function FaqPage() {
  const schemas = [
    buildFaqSchema(EXTENDED_FAQ),
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_CONFIG.url },
      { name: "FAQ", url: `${SITE_CONFIG.url}/faq` },
    ]),
    buildWebPageSchema({
      url: `${SITE_CONFIG.url}/faq`,
      name: "FAQ — Häufige Fragen zur Physiotherapie & Massage Basel",
      description:
        "Antworten auf häufige Fragen zu Physiotherapie, Massage und Lymphdrainage in der Praxis Gelenkwerk Basel.",
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
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-teal font-body text-[13px] font-semibold no-underline hover:underline"
          >
            <ChevronLeft size={15} />
            Zur Praxis
          </Link>
        </div>
      </header>

      <main className="max-w-[800px] mx-auto px-6 py-16">
        <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 font-body text-[12px] text-brand-muted">
          <Link href="/" className="hover:text-teal no-underline transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-brand-text font-semibold">FAQ</span>
        </nav>

        <div className="text-center mb-14">
          <div className="section-label text-teal mb-2">Häufige Fragen</div>
          <h1 className="font-display text-[clamp(28px,4vw,44px)] font-normal text-brand-text leading-tight mb-4">
            FAQ — Physiotherapie & Massage Basel
          </h1>
          <div className="w-12 h-[3px] bg-teal-light rounded-sm mx-auto mb-5" />
          <p className="font-body text-[15px] text-brand-muted max-w-[560px] mx-auto">
            Antworten auf die häufigsten Fragen rund um unsere Leistungen, Kosten, Krankenkasse und Terminbuchung.
          </p>
        </div>

        <div className="space-y-4">
          {EXTENDED_FAQ.map((item, i) => (
            <details key={i} className="group rounded-[20px] border border-teal-pale bg-white overflow-hidden shadow-[0_4px_16px_rgba(26,138,125,0.04)]">
              <summary className="flex items-center justify-between gap-4 px-7 py-5 cursor-pointer list-none font-display text-[17px] text-brand-text font-medium leading-snug">
                <span>{item.q}</span>
                <ChevronRight
                  size={18}
                  className="shrink-0 text-teal transition-transform duration-300 group-open:rotate-90"
                />
              </summary>
              <div className="px-7 pb-6 pt-1 font-body text-[15px] text-brand-muted leading-relaxed border-t border-teal-pale/60">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-14 p-8 rounded-2xl bg-teal/5 border border-teal/15 text-center">
          <div className="font-display text-[20px] text-brand-text mb-2">Weitere Fragen?</div>
          <p className="font-body text-[14px] text-brand-muted mb-5">
            Rufen Sie uns an oder buchen Sie direkt online einen Termin.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${"+41762245850".replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-teal text-teal font-body text-[14px] font-semibold no-underline hover:bg-teal hover:text-white transition-colors duration-300"
            >
              +41 76 624 58 50
            </a>
            <Link
              href="/termin"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-teal text-white font-body text-[14px] font-semibold no-underline hover:bg-teal-dark transition-colors duration-300"
            >
              Termin buchen
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-teal-pale">
          <h2 className="font-display text-[18px] text-brand-text mb-4">Unsere Leistungen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "Physiotherapie", href: "/leistungen/physiotherapie" },
              { label: "Massage", href: "/leistungen/massage" },
              { label: "Lymphdrainage", href: "/leistungen/lymphdrainage" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center justify-between px-5 py-3.5 rounded-xl border border-teal-pale bg-white text-teal font-body text-[14px] font-semibold no-underline hover:border-teal transition-colors"
              >
                {l.label}
                <ChevronRight size={15} />
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="mt-16 bg-brand-dark py-8 px-6 text-center">
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
