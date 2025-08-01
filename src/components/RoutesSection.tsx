import RouteCard from "./RouteCard";
import { Button } from "@/components/ui/button";
import RouteRows from "./Route/RouteRows";
import { Route } from "@/interfaces/Route";
import RouteCards from "./Mobile/Route/RouteCards";

const RoutesSection = () => {
  const internationalRoutes = [
    {
      title: "Circuito Canal de Panamá",
      date: '18.05.2025',
      location: "Panamá, Centroamérica",
      description: "Pedalea a través de la historia del canal más famoso del mundo, entre selva tropical y paisajes únicos.",
      image: 'https://images.unsplash.com/photo-1632505702897-cc41b0ba3b64?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: "Intermedio",
      price: '$2.700.000',
      duration: "40 Km",
      category: 'internacional' as const,
    },
    {
      title: "Riviera Maya Ancestral",
      date: '18.05.2025',
      location: "Quintana Roo, México",
      description: "Descubre ruinas mayas ocultas mientras recorres senderos milenarios en la península de Yucatán.",
      image: 'https://images.unsplash.com/photo-1524544187526-2b2855b65f16?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: "Intermedio",
      price: '$2.700.000',
      duration: "38 Km",
      category: 'internacional' as const,
    },
    {
      title: "Cordillera de los Andes",
      date: '18.05.2025',
      location: "Bolivia",
      description: "Una expedición épica por los senderos más altos de América, entre lagos sagrados y picos nevados.",
      image: 'https://images.unsplash.com/photo-1632505702897-cc41b0ba3b64?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: "Avanzado",
      price: '$2.700.000',
      duration: "28 Km",
      category: 'internacional' as const,
    },
  ];

  const nationalRoutes = [
    {
      title: "Cocora y Nevados",
      date: '18.05.2025',
      location: "Quindío, Colombia",
      description: "Atraviesa el valle de las palmas de cera más altas del mundo y experimenta la magia del paisaje cafetero.",
      image: 'https://images.unsplash.com/photo-1524544187526-2b2855b65f16?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: "Intermedio",
      price: '$2.700.000',
      duration: "32 Km",
      category: 'nacional' as const,
    },
    {
      title: "Sierra Nevada",
      date: '18.05.2025',
      location: "Magdalena, Colombia",
      description: "Desde el mar hasta las montañas nevadas, una ruta que conecta todos los pisos térmicos de Colombia.",
      image: 'https://images.unsplash.com/photo-1632505702897-cc41b0ba3b64?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: "Avanzado",
      price: '$2.700.000',
      duration: "52 Km",
      category: 'nacional' as const,
    },
    {
      title: "Tatacoa y Huila",
      date: '18.05.2025',
      location: "Huila, Colombia",
      description: "Pedalea por el desierto más sorprendente de Colombia y descubre paisajes de otro planeta.",
      image: 'https://images.unsplash.com/photo-1524544187526-2b2855b65f16?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      difficulty: "Básico",
      price: '$2.700.000',
      duration: "40 Km",
      category: 'nacional' as const,
    },
  ];

  const allRoutes = [...internationalRoutes, ...nationalRoutes];

  const featuredRoute = allRoutes[0]; // Use first route for mobile card

  return (
    <section id="rutas" className="py-14 lg:py-20 bg-background">
      <div className="container mx-auto px-4">

        <div className="hidden lg:block">
          {/* Desktop Layout */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-title text-4xl md:text-5xl font-secondary leading-tight tracking-wide">
              RUTAS INTERNACIONALES Y NACIONALES
            </h2>
            <Button
              variant="adventure"
              className="font-body view-all-routes rounded-full px-8 bg-primary hover:bg-primary-hover"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              VER TODAS LAS RUTAS
            </Button>
          </div>
          {/* Route Row */}
          < RouteRows routes={allRoutes as Route[]} />
        </div>


        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {/* Title and Button */}
          <div className="space-y-6 w-[92%] mx-auto">
            <h2 className=" font-title text-5xl text-secondary uppercase leading-tighter">
              RUTAS INTERNACIONALES Y NACIONALES
            </h2>
            <Button
              variant="adventure"
              className="font-body w-2/3 h-12 rounded-full py-4 text-lg  bg-primary hover:bg-primary-hover"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              VER TODAS LAS RUTAS
            </Button>
          </div>

          {/* Route Card */}
          < RouteCards routes={allRoutes as Route[]} />
        </div>
      </div>
    </section>
  );
};

export default RoutesSection;