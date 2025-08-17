import { Button } from "@/components/ui/button";
import { Adventure } from "@/interfaces/Adventure";
import OneRouteCard from "./OneRouteCard";

interface RouteProps {
  routes: Adventure[];
}

const RouteCards: React.FC<RouteProps> = ({ routes }) => {
  return (
    <>
      <div className="block">
        <div className="space-y-8 pt-4">
          {routes.map((route) => (
            <div key={route.id} className="w-[92%] mx-auto space-y-4 pb-8 border-b border-border last:border-b-0">
              <OneRouteCard adventure={route} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RouteCards;