import PlansHero from "../widgets/Plans/PlansHero";
import PlansAbout from "../widgets/Plans/PlansAbout";
import PlansPricing from "../widgets/Plans/PlansPricing";

import Navbar from "../widgets/NavBar";
import Footer from "../widgets/Footer";



export default function PlansPage() {
  return (
    <>
      <Navbar />
      <main>
        <PlansHero />
        <PlansPricing />
        <PlansAbout />



      </main>
      <Footer />
    </>
  );
}

