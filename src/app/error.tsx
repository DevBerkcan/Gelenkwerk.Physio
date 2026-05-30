"use client";

import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 text-center">
      <div className="font-display text-[80px] text-teal-pale leading-none mb-4">!</div>
      <h1 className="font-display text-[32px] text-brand-text mb-3">
        Ein Fehler ist aufgetreten
      </h1>
      <p className="font-body text-[15px] text-brand-muted mb-8 max-w-[420px]">
        Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder kehren Sie zur Startseite zurück.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={reset}
          className="px-6 py-2.5 rounded-full bg-teal text-white font-body text-[13px] font-semibold border-none cursor-pointer hover:bg-teal-dark transition-colors"
        >
          Erneut versuchen
        </button>
        <Link
          href="/"
          className="px-6 py-2.5 rounded-full border border-teal-pale text-brand-muted font-body text-[13px] font-semibold no-underline hover:border-teal hover:text-teal transition-colors"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
