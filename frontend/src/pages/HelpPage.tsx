// src/pages/HelpPage.tsx
import HelpHero from "../widgets/Help/HelpHero";
import HelpFAQ from "../widgets/Help/HelpFAQ";
import Navbar from "../widgets/NavBar";
import Footer from '../widgets/Footer';
import HelpContact from "../widgets/Help/HelpContact";

export default function HelpPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f9f6f1] text-slate-800 min-h-screen">
        <HelpHero />
        <HelpContact />
        <HelpFAQ />
      </main>
      <Footer />
    </>
  );
}
