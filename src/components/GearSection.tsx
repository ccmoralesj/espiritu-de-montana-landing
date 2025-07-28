import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bike, Backpack, Shield, Droplets } from "lucide-react";
import gearImage from "@/assets/cycling-gear.jpg";

const GearSection = () => {
  const gearItems = [
    {
      icon: Bike,
      title: "Bicicletas Especializadas",
      description: "Mountain bikes de alta gama perfectamente ajustadas para cada tipo de terreno y aventura."
    },
    {
      icon: Backpack,
      title: "Equipo de Bikepacking",
      description: "Alforjas, tiendas ultraligeras y todo el equipo necesario para expediciones de varios días."
    },
    {
      icon: Shield,
      title: "Seguridad Completa",
      description: "Cascos certificados, protecciones y kit de primeros auxilios para máxima tranquilidad."
    },
    {
      icon: Droplets,
      title: "Hidratación y Nutrición",
      description: "Sistemas de hidratación y alimentación energética para mantener tu rendimiento óptimo."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              EQUIPO DE
              <br />
              <span className="text-primary">AVENTURA TOTAL</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Proporcionamos todo el equipo necesario para que te enfoques únicamente en disfrutar la experiencia. 
              Tecnología de punta y equipos probados en las condiciones más exigentes.
            </p>

            <div className="space-y-6 mb-8">
              {gearItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-4">
              <Button 
                variant="adventure" 
                size="lg"
                className="gear-inquiry-cta w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              >
                Consultar Disponibilidad de Equipo
              </Button>
              <p className="text-sm text-muted-foreground">
                * También puedes traer tu propio equipo si prefieres usar el tuyo
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-2xl">
              <img 
                src={gearImage} 
                alt="Equipo de ciclismo profesional"
                className="w-full h-auto object-cover"
              />
            </Card>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border">
              <div className="text-center">
                <div className="text-3xl font-bold text-adventure mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Aventureros Felices</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GearSection;