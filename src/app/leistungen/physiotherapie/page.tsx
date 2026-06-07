import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { SITE_CONFIG, CONTACT } from "@/config/site";
import { GelenkwerkLogo } from "@/components/ui";
import { buildServiceSchema, buildBreadcrumbSchema, buildWebPageSchema, buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Physiotherapie Basel — Krankenkassen-anerkannt | Gelenkwerk",
  description:
    "Physiotherapie in Basel bei Kyriaki Chatzidimitriadou. Behandlung von Rückenschmerzen, Sportverletzungen, postoperativer Rehabilitation. KVG/UVG/IV/MV-anerkannt. Elisabethenstrasse 41, 4051 Basel.",
  alternates: { canonical: `${SITE_CONFIG.url}/leistungen/physiotherapie` },
  openGraph: {
    title: "Physiotherapie Basel — Krankenkassen-anerkannt | Gelenkwerk",
    description:
      "Individuelle Physiotherapie in Basel. Rückenschmerzen, Sportrehabilation, manuelle Therapie. KVG-anerkannt, Elisabethenstrasse 41.",
    url: `${SITE_CONFIG.url}/leistungen/physiotherapie`,
    type: "website",
    images: [{ url: `${SITE_CONFIG.url}/rueckenschmerzen.jpeg`, width: 1200, height: 630, alt: "Physiotherapie Basel — Gelenkwerk" }],
  },
};

const FAQ = [
  {
    q: "Brauche ich für Physiotherapie eine Verordnung?",
    a: "Für die Abrechnung über die Grundversicherung (KVG) ist eine ärztliche Verordnung erforderlich. Physiotherapie kann aber auch ohne Verordnung als Privatleistung bezogen werden.",
  },
  {
    q: "Welche Krankenkassen werden akzeptiert?",
    a: "Gelenkwerk ist bei allen Schweizer Krankenkassen anerkannt. Wir rechnen über KVG, UVG, IV und MV ab.",
  },
  {
    q: "Wie lange dauert eine Physiotherapie-Sitzung?",
    a: "Eine Standard-Sitzung dauert ca. 25 Minuten, eine aufwändige Sitzung ca. 40 Minuten — je nach Verordnung und Beschwerdebild.",
  },
  {
    q: "Bieten Sie Hausbesuche an?",
    a: "Ja, Domizilbehandlungen sind im Raum Basel möglich. Es fällt ein Fahrkostenzuschlag von CHF 40.00 an.",
  },
];

const INDICATIONS = [
  "Rückenschmerzen & Hexenschuss",
  "Bandscheibenvorfälle",
  "Nackenschmerzen & Verspannungen",
  "Schulter- & Knieprobleme",
  "Sportverletzungen",
  "Postoperative Rehabilitation",
  "Neurologische Erkrankungen (Bobath)",
  "Chronische Schmerzerkrankungen",
  "Haltungskorrektur",
  "Sturzprävention & Balance",
];

