import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacybeleid | De Isolatie Check",
  description: "Lees hoe De Isolatie Check omgaat met je persoonsgegevens conform de AVG/GDPR.",
  alternates: { canonical: "https://deisolatiecheck.nl/privacy" },
};

export default function PrivacyPage() {
  const s = {
    content: { maxWidth: "680px", margin: "0 auto", padding: "140px 24px 80px", fontSize: "15px", color: "#334155", lineHeight: 1.85 },
    h1: { fontSize: "32px", fontWeight: 900, color: "#0f172a", marginBottom: "8px" },
    h2: { fontSize: "20px", fontWeight: 800, color: "#0f172a", marginTop: "36px", marginBottom: "12px" },
    date: { fontSize: "14px", color: "#94a3b8", marginBottom: "32px" },
  };

  return (
    <>
      <Navigation />
      <div style={s.content}>
        <h1 style={s.h1}>Privacybeleid</h1>
        <p style={s.date}>Laatst bijgewerkt: 10 februari 2026</p>

        <p>De Isolatie Check respecteert de privacy van alle gebruikers van haar website en zorgt ervoor dat de persoonlijke informatie die je ons verschaft vertrouwelijk wordt behandeld.</p>

        <h2 style={s.h2}>Welke gegevens verzamelen wij?</h2>
        <p>Wanneer je ons contactformulier invult, verzamelen wij de volgende gegevens: je naam, e-mailadres, telefoonnummer en postcode. Daarnaast slaan we de resultaten van je subsidieberekening op (gekozen isolatietypes, oppervlaktes en berekende bedragen).</p>

        <h2 style={s.h2}>Waarvoor gebruiken wij je gegevens?</h2>
        <p>Wij gebruiken je gegevens uitsluitend om contact met je op te nemen voor een gratis woningscan en isolatieadvies. We delen je gegevens niet met derden voor marketingdoeleinden.</p>

        <h2 style={s.h2}>Cookies</h2>
        <p>Onze website maakt gebruik van analytische cookies (Google Analytics) om het gebruik van de website te analyseren en te verbeteren. Deze cookies worden alleen geplaatst als je hier toestemming voor geeft via onze cookiebanner. Je kunt je toestemming op elk moment intrekken door je browsergegevens te wissen.</p>

        <h2 style={s.h2}>Bewaartermijn</h2>
        <p>Wij bewaren je persoonsgegevens niet langer dan strikt noodzakelijk is voor de doeleinden waarvoor ze zijn verzameld. Contactgegevens worden maximaal 12 maanden bewaard na het laatste contact.</p>

        <h2 style={s.h2}>Je rechten</h2>
        <p>Op grond van de AVG heb je het recht om je persoonsgegevens in te zien, te corrigeren of te verwijderen. Neem hiervoor contact met ons op via info@deisolatiecheck.nl.</p>

        <h2 style={s.h2}>Contact</h2>
        <p>Voor vragen over dit privacybeleid kun je contact opnemen via info@deisolatiecheck.nl.</p>
      </div>
      <Footer />
    </>
  );
}
