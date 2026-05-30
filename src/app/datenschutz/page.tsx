import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz — Gelenkwerk Physiotherapie",
};

function Section({ number, title, children }: { number?: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="font-display text-[20px] text-brand-text mb-3">
        {number ? `${number}. ${title}` : title}
      </h2>
      <div className="text-brand-muted leading-7 text-[15px]">{children}</div>
    </section>
  );
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-cream font-body">
      <div className="max-w-[760px] mx-auto px-6 py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-teal font-body text-sm font-semibold no-underline hover:text-teal-dark transition-colors mb-10"
        >
          ← Zurück zur Startseite
        </Link>

        {/* ── Datenschutzerklärung ── */}
        <h1 className="font-display text-[36px] font-normal text-brand-text mb-2 leading-tight">
          Datenschutzerklärung
        </h1>
        <div className="w-12 h-[3px] bg-teal rounded-sm mb-10" />

        <Section number="1" title="Einleitung">
          <p>
            Wir freuen uns über Ihr Interesse an unserer Webseite. Der Schutz Ihrer personenbezogenen
            Daten ist uns sehr wichtig. In dieser Datenschutzerklärung informieren wir Sie darüber,
            welche Daten wir erheben, wie wir sie verwenden und welche Rechte Sie in Bezug auf Ihre
            Daten haben.
          </p>
        </Section>

        <Section number="2" title="Verantwortliche Stelle">
          <p>
            Verantwortliche Stelle im Sinne der Datenschutzgesetze ist:<br /><br />
            Kyriaki Chatzidimitriadou<br />
            Elisabethenstrasse 41<br />
            CH-4051 Basel
          </p>
        </Section>

        <Section number="3" title="Erhebung und Verarbeitung personenbezogener Daten">
          <p className="mb-3">
            Wir erheben und verarbeiten personenbezogene Daten, wenn Sie unsere Webseite besuchen,
            sich für unsere Dienstleistungen anmelden oder mit uns in Kontakt treten. Zu den
            personenbezogenen Daten gehören:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Name</li>
            <li>Adresse (für Hausbesuche)</li>
            <li>E-Mail-Adresse</li>
            <li>Telefonnummer</li>
            <li>Gesundheitsdaten (sofern Sie uns diese im Rahmen der Behandlung mitteilen)</li>
            <li>IP-Adresse</li>
            <li>Weitere Daten, die Sie uns freiwillig zur Verfügung stellen</li>
          </ul>
        </Section>

        <Section number="4" title="Zweck der Datenverarbeitung">
          <p className="mb-3">Wir verwenden Ihre Daten zu folgenden Zwecken:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Um Ihnen unsere physiotherapeutischen Dienstleistungen anzubieten</li>
            <li>Um Hausbesuche zu planen und durchzuführen</li>
            <li>Um mit Ihnen zu kommunizieren</li>
            <li>Um unsere Webseite zu verbessern</li>
            <li>Um rechtlichen Verpflichtungen nachzukommen</li>
          </ul>
        </Section>

        <Section number="5" title="Rechtsgrundlage der Verarbeitung">
          <p className="mb-3">
            Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage der folgenden
            Rechtsgrundlagen:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</li>
            <li>Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)</li>
            <li>Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO)</li>
            <li>Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)</li>
          </ul>
        </Section>

        <Section number="6" title="Weitergabe von Daten">
          <p>
            Wir geben Ihre personenbezogenen Daten nicht an Dritte weiter, es sei denn, dies ist zur
            Erfüllung unserer Dienstleistungen erforderlich (z. B. an andere Gesundheitsdienstleister)
            oder wir sind gesetzlich dazu verpflichtet.
          </p>
        </Section>

        <Section number="7" title="Cookies">
          <p>
            Unsere Webseite verwendet Cookies, um die Benutzererfahrung zu verbessern. Sie können die
            Verwendung von Cookies in den Einstellungen Ihres Browsers deaktivieren. Beachten Sie
            jedoch, dass dies die Funktionalität unserer Webseite beeinträchtigen kann.
          </p>
        </Section>

        <Section number="8" title="Ihre Rechte">
          <p className="mb-3">Sie haben das Recht:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten</li>
            <li>Die Berichtigung unrichtiger Daten zu verlangen</li>
            <li>Die Löschung Ihrer Daten zu verlangen</li>
            <li>Die Einschränkung der Verarbeitung Ihrer Daten zu verlangen</li>
            <li>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen</li>
            <li>Ihre Einwilligung jederzeit zu widerrufen</li>
          </ul>
        </Section>

        <Section number="9" title="Änderungen dieser Datenschutzerklärung">
          <p>
            Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern. Die
            aktuelle Version wird auf unserer Webseite veröffentlicht.
          </p>
        </Section>

        <Section number="10" title="Kontakt">
          <p>
            Wenn Sie Fragen zu dieser Datenschutzerklärung oder zur Verarbeitung Ihrer
            personenbezogenen Daten haben, kontaktieren Sie uns bitte unter:{" "}
            <a href="mailto:info@gelenkwerk.ch" className="text-teal hover:underline">
              info@gelenkwerk.ch
            </a>
          </p>
        </Section>

        {/* ── AGB ── */}
        <div className="mt-14 pt-10 border-t border-teal-pale">
          <h1 className="font-display text-[36px] font-normal text-brand-text mb-2 leading-tight">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>
          <div className="w-12 h-[3px] bg-teal rounded-sm mb-10" />
        </div>

        <Section number="1" title="Geltungsbereich">
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Dienstleistungen, die von Kyriaki
            Chatzidimitriadou Gelenkwerk Physiotherapie (im Folgenden „Praxis" genannt) erbracht
            werden. Mit der Inanspruchnahme unserer Dienstleistungen erkennen Sie diese AGB an.
          </p>
        </Section>

        <Section number="2" title="Leistungen">
          <p>
            Gelenkwerk bietet physiotherapeutische Behandlungen an, die so als Hausbesuche
            durchgeführt werden. Die genauen Leistungen werden im Rahmen der individuellen Behandlung
            vereinbart.
          </p>
        </Section>

        <Section number="3" title="Terminvereinbarung">
          <p>
            Termine können telefonisch, per E-Mail oder über unsere Webseite vereinbart werden. Bei
            einer Terminvereinbarung sind Sie verpflichtet, uns über relevante gesundheitliche
            Informationen zu informieren.
          </p>
        </Section>

        <Section number="4" title="Stornierung von Terminen">
          <p>
            Sollten Sie einen Termin nicht wahrnehmen können, bitten wir um rechtzeitige Stornierung
            mindestens 24 Stunden im Voraus per E-Mail oder telefonisch unter{" "}
            <a href="tel:+41764621172" className="text-teal hover:underline">076 462 11 72</a>.
            Bei kurzfristigen Absagen behalten wir uns vor, eine Ausfallgebühr zu erheben
            (30 Min. CHF 50.00 / 45 Min. CHF 75.00 / 60 Min. CHF 100.00). Der Kunde / Patient
            hat den Ausfall eines von ihm versäumten Behandlungstermins zum vereinbarten
            Teilhonorar an den Leistungserbringer Gelenkwerk Physiotherapie zu entrichten.
            Hierfür erhält er eine gesonderte Rechnung.
          </p>
        </Section>

        <Section number="5" title="Preise und Zahlungsbedingungen">
          <p>
            Die Preise für unsere Dienstleistungen richten sich nach der aktuellen Preisliste, die
            auf unserer Webseite einsehbar ist. Die Zahlung erfolgt in der Regel nach der Behandlung
            in bar oder per Überweisung. Bei Hausbesuchen kommen zusätzliche Fahrtkosten hinzu, die
            im Voraus mitgeteilt werden. Bei Mahnung fallen folgende Gebühren an: 1. Mahnung – ohne
            Gebühr, 2. Mahnung – CHF 30.00, 3. Mahnung – CHF 50.00.
          </p>
        </Section>

        <Section number="6" title="Datenschutz">
          <p>
            Wir nehmen den Schutz Ihrer personenbezogenen Daten ernst. Ihre Daten werden gemäß
            unserer Datenschutzerklärung verarbeitet, die auf unserer Webseite einsehbar ist.
          </p>
        </Section>

        <Section number="7" title="Haftung">
          <p>
            Gelenkwerk haftet nicht für Schäden, die durch vorsätzliches oder grob fahrlässiges
            Verhalten verursacht wurden. Für leichte Fahrlässigkeit haften wir nur bei Verletzung
            wesentlicher Vertragspflichten. Eine Haftung für Folgeschäden ist ausgeschlossen.
          </p>
        </Section>

        <Section number="8" title="Schlussbestimmungen">
          <p>
            Es gilt das Recht der Schweiz. Sollten einzelne Bestimmungen dieser AGB unwirksam sein,
            bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
          </p>
        </Section>

        <Section number="9" title="Kontakt">
          <p>
            Für Fragen oder Anliegen können Sie uns jederzeit unter folgender Adresse kontaktieren:{" "}
            <a href="mailto:info@gelenkwerk.ch" className="text-teal hover:underline">
              info@gelenkwerk.ch
            </a>
          </p>
        </Section>

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
