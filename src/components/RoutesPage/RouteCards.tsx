import { Button } from "@/components/ui/button";
import { Route } from "@/interfaces/Route";
import { CardContent } from "../ui/card";
import OneRouteCard from "./OneRouteCard";

interface RouteProps {
  routes: Route[];
  handleRouteClick: (route: Route) => void;
  currentPage: number;
  routesPerPage: number;
}

const RouteCards: React.FC<RouteProps> = ({
  routes,
  handleRouteClick,
  currentPage,
  routesPerPage
}) => {
  // Calculate start and end indices for current page
  const startIndex = (currentPage - 1) * routesPerPage;
  const endIndex = startIndex + routesPerPage;
  const currentRoutes = routes.slice(startIndex, endIndex);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
        {currentRoutes.map((route, index) => (
          <div
            key={startIndex + index}
            className="group h-[37rem] w-full max-w-80 border-0 cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 transform hover:-translate-y-4"
            onClick={() => handleRouteClick(route)}
          >
            <OneRouteCard route={route} handleRouteClick={handleRouteClick} />
          </div>
        ))}
      </div>
    </>
  );
};

export default RouteCards;