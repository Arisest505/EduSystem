import HomeHeroSection from "../widgets/Home/HomeHeroSection";
import HomeFeatures from "../widgets/Home/HomeFeatures";
import HomeCTA from "../widgets/Home/HomeCTA";
import Footer from "../widgets/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 flex flex-col">
      <main className="flex-grow">
        <HomeHeroSection />
        <HomeFeatures />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  );
}
