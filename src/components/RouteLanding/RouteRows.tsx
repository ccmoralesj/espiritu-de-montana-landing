import { Button } from "@/components/ui/button";
import { Route } from "@/interfaces/Route";
import OneRoute from "./OneRouteRow";

interface RouteProps {
  routes: Route[];
}

const RouteRows: React.FC<RouteProps> = ({ routes }) => {
  return (
    <>
      <div className="block">
        <div className="space-y-8">
          {routes.map((route, index) => (
            <div key={index} className="font-body flex flex-row items-center justify-between gap-6 py-8 border-b border-border last:border-b-0">
              <OneRoute route={route} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RouteRows;