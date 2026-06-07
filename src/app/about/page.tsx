import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Award, Shield, Heart, MapPin } from "lucide-react";
import { SITE_CONFIG, CONTACT } from "@/config/site";
import { GelenkwerkLogo } from "@/components/ui";
import { buildPersonSchema, buildBreadcrumbSchema, buildWebPageSchema, buildReviewSchemas, THERAPIST_NAME } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Über uns — Kyriaki Chatzidimitriadou, Physiotherapeutin Basel | Gelenkwerk",
  description:
    "Kyriaki Chatzidimitriadou, dipl. Physiotherapeutin in Basel. Berufsausübungsbewilligung Basel-Stadt, Bobath-zertifiziert, manuelle Lymphdrainage-Spezialistin. Praxis Gelenkwerk, Elisabethenstrasse 41.",
  alternates: { canonical: `${SITE_CONFIG.url}/about` },
  openGraph: {
    title: "Über uns — Kyriaki Chatzidimitriadou | Gelenkwerk Basel",
    description:
      "Dipl. Physiotherapeutin mit Bobath-Zertifikat und Lymphdrainage-Spezialisierung. Persönliche, einfühlsame Betreuung in Basel.",
    url: `${SITE_CONFIG.url}/about`,
    type: "profile",
    images: [{ url: `${SITE_CONFIG.url}/office.jpeg`, width: 1200, height: 630, alt: "Praxis Gelenkwerk Basel" }],
  },
};

const CREDENTIALS = [
  {
    icon: Shield,
    title: "Berufsausübungsbewilligung Basel-Stadt",
    description: "Amtliche Bewilligung des Kantons Basel-Stadt für die selbstständige physiotherapeutische Tätigkeit.",
  },
  {
    icon: Award,
    title: "Bobath-Weiterbildung",
    description: "Zertifizierte Weiterbildung im Bobath-Konzept für die neurologische Rehabilitation.",
  },
  {
    icon: Award,
    title: "Manuelle Lymphdrainage Zertifikat",
    description: "Spezialisierte Ausbildung und anerkanntes Zertifikat für manuelle Lymphdrainage.",
  },
  {
    icon: Shield,
    title: "Physioswiss-Mitglied",
    description: "Mitglied des Schweizerischen Physiotherapieverbands — Qualitätssicherung und Berufsethos.",
  },
];

const SPECIALTIES = [
  "Physiotherapie bei Rückenschmerzen",
  "Manuelle Therapie",
  "Manuelle Lymphdrainage",
  "Klassische Massage",
  "Bobath-Therapie (Neurologie)",
  "Domizilbehandlungen Basel",
  "Postoperative Rehabilitation",
  "Sportverletzungen",
];

