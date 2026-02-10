import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import CookieBanner from "../../components/CookieBanner";
import Link from "next/link";

export const metadata = {
  title: "Isolatie Subsidie Aanvragen: Stap voor Stap Uitleg | De Isolatie Check",
  description: "Hoe vraag je ISDE isolatie subsidie aan in 2026? Complete stap-voor-stap handleiding: voorwaarden, documenten, aanvraagproces en veelgemaakte fouten.",
  alternates: { canonical: "https://deisolatiecheck.nl/blog/isolatie-subsidie-aanvragen-stap-voor-stap" },
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
    warning: { background: "#fef3c7", border: "1px solid #fde68a", borderRadius: "12px", padding: "20px", margin: "24px 0", fontSize: "14px" },
    step: { background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "24px", margin: "20px 0" },
    stepNum: { display: "inline-flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "50%", background: "#16a34a", color: "#fff", fontSize: "14px", fontWeight: 800, marginRight: "12px" },
    cta: { background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "20px", padding: "40px", textAlign: "center", marginTop: "48px" },
  };

  return (
    <>
      <Navigation />
      <div style={s.wrap}>
        <section style={s.hero}>
          <span style={s.tag}>Subsidie</span>
          <h1 style={s.h1}>Isolatie Subsidie Aanvragen: Stap voor Stap Uitleg</h1>
          <p style={s.meta}>14 februari 2026 · 8 min lezen</p>
        </section>
        <div style={s.content}>
          <p>De ISDE-subsidie is een aantrekkelijke regeling, maar het aanvraagproces kan overweldigend lijken. Welke documenten heb je nodig? Wanneer moet je aanvragen? En wat zijn de valkuilen? In dit artikel leggen we het complete proces stap voor stap uit, zodat je precies weet wat je kunt verwachten.</p>

          <h2 style={s.h2}>Voordat je begint: de voorwaarden</h2>
          <p>Voordat je de subsidie kunt aanvragen, moet je aan een aantal voorwaarden voldoen. Je moet eigenaar zijn van een bestaande woning in Nederland. Nieuwbouw komt niet in aanmerking. Het isolatiewerk moet worden uitgevoerd door een gecertificeerd bedrijf dat voldoet aan de kwaliteitseisen van RVO. Het isolatiemateriaal moet een minimale warmteweerstand (Rd-waarde) hebben, en er gelden minimale oppervlakte-eisen per isolatietype.</p>

          <div style={s.warning}>
            <strong style={{ color: "#92400e" }}>⚠️ Belangrijk:</strong> Vraag de subsidie pas aan NADAT het werk is uitgevoerd. Dit is een veelgemaakte fout — de ISDE-subsidie werkt anders dan sommige andere subsidies. Je moet eerst laten isoleren, en dan pas de subsidie aanvragen.
          </div>

          <h2 style={s.h2}>Het aanvraagproces in 6 stappen</h2>

          <div style={s.step}>
            <p><span style={s.stepNum}>1</span><strong>Kies een gecertificeerd isolatiebedrijf</strong></p>
            <p style={{ marginTop: "10px", color: "#64748b", fontSize: "15px" }}>Dit is cruciaal. Alleen als het werk wordt uitgevoerd door een bedrijf dat voldoet aan de ISDE-eisen, kun je subsidie krijgen. Vraag altijd of het bedrijf ISDE-gecertificeerd is voordat je een opdracht geeft.</p>
          </div>

          <div style={s.step}>
            <p><span style={s.stepNum}>2</span><strong>Laat het isolatiewerk uitvoeren</strong></p>
            <p style={{ marginTop: "10px", color: "#64748b", fontSize: "15px" }}>Het bedrijf voert de isolatie uit en zorgt voor de juiste materialen en Rd-waarden. Na afloop ontvang je een gedetailleerde factuur en een bewijs van de gebruikte materialen.</p>
          </div>

          <div style={s.step}>
            <p><span style={s.stepNum}>3</span><strong>Verzamel de benodigde documenten</strong></p>
            <p style={{ marginTop: "10px", color: "#64748b", fontSize: "15px" }}>Je hebt nodig: de factuur van het isolatiebedrijf (met vermelding van materiaal, Rd-waarde en oppervlakte), foto&apos;s van de isolatie (voor en na), een kopie van het eigendomsbewijs of kadasteruittreksel, en je DigiD voor de online aanvraag.</p>
          </div>

          <div style={s.step}>
            <p><span style={s.stepNum}>4</span><strong>Ga naar mijn.rvo.nl</strong></p>
            <p style={{ marginTop: "10px", color: "#64748b", fontSize: "15px" }}>Log in met je DigiD op mijn.rvo.nl. Zoek de ISDE-subsidie en start een nieuwe aanvraag. Vul de gevraagde gegevens in: je woninggegevens, het type isolatie, de oppervlakte en het bedrijf dat het werk heeft uitgevoerd.</p>
          </div>

          <div style={s.step}>
            <p><span style={s.stepNum}>5</span><strong>Upload je documenten</strong></p>
            <p style={{ marginTop: "10px", color: "#64748b", fontSize: "15px" }}>Upload de factuur, foto&apos;s en eventuele andere gevraagde documenten. Controleer alles goed voordat je indient — ontbrekende of onjuiste documenten leiden tot vertraging.</p>
          </div>

          <div style={s.step}>
            <p><span style={s.stepNum}>6</span><strong>Wacht op uitbetaling</strong></p>
            <p style={{ marginTop: "10px", color: "#64748b", fontSize: "15px" }}>Na het indienen beoordeelt RVO je aanvraag. Dit duurt gemiddeld 8-13 weken. Bij goedkeuring wordt het subsidiebedrag rechtstreeks op je rekening gestort.</p>
          </div>

          <h2 style={s.h2}>Veelgemaakte fouten bij de aanvraag</h2>

          <h3 style={s.h3}>Te vroeg aanvragen</h3>
          <p>Sommige woningeigenaren vragen de subsidie aan voordat het werk is uitgevoerd. Bij de ISDE-subsidie moet het werk eerst klaar zijn. Je hebt de definitieve factuur en foto&apos;s nodig voor de aanvraag.</p>

          <h3 style={s.h3}>Onvolledige factuur</h3>
          <p>De factuur moet specifieke informatie bevatten: het type isolatiemateriaal, de Rd-waarde, het aantal vierkante meters en het adres waar het werk is uitgevoerd. Ontbreekt deze informatie, dan wordt je aanvraag afgewezen of vertraagd.</p>

          <h3 style={s.h3}>Niet-gecertificeerd bedrijf</h3>
          <p>Als het isolatiebedrijf niet aan de ISDE-eisen voldoet, wordt je aanvraag geweigerd — ongeacht hoe goed het werk is uitgevoerd. Controleer dit altijd vooraf.</p>

          <h3 style={s.h3}>Maatregelen apart aanvragen</h3>
          <p>Als je twee maatregelen hebt laten uitvoeren, vraag ze dan in dezelfde aanvraag aan. Zo profiteer je van de combinatiebonus en krijg je het dubbele subsidiebedrag. Aparte aanvragen betekent apart tarief.</p>

          <div style={s.tip}>
            <strong style={{ color: "#15803d" }}>💡 Tip:</strong> Het aanvraagproces kost gemiddeld 30-60 minuten en vereist nauwkeurigheid. Wij nemen dit hele proces voor je uit handen als onderdeel van onze service. Zo weet je zeker dat alles correct wordt ingediend en je het maximale subsidiebedrag ontvangt.
          </div>

          <h2 style={s.h2}>Hoelang is de subsidie nog beschikbaar?</h2>
          <p>De ISDE-subsidie heeft elk jaar een budget. In 2026 is er ruim budget beschikbaar, maar het wordt elk jaar populairder. Wacht dus niet te lang — hoe eerder je aan de slag gaat, hoe zekerder je bent van je subsidie. Houd er ook rekening mee dat isolatiebedrijven in het najaar vaak vollere agenda&apos;s hebben.</p>

          <div style={s.cta}>
            <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", marginBottom: "10px" }}>Laat ons de aanvraag regelen</h3>
            <p style={{ fontSize: "15px", color: "#64748b", marginBottom: "24px", lineHeight: 1.7 }}>Begin met het berekenen van je subsidie. Wij regelen daarna het complete aanvraagproces voor je.</p>
            <Link href="/#calculator" style={{ display: "inline-block", background: "#16a34a", color: "#fff", borderRadius: "50px", padding: "14px 36px", fontSize: "15px", fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 16px rgba(22,163,74,0.2)" }}>Bereken mijn subsidie →</Link>
          </div>
        </div>
      </div>
      <Footer />
      <CookieBanner />
    </>
  );
}
