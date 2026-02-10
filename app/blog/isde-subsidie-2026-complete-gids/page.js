import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import CookieBanner from "../../components/CookieBanner";
import Link from "next/link";

export const metadata = {
  title: "ISDE Subsidie 2026: De Complete Gids | De Isolatie Check",
  description:
    "Alles over de ISDE subsidie 2026: bedragen per isolatietype, aanvraagproces, combinatiebonus en tips om maximaal subsidie te krijgen voor je woningisolatie.",
  alternates: {
    canonical: "https://deisolatiecheck.nl/blog/isde-subsidie-2026-complete-gids",
  },
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
    table: { width: "100%", borderCollapse: "collapse", margin: "20px 0", fontSize: "14px" },
    th: { background: "#f0fdf4", padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#14532d", border: "1px solid #e5e7eb" },
    td: { padding: "12px 16px", border: "1px solid #e5e7eb" },
    tip: { background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "20px", margin: "24px 0", fontSize: "14px" },
    cta: { background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "20px", padding: "40px", textAlign: "center", marginTop: "48px" },
  };

  return (
    <>
      <Navigation />
      <div style={s.wrap}>
        <section style={s.hero}>
          <span style={s.tag}>Subsidie</span>
          <h1 style={s.h1}>ISDE Subsidie 2026: De Complete Gids</h1>
          <p style={s.meta}>10 februari 2026 · 8 min lezen</p>
        </section>

        <div style={s.content}>
          <p>
            De ISDE-subsidie (Investeringssubsidie Duurzame Energie en Energiebesparing) is in 2026 een van de aantrekkelijkste regelingen voor woningeigenaren die willen besparen op hun energiekosten. In deze gids leggen we alles uit: van de subsidiebedragen tot het aanvraagproces.
          </p>

          <h2 style={s.h2}>Wat is de ISDE-subsidie?</h2>
          <p>
            De ISDE is een subsidie van de Rijksoverheid, uitgevoerd door RVO (Rijksdienst voor Ondernemend Nederland). Als woningeigenaar krijg je een vast bedrag per vierkante meter terug wanneer je je woning laat isoleren door een gecertificeerd bedrijf. De subsidie geldt voor bestaande woningen — nieuwbouw komt niet in aanmerking.
          </p>

          <h2 style={s.h2}>Subsidiebedragen 2026</h2>
          <p>
            De bedragen verschillen per type isolatie. Belangrijk: combineer je twee of meer maatregelen, dan worden alle bedragen verdubbeld (de zogenaamde combinatiebonus).
          </p>

          <table style={s.table}>
            <thead>
              <tr>
                <th style={s.th}>Isolatietype</th>
                <th style={s.th}>Per m² (enkel)</th>
                <th style={s.th}>Per m² (combi)</th>
                <th style={s.th}>Min. m²</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dakisolatie", "€16,25", "€32,50", "20 m²"],
                ["Vloerisolatie", "€5,50", "€11,00", "20 m²"],
                ["Spouwmuurisolatie", "€5,25", "€10,50", "10 m²"],
                ["Gevelisolatie", "€20,25", "€40,50", "10 m²"],
                ["Bodemisolatie", "€3,00", "€6,00", "20 m²"],
                ["HR++ Glas", "€25,00", "€50,00", "3 m²"],
              ].map(([type, single, combi, min]) => (
                <tr key={type}>
                  <td style={{ ...s.td, fontWeight: 600 }}>{type}</td>
                  <td style={s.td}>{single}</td>
                  <td style={{ ...s.td, color: "#16a34a", fontWeight: 600 }}>{combi}</td>
                  <td style={s.td}>{min}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={s.tip}>
            <strong style={{ color: "#15803d" }}>💡 Tip:</strong> Door minimaal twee maatregelen te combineren, verdubbel je je subsidie. Dit is veruit de slimste strategie om het meeste uit de regeling te halen.
          </div>

          <h2 style={s.h2}>Voorwaarden</h2>
          <p>Om in aanmerking te komen voor ISDE-subsidie moet je aan een aantal voorwaarden voldoen:</p>
          <p>
            Je moet eigenaar zijn van een bestaande woning. Het isolatiewerk moet uitgevoerd worden door een erkend en gecertificeerd isolatiebedrijf. Er gelden minimale oppervlakte-eisen per isolatietype. Daarnaast moet het isolatiemateriaal voldoen aan de minimale Rd-waarde die de overheid heeft vastgesteld.
          </p>

          <h2 style={s.h2}>Aanvraagproces stap voor stap</h2>

          <h3 style={s.h3}>1. Laat een woningscan uitvoeren</h3>
          <p>
            Een specialist bekijkt je woning en adviseert welke isolatiemaatregelen het meest opleveren. Dit is bij ons altijd gratis en vrijblijvend.
          </p>

          <h3 style={s.h3}>2. Kies je maatregelen</h3>
          <p>
            Op basis van het advies kies je welke isolatie je wilt laten uitvoeren. Wij berekenen de exacte kosten en subsidiebedragen.
          </p>

          <h3 style={s.h3}>3. Uitvoering</h3>
          <p>
            Het isolatiewerk wordt uitgevoerd door ons gecertificeerde team. De meeste werkzaamheden zijn binnen één dag klaar.
          </p>

          <h3 style={s.h3}>4. Subsidieaanvraag</h3>
          <p>
            Na de uitvoering dienen wij de subsidieaanvraag in bij RVO. Je hebt hier zelf geen omkijken naar. Gemiddeld ontvang je je subsidie binnen 8-13 weken op je rekening.
          </p>

          <h2 style={s.h2}>Veelgemaakte fouten</h2>
          <p>
            Veel woningeigenaren laten geld liggen door veelvoorkomende fouten. Ze vragen subsidie aan voor maar één maatregel terwijl ze ook hadden kunnen combineren voor dubbele bedragen. Of ze kiezen een niet-gecertificeerd bedrijf waardoor de aanvraag wordt afgewezen. Daarnaast vergeten sommigen de aanvullende gemeentelijke subsidies mee te nemen. Wij zorgen ervoor dat je al deze valkuilen vermijdt.
          </p>

          {/* CTA */}
          <div style={s.cta}>
            <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", marginBottom: "10px" }}>
              Bereken jouw ISDE-subsidie
            </h3>
            <p style={{ fontSize: "15px", color: "#64748b", marginBottom: "24px", lineHeight: 1.7 }}>
              Ontdek in 30 seconden hoeveel subsidie jij krijgt met onze gratis calculator.
            </p>
            <Link
              href="/#calculator"
              style={{
                display: "inline-block",
                background: "#16a34a", color: "#fff", borderRadius: "50px",
                padding: "14px 36px", fontSize: "15px", fontWeight: 700,
                textDecoration: "none", boxShadow: "0 4px 16px rgba(22,163,74,0.2)",
              }}
            >
              Bereken mijn subsidie →
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <CookieBanner />
    </>
  );
}
