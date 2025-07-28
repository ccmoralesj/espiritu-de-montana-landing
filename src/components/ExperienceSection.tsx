import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Mountain, Compass } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Heart,
      title: "Conexión Auténtica",
      description: "Grupos pequeños para experiencias más íntimas con la naturaleza y las comunidades locales."
    },
    {
      icon: Users,
      title: "Guías Locales",
      description: "Acompañamiento de expertos que conocen cada sendero, historia y secreto de la región."
    },
    {
      icon: Mountain,
      title: "Paisajes Únicos",
      description: "Acceso a lugares remotos y espectaculares que solo se pueden alcanzar en bicicleta."
    },
    {
      icon: Compass,
      title: "Aventura Responsable",
      description: "Turismo sostenible que beneficia directamente a las comunidades que visitamos."
    }
  ];

  return (
    <section id="experiencias" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            MÁS QUE CICLISMO,
            <br />
            <span className="text-primary">UNA EXPERIENCIA DE VIDA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            En Espíritu de Montaña no solo organizamos rutas. Creamos experiencias transformadoras 
            que conectan tu espíritu aventurero con la esencia más pura de América Latina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-0 bg-muted/30">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{experience.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            ¿Listo para tu próxima aventura?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a una comunidad de aventureros que han descubierto una nueva forma de viajar. 
            Tu bicicleta, la naturaleza y nosotros: la combinación perfecta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="adventure" 
              size="lg"
              className="experience-contact-cta text-lg px-8"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Conversemos por WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8"
              onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conoce Nuestra Historia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;