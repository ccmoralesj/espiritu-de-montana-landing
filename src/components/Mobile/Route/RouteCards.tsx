import { Button } from "@/components/ui/button";
import { Route } from "@/interfaces/Route";
import OneRouteCard from "./OneRouteCard";

interface RouteProps {
  routes: Route[];
}

const RouteCards: React.FC<RouteProps> = ({ routes }) => {
  return (
    <>
      <div className="block">
        <div className="space-y-8 pt-4">
          {routes.map((route, index) => (
            <div className="w-[92%] mx-auto space-y-4 pb-8 border-b border-border last:border-b-0">
              <OneRouteCard route={route} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RouteCards;