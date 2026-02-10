import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e2e8f0",
        padding: "48px 24px 32px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "32px",
          marginBottom: "40px",
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #16a34a, #22c55e)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: 900,
                color: "#fff",
              }}
            >
              ✓
            </div>
            <span style={{ fontSize: "16px", fontWeight: 800, color: "#14532d" }}>
              De Isolatie<span style={{ color: "#16a34a" }}>Check</span>
            </span>
          </div>
          <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.7 }}>
            Ontdek hoeveel ISDE-subsidie jij krijgt en bespaar op je energiekosten.
          </p>
        </div>

        {/* Links */}
        <div>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "#1e293b", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
            Pagina&apos;s
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Link href="/" style={{ fontSize: "14px", color: "#64748b", textDecoration: "none" }}>Home</Link>
            <Link href="/faq" style={{ fontSize: "14px", color: "#64748b", textDecoration: "none" }}>Veelgestelde vragen</Link>
            <Link href="/blog" style={{ fontSize: "14px", color: "#64748b", textDecoration: "none" }}>Blog</Link>
          </div>
        </div>

        {/* Isolatietypes */}
        <div>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "#1e293b", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
            Isolatietypes
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {["Dakisolatie", "Vloerisolatie", "Spouwmuurisolatie", "Gevelisolatie", "HR++ Glas"].map((t) => (
              <span key={t} style={{ fontSize: "14px", color: "#64748b" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "#1e293b", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
            Contact
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", color: "#64748b" }}>
            <span>info@deisolatiecheck.nl</span>
            <Link href="/privacy" style={{ color: "#64748b", textDecoration: "none" }}>Privacybeleid</Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid #e2e8f0",
          paddingTop: "20px",
          textAlign: "center",
          color: "#94a3b8",
          fontSize: "12px",
        }}
      >
        <div style={{ marginBottom: "4px" }}>
          Erkend isolatiepartner · KvK-geregistreerd · ISDE-gecertificeerd
        </div>
        <div>© 2026 De Isolatie Check. Alle rechten voorbehouden.</div>
      </div>
    </footer>
  );
}
