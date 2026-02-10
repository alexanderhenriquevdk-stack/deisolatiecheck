import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import CookieBanner from "../../components/CookieBanner";
import Link from "next/link";

export const metadata = {
  title: "Vloerisolatie Kosten en Besparing 2026 | De Isolatie Check",
  description: "Wat kost vloerisolatie in 2026? Ontdek de gemiddelde kosten per m², ISDE subsidie, hoeveel je bespaart op je gasrekening en de terugverdientijd.",
  alternates: { canonical: "https://deisolatiecheck.nl/blog/vloerisolatie-kosten-besparing" },
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
          <h1 style={s.h1}>Vloerisolatie: Kosten en Besparing in 2026</h1>
          <p style={s.meta}>11 februari 2026 · 7 min lezen</p>
        </section>
        <div style={s.content}>
          <p>Een koude vloer is niet alleen oncomfortabel — het kost je ook honderden euro&apos;s per jaar aan stookkosten. Vloerisolatie is een van de meest betaalbare isolatiemaatregelen met een snelle terugverdientijd. In dit artikel lees je precies wat het kost, wat het oplevert en welke subsidie je kunt krijgen.</p>

          <h2 style={s.h2}>Wat kost vloerisolatie?</h2>
          <p>De kosten voor vloerisolatie hangen af van de methode en de situatie van je woning. De twee meest voorkomende methoden zijn isolatie via de kruipruimte en isolatie vanaf de bovenzijde.</p>

          <table style={s.table}>
            <thead>
              <tr>
                <th style={s.th}>Methode</th>
                <th style={s.th}>Kosten per m²</th>
                <th style={s.th}>Geschikt voor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...s.td, fontWeight: 600 }}>Kruipruimte isolatie</td>
                <td style={s.td}>€25 - €35</td>
                <td style={s.td}>Woningen met bereikbare kruipruimte (min. 35 cm)</td>
              </tr>
              <tr>
                <td style={{ ...s.td, fontWeight: 600 }}>Bovenzijde isolatie</td>
                <td style={s.td}>€40 - €60</td>
                <td style={s.td}>Woningen zonder kruipruimte of bij renovatie</td>
              </tr>
              <tr>
                <td style={{ ...s.td, fontWeight: 600 }}>PUR schuim spuiten</td>
                <td style={s.td}>€20 - €30</td>
                <td style={s.td}>Snelle methode, kruipruimte vereist</td>
              </tr>
            </tbody>
          </table>

          <p>Voor een gemiddelde tussenwoning met 50 m² vloeroppervlak kom je uit op €1.250 tot €1.750 bij kruipruimte-isolatie. Bij een vrijstaande woning met 80-100 m² liggen de kosten tussen €2.000 en €3.500.</p>

          <h2 style={s.h2}>Hoeveel bespaar je op je gasrekening?</h2>
          <p>Via een ongeïsoleerde vloer verlies je ongeveer 10-15% van je warmte. Na isolatie kun je rekenen op een besparing van €200 tot €350 per jaar op je gasrekening, afhankelijk van je woningtype en stookgedrag. Met de huidige gasprijzen valt de besparing vaak hoger uit.</p>

          <p>Naast financiële besparing merk je direct verschil in comfort. Geen koude voeten meer in de winter, en je hoeft de verwarming minder hoog te zetten om dezelfde temperatuur te bereiken.</p>

          <h2 style={s.h2}>ISDE subsidie voor vloerisolatie</h2>
          <p>In 2026 ontvang je €5,50 per m² ISDE-subsidie voor vloerisolatie. Combineer je het met een andere maatregel, zoals dakisolatie of spouwmuurisolatie? Dan verdubbelt dit naar €11,00 per m² dankzij de combinatiebonus.</p>

          <div style={s.tip}>
            <strong style={{ color: "#15803d" }}>💡 Rekenvoorbeeld:</strong> Je laat 50 m² vloerisolatie uitvoeren voor €1.500. Subsidie (enkel): 50 × €5,50 = €275. Subsidie bij combinatie: 50 × €11,00 = €550. Je netto investering daalt naar €950 — terugverdiend in 3-4 jaar.
          </div>

          <h2 style={s.h2}>Terugverdientijd</h2>
          <p>Vloerisolatie heeft een van de kortste terugverdientijden van alle isolatiemaatregelen. Bij een investering van €1.500, minus €275-€550 subsidie, en een jaarlijkse besparing van €250, is je investering in 3-5 jaar terugverdiend. De isolatie gaat vervolgens 25-30 jaar mee, dus je hebt daarna nog tientallen jaren pure besparing.</p>

          <h2 style={s.h2}>Kruipruimte: wel of niet geschikt?</h2>
          <p>Niet elke kruipruimte is geschikt voor isolatie. De kruipruimte moet minimaal 35 centimeter hoog zijn om erin te kunnen werken. Daarnaast mag er geen staand water staan — bij vochtproblemen moet eerst de kruipruimte worden gedraineerd of geventileerd.</p>

          <p>Tijdens onze gratis woningscan controleren we altijd de kruipruimte en adviseren we welke methode het beste past bij jouw situatie. Soms is het plaatsen van een bodemafsluiter al voldoende om vochtproblemen op te lossen.</p>

          <h2 style={s.h2}>Vloerisolatie vs. bodemisolatie</h2>
          <p>Mensen verwarren vloerisolatie en bodemisolatie vaak. Bij vloerisolatie wordt het isolatiemateriaal tegen de onderkant van de vloer aangebracht. Bij bodemisolatie wordt de bodem van de kruipruimte geïsoleerd. Beide methoden hebben voor- en nadelen, maar vloerisolatie is over het algemeen effectiever en wordt vaker toegepast.</p>

          <h2 style={s.h2}>Veelgemaakte fouten bij vloerisolatie</h2>
          <p>De grootste fout is het negeren van vochtproblemen in de kruipruimte. Als je isoleert zonder het vochtprobleem op te lossen, kan het isolatiemateriaal beschadigen en verlies je het isolerend vermogen. Een tweede veelgemaakte fout is zelf isoleren met bouwmarktmateriaal — dit bespaart op korte termijn, maar de kwaliteit is vaak onvoldoende om voor subsidie in aanmerking te komen.</p>

          <div style={s.cta}>
            <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", marginBottom: "10px" }}>Wat levert vloerisolatie jou op?</h3>
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
