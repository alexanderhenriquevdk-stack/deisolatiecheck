import { DM_Sans } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "De Isolatie Check | Bereken je ISDE subsidie 2026",
  description:
    "Ontdek in 30 seconden hoeveel ISDE-subsidie jij krijgt voor dakisolatie, vloerisolatie, spouwmuurisolatie en meer. Gratis subsidiecheck en woningscan.",
  keywords:
    "isolatie subsidie, ISDE subsidie 2026, dakisolatie subsidie, vloerisolatie subsidie, spouwmuurisolatie, huis isoleren kosten, subsidie aanvragen isolatie, woningisolatie, isolatie check, isolatie subsidie berekenen",
  openGraph: {
    title: "De Isolatie Check | Bereken je ISDE subsidie 2026",
    description:
      "Ontdek in 30 seconden hoeveel ISDE-subsidie jij krijgt. Gratis subsidiecheck en woningscan.",
    url: "https://deisolatiecheck.nl",
    siteName: "De Isolatie Check",
    locale: "nl_NL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://deisolatiecheck.nl",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={dmSans.variable}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
