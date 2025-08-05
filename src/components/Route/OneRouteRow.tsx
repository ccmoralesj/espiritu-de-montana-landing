import { Button } from "@/components/ui/button";
import { Route } from "@/interfaces/Route";

interface OneRouteProps {
  route: Route;
}

const OneRoute: React.FC<OneRouteProps> = ({ route }) => {
  return (
    <>
      {/* Date */}
      <span className="flex flex-col">
        <div className="text-muted-foreground text-sm font-medium min-w-[100px]">
          {route.date}
        </div>
      </span>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="font-title text-2xl md:text-3xl text-secondary uppercase leading-tight tracking-wide">
          {route.title}
        </h3>
        <p className="text-muted-foreground max-w-md">
          {route.short_description}
        </p>
        <Button
          variant="outline"
          className="font-body rounded-full px-6 border-secondary text-secondary"
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
          <span>{route.price}</span>
        </div>
      </div>

      {/* Image */}
      <div className="w-72 h-40 rounded-xl overflow-hidden">
        <img
          src={route.image}
          alt={route.title}
          className="w-full h-full object-cover"
        />
      </div>
    </>
  )
};

export default OneRoute;