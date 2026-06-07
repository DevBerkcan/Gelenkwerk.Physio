import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { SITE_CONFIG, CONTACT } from "@/config/site";
import { GelenkwerkLogo } from "@/components/ui";
import { buildServiceSchema, buildBreadcrumbSchema, buildWebPageSchema, buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Massage Basel — Klassische & therapeutische Massage | Gelenkwerk",
  description:
    "Klassische Massage in Basel ab CHF 77. Therapeutische Massagen in 30, 45 und 60 Minuten — zur Muskelentspannung, Durchblutungsförderung und Regeneration. Kein Rezept nötig.",
  alternates: { canonical: `${SITE_CONFIG.url}/leistungen/massage` },
  openGraph: {
    title: "Massage Basel — ab CHF 77 | Gelenkwerk",
    description:
      "Klassische Massage in Basel. 30 Min. CHF 77 · 45 Min. CHF 114.50 · 60 Min. CHF 152. Ohne Rezept buchbar.",
    url: `${SITE_CONFIG.url}/leistungen/massage`,
    type: "website",
    images: [{ url: `${SITE_CONFIG.url}/massage.jpeg`, width: 1200, height: 630, alt: "Massage Basel — Gelenkwerk" }],
  },
};

const PACKAGES = [
  { duration: 30, price: "77.00", popular: false, description: "Ideal für gezielte Problemzonen wie Nacken, Schultern oder Rücken." },
  { duration: 45, price: "114.50", popular: true, description: "Ausgewogene Behandlung für Ganzkörperentspannung und gezielte Therapie." },
  { duration: 60, price: "152.00", popular: false, description: "Ganzkörper-Behandlung für tiefe Entspannung und vollständige Regeneration." },
];

const EFFECTS = [
  { title: "Muskelentspannung", text: "Verspannte Muskeln werden mechanisch und reflektorisch gelöst." },
  { title: "Durchblutung", text: "Wärme und Druck steigern die Mikrozirkulation im Gewebe." },
  { title: "Stressreduktion", text: "Cortisol sinkt, Serotonin und Dopamin steigen." },
  { title: "Schmerzlinderung", text: "Gate-Control-Mechanismus hemmt Schmerzimpulse." },
];

const FAQ = [
  { q: "Brauche ich für eine Massage ein Rezept?", a: "Nein. Klassische Massagen sind Privatleistungen und können ohne ärztliche Verordnung direkt gebucht werden." },
  { q: "Werden Massagen von der Krankenkasse übernommen?", a: "Klassische Massagen werden von der Grundversicherung nicht gedeckt. Bei ärztlicher Verschreibung können medizinische Massagen über die Zusatzversicherung abgerechnet werden." },
  { q: "Was ist der Unterschied zwischen therapeutischer Massage und Wellness-Massage?", a: "Therapeutische Massagen werden von ausgebildeten Physiotherapeutinnen durchgeführt und zielen auf spezifische Beschwerden. Wellness-Massagen dienen primär der Entspannung." },
  { q: "Wie oft sollte man eine Massage buchen?", a: "Das hängt von Ihren Beschwerden ab. Bei akuten Verspannungen empfehlen wir 2–4 Sitzungen, danach monatliche Erhaltungstherapie. Ihre Therapeutin berät Sie individuell." },
];

export default function MassagePage() {
  const schemas = [
    buildServiceSchema("massage"),
    buildFaqSchema(FAQ),
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_CONFIG.url },
      { name: "Leistungen", url: `${SITE_CONFIG.url}/leistungen` },
      { name: "Massage", url: `${SITE_CONFIG.url}/leistungen/massage` },
    ]),
    buildWebPageSchema({
      url: `${SITE_CONFIG.url}/leistungen/massage`,
      name: "Massage Basel — Klassische & therapeutische Massage",
      description: "Klassische Massage in Basel ab CHF 77. Ohne Rezept, 30–60 Minuten, individuell abgestimmt.",
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
          <span className="text-brand-text font-semibold">Massage</span>
        </nav>

        <div className="mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#fdf0e8] text-[#c4622d] font-body text-[11px] font-bold tracking-wide mb-4">
            Privatleistung — kein Rezept erforderlich
          </span>
          <h1 className="font-display text-[clamp(28px,4vw,44px)] font-normal text-brand-text leading-tight mb-5">
            Massage Basel
          </h1>
          <p className="font-body text-[16px] text-brand-muted leading-relaxed max-w-[640px] mb-8">
            Therapeutische Massagen in der Praxis Gelenkwerk — individuell abgestimmt auf Ihre Bedürfnisse.
            Zur Entspannung, Schmerzlinderung und Regeneration. Kein Rezept nötig.
          </p>
          <Link href="/termin" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-teal text-white font-body text-[14px] font-semibold no-underline hover:bg-teal-dark transition-colors">
            Termin buchen <ChevronRight size={15} />
          </Link>
        </div>

        <div className="rounded-2xl overflow-hidden mb-14 h-[280px]">
          <img src="/massage.jpeg" alt="Massage Basel — therapeutische Massage in der Praxis Gelenkwerk" className="w-full h-full object-cover" width={860} height={280} />
        </div>

        {/* Preise */}
        <section className="mb-14">
          <h2 className="font-display text-[clamp(22px,3vw,30px)] text-brand-text mb-6">Preise & Pakete</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {PACKAGES.map((pkg) => (
              <div key={pkg.duration} className={`relative p-6 rounded-2xl border ${pkg.popular ? "border-teal bg-teal/5" : "border-teal-pale bg-white"}`}>
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-teal text-white font-body text-[10px] font-bold tracking-wide whitespace-nowrap">
                    Beliebt
                  </span>
                )}
                <div className="font-display text-[32px] text-brand-text mb-0.5">{pkg.duration}<span className="text-[16px] text-brand-muted font-body ml-1">Min.</span></div>
                <div className="font-body text-[22px] font-bold text-teal mb-3">CHF {pkg.price}</div>
                <p className="font-body text-[13px] text-brand-muted leading-relaxed">{pkg.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Wirkung */}
        <section className="mb-14">
          <h2 className="font-display text-[clamp(20px,2.5vw,28px)] text-brand-text mb-6">Wirkung der Massage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EFFECTS.map((e, i) => (
              <div key={i} className="p-5 rounded-xl bg-white border border-teal-pale">
                <div className="font-display text-[15px] font-semibold text-brand-text mb-1">{e.title}</div>
                <div className="font-body text-[13px] text-brand-muted">{e.text}</div>
              </div>
            ))}
          </div>
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
          <div className="font-display text-[22px] text-brand-text mb-2">Massage buchen</div>
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
            <Link href="/leistungen/lymphdrainage" className="px-4 py-2 rounded-full border border-teal-pale bg-white text-teal font-body text-[13px] font-semibold no-underline hover:border-teal transition-colors">Lymphdrainage →</Link>
            <Link href="/blog/massage-mehr-als-entspannung-basel" className="px-4 py-2 rounded-full border border-teal-pale bg-white text-teal font-body text-[13px] font-semibold no-underline hover:border-teal transition-colors">Ratgeber Massage →</Link>
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
