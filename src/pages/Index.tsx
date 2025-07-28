import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RoutesSection from "@/components/RoutesSection";
import ExperienceSection from "@/components/ExperienceSection";
import GearSection from "@/components/GearSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <RoutesSection />
      <ExperienceSection />
      <GearSection />
      <Footer />
    </div>
  );
};

export default Index;
