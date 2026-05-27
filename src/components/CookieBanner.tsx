"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "gelenkwerk_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    window.dispatchEvent(new Event("storage"));
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[3000] bg-white border-t border-teal-pale shadow-[0_-8px_32px_rgba(0,0,0,0.10)]">
      <div className="max-w-[1100px] mx-auto px-6 py-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-body text-[13px] leading-relaxed text-brand-muted max-w-[680px]">
          Diese Webseite verwendet Cookies, um Besuchern ein optimales Nutzererlebnis zu bieten.
          Bestimmte Inhalte von Drittanbietern werden nur angezeigt, wenn die entsprechende Option
          aktiviert ist. Die Datenverarbeitung kann dann auch in einem Drittland erfolgen. Weitere
          Informationen hierzu in der{" "}
          <Link href="/datenschutz" className="text-teal underline hover:text-teal-dark">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2.5 rounded-full border border-teal-pale bg-transparent font-body text-[13px] font-semibold text-brand-muted hover:border-teal hover:text-teal transition-colors cursor-pointer"
          >
            Nur notwendige
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 rounded-full bg-teal text-white border-none font-body text-[13px] font-semibold hover:bg-teal-dark transition-colors cursor-pointer"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
