import { Button } from "@/components/ui/button";
import { Route } from "@/interfaces/Route";
import { CardContent } from "../ui/card";
import OneRouteCard from "./OneRouteCard";

interface RouteProps {
  routes: Route[];
  handleRouteClick: (route: Route) => void;
}

const RouteCards: React.FC<RouteProps> = ({ routes, handleRouteClick }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center lg:justify-items-start">
        {routes.map((route, index) => (
          <div
            key={index}
            className="group h-[37rem] w-80 border-0 cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 transform hover:-translate-y-4"
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