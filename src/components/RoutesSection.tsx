import RouteCard from "./RouteCard";
import { Button } from "@/components/ui/button";
import routePanama from "@/assets/route-panama.jpg";
import routeRivieraMaya from "@/assets/route-riviera-maya.jpg";
import routeBolivia from "@/assets/route-bolivia.jpg";

const RoutesSection = () => {
  const internationalRoutes = [
    {
      title: "Circuito Canal de Panamá",
      location: "Panamá, Centroamérica",
      description: "Pedalea a través de la historia del canal más famoso del mundo, entre selva tropical y paisajes únicos.",
      image: routePanama,
      difficulty: "Intermedio",
      duration: "5 días",
      category: 'internacional' as const,
    },
    {
      title: "Riviera Maya Ancestral",
      location: "Quintana Roo, México",
      description: "Descubre ruinas mayas ocultas mientras recorres senderos milenarios en la península de Yucatán.",
      image: routeRivieraMaya,
      difficulty: "Intermedio",
      duration: "7 días",
      category: 'internacional' as const,
    },
    {
      title: "Cordillera de los Andes",
      location: "Bolivia",
      description: "Una expedición épica por los senderos más altos de América, entre lagos sagrados y picos nevados.",
      image: routeBolivia,
      difficulty: "Avanzado",
      duration: "10 días",
      category: 'internacional' as const,
    },
  ];

  const nationalRoutes = [
    {
      title: "Cocora y Nevados",
      location: "Quindío, Colombia",
      description: "Atraviesa el valle de las palmas de cera más altas del mundo y experimenta la magia del paisaje cafetero.",
      image: routePanama, // Placeholder - replace with Colombian route image
      difficulty: "Intermedio",
      duration: "4 días",
      category: 'nacional' as const,
    },
    {
      title: "Sierra Nevada",
      location: "Magdalena, Colombia", 
      description: "Desde el mar hasta las montañas nevadas, una ruta que conecta todos los pisos térmicos de Colombia.",
      image: routeRivieraMaya, // Placeholder - replace with Sierra Nevada image
      difficulty: "Avanzado",
      duration: "6 días",
      category: 'nacional' as const,
    },
    {
      title: "Tatacoa y Huila",
      location: "Huila, Colombia",
      description: "Pedalea por el desierto más sorprendente de Colombia y descubre paisajes de otro planeta.",
      image: routeBolivia, // Placeholder - replace with Tatacoa image
      difficulty: "Básico",
      duration: "3 días",
      category: 'nacional' as const,
    },
  ];

  const allRoutes = [...internationalRoutes, ...nationalRoutes];

  return (
    <section id="rutas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            RUTAS INTERNACIONALES Y NACIONALES
          </h2>
          <Button 
            variant="adventure" 
            className="view-all-routes rounded-full px-8"
            onClick={() => window.open('https://wa.me/1234567890', '_blank')}
          >
            VER TODAS LAS RUTAS
          </Button>
        </div>

        <div className="space-y-8">
          {allRoutes.map((route, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center gap-6 py-8 border-b border-border last:border-b-0">
              {/* Date */}
              <div className="text-muted-foreground text-sm font-medium min-w-[100px]">
                18.05.2025
              </div>
              
              {/* Content */}
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground uppercase">
                  {route.title}
                </h3>
                <p className="text-muted-foreground max-w-md">
                  {route.description}
                </p>
                <Button 
                  variant="outline" 
                  className="rounded-full px-6"
                  onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                >
                  VER DETALLE
                </Button>
              </div>
              
              {/* Metadata */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 flex items-center justify-center">▲</span>
                  <span>{route.difficulty}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 flex items-center justify-center">👥</span>
                  <span>{route.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 flex items-center justify-center">💰</span>
                  <span>$2.700.000</span>
                </div>
              </div>
              
              {/* Image */}
              <div className="w-full lg:w-64 h-32 lg:h-24 rounded-xl overflow-hidden">
                <img 
                  src={route.image} 
                  alt={route.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-muted/30 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">¿No encuentras la aventura perfecta?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Diseñamos rutas personalizadas según tus preferencias, nivel de experiencia y tiempo disponible. 
            Cada aventura es única, como tú.
          </p>
          <Button 
            variant="adventure" 
            size="lg"
            className="custom-route-cta"
            onClick={() => window.open('https://wa.me/1234567890', '_blank')}
          >
            Diseña Tu Ruta Personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoutesSection;