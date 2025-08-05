import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RoutesSection from "@/components/RoutesSection";
import ReasonsToJoin from "@/components/ReasonsToJoin";
import LocalAdventures from "@/components/LocalAdventures";
import GearSection from "@/components/GearSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <RoutesSection />
      <ReasonsToJoin />
      <LocalAdventures />
      <GearSection />
      <Footer />
    </div>
  );
};

export default Index;
