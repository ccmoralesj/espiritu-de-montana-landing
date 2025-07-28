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

  return (
    <section id="rutas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            RUTAS INTERNACIONALES Y NACIONALES
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada ruta está diseñada para conectarte profundamente con la naturaleza y las culturas locales. 
            Desde expediciones internacionales hasta joyas ocultas de Colombia.
          </p>
        </div>

        {/* International Routes */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Rutas Internacionales</h3>
            <Button 
              variant="adventure" 
              className="view-all-international"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Ver Todas
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalRoutes.map((route, index) => (
              <RouteCard key={index} {...route} />
            ))}
          </div>
        </div>

        {/* National Routes */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Rutas Nacionales</h3>
            <Button 
              variant="default" 
              className="view-all-national"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Ver Todas
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nationalRoutes.map((route, index) => (
              <RouteCard key={index} {...route} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-primary/5 rounded-2xl">
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