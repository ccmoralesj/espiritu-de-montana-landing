import RouteCard from "./RouteCard";
import { Button } from "@/components/ui/button";
import RouteRows from "./Route/RouteRows";
import { Route } from "@/interfaces/Route";
import RouteCards from "./Mobile/Route/RouteCards";
import { allRoutes } from "@/db/routes";

const RoutesSection = () => {
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