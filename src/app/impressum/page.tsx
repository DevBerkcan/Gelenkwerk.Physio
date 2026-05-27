import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum — Gelenkwerk Physiotherapie",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-cream font-body">
      <div className="max-w-[760px] mx-auto px-6 py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-teal font-body text-sm font-semibold no-underline hover:text-teal-dark transition-colors mb-10"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="font-display text-[36px] font-normal text-brand-text mb-2 leading-tight">
          Impressum
        </h1>
        <div className="w-12 h-[3px] bg-teal rounded-sm mb-10" />

        <section className="mb-8">
          <h2 className="font-display text-[20px] text-brand-text mb-3">Gelenkwerk Physiotherapie</h2>
          <p className="text-brand-muted leading-7 text-[15px]">
            Inhaberin: Kyriaki Chatzidimitriadou<br />
            Elisabethenstrasse 41<br />
            CH-4051 Basel
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-[20px] text-brand-text mb-3">Vertreten durch</h2>
          <p className="text-brand-muted leading-7 text-[15px]">
            Kyriaki Chatzidimitriadou (Geschäftsführerin)
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-[20px] text-brand-text mb-3">Verantwortlich für den Inhalt</h2>
          <p className="text-brand-muted leading-7 text-[15px]">
            Kyriaki Chatzidimitriadou<br />
            Elisabethenstrasse 41<br />
            CH-4051 Basel
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-[20px] text-brand-text mb-3">Kontakt</h2>
          <p className="text-brand-muted leading-7 text-[15px]">
            Telefon: <a href="tel:+41764621172" className="text-teal hover:underline">+41 76 462 11 72</a><br />
            E-Mail: <a href="mailto:info@gelenkwerk.ch" className="text-teal hover:underline">info@gelenkwerk.ch</a><br />
            Website: <a href="https://www.gelenkwerk.ch" className="text-teal hover:underline">www.gelenkwerk.ch</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-[20px] text-brand-text mb-3">Haftungsausschluss</h2>
          <p className="text-brand-muted leading-7 text-[15px]">
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Dennoch übernehmen wir
            keine Haftung für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte. Für den
            Inhalt von externen Links übernehmen wir keine Haftung. Für den Inhalt der verlinkten
            Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-teal-pale">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-teal font-body text-sm font-semibold no-underline hover:text-teal-dark transition-colors"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
