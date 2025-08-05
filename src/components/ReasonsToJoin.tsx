import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ReasonsToJoin = () => {
  const reasons = [
    {
      number: "01.",
      title: "GUÍAS LOCALES + ATENCIÓN EN INGLÉS",
      image: "https://v5.airtableusercontent.com/v3/u/43/43/1754366400000/PDrcUN_fQUMXoLe2XEyrLA/i3zAZRiHyIZF2ELiCTDo3NE0VdCdt3xpEp-iw2q0wgUVygtvV2_G1ZHHCU6QVK0FGNJj6vsuegLqxRqrjZ4HMyUlB-idbM9Es0Uq4oZaKmq8Yfv--yFhGqjjxV8NSg4DN-D96BeAet1em1Iw7Xm0oQ/alJX5u-zhKnqvNIyGFLdFesbkGLwJW-yWBsNfNP8kBI"
    },
    {
      number: "02.",
      title: "EXPERIENCIAS SEGURAS Y AUTÉNTICAS",
      image: "https://images.pexels.com/photos/8926961/pexels-photo-8926961.jpeg"
    },
    {
      number: "03.",
      title: "CONOCE NUEVAS FRONTERAS EN BICI",
      image: "https://images.pexels.com/photos/32552591/pexels-photo-32552591.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="pt-10 mb-4">
          <h2 className="font-title text-3xl md:text-3xl text-secondary leading-tight tracking-wide">
            POR QUÉ UNIRTE A LA AVENTURA
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="space-y-2">
              <div className="text-muted-foreground font-body text-lg">
                {reason.number}
              </div>
              <h3 className="text-xl font-title text-secondary tracking-wide">
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
            <div key={index} className="space-y-2">
              <div className="text-muted-foreground font-body text-lg">
                {reason.number}
              </div>
              <h3 className="text-secondary font-body leading-tight tracking-wide">
                {reason.title}
              </h3>
              <Card className="overflow-hidden border-0 shadow-lg">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-64 object-cover overflow-hidden"
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