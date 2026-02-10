"use client";

import { useEffect } from "react";

// ============================================
// 📊 INSTRUCTIE: Vervang dit door jouw Google Analytics ID
// 1. Ga naar analytics.google.com
// 2. Maak een nieuw property aan voor deisolatiecheck.nl
// 3. Kopieer je Measurement ID (begint met G-)
// 4. Plak het hieronder
// ============================================
const GA_ID = "G-3J4HX42QRH"; // ← Vervang door jouw ID

export default function GoogleAnalytics() {
  useEffect(() => {
    if (GA_ID === "G-XXXXXXXXXX") return; // Nog niet geconfigureerd

    // Check of cookies geaccepteerd zijn
    const consent = localStorage.getItem("cookie-consent");
    if (consent !== "accepted") return;

    // Load Google Analytics
    const script1 = document.createElement("script");
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `;
    document.head.appendChild(script2);
  }, []);

  return null;
}