export default function PhysiotherapiePage() {
  const schemas = [
    buildServiceSchema("physio"),
    buildFaqSchema(FAQ),
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_CONFIG.url },
      { name: "Leistungen", url: `${SITE_CONFIG.url}/leistungen` },
      { name: "Physiotherapie", url: `${SITE_CONFIG.url}/leistungen/physiotherapie` },
    ]),
    buildWebPageSchema({
      url: `${SITE_CONFIG.url}/leistungen/physiotherapie`,
      name: "Physiotherapie Basel — Krankenkassen-anerkannt",
      description:
        "Individuelle Physiotherapie bei Rückenschmerzen, Sportverletzungen und chronischen Beschwerden. KVG/UVG/IV/MV-anerkannt in Basel.",
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
          <Link href="/leistungen" className="inline-flex items-center gap-1.5 text-teal font-body text-[13px] font-semibold no-underline hover:underline">
            <ChevronLeft size={15} />
            Alle Leistungen
          </Link>
        </div>
      </header>

      <main className="max-w-[860px] mx-auto px-6 py-16">
        <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 font-body text-[12px] text-brand-muted flex-wrap">
          <Link href="/" className="hover:text-teal no-underline transition-colors">Home</Link>
          <span>/</span>
          <Link href="/leistungen" className="hover:text-teal no-underline transition-colors">Leistungen</Link>
          <span>/</span>
          <span className="text-brand-text font-semibold">Physiotherapie</span>
        </nav>

        {/* Hero */}
        <div className="mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-teal/10 text-teal font-body text-[11px] font-bold tracking-wide mb-4">
            Krankenkassen-anerkannt — KVG / UVG / IV / MV
          </span>
          <h1 className="font-display text-[clamp(28px,4vw,44px)] font-normal text-brand-text leading-tight mb-5">
            Physiotherapie Basel
          </h1>
          <p className="font-body text-[16px] text-brand-muted leading-relaxed max-w-[640px] mb-8">
            Individuelle physiotherapeutische Behandlung bei akuten und chronischen Beschwerden des
            Bewegungsapparates. Kyriaki Chatzidimitriadou, dipl. Physiotherapeutin, behandelt Sie
            nach Befund — evidenzbasiert, manuell und aktiv.
          </p>
          <Link
            href="/termin"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-teal text-white font-body text-[14px] font-semibold no-underline hover:bg-teal-dark transition-colors duration-300"
          >
            Termin buchen <ChevronRight size={15} />
          </Link>
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden mb-14 h-[280px]">
          <img
            src="/rueckenschmerzen.jpeg"
            alt="Physiotherapie Basel — Behandlung bei Rückenschmerzen, Praxis Gelenkwerk"
            className="w-full h-full object-cover"
            width={860}
            height={280}
          />
        </div>

        {/* Was ist Physiotherapie */}
        <section className="mb-14">
          <h2 className="font-display text-[clamp(22px,3vw,30px)] text-brand-text mb-4">
            Was ist Physiotherapie?
          </h2>
          <div className="space-y-4 font-body text-[15px] text-brand-muted leading-relaxed">
            <p>
              Physiotherapie ist eine medizinische Fachrichtung zur Behandlung von Erkrankungen und
              Verletzungen des Bewegungsapparates, des Nervensystems und des Kreislaufs. Sie kombiniert
              aktive Therapie (Übungen, Training) mit passiven Methoden (manuelle Therapie, Wärme, Kälte).
            </p>
            <p>
              In der Praxis Gelenkwerk beginnt jede Behandlung mit einer gründlichen Befundaufnahme:
              Haltung, Beweglichkeit, Muskelkraft und Schmerzverhalten werden untersucht — dann wird
              ein individueller Behandlungsplan erstellt.
            </p>
          </div>
        </section>

        {/* Indikationen */}
        <section className="mb-14">
          <h2 className="font-display text-[clamp(22px,3vw,30px)] text-brand-text mb-6">
            Behandelte Beschwerden
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {INDICATIONS.map((ind, i) => (
              <div key={i} className="flex items-start gap-2 px-4 py-3 rounded-xl bg-white border border-teal-pale">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                <span className="font-body text-[13px] text-brand-text">{ind}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Ablauf */}
        <section className="mb-14 p-8 rounded-2xl bg-white border border-teal-pale">
          <h2 className="font-display text-[clamp(20px,2.5vw,28px)] text-brand-text mb-6">
            Ablauf einer Behandlung
          </h2>
          <div className="space-y-5">
            {[
              { step: "1", title: "Befundaufnahme", text: "Anamnese, Haltungsanalyse, Beweglichkeitsmessung — für ein genaues Bild Ihrer Beschwerden." },
              { step: "2", title: "Behandlungsplan", text: "Individuelle Therapieziele werden gemeinsam mit Ihnen festgelegt." },
              { step: "3", title: "Aktive & passive Therapie", text: "Manuelle Techniken, gezielte Übungen, Wärme- oder Kältetherapie — abgestimmt auf Ihre Situation." },
              { step: "4", title: "Heimübungen", text: "Sie erhalten ein individuelles Heimübungsprogramm für nachhaltige Ergebnisse." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-teal/10 text-teal font-display font-bold text-[14px] flex items-center justify-center">
                  {s.step}
                </div>
                <div>
                  <div className="font-display text-[15px] font-semibold text-brand-text mb-0.5">{s.title}</div>
                  <div className="font-body text-[14px] text-brand-muted">{s.text}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Krankenkasse */}
        <section className="mb-14">
          <h2 className="font-display text-[clamp(20px,2.5vw,28px)] text-brand-text mb-4">
            Krankenkasse & Abrechnung
          </h2>
          <p className="font-body text-[15px] text-brand-muted leading-relaxed mb-4">
            Mit einer ärztlichen Verordnung werden physiotherapeutische Behandlungen von der
            Grundversicherung (KVG) übernommen. Gelenkwerk ist bei allen Schweizer Krankenkassen
            anerkannt und Mitglied bei Physioswiss.
          </p>
          <p className="font-body text-[15px] text-brand-muted leading-relaxed">
            Auch UVG (Unfall), IV (Invalidenversicherung) und MV (Militärversicherung) werden
            direkt abgerechnet.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="font-display text-[clamp(20px,2.5vw,28px)] text-brand-text mb-6">
            Häufige Fragen zur Physiotherapie
          </h2>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <details key={i} className="group rounded-[18px] border border-teal-pale bg-white overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-display text-[16px] text-brand-text font-medium">
                  <span>{item.q}</span>
                  <ChevronRight size={16} className="shrink-0 text-teal transition-transform duration-300 group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-5 pt-1 font-body text-[14px] text-brand-muted leading-relaxed border-t border-teal-pale/60">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
          <p className="mt-4 font-body text-[13px] text-brand-muted">
            Weitere Fragen? Besuchen Sie unsere{" "}
            <Link href="/faq" className="text-teal underline">FAQ-Seite</Link>.
          </p>
        </section>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-teal/5 border border-teal/15 text-center">
          <div className="font-display text-[22px] text-brand-text mb-2">Jetzt Termin vereinbaren</div>
          <p className="font-body text-[14px] text-brand-muted mb-6">
            Praxis Gelenkwerk · Elisabethenstrasse 41 · 4051 Basel<br />
            Mo–Fr 08–18 Uhr · Sa 09–14 Uhr
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${CONTACT.phone[1].replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-teal text-teal font-body text-[14px] font-semibold no-underline hover:bg-teal hover:text-white transition-colors"
            >
              {CONTACT.phone[1]}
            </a>
            <Link
              href="/termin"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-teal text-white font-body text-[14px] font-semibold no-underline hover:bg-teal-dark transition-colors"
            >
              Online buchen <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-teal-pale">
          <p className="font-body text-[13px] text-brand-muted mb-3">Weitere Leistungen:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/leistungen/massage" className="px-4 py-2 rounded-full border border-teal-pale bg-white text-teal font-body text-[13px] font-semibold no-underline hover:border-teal transition-colors">Massage →</Link>
            <Link href="/leistungen/lymphdrainage" className="px-4 py-2 rounded-full border border-teal-pale bg-white text-teal font-body text-[13px] font-semibold no-underline hover:border-teal transition-colors">Lymphdrainage →</Link>
            <Link href="/blog/rueckenschmerzen-physiotherapie-basel" className="px-4 py-2 rounded-full border border-teal-pale bg-white text-teal font-body text-[13px] font-semibold no-underline hover:border-teal transition-colors">Rückenschmerzen Ratgeber →</Link>
          </div>
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
