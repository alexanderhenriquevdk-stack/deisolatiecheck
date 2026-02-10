import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import FAQContent from "./FAQContent";

export const metadata = {
  title: "Veelgestelde vragen over isolatie subsidie | De Isolatie Check",
  description:
    "Antwoorden op de meest gestelde vragen over ISDE subsidie 2026, dakisolatie, vloerisolatie, spouwmuurisolatie en meer. Hoeveel subsidie krijg ik? Hoe vraag ik het aan?",
  alternates: {
    canonical: "https://deisolatiecheck.nl/faq",
  },
};

export default function FAQPage() {
  return (
    <>
      <Navigation />
      <FAQContent />
      <Footer />
      <CookieBanner />
    </>
  );
}
