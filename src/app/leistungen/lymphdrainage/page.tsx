import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { SITE_CONFIG, CONTACT } from "@/config/site";
import { GelenkwerkLogo } from "@/components/ui";
import { buildServiceSchema, buildBreadcrumbSchema, buildWebPageSchema, buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Manuelle Lymphdrainage Basel — Zertifiziert & krankenkassen-anerkannt | Gelenkwerk",
  description:
    "Manuelle Lymphdrainage in Basel bei zertifizierter Therapeutin Kyriaki Chatzidimitriadou. Bei Ödemen, Lymphödemen, postoperativen Schwellungen und Sportverletzungen. KVG-anerkannt.",
  alternates: { canonical: `${SITE_CONFIG.url}/leistungen/lymphdrainage` },
  openGraph: {
    title: "Lymphdrainage Basel — Zertifiziert | Gelenkwerk",
    description: "Manuelle Lymphdrainage bei Lymphödem, Ödemen und postoperativen Schwellungen. Zertifizierte Therapeutin, krankenkassen-anerkannt in Basel.",
    url: `${SITE_CONFIG.url}/leistungen/lymphdrainage`,
    type: "website",
    images: [{ url: `${SITE_CONFIG.url}/Lymphdrenage.jpeg`, width: 1200, height: 630, alt: "Lymphdrainage Basel — Gelenkwerk" }],
  },
};

const INDICATIONS = [
  { title: "Primäres Lymphödem", text: "Angeborene Fehlfunktion der Lymphgefässe — Langzeittherapie." },
  { title: "Sekundäres Lymphödem", text: "Nach Krebsoperationen, Bestrahlungen oder Traumata." },
  { title: "Postoperative Schwellungen", text: "Z.B. nach Gelenkoperationen, Bänderrissen, orthopädischen Eingriffen." },
  { title: "Sportverletzungen", text: "Hämatome, Prellungen, Zerrungen — beschleunigt die Heilung." },
  { title: "Lipödem", text: "Chronische Fettverteilungsstörung mit schmerzhaften Ödemen." },
  { title: "Venöse Insuffizienz", text: "Chronisch-venöse Insuffizienz (CVI) mit Beinödemen." },
];

const FAQ = [
  { q: "Was ist manuelle Lymphdrainage?", a: "Manuelle Lymphdrainage ist eine sanfte Massagetechnik, die das Lymphsystem anregt und überschüssige Gewebsflüssigkeit aus dem Körper ableitet. Sie gehört zur Komplexen Physikalischen Entstauungstherapie (KPE)." },
  { q: "Ist Lymphdrainage krankenkassen-anerkannt?", a: "Ja. Mit ärztlicher Verordnung wird manuelle Lymphdrainage von der Grundversicherung (KVG) übernommen. Gelenkwerk ist bei allen Schweizer Krankenkassen anerkannt." },
  { q: "Wie viele Sitzungen brauche ich?", a: "Das hängt von der Diagnose ab. Bei postoperativen Schwellungen oft 5–10 Sitzungen. Chronische Lymphödeme erfordern eine regelmässige Langzeittherapie. Ihre Therapeutin erstellt einen individuellen Plan." },
  { q: "Ist Lymphdrainage schmerzhaft?", a: "Nein. Die Griffe sind sehr sanft und kaum spürbar. Viele Patientinnen und Patienten entspannen sich tief oder schlafen sogar ein." },
  { q: "Wer darf Lymphdrainage durchführen?", a: "Nur Therapeuten mit spezifischer Zusatzausbildung. Kyriaki Chatzidimitriadou verfügt über eine anerkannte Lymphdrainage-Urkunde." },
];

