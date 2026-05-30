import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 text-center font-body">
      <div className="font-display text-[120px] leading-none text-teal-pale mb-2">404</div>
      <h1 className="font-display text-[32px] text-brand-text mb-3">
        Seite nicht gefunden
      </h1>
      <p className="text-[15px] text-brand-muted mb-8 max-w-[420px] leading-relaxed">
        Die aufgerufene Seite existiert nicht. Vielleicht haben Sie sich vertippt oder die Seite wurde verschoben.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/"
          className="px-6 py-2.5 rounded-full bg-teal text-white text-[13px] font-semibold no-underline hover:bg-teal-dark transition-colors"
        >
          Zur Startseite
        </Link>
        <Link
          href="/#kontakt"
          className="px-6 py-2.5 rounded-full border border-teal-pale text-brand-muted text-[13px] font-semibold no-underline hover:border-teal hover:text-teal transition-colors"
        >
          Kontakt
        </Link>
      </div>
    </div>
  );
}
