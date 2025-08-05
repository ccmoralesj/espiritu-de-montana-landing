import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ReasonsToJoin = () => {
  const reasons = [
    {
      number: "01.",
      title: "GUÍAS LOCALES + ATENCIÓN EN INGLÉS",
      image: "/lovable-uploads/1a413544-b7a6-4b8d-9a25-34c833e6fc9b.png"
    },
    {
      number: "02.",
      title: "EXPERIENCIAS SEGURAS Y AUTÉNTICAS",
      image: "/lovable-uploads/b7d80422-6d5d-49ba-858d-007fde62a690.png"
    },
    {
      number: "03.",
      title: "CONOCE NUEVAS FRONTERAS EN BICI",
      image: "/lovable-uploads/1a413544-b7a6-4b8d-9a25-34c833e6fc9b.png"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-title">
            POR QUÉ UNIRTE A LA AVENTURA
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="space-y-6">
              <div className="text-muted-foreground font-bold text-lg">
                {reason.number}
              </div>
              <h3 className="text-xl font-bold text-foreground font-title leading-tight">
                {reason.title}
              </h3>
              <Card className="overflow-hidden border-0 shadow-lg">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-80 object-cover"
                />
              </Card>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-12">
          {reasons.map((reason, index) => (
            <div key={index} className="space-y-4">
              <div className="text-muted-foreground font-bold text-lg">
                {reason.number}
              </div>
              <h3 className="text-xl font-bold text-foreground font-title leading-tight">
                {reason.title}
              </h3>
              <Card className="overflow-hidden border-0 shadow-lg">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-64 object-cover"
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsToJoin;