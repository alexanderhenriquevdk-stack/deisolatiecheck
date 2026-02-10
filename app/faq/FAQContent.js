"use client";

import { useState } from "react";
import Link from "next/link";

const FAQ_DATA = [
  {
    category: "ISDE Subsidie",
    questions: [
      {
        q: "Wat is de ISDE-subsidie?",
        a: "De ISDE (Investeringssubsidie Duurzame Energie en Energiebesparing) is een subsidie van de Rijksoverheid voor woningeigenaren die hun huis willen isoleren. Je krijgt een vast bedrag per m² terug op je investering. In 2026 kun je subsidie krijgen voor dakisolatie, vloerisolatie, spouwmuurisolatie, gevelisolatie, bodemisolatie en HR++ glas.",
      },
      {
        q: "Hoeveel ISDE-subsidie krijg ik in 2026?",
        a: "Het subsidiebedrag verschilt per type isolatie en varieert van €3,00 tot €25,00 per m². Combineer je twee of meer maatregelen? Dan worden de bedragen verdubbeld! Gebruik onze gratis subsidiecalculator om je exacte bedrag te berekenen.",
      },
      {
        q: "Hoe vraag ik ISDE-subsidie aan?",
        a: "Je vraagt ISDE-subsidie aan via de RVO (Rijksdienst voor Ondernemend Nederland). Dit doe je nadat de isolatiewerkzaamheden zijn uitgevoerd. Je hebt facturen, foto's en een bewijs van de isolatiewaarde nodig. Wij regelen de volledige aanvraag voor je — zo weet je zeker dat het goed gaat.",
      },
      {
        q: "Wanneer ontvang ik mijn subsidiegeld?",
        a: "Na het indienen van de aanvraag bij RVO duurt het gemiddeld 8-13 weken voordat de subsidie op je rekening staat. In drukke periodes kan dit iets langer duren.",
      },
      {
        q: "Kan ik ISDE-subsidie combineren met gemeentelijke subsidie?",
        a: "Ja! Veel gemeentes bieden aanvullende subsidies voor woningisolatie. Deze kun je vaak stapelen met de ISDE-subsidie. Check bij je eigen gemeente welke regelingen er zijn. Onze adviseurs weten precies welke subsidies er in jouw gemeente beschikbaar zijn.",
      },
    ],
  },
  {
    category: "Isolatietypes",
    questions: [
      {
        q: "Welk type isolatie levert het meeste op?",
        a: "Dakisolatie heeft de grootste impact omdat tot 30% van de warmte via het dak verloren gaat. Spouwmuurisolatie heeft de kortste terugverdientijd (vaak al binnen 3-4 jaar). Het beste resultaat behaal je door meerdere maatregelen te combineren — dan krijg je ook dubbele subsidie.",
      },
      {
        q: "Wat kost dakisolatie gemiddeld?",
        a: "Dakisolatie kost gemiddeld €40-60 per m², afhankelijk van het type dak en de isolatiemethode. Voor een gemiddelde woning (50-80 m² dakoppervlak) kom je uit op €2.000-€4.800. Met ISDE-subsidie krijg je €16,25 per m² terug (of €32,50 bij combinatie).",
      },
      {
        q: "Hoe lang duurt het isoleren van mijn woning?",
        a: "Spouwmuurisolatie is het snelst: vaak binnen 2-4 uur klaar. Vloerisolatie duurt een halve tot hele dag. Dakisolatie duurt 1-3 dagen, afhankelijk van de grootte. We plannen het werk altijd zo efficiënt mogelijk in.",
      },
      {
        q: "Is mijn woning geschikt voor spouwmuurisolatie?",
        a: "De meeste woningen gebouwd tussen 1920 en 1980 hebben een ongeïsoleerde spouwmuur. Een specialist kan met een endoscoop controleren of jouw spouw geschikt is. Dit is onderdeel van onze gratis woningscan.",
      },
    ],
  },
  {
    category: "Proces & Service",
    questions: [
      {
        q: "Wat is een gratis woningscan?",
        a: "Bij een woningscan komt een van onze isolatie-experts langs om je woning te bekijken. We controleren welke isolatiemaatregelen mogelijk zijn, meten de oppervlaktes op, en maken een persoonlijk advies met exacte kosten en subsidiebedragen. Dit is geheel vrijblijvend en gratis.",
      },
      {
        q: "Moet ik zelf de subsidie aanvragen?",
        a: "Nee, wij regelen de volledige ISDE-subsidieaanvraag voor je. Na de uitvoering verzamelen we alle benodigde documenten en dienen we de aanvraag in bij RVO. Je hoeft zelf niks te doen.",
      },
      {
        q: "Zijn jullie een erkend isolatiebedrijf?",
        a: "Ja, we werken uitsluitend met ISDE-gecertificeerde isolatiebedrijven die voldoen aan alle kwaliteitseisen van de overheid. Dit is ook een vereiste om subsidie te kunnen aanvragen.",
      },
      {
        q: "Wat als ik niet tevreden ben?",
        a: "Klanttevredenheid staat bij ons voorop. Mocht je ontevreden zijn over het resultaat, dan lossen we het op. We bieden garantie op alle uitgevoerde werkzaamheden.",
      },
    ],
  },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        overflow: "hidden",
        transition: "all 0.2s",
        boxShadow: open ? "0 2px 12px rgba(0,0,0,0.04)" : "none",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "18px 20px",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "left",
          fontFamily: "inherit",
        }}
      >
        <span style={{ fontSize: "15px", fontWeight: 600, color: "#1e293b", paddingRight: "16px" }}>
          {question}
        </span>
        <span
          style={{
            fontSize: "20px",
            color: "#16a34a",
            fontWeight: 300,
            transition: "transform 0.2s",
            transform: open ? "rotate(45deg)" : "none",
            flexShrink: 0,
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div
          style={{
            padding: "0 20px 18px",
            fontSize: "14px",
            color: "#64748b",
            lineHeight: 1.8,
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQContent() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          padding: "140px 24px 60px",
          textAlign: "center",
          background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 900,
            letterSpacing: "-1.5px",
            color: "#0f172a",
            marginBottom: "14px",
          }}
        >
          Veelgestelde vragen
        </h1>
        <p
          style={{
            fontSize: "17px",
            color: "#64748b",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Alles wat je wilt weten over isolatie, ISDE-subsidie en ons proces.
        </p>
      </section>

      {/* FAQ Sections */}
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 24px 80px" }}>
        {FAQ_DATA.map((section) => (
          <div key={section.category} style={{ marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#16a34a",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                marginBottom: "16px",
              }}
            >
              {section.category}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {section.questions.map((item) => (
                <FAQItem key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div
          style={{
            background: "#f0fdf4",
            border: "1px solid #bbf7d0",
            borderRadius: "20px",
            padding: "40px",
            textAlign: "center",
            marginTop: "32px",
          }}
        >
          <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", marginBottom: "10px" }}>
            Vraag niet beantwoord?
          </h3>
          <p style={{ fontSize: "15px", color: "#64748b", marginBottom: "24px", lineHeight: 1.7 }}>
            Bereken je subsidie of neem contact met ons op voor persoonlijk advies.
          </p>
          <Link
            href="/#calculator"
            style={{
              display: "inline-block",
              background: "#16a34a",
              color: "#fff",
              borderRadius: "50px",
              padding: "14px 36px",
              fontSize: "15px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(22,163,74,0.2)",
            }}
          >
            Bereken mijn subsidie →
          </Link>
        </div>
      </div>
    </div>
  );
}
