"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const CONSENT_KEY = "gelenkwerk_cookie_consent";

export default function AnalyticsLoader() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    function check() {
      setConsented(localStorage.getItem(CONSENT_KEY) === "accepted");
    }
    check();
    window.addEventListener("storage", check);
    return () => window.removeEventListener("storage", check);
  }, []);

  if (!consented) return null;

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "wu4e1i9bsi");`}
    </Script>
  );
}
