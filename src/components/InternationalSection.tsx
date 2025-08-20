import RouteCard from "./RouteCard";
import { Button } from "@/components/ui/button";
import RouteRows from "./RouteLanding/RouteRows";
import RouteCards from "./Mobile/RouteLanding/RouteCards";
import { UseAdventure, useAdventures } from "@/hooks/api/useAdventures";
import { Category } from "@/interfaces/Adventure";
import LoadingAdventure from "./LoadingAdventure";
import { isEmptyObject } from "@/consts/utils";


interface InternacionalAdventuresProps {
  useAdventureHookParam?: UseAdventure;
}
const RoutesSection = ({ useAdventureHookParam }: InternacionalAdventuresProps) => {
  console.log(`Llegó el use useAdventureHookParam: ${JSON.stringify(useAdventureHookParam, null, 2)}`)
  let iternationalUseAdventures = useAdventureHookParam

  if (isEmptyObject(iternationalUseAdventures)) {
    iternationalUseAdventures = useAdventures()
  }
  const { adventures, loading: loadingAdventures, error } = iternationalUseAdventures

  if (loadingAdventures) {
    console.log('Cargando aventuras internacionales...')
  }

  const internationalCatogey: Category = 'Internacional'
  const internationalRoutes = adventures.filter(route => {
    return route.category === internationalCatogey
  });

  return (
    <section id="rutas" className="py-14 lg:py-20 bg-background">
      <div className="container mx-auto px-4">

        <div className="hidden lg:block">
          {/* Desktop Layout */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-title text-4xl md:text-5xl font-secondary leading-tight tracking-wide">
              RUTAS INTERNACIONALES
            </h2>
            <Button
              variant="default"
              className="font-body view-all-routes rounded-full px-8 hover:bg-primary-hover"
              onClick={() => window.location.href = '/rutas?category=Internacional'}
            >
              VER TODAS LAS RUTAS
            </Button>
          </div>

          {/* Loading State */}
          <LoadingAdventure loadingAdventures={loadingAdventures} ></LoadingAdventure>

          {/* Route Row */}
          < RouteRows routes={internationalRoutes} />
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
              className="font-body w-2/3 h-12 rounded-full py-4 text-lg bg-primary hover:bg-primary-hover"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              VER TODAS LAS RUTAS
            </Button>
          </div>

          {/* Route Card */}
          < RouteCards routes={internationalRoutes} />
        </div>
      </div>
    </section>
  );
};

export default RoutesSection;