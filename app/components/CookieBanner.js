"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay so it doesn't flash on page load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    // Reload to activate Google Analytics
    window.location.reload();
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        padding: "0 24px 24px",
        animation: "fadeUp 0.5s ease both",
      }}
    >
      <div
        style={{
          maxWidth: "560px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05)",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "15px",
              fontWeight: 700,
              color: "#0f172a",
              marginBottom: "6px",
            }}
          >
            🍪 Cookies
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "#64748b",
              lineHeight: 1.6,
            }}
          >
            Wij gebruiken cookies om onze website te verbeteren en je bezoek te
            analyseren. Door op &quot;Accepteren&quot; te klikken, ga je akkoord met ons
            gebruik van analytische cookies.{" "}
            <a
              href="/privacy"
              style={{
                color: "#16a34a",
                textDecoration: "underline",
              }}
            >
              Privacybeleid
            </a>
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={accept}
            style={{
              flex: 1,
              padding: "11px 20px",
              background: "#16a34a",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Accepteren
          </button>
          <button
            onClick={decline}
            style={{
              flex: 1,
              padding: "11px 20px",
              background: "#f1f5f9",
              color: "#475569",
              border: "none",
              borderRadius: "10px",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Alleen noodzakelijk
          </button>
        </div>
      </div>
    </div>
  );
}
