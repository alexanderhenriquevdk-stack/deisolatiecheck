import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import CookieBanner from "../../components/CookieBanner";
import Link from "next/link";

export const metadata = {
  title: "Hoeveel Bespaar Ik Met Isolatie op Mijn Gasrekening? | De Isolatie Check",
  description: "Ontdek hoeveel je kunt besparen op je gasrekening door je woning te isoleren. Per isolatietype uitgerekend met actuele gasprijzen van 2026.",
  alternates: { canonical: "https://deisolatiecheck.nl/blog/hoeveel-bespaar-ik-met-isolatie" },
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
    table: { width: "100%", borderCollapse: "collapse", margin: "20px 0", fontSize: "14px" },
    th: { background: "#f0fdf4", padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#14532d", border: "1px solid #e5e7eb" },
    td: { padding: "12px 16px", border: "1px solid #e5e7eb" },
    cta: { background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "20px", padding: "40px", textAlign: "center", marginTop: "48px" },
  };

  return (
    <>
      <Navigation />
      <div style={s.wrap}>
        <section style={s.hero}>
          <span style={s.tag}>Besparing</span>
          <h1 style={s.h1}>Hoeveel Bespaar Ik Met Isolatie op Mijn Gasrekening?</h1>
          <p style={s.meta}>13 februari 2026 · 6 min lezen</p>
        </section>
        <div style={s.content}>
          <p>De gasprijs is de afgelopen jaren flink gestegen en het ziet er niet naar uit dat daar snel verandering in komt. Steeds meer woningeigenaren vragen zich af: hoeveel kan ik eigenlijk besparen als ik mijn huis laat isoleren? Het antwoord hangt af van je woningtype, huidige isolatiegraad en welke maatregelen je neemt. In dit artikel rekenen we het voor je uit.</p>

          <h2 style={s.h2}>Waar verlies je de meeste warmte?</h2>
          <p>In een gemiddelde ongeïsoleerde woning gaat de warmte op de volgende manier verloren: via het dak verdwijnt ongeveer 25-30% van de warmte. De gevels zijn verantwoordelijk voor 20-25% warmteverlies. Via de vloer verlies je 10-15% en door ramen en deuren ontsnapt nog eens 15-20%. De rest gaat verloren via ventilatie en kieren.</p>

          <p>Dit betekent dat dakisolatie de meeste impact heeft, gevolgd door gevelisolatie en vloerisolatie. Maar de slimste aanpak is een combinatie van maatregelen.</p>

          <h2 style={s.h2}>Besparing per isolatiemaatregel</h2>
          <p>Op basis van een gemiddelde tussenwoning met een gasverbruik van 1.500 m³ per jaar en een gasprijs van circa €1,45 per m³, kun je de volgende besparingen verwachten:</p>

          <table style={s.table}>
            <thead>
              <tr>
                <th style={s.th}>Maatregel</th>
                <th style={s.th}>Gas besparing</th>
                <th style={s.th}>€ besparing/jaar</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dakisolatie", "250 - 400 m³", "€350 - €550"],
                ["Spouwmuurisolatie", "200 - 350 m³", "€300 - €450"],
                ["Vloerisolatie", "150 - 250 m³", "€200 - €350"],
                ["HR++ Glas", "150 - 200 m³", "€200 - €300"],
                ["Gevelisolatie", "250 - 400 m³", "€350 - €550"],
              ].map(([type, gas, eur]) => (
                <tr key={type}>
                  <td style={{ ...s.td, fontWeight: 600 }}>{type}</td>
                  <td style={s.td}>{gas}</td>
                  <td style={{ ...s.td, color: "#16a34a", fontWeight: 600 }}>{eur}</td>
                </tr>
              ))}
              <tr style={{ background: "#f0fdf4" }}>
                <td style={{ ...s.td, fontWeight: 800 }}>Totaal (alles gecombineerd)</td>
                <td style={{ ...s.td, fontWeight: 700 }}>700 - 1.100 m³</td>
                <td style={{ ...s.td, fontWeight: 800, color: "#16a34a" }}>€1.000 - €1.600</td>
              </tr>
            </tbody>
          </table>

          <div style={s.tip}>
            <strong style={{ color: "#15803d" }}>💡 Let op:</strong> De besparingen zijn niet exact optelbaar. Als je al dakisolatie hebt en dan vloerisolatie toevoegt, is de extra besparing iets lager dan wanneer je alleen vloerisolatie zou doen. Toch levert elke extra maatregel altijd besparing op.
          </div>

          <h2 style={s.h2}>Wat als de gasprijs stijgt?</h2>
          <p>Isolatie wordt steeds waardevoller naarmate de gasprijs stijgt. Bij een gasprijs van €1,45 per m³ bespaar je al flink. Maar stel dat de gasprijs stijgt naar €1,80 per m³ — dan stijgt je besparing bij dakisolatie van €350-€550 naar €450-€720 per jaar. Isolatie beschermt je dus ook tegen toekomstige prijsstijgingen. Het is in feite een investering die meer waard wordt naarmate de energieprijzen stijgen.</p>

          <h2 style={s.h2}>Verschil per woningtype</h2>
          <p>De besparing verschilt flink per woningtype. Een tussenwoning heeft minder buitengevels dan een hoekwoning of vrijstaande woning, dus het warmteverlies via de muren is kleiner. Aan de andere kant heeft een vrijstaande woning meer te winnen bij gevelisolatie.</p>

          <p>Als vuistregel: hoe meer buitenmuur en dakoppervlak je woning heeft, hoe groter de potentiële besparing. Een vrijstaande woning kan makkelijk €1.200-€1.600 per jaar besparen met een compleet isolatiepakket, terwijl een tussenwoning uitkomt op €600-€1.000.</p>

          <h2 style={s.h2}>De slimste aanpak</h2>
          <p>Begin met de maatregelen die de beste verhouding hebben tussen kosten en besparing. Spouwmuurisolatie is bijna altijd de eerste keuze: lage kosten, hoge besparing, korte terugverdientijd. Daarna volgen dakisolatie en vloerisolatie. Door minimaal twee maatregelen te combineren krijg je ook nog eens dubbele ISDE-subsidie op alle maatregelen.</p>

          <h2 style={s.h2}>Besparing berekenen voor jouw woning</h2>
          <p>Elke woning is anders, dus de exacte besparing hangt af van je specifieke situatie. Met onze gratis subsidiecalculator kun je in 30 seconden berekenen hoeveel subsidie je krijgt en wat je netto investering wordt. Voor een nauwkeurige berekening van je besparing bieden we een gratis woningscan aan, waarbij een specialist je woning bekijkt en een persoonlijk advies maakt.</p>

          <div style={s.cta}>
            <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", marginBottom: "10px" }}>Bereken jouw besparing</h3>
            <p style={{ fontSize: "15px", color: "#64748b", marginBottom: "24px", lineHeight: 1.7 }}>Ontdek in 30 seconden hoeveel subsidie je krijgt en hoeveel je bespaart.</p>
            <Link href="/#calculator" style={{ display: "inline-block", background: "#16a34a", color: "#fff", borderRadius: "50px", padding: "14px 36px", fontSize: "15px", fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 16px rgba(22,163,74,0.2)" }}>Bereken mijn subsidie →</Link>
          </div>
        </div>
      </div>
      <Footer />
      <CookieBanner />
    </>
  );
}