export default function LymphdrainagePage() {
  const schemas = [
    buildServiceSchema("lymph"),
    buildFaqSchema(FAQ),
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_CONFIG.url },
      { name: "Leistungen", url: `${SITE_CONFIG.url}/leistungen` },
      { name: "Lymphdrainage", url: `${SITE_CONFIG.url}/leistungen/lymphdrainage` },
    ]),
    buildWebPageSchema({
      url: `${SITE_CONFIG.url}/leistungen/lymphdrainage`,
      name: "Manuelle Lymphdrainage Basel — Zertifiziert",
      description: "Manuelle Lymphdrainage bei Ödemen, Lymphödemen und postoperativen Schwellungen. Zertifizierte Therapeutin in Basel.",
    }),
  ];

  return (
    <div className="min-h-screen bg-cream font-body">
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <header className="bg-white border-b border-teal-pale py-4 px-6 sticky top-0 z-50">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 no-underline"><GelenkwerkLogo size={36} /></Link>
          <Link href="/leistungen" className="inline-flex items-center gap-1.5 text-teal font-body text-[13px] font-semibold no-underline hover:underline">
            <ChevronLeft size={15} />Alle Leistungen
          </Link>
        </div>
      </header>

      <main className="max-w-[860px] mx-auto px-6 py-16">
        <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 font-body text-[12px] text-brand-muted flex-wrap">
          <Link href="/" className="hover:text-teal no-underline transition-colors">Home</Link>
          <span>/</span>
          <Link href="/leistungen" className="hover:text-teal no-underline transition-colors">Leistungen</Link>
          <span>/</span>
          <span className="text-brand-text font-semibold">Manuelle Lymphdrainage</span>
        </nav>

        <div className="mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#eef4fb] text-[#2d6a9f] font-body text-[11px] font-bold tracking-wide mb-4">
            Zertifiziert — Lymphdrainage-Urkunde · KVG-anerkannt
          </span>
          <h1 className="font-display text-[clamp(28px,4vw,44px)] font-normal text-brand-text leading-tight mb-5">
            Manuelle Lymphdrainage Basel
          </h1>
          <p className="font-body text-[16px] text-brand-muted leading-relaxed max-w-[640px] mb-8">
            Sanfte, spezialisierte Entstauungstherapie bei Lymphödemen, postoperativen Schwellungen
            und Sportverletzungen. Kyriaki Chatzidimitriadou ist zertifizierte Lymphdrainagetherapeutin.
          </p>
          <Link href="/termin" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-teal text-white font-body text-[14px] font-semibold no-underline hover:bg-teal-dark transition-colors">
            Termin buchen <ChevronRight size={15} />
          </Link>
        </div>

        <div className="rounded-2xl overflow-hidden mb-14 h-[280px]">
          <img src="/Lymphdrenage.jpeg" alt="Manuelle Lymphdrainage Basel — Praxis Gelenkwerk" className="w-full h-full object-cover" width={860} height={280} />
        </div>

        {/* Was ist Lymphdrainage */}
        <section className="mb-14">
          <h2 className="font-display text-[clamp(22px,3vw,30px)] text-brand-text mb-4">Was ist manuelle Lymphdrainage?</h2>
          <div className="space-y-4 font-body text-[15px] text-brand-muted leading-relaxed">
            <p>
              Manuelle Lymphdrainage ist eine sanfte Massagetechnik, die durch kreisförmige, rhythmische
              Griffe das Lymphsystem anregt. Die Haut wird leicht verschoben, um die Pumpleistung der
              Lymphgefässe zu aktivieren.
            </p>
            <p>
              Die Behandlung gehört zur Komplexen Physikalischen Entstauungstherapie (KPE) und wird nur
              von Therapeuten mit spezifischer Zusatzausbildung durchgeführt. Kyriaki Chatzidimitriadou
              besitzt das anerkannte Lymphdrainage-Zertifikat.
            </p>
          </div>
        </section>

        {/* Indikationen */}
        <section className="mb-14">
          <h2 className="font-display text-[clamp(22px,3vw,30px)] text-brand-text mb-6">Wann wird Lymphdrainage eingesetzt?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INDICATIONS.map((ind, i) => (
              <div key={i} className="p-5 rounded-xl bg-white border border-teal-pale">
                <div className="font-display text-[15px] font-semibold text-brand-text mb-1">{ind.title}</div>
                <div className="font-body text-[13px] text-brand-muted">{ind.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Ablauf */}
        <section className="mb-14 p-8 rounded-2xl bg-white border border-teal-pale">
          <h2 className="font-display text-[clamp(20px,2.5vw,26px)] text-brand-text mb-4">Ablauf einer Sitzung</h2>
          <p className="font-body text-[15px] text-brand-muted leading-relaxed mb-4">
            Eine Lymphdrainage-Sitzung dauert ca. 30 Minuten. Die Behandlung erfolgt im Liegen.
            Die Griffe sind sehr sanft — kaum spürbar, aber hochwirksam. Viele Patientinnen und
            Patienten schlafen ein oder erleben tiefe Entspannung.
          </p>
          <p className="font-body text-[15px] text-brand-muted leading-relaxed">
            Je nach Beschwerdebild werden ergänzend Kompressionsstrümpfe oder Bandagierungen empfohlen.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="font-display text-[clamp(20px,2.5vw,28px)] text-brand-text mb-6">Häufige Fragen</h2>
          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <details key={i} className="group rounded-[18px] border border-teal-pale bg-white overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-display text-[16px] text-brand-text font-medium">
                  <span>{item.q}</span>
                  <ChevronRight size={16} className="shrink-0 text-teal transition-transform duration-300 group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-5 pt-1 font-body text-[14px] text-brand-muted leading-relaxed border-t border-teal-pale/60">{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-teal/5 border border-teal/15 text-center">
          <div className="font-display text-[22px] text-brand-text mb-2">Lymphdrainage buchen</div>
          <p className="font-body text-[14px] text-brand-muted mb-6">Praxis Gelenkwerk · Elisabethenstrasse 41 · 4051 Basel</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${CONTACT.phone[1].replace(/\s/g, "")}`} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-teal text-teal font-body text-[14px] font-semibold no-underline hover:bg-teal hover:text-white transition-colors">
              {CONTACT.phone[1]}
            </a>
            <Link href="/termin" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-teal text-white font-body text-[14px] font-semibold no-underline hover:bg-teal-dark transition-colors">
              Online buchen <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-teal-pale">
          <p className="font-body text-[13px] text-brand-muted mb-3">Weitere Leistungen:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/leistungen/physiotherapie" className="px-4 py-2 rounded-full border border-teal-pale bg-white text-teal font-body text-[13px] font-semibold no-underline hover:border-teal transition-colors">Physiotherapie →</Link>
            <Link href="/leistungen/massage" className="px-4 py-2 rounded-full border border-teal-pale bg-white text-teal font-body text-[13px] font-semibold no-underline hover:border-teal transition-colors">Massage →</Link>
            <Link href="/blog/manuelle-lymphdrainage-wirkung-anwendung" className="px-4 py-2 rounded-full border border-teal-pale bg-white text-teal font-body text-[13px] font-semibold no-underline hover:border-teal transition-colors">Ratgeber Lymphdrainage →</Link>
          </div>
        </div>
      </main>

      <footer className="mt-10 bg-brand-dark py-8 px-6 text-center">
        <Link href="/" className="no-underline"><GelenkwerkLogo size={28} className="mx-auto mb-2 opacity-70" /></Link>
        <p className="font-body text-[12px] text-white/40">© {new Date().getFullYear()} Gelenkwerk · Praxis Elisabethen, Basel</p>
      </footer>
    </div>
  );
}
