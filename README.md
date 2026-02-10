# De Isolatie Check v2 — deisolatiecheck.nl

ISDE subsidie calculator met lead capture, blog, FAQ, Google Analytics en cookie banner.

---

## 🔄 Update deployen

Omdat je al een werkende v1 hebt op Vercel, hoef je alleen de bestanden te vervangen:

1. Open de map `Documenten/GitHub/deisolatiecheck/` op je computer
2. **Selecteer alles** en **verwijder** het (niet de `.git` map — die is onzichtbaar)
3. Kopieer alle bestanden uit deze v2 map naar `Documenten/GitHub/deisolatiecheck/`
4. Open **GitHub Desktop**
5. Je ziet alle wijzigingen — typ bij Summary: `v2 update`
6. Klik **Commit to main** → **Push origin**
7. Vercel deployt automatisch binnen 60 seconden

---

## 📋 Google Sheets koppelen (leads ontvangen)

### Stap 1: Maak een Google Sheet

1. Ga naar [sheets.google.com](https://sheets.google.com) → maak een nieuw spreadsheet
2. Noem het **"De Isolatie Check - Leads"**
3. Zet in rij 1 deze kolomnamen:
   | A | B | C | D | E | F | G | H | I |
   |---|---|---|---|---|---|---|---|---|
   | Datum | Naam | Email | Telefoon | Postcode | Isolatietypes | Investering | Subsidie | Netto kosten |

### Stap 2: Google Apps Script aanmaken

1. In je Google Sheet: klik **Extensies** → **Apps Script**
2. Verwijder alle bestaande code
3. Plak dit:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.datum || new Date().toLocaleString('nl-NL'),
    data.naam || '',
    data.email || '',
    data.telefoon || '',
    data.postcode || '',
    data.isolatietypes || '',
    data.totalCost || '',
    data.totalSubsidy || '',
    data.netCost || ''
  ]);
  
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Klik **Opslaan** (Ctrl+S)
5. Klik **Implementeren** → **Nieuwe implementatie**
6. Bij type: selecteer **Web-app**
7. Bij "Uitvoeren als": **Ik**
8. Bij "Wie heeft toegang": **Iedereen**
9. Klik **Implementeren**
10. **Kopieer de URL** die je krijgt (begint met `https://script.google.com/macros/...`)

### Stap 3: URL invullen in de code

1. Open `app/components/DeIsolatieCheck.js`
2. Zoek bovenin de regel: `const GOOGLE_SHEETS_URL = "";`
3. Plak je URL ertussen: `const GOOGLE_SHEETS_URL = "https://script.google.com/macros/...";`
4. Sla op, commit en push via GitHub Desktop

**Test:** vul het formulier in op je site en check of er een nieuwe rij verschijnt in je Google Sheet.

---

## 📊 Google Analytics instellen

1. Ga naar [analytics.google.com](https://analytics.google.com)
2. Klik **Admin** (tandwiel) → **Create Property**
3. Naam: **De Isolatie Check**
4. Website URL: **deisolatiecheck.nl**
5. Na aanmaken: ga naar **Data Streams** → klik op je stream
6. Kopieer je **Measurement ID** (begint met `G-`)
7. Open `app/components/GoogleAnalytics.js`
8. Vervang `G-XXXXXXXXXX` door jouw ID
9. Sla op, commit en push

**Let op:** Google Analytics wordt alleen geladen nadat de bezoeker cookies accepteert via de cookiebanner (AVG-compliant).

---

## 📁 Projectstructuur

```
deisolatiecheck/
├── app/
│   ├── components/
│   │   ├── CookieBanner.js       ← AVG cookie consent
│   │   ├── DeIsolatieCheck.js     ← Hoofdpagina + calculator
│   │   ├── Footer.js              ← Gedeelde footer
│   │   ├── GoogleAnalytics.js     ← GA tracking (cookie-aware)
│   │   └── Navigation.js          ← Gedeelde navigatie
│   ├── blog/
│   │   ├── page.js                ← Blog overzicht
│   │   ├── isde-subsidie-2026-complete-gids/
│   │   │   └── page.js
│   │   ├── dakisolatie-kosten-besparing/
│   │   │   └── page.js
│   │   └── combinatiebonus-dubbele-subsidie/
│   │       └── page.js
│   ├── faq/
│   │   ├── page.js                ← FAQ pagina
│   │   └── FAQContent.js
│   ├── privacy/
│   │   └── page.js                ← Privacybeleid
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   └── sitemap.js
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   └── robots.txt
├── .gitignore
├── next.config.js
├── package.json
└── README.md
```

---

## ✅ Checklist

- [ ] Google Sheets URL invullen in DeIsolatieCheck.js
- [ ] Google Analytics ID invullen in GoogleAnalytics.js
- [ ] Test formulier (check of lead in Sheet verschijnt)
- [ ] Google Search Console koppelen (search.google.com)
- [ ] E-mail adres info@deisolatiecheck.nl instellen (via TransIP)
- [ ] Teksten controleren en personaliseren
- [ ] Subsidiebedragen verifiëren met actuele RVO-informatie
