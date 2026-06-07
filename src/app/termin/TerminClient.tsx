"use client";

import { useEffect } from "react";
import { SITE_CONFIG } from "@/config/site";

export default function TerminClient() {
  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (!event.data) return;
      try {
        const data = JSON.parse(event.data);
        const iframe = document.getElementById("t-booking") as HTMLIFrameElement | null;
        if (data && iframe) {
          iframe.style.height = data.height + "px";
          window.scrollTo(0, 0);
        }
      } catch {
        // ignore non-JSON messages
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-16 bg-cream">
      <div className="max-w-3xl mx-auto px-4">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-body text-[12px] text-brand-muted">
          <a href="/" className="hover:text-teal transition-colors">Home</a>
          <span aria-hidden="true">/</span>
          <span className="text-brand-text font-semibold">Termin buchen</span>
        </nav>
        <h1 className="font-display text-3xl font-semibold text-brand-text mb-3 text-center">
          Termin buchen
        </h1>
        <p className="font-body text-[14px] text-brand-muted text-center mb-8">
          Praxis Gelenkwerk · Elisabethenstrasse 41 · 4051 Basel
        </p>
        <iframe
          id="t-booking"
          src={SITE_CONFIG.bookingUrl}
          style={{ width: "100%", minHeight: "700px", border: "none" }}
          allow="camera *"
          title="Online Terminbuchung Gelenkwerk Physiotherapie Basel"
          aria-label="Terminbuchungssystem"
        />
      </div>
    </main>
  );
}
