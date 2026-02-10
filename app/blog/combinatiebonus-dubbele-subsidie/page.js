import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import CookieBanner from "../../components/CookieBanner";
import Link from "next/link";

export const metadata = {
  title: "Combinatiebonus: Zo Krijg Je Dubbele Subsidie | De Isolatie Check",
  description: "Door twee of meer isolatiemaatregelen te combineren verdubbel je je ISDE subsidie. Ontdek de slimste combinaties en hoeveel je extra kunt krijgen.",
  alternates: { canonical: "https://deisolatiecheck.nl/blog/combinatiebonus-dubbele-subsidie" },
};

export default function Article() {
  const s = {
    wrap: { background: "#fff", minHeight: "100vh" },
    hero: { padding: "140px 24px 48px", textAlign: "center", background: "linear-gradient(180deg, #f0fdf4 0%, #fff 100%)" },
    tag: { background: "#f0fdf4", color: "#15803d", fontSize: "11px", fontWeight: 700, padding: "4px 12px", borderRadius: "20px", display: "inline-block", marginBottom: "16px" },
    h1: { fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 900, letterSpacing: "-1.5px", color: "#0f172a", maxWidth: "700px", margin: "0 auto 14px", lineHeight: 1.15 },
    meta: { fontSize: "14px", color: "#94a3b8" },
    content: { maxWidth: "680px", margin: "0 auto", padding: "32px 24px 80px", fontSize: "16px", color: "#334155", lineHeight: 1.85 },
    h2: { fontSize: "24px", fontWeight: 800, color: "#0f172a", marginTop: "40px", marginBottom: "16px" },
    tip: { background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "20px", margin: "24px 0", fontSize: "14px" },
    cta: { background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "20px", padding: "40px", textAlign: "center", marginTop: "48px" },
  };

  return (
    <>
      <Navigation />
      <div style={s.wrap}>
        <section style={s.hero}>
          <span style={s.tag}>Subsidie</span>
          <h1 style={s.h1}>Combinatiebonus: Zo Krijg Je Dubbele Subsidie</h1>
          <p style={s.meta}>5 februari 2026 · 5 min lezen</p>
        </section>
        <div style={s.content}>
          <p>Een van de meest onderbenutte voordelen van de ISDE-subsidie is de combinatiebonus. Wanneer je twee of meer isolatiemaatregelen tegelijk laat uitvoeren, verdubbelen alle subsidiebedragen. Dit kan duizenden euro&apos;s schelen.</p>

          <h2 style={s.h2}>Hoe werkt de combinatiebonus?</h2>
          <p>De regel is eenvoudig: voer je binnen dezelfde subsidieaanvraag twee of meer verschillende isolatiemaatregelen uit, dan krijg je voor alle maatregelen het dubbele subsidiebedrag. Het maakt niet uit welke combinatie je kiest — elke combinatie van twee of meer kwalificeert.</p>

          <h2 style={s.h2}>De slimste combinaties</h2>
          <p>De populairste en meest rendabele combinatie is dakisolatie samen met vloerisolatie. Je pakt dan de twee grootste bronnen van warmteverlies aan en krijgt voor beide het dubbele subsidiebedrag. Een andere slimme combinatie is spouwmuurisolatie met HR++ glas, vooral bij woningen uit de jaren 60-80 die vaak zowel ongeïsoleerde spouwmuren als enkel glas hebben.</p>

          <div style={s.tip}>
            <strong style={{ color: "#15803d" }}>💡 Rekenvoorbeeld:</strong> Stel je laat 60 m² dakisolatie en 50 m² vloerisolatie uitvoeren. Zonder combinatiebonus: (60 × €16,25) + (50 × €5,50) = €1.250. Met combinatiebonus: (60 × €32,50) + (50 × €11,00) = €2.500. Je krijgt dus €1.250 extra subsidie!
          </div>

          <h2 style={s.h2}>Hoeft het tegelijkertijd?</h2>
          <p>De maatregelen hoeven niet per se op dezelfde dag uitgevoerd te worden, maar ze moeten wel in dezelfde subsidieaanvraag vallen. In de praktijk plannen wij de werkzaamheden zo efficiënt mogelijk in, vaak binnen dezelfde week. Dit scheelt ook in de uitvoeringskosten.</p>

          <h2 style={s.h2}>Veelgemaakte fout</h2>
          <p>De grootste fout die woningeigenaren maken is het apart aanvragen van subsidie voor elke maatregel. Als je eerst dakisolatie laat doen en daar subsidie voor aanvraagt, en een half jaar later vloerisolatie, krijg je twee keer het enkele tarief. Had je ze gecombineerd, dan had je twee keer het dubbele tarief gekregen. Plan daarom vooraf goed welke maatregelen je wilt nemen.</p>

          <div style={s.cta}>
            <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", marginBottom: "10px" }}>Bereken je combinatiebonus</h3>
            <p style={{ fontSize: "15px", color: "#64748b", marginBottom: "24px", lineHeight: 1.7 }}>Selecteer meerdere maatregelen in onze calculator en zie direct hoeveel extra subsidie je krijgt.</p>
            <Link href="/#calculator" style={{ display: "inline-block", background: "#16a34a", color: "#fff", borderRadius: "50px", padding: "14px 36px", fontSize: "15px", fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 16px rgba(22,163,74,0.2)" }}>Bereken mijn subsidie →</Link>
          </div>
        </div>
      </div>
      <Footer />
      <CookieBanner />
    </>
  );
}
