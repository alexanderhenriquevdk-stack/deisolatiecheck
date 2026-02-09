# De Isolatie Check — deisolatiecheck.nl

ISDE subsidie calculator en lead generation website.

---

## 🚀 Stap-voor-stap live zetten

### Stap 1: Domein registreren

1. Ga naar [transip.nl](https://www.transip.nl)
2. Zoek **deisolatiecheck.nl** en registreer (~€8/jaar)
3. Na registratie: **nog niks aanpassen** aan DNS — dat doen we in stap 5

### Stap 2: GitHub account + repository

1. Maak een account op [github.com](https://github.com) (gratis)
2. Klik rechtsboven op **+** → **New repository**
3. Naam: `deisolatiecheck`
4. Zet op **Public** en klik **Create repository**
5. Upload alle bestanden uit dit project naar de repository:
   - Op de repository pagina klik je **uploading an existing file**
   - Sleep het hele project (alle mappen en bestanden) erin
   - Klik **Commit changes**

**Of via terminal (als je Git hebt):**
```bash
cd deisolatiecheck
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/JOUW-USERNAME/deisolatiecheck.git
git push -u origin main
```

### Stap 3: Vercel koppelen

1. Ga naar [vercel.com](https://vercel.com) en klik **Sign Up** → **Continue with GitHub**
2. Klik **Add New...** → **Project**
3. Selecteer je `deisolatiecheck` repository
4. Framework Preset staat automatisch op **Next.js** — laat alles staan
5. Klik **Deploy**
6. Wacht ~60 seconden — je site is nu live op `deisolatiecheck.vercel.app`

### Stap 4: Domein koppelen

1. In Vercel: ga naar je project → **Settings** → **Domains**
2. Typ `deisolatiecheck.nl` en klik **Add**
3. Vercel geeft je DNS records, bijvoorbeeld:
   - Type: **A** — Value: `76.76.21.21`
   - Type: **CNAME** — Name: `www` — Value: `cname.vercel-dns.com`
4. Ga naar **TransIP** → **Mijn account** → **Domeinen** → **deisolatiecheck.nl** → **DNS**
5. Verwijder de bestaande A-records en voeg de Vercel records toe
6. Wacht 5-30 minuten — je site is live op **deisolatiecheck.nl** 🎉

SSL (https) wordt automatisch geregeld door Vercel.

---

## 📁 Projectstructuur

```
deisolatiecheck/
├── app/
│   ├── components/
│   │   └── DeIsolatieCheck.js   ← Hoofdcomponent (calculator + hele pagina)
│   ├── globals.css               ← Globale stijlen
│   ├── layout.js                 ← SEO metadata + font loading
│   ├── page.js                   ← Hoofdpagina
│   └── sitemap.js                ← Auto-generated sitemap
├── public/
│   └── robots.txt                ← SEO robots
├── .gitignore
├── next.config.js
├── package.json
└── README.md
```

---

## 🔧 Lokaal testen (optioneel)

Als je de site lokaal wilt bekijken voordat je deployt:

```bash
# Installeer Node.js via https://nodejs.org (LTS versie)
cd deisolatiecheck
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

---

## ✏️ Aanpassingen maken

Na deployment kun je de site aanpassen door bestanden in GitHub te bewerken.
Vercel detecteert automatisch elke wijziging en deployt opnieuw binnen ~30 seconden.

**Veelvoorkomende aanpassingen:**
- Teksten/prijzen: bewerk `app/components/DeIsolatieCheck.js`
- SEO titels: bewerk `app/layout.js`
- Kleuren/stijlen: bewerk `app/globals.css`

---

## 📊 Volgende stappen

- [ ] Google Analytics toevoegen (gratis bezoekersstatistieken)
- [ ] Google Search Console koppelen (SEO monitoring)
- [ ] Formulier koppelen aan e-mail (bijv. via Formspree of EmailJS)
- [ ] Favicon/logo toevoegen in `/public`
- [ ] Cookie banner toevoegen (AVG/GDPR)
- [ ] Extra pagina's: blog, FAQ, over ons (voor meer SEO)
