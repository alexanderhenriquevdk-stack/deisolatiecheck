// Gemeentelijke subsidie database
// Postcode ranges per gemeente met subsidie-informatie
// Laatst bijgewerkt: februari 2026

const GEMEENTE_DATA = [
  {
    gemeente: "Amsterdam",
    postcodeRanges: [[1000, 1109]],
    maxSubsidie: 2500,
    biobased: 250,
    voorwaarden: "WOZ < \u20ac666.000, energielabel D-G of 2 slecht ge\u00efsoleerde bouwdelen. Aanvragen v\u00f3\u00f3r uitvoering.",
    url: "https://www.amsterdam.nl/subsidies/subsidieregelingen/subsidie-extra-isolatie-subsidie/",
    actief: true,
    geldigTot: "31 december 2028",
  },
  {
    gemeente: "Zaanstad",
    postcodeRanges: [[1500, 1509], [1520, 1549]],
    maxSubsidie: 1500,
    biobased: 250,
    voorwaarden: "WOZ < \u20ac477.000, bouwjaar v\u00f3\u00f3r 1995, energielabel D-G. Aanvragen v\u00f3\u00f3r uitvoering.",
    url: "https://www.zaanstad.nl/direct-regelen/subsidies/beschikbare-subsidies/lokale-aanpak-isolatie-zaanstad/",
    actief: true,
    geldigTot: "31 december 2028",
  },
  {
    gemeente: "Beverwijk",
    postcodeRanges: [[1940, 1949]],
    maxSubsidie: 1700,
    biobased: 0,
    voorwaarden: "Slecht ge\u00efsoleerd, via Klimaatroute of EcoBeverwijk. Budget voor 450 huishoudens.",
    url: "https://www.beverwijk.nl/isolatieactie",
    actief: true,
    geldigTot: "1 juli 2026",
  },
  {
    gemeente: "Den Helder",
    postcodeRanges: [[1780, 1789]],
    maxSubsidie: 1500,
    biobased: 0,
    voorwaarden: "Slecht ge\u00efsoleerde woning. Aanvraag via Duurzaam Bouwloket.",
    url: "https://nip.duurzaambouwloket.nl/denhelder",
    actief: true,
    geldigTot: "Zolang budget beschikbaar",
  },
  {
    gemeente: "Haarlem",
    postcodeRanges: [[2000, 2039]],
    maxSubsidie: 2000,
    biobased: 0,
    voorwaarden: "Energielabel D-G, erkend isolatiebedrijf. Budget: \u20ac5,9 miljoen.",
    url: "https://haarlem.nl/subsidie-verduurzaming-vves",
    actief: true,
    geldigTot: "31 december 2026",
  },
  {
    gemeente: "Rotterdam",
    postcodeRanges: [[3000, 3089]],
    maxSubsidie: 2000,
    biobased: 0,
    voorwaarden: "WOZ < \u20ac429.300 (2022), bouwjaar v\u00f3\u00f3r 1993, min. 2 slecht ge\u00efsoleerde bouwdelen.",
    url: "https://duurzaam010.nl/subsidie/isolatie-eengezinswoningen/",
    actief: true,
    geldigTot: "31 december 2027",
  },
  {
    gemeente: "Voorne aan Zee",
    postcodeRanges: [[3220, 3249]],
    maxSubsidie: null,
    biobased: 0,
    voorwaarden: "Check de Energiesubsidiewijzer voor actuele regelingen.",
    url: "https://www.verbeterjehuis.nl/energiesubsidiewijzer/",
    actief: false,
    geldigTot: null,
  },
  {
    gemeente: "Utrecht",
    postcodeRanges: [[3500, 3585]],
    maxSubsidie: 1500,
    biobased: 0,
    voorwaarden: "WOZ < \u20ac563.000 (2024), energielabel D-G. Geen PUR-schuim bij vloer/dak.",
    url: "https://loket.digitaal.utrecht.nl/nl/producten/woning-isoleren-subsidie-aanvragen",
    actief: true,
    geldigTot: "31 december 2027",
  },
  {
    gemeente: "'s-Hertogenbosch",
    postcodeRanges: [[5200, 5249]],
    maxSubsidie: null,
    biobased: 0,
    voorwaarden: "Check de Energiesubsidiewijzer voor actuele regelingen.",
    url: "https://www.verbeterjehuis.nl/energiesubsidiewijzer/",
    actief: false,
    geldigTot: null,
  },
  {
    gemeente: "Tilburg",
    postcodeRanges: [[5000, 5049]],
    maxSubsidie: null,
    biobased: 0,
    voorwaarden: "Gemeente Tilburg heeft regelingen. Check de gemeentewebsite.",
    url: "https://www.tilburg.nl/",
    actief: false,
    geldigTot: null,
  },
  {
    gemeente: "Breda",
    postcodeRanges: [[4800, 4849]],
    maxSubsidie: null,
    biobased: 0,
    voorwaarden: "Regeling 2025 is verlopen per 1-1-2026. Check of er een nieuwe regeling is.",
    url: "https://www.breda.nl/",
    actief: false,
    geldigTot: null,
  },
  {
    gemeente: "Heemskerk",
    postcodeRanges: [[1960, 1969]],
    maxSubsidie: null,
    biobased: 0,
    voorwaarden: "Check de Energiesubsidiewijzer voor actuele regelingen.",
    url: "https://www.verbeterjehuis.nl/energiesubsidiewijzer/",
    actief: false,
    geldigTot: null,
  },
];

export function getGemeenteByPostcode(postcode) {
  const num = parseInt(postcode?.replace(/\D/g, "")?.substring(0, 4), 10);
  if (!num || num < 1000 || num > 9999) return null;

  for (const g of GEMEENTE_DATA) {
    for (const [min, max] of g.postcodeRanges) {
      if (num >= min && num <= max) return g;
    }
  }

  return {
    gemeente: null,
    maxSubsidie: null,
    actief: false,
    voorwaarden: null,
    url: "https://www.verbeterjehuis.nl/energiesubsidiewijzer/",
  };
}

export default GEMEENTE_DATA;
