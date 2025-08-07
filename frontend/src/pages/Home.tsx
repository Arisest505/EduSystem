import HomeHeroSection from "../widgets/Home/HomeHeroSection";
import HomeFeatures from "../widgets/Home/HomeFeatures";
import HomeCTA from "../widgets/Home/HomeCTA";
import Footer from "../widgets/Footer";
import HomeAbout from "../widgets/Home/HomeAbout";
import HomeFAQ from "../widgets/Home/HomeFAQ";
import HomeVersions from "../widgets/Home/HomeVersions";
import Navbar from "../widgets/NavBar";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen text-gray-900 bg-white">
      <Navbar />
      <main className="flex-grow">
        <HomeHeroSection />
        <HomeAbout />
        <HomeFeatures />
        <HomeVersions />
        <HomeFAQ />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  );
}
