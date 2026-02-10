import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import CookieBanner from "../../components/CookieBanner";
import Link from "next/link";

export const metadata = {
  title: "Dakisolatie: Kosten, Besparing en Terugverdientijd | De Isolatie Check",
  description: "Wat kost dakisolatie in 2026? Ontdek de gemiddelde kosten per m², hoeveel je bespaart op je energierekening en wanneer je investering is terugverdiend.",
  alternates: { canonical: "https://deisolatiecheck.nl/blog/dakisolatie-kosten-besparing" },
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
          <span style={s.tag}>Isolatie</span>
          <h1 style={s.h1}>Dakisolatie: Kosten, Besparing en Terugverdientijd</h1>
          <p style={s.meta}>8 februari 2026 · 6 min lezen</p>
        </section>
        <div style={s.content}>
          <p>Het dak is de grootste bron van warmteverlies in de meeste woningen. Tot 30% van de warmte ontsnapt via een ongeïsoleerd dak. Dakisolatie is daarom een van de meest effectieve maatregelen om je energiekosten te verlagen en je wooncomfort te verbeteren.</p>

          <h2 style={s.h2}>Wat kost dakisolatie?</h2>
          <p>De kosten voor dakisolatie liggen gemiddeld tussen €40 en €60 per m², afhankelijk van het type dak (schuin of plat), de isolatiemethode en het gebruikte materiaal. Voor een gemiddelde tussenwoning met 60 m² dakoppervlak kom je uit op €2.400 tot €3.600.</p>
          <p>Bij een vrijstaande woning met een groter dakoppervlak van 80-120 m² liggen de totale kosten tussen €3.200 en €7.200. Het type isolatiemateriaal (glaswol, PIR-platen, of gespoten PUR) beïnvloedt de prijs.</p>

          <h2 style={s.h2}>Hoeveel bespaar je?</h2>
          <p>Na het isoleren van je dak kun je rekenen op een besparing van €300 tot €500 per jaar op je energierekening. Bij de huidige gasprijzen is de besparing aan de bovenkant van die range. Naast financiële besparing merk je direct een verschil in wooncomfort: geen koude tocht meer vanuit het plafond en een stabielere temperatuur in huis.</p>

          <h2 style={s.h2}>ISDE-subsidie voor dakisolatie</h2>
          <p>In 2026 ontvang je €16,25 per m² ISDE-subsidie voor dakisolatie. Combineer je het met een tweede maatregel (bijvoorbeeld vloerisolatie), dan verdubbelt dit naar €32,50 per m². Voor 60 m² dak betekent dat €975 subsidie bij één maatregel, of €1.950 bij combinatie.</p>

          <div style={s.tip}>
            <strong style={{ color: "#15803d" }}>💡 Tip:</strong> Combineer dakisolatie met vloer- of spouwmuurisolatie. Je krijgt dan dubbele subsidie op alle maatregelen, en de aannemer kan het werk vaak in dezelfde periode uitvoeren.
          </div>

          <h2 style={s.h2}>Terugverdientijd</h2>
          <p>Met een gemiddelde investering van €3.000, minus €975 subsidie (of €1.950 bij combinatie), en een jaarlijkse besparing van €350-€500, is je investering in 4-6 jaar terugverdiend. Na die periode is elke besparing pure winst. Dakisolatie gaat bovendien minstens 25-40 jaar mee.</p>

          <h2 style={s.h2}>Welke methode past bij jouw dak?</h2>
          <p>Bij een schuin dak wordt de isolatie meestal tussen of op de spanten aangebracht. Dit kan zowel aan de binnenkant als aan de buitenkant van het dak. Bij een plat dak wordt de isolatie bovenop het bestaande dak geplaatst, waarna er een nieuwe dakbedekking overheen komt.</p>
          <p>De keuze hangt af van de staat van je dak, je budget en of je van plan bent om de zolder als leefruimte te gebruiken. Onze specialist kan dit tijdens een gratis woningscan beoordelen.</p>

          <div style={s.cta}>
            <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", marginBottom: "10px" }}>Benieuwd wat dakisolatie jou oplevert?</h3>
            <p style={{ fontSize: "15px", color: "#64748b", marginBottom: "24px", lineHeight: 1.7 }}>Bereken direct je subsidie en besparing met onze gratis calculator.</p>
            <Link href="/#calculator" style={{ display: "inline-block", background: "#16a34a", color: "#fff", borderRadius: "50px", padding: "14px 36px", fontSize: "15px", fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 16px rgba(22,163,74,0.2)" }}>Bereken mijn subsidie →</Link>
          </div>
        </div>
      </div>
      <Footer />
      <CookieBanner />
    </>
  );
}