export default function AboutPage() {
  const personSchema = buildPersonSchema();
  const reviews = buildReviewSchemas();

  const schemas = [
    personSchema,
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      name: "Gelenkwerk Physiotherapie",
      url: SITE_CONFIG.url,
      employee: personSchema,
      review: reviews,
    },
    buildBreadcrumbSchema([
      { name: "Home", url: SITE_CONFIG.url },
      { name: "Über uns", url: `${SITE_CONFIG.url}/about` },
    ]),
    buildWebPageSchema({
      url: `${SITE_CONFIG.url}/about`,
      name: `Über ${THERAPIST_NAME} — Physiotherapeutin Basel`,
      description:
        "Kyriaki Chatzidimitriadou, diplomierte Physiotherapeutin in Basel. Qualifikationen, Spezialisierungen und Leistungsübersicht.",
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

      <main>
        {/* Breadcrumb */}
        <div className="max-w-[900px] mx-auto px-6 pt-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-body text-[12px] text-brand-muted mb-10">
            <Link href="/" className="hover:text-teal no-underline transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-brand-text font-semibold">Über uns</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-[900px] mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label text-teal mb-3">Ihre Therapeutin</div>
              <h1 className="font-display text-[clamp(28px,4vw,42px)] font-normal text-brand-text leading-tight mb-2">
                {THERAPIST_NAME}
              </h1>
              <p className="font-body text-teal font-semibold text-[15px] mb-6">
                Dipl. Physiotherapeutin · Basel
              </p>
              <div className="space-y-4 font-body text-[15px] text-brand-muted leading-relaxed">
                <p>
                  Mit langjähriger Erfahrung betreue ich Patientinnen und Patienten mit vielfältigen
                  Beschwerden — von akuten Schmerzen bis hin zu chronischen Bewegungseinschränkungen.
                </p>
                <p>
                  In meiner Praxis an der Elisabethenstrasse verbinde ich fachliche Kompetenz mit
                  persönlicher, einfühlsamer Betreuung. Jede Behandlung ist individuell auf Ihre
                  Situation abgestimmt — denn Ihr Körper und Ihre Beschwerden sind einzigartig.
                </p>
                <p>
                  Ich behandle auf Deutsch, Englisch und Griechisch.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 font-body text-[13px] text-brand-muted">
                <MapPin size={14} className="text-teal shrink-0" />
                <span>{CONTACT.address.street}, {CONTACT.address.zip} {CONTACT.address.city}</span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square bg-teal-pale">
              <img
                src="/office.jpeg"
                alt="Praxis Gelenkwerk Physiotherapie Basel — Behandlungsraum"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-[900px] mx-auto">
            <div className="section-label text-teal text-center mb-2">Qualifikationen & Nachweise</div>
            <h2 className="font-display text-[clamp(24px,3vw,34px)] text-brand-text text-center mb-10">
              Zertifikate & Mitgliedschaften
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CREDENTIALS.map((c, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl border border-teal-pale bg-cream">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                    <c.icon size={18} className="text-teal" />
                  </div>
                  <div>
                    <div className="font-display text-[15px] font-semibold text-brand-text mb-1">{c.title}</div>
                    <div className="font-body text-[13px] text-brand-muted leading-relaxed">{c.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="py-16 px-6">
          <div className="max-w-[900px] mx-auto">
            <div className="section-label text-teal text-center mb-2">Schwerpunkte</div>
            <h2 className="font-display text-[clamp(22px,3vw,32px)] text-brand-text text-center mb-10">
              Behandlungsschwerpunkte
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {SPECIALTIES.map((s, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-teal-pale">
                  <Heart size={12} className="text-teal shrink-0" />
                  <span className="font-body text-[13px] text-brand-text">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Versicherungen */}
        <section className="bg-teal/5 border-y border-teal/10 py-16 px-6">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="font-display text-[clamp(22px,3vw,32px)] text-brand-text mb-4">
              Krankenkassen-anerkannt
            </h2>
            <p className="font-body text-[15px] text-brand-muted max-w-[560px] mx-auto mb-8">
              Gelenkwerk ist bei allen Schweizer Krankenkassen anerkannt. Mit ärztlicher Verordnung werden
              Physiotherapie-Behandlungen über KVG, UVG, IV und MV abgerechnet.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["KVG", "UVG", "IV", "MV", "Physioswiss"].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full bg-white border border-teal/20 font-body text-[13px] text-teal font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6">
          <div className="max-w-[600px] mx-auto text-center">
            <h2 className="font-display text-[clamp(22px,3vw,32px)] text-brand-text mb-4">
              Termin vereinbaren
            </h2>
            <p className="font-body text-[15px] text-brand-muted mb-8">
              Ich freue mich auf Ihre Anfrage. Buchen Sie online oder kontaktieren Sie mich direkt.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${CONTACT.phone[1].replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-teal text-teal font-body text-[14px] font-semibold no-underline hover:bg-teal hover:text-white transition-colors duration-300"
              >
                {CONTACT.phone[1]}
              </a>
              <Link
                href="/termin"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-teal text-white font-body text-[14px] font-semibold no-underline hover:bg-teal-dark transition-colors duration-300"
              >
                Online Termin buchen
                <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-dark py-8 px-6 text-center">
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
