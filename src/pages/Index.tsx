import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RoutesSection from "@/components/InternationalSection";
import ReasonsToJoin from "@/components/ReasonsToJoin";
import LocalAdventures from "@/components/LocalAdventures";
import GearSection from "@/components/GearSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { useAdventures } from "@/hooks/api/useAdventures";

const Index = () => {
  const adventuresHook = useAdventures()
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <RoutesSection useAdventureHookParam={adventuresHook} />
      <ReasonsToJoin />
      <LocalAdventures useAdventureHookParam={adventuresHook} />
      <GearSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
