import DeIsolatieCheck from "./components/DeIsolatieCheck";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

export default function Home() {
  return (
    <>
      <Navigation />
      <DeIsolatieCheck />
      <Footer />
      <CookieBanner />
    </>
  );
}
