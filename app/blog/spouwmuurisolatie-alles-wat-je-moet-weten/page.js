import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import CookieBanner from "../../components/CookieBanner";
import Link from "next/link";

export const metadata = {
  title: "Spouwmuurisolatie: Alles Wat Je Moet Weten | De Isolatie Check",
  description: "Alles over spouwmuurisolatie in 2026: kosten, besparing, subsidie, geschikte woningen en methodes. Ontdek of jouw woning geschikt is voor spouwmuurisolatie.",
  alternates: { canonical: "https://deisolatiecheck.nl/blog/spouwmuurisolatie-alles-wat-je-moet-weten" },
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
    h3: { fontSize: "18px", fontWeight: 700, color: "#1e293b", marginTop: "28px", marginBottom: "12px" },
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
          <span style={s.tag}>Isolatie</span>
          <h1 style={s.h1}>Spouwmuurisolatie: Alles Wat Je Moet Weten</h1>
          <p style={s.meta}>12 februari 2026 · 7 min lezen</p>
        </section>
        <div style={s.content}>
          <p>Spouwmuurisolatie is de isolatiemaatregel met de kortste terugverdientijd. In veel gevallen is je investering al binnen 3 jaar terugverdiend. Toch heeft nog niet elke woningeigenaar deze stap genomen. In dit artikel leggen we uit wat spouwmuurisolatie precies is, wat het kost, en hoe je weet of jouw woning geschikt is.</p>

          <h2 style={s.h2}>Wat is een spouwmuur?</h2>
          <p>Een spouwmuur bestaat uit twee gemetselde muren met een luchtruimte (de spouw) ertussen. Dit bouwprincipe werd vanaf de jaren 1920 toegepast in Nederland. De spouw was bedoeld om vocht tegen te houden, maar laat tegelijkertijd veel warmte ontsnappen. Bij spouwmuurisolatie wordt deze luchtruimte gevuld met isolatiemateriaal, waardoor het warmteverlies drastisch afneemt.</p>

          <h2 style={s.h2}>Is jouw woning geschikt?</h2>
          <p>De meeste woningen gebouwd tussen 1920 en 1985 hebben een ongeïsoleerde spouwmuur. Woningen van na 1985 zijn vaak al geïsoleerd bij de bouw. Er zijn een paar voorwaarden waaraan je spouw moet voldoen.</p>

          <p>De spouw moet minimaal 3 centimeter breed zijn — bij de meeste woningen is dit 5-7 centimeter. De spouw moet schoon en vrij zijn van puin of ander materiaal. Er mogen geen ernstige vochtproblemen zijn aan de buitengevel. Een specialist kan dit eenvoudig controleren met een endoscoop — een kleine camera die door een gaatje in de voeg wordt gestoken.</p>

          <h2 style={s.h2}>Wat kost spouwmuurisolatie?</h2>
          <table style={s.table}>
            <thead>
              <tr>
                <th style={s.th}>Woningtype</th>
                <th style={s.th}>Oppervlakte</th>
                <th style={s.th}>Kosten (indicatie)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...s.td, fontWeight: 600 }}>Tussenwoning</td>
                <td style={s.td}>50 - 70 m²</td>
                <td style={s.td}>€1.250 - €1.750</td>
              </tr>
              <tr>
                <td style={{ ...s.td, fontWeight: 600 }}>Hoekwoning</td>
                <td style={s.td}>70 - 100 m²</td>
                <td style={s.td}>€1.750 - €2.500</td>
              </tr>
              <tr>
                <td style={{ ...s.td, fontWeight: 600 }}>Twee-onder-een-kap</td>
                <td style={s.td}>80 - 120 m²</td>
                <td style={s.td}>€2.000 - €3.000</td>
              </tr>
              <tr>
                <td style={{ ...s.td, fontWeight: 600 }}>Vrijstaand</td>
                <td style={s.td}>100 - 160 m²</td>
                <td style={s.td}>€2.500 - €4.000</td>
              </tr>
            </tbody>
          </table>

          <p>De gemiddelde prijs per m² ligt tussen €20 en €30, afhankelijk van het isolatiemateriaal. Dit maakt spouwmuurisolatie een van de meest betaalbare isolatiemaatregelen.</p>

          <h2 style={s.h2}>Welke materialen worden gebruikt?</h2>

          <h3 style={s.h3}>Glaswolparels</h3>
          <p>Het meest gebruikte materiaal. Glaswolparels worden via kleine boorgaatjes in de voegen de spouw ingeblazen. Het materiaal vult de spouw volledig op en heeft goede isolerende eigenschappen. Kosten: circa €20-25 per m².</p>

          <h3 style={s.h3}>EPS parels (piepschuim)</h3>
          <p>Lichte parels die met lijm de spouw in worden geblazen. Iets goedkoper dan glaswol en ook geschikt voor smallere spouwen. Kosten: circa €18-22 per m².</p>

          <h3 style={s.h3}>PUR schuim</h3>
          <p>Vloeibaar schuim dat in de spouw wordt gespoten en daar uithardt. Zeer effectief isolerend maar iets duurder. Kosten: circa €25-30 per m². Let op: PUR is moeilijker te verwijderen als er later problemen optreden.</p>

          <h2 style={s.h2}>Besparing en terugverdientijd</h2>
          <p>Met spouwmuurisolatie bespaar je gemiddeld €300 tot €450 per jaar op je gasrekening. De exacte besparing hangt af van je woningtype, het oppervlak van de gevels en je stookgedrag. Bij een gemiddelde investering van €1.500-€2.000 is de terugverdientijd slechts 3-5 jaar — de kortste van alle isolatiemaatregelen.</p>

          <h2 style={s.h2}>ISDE subsidie</h2>
          <p>Voor spouwmuurisolatie ontvang je €5,25 per m² ISDE-subsidie. Bij combinatie met een andere maatregel verdubbelt dit naar €10,50 per m². Het minimum oppervlak is 10 m² — daar voldoet vrijwel elke woning aan.</p>

          <div style={s.tip}>
            <strong style={{ color: "#15803d" }}>💡 Tip:</strong> Spouwmuurisolatie is de perfecte &quot;combinatiepartner&quot;. Omdat de kosten relatief laag zijn, kun je het makkelijk combineren met dakisolatie of vloerisolatie om de dubbele subsidie op alle maatregelen te activeren.
          </div>

          <h2 style={s.h2}>Hoe lang duurt het?</h2>
          <p>Spouwmuurisolatie is verreweg de snelste isolatiemaatregel. Bij een tussenwoning is het werk in 2-3 uur klaar. Er worden kleine gaatjes in de voegen geboord (om de 50 cm), het materiaal wordt ingeblazen, en de gaatjes worden weer dichtgemaakt. Je ziet achteraf nauwelijks iets aan de gevel.</p>

          <h2 style={s.h2}>Mogelijke risico&apos;s</h2>
          <p>Bij een goed uitgevoerde inspectie en installatie zijn de risico&apos;s minimaal. Het belangrijkste risico is vochtdoorslag: als de buitenmuur scheurtjes of beschadigde voegen heeft, kan vocht via het isolatiemateriaal naar de binnenmuur trekken. Daarom is een voorafgaande inspectie essentieel. Een betrouwbaar bedrijf weigert de spouw te vullen als de gevel niet in goede staat is.</p>

          <div style={s.cta}>
            <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", marginBottom: "10px" }}>Benieuwd wat spouwmuurisolatie jou oplevert?</h3>
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
