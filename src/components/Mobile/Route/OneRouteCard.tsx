import { Button } from "@/components/ui/button";
import { Route } from "@/interfaces/Route";

interface OneRouteProps {
  route: Route;
}

const OneRouteCard: React.FC<OneRouteProps> = ({ route }) => {
  return (
    <>
      {/* Route Image */}
      <div className="w-full h-44 rounded-2xl overflow-hidden">
        <img
          src={route.image}
          alt={route.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Date */}
      <div className="font-body text-muted-foreground">
        {route.date}
      </div>

      {/* Metadata Icons */}
      <div className="font-body flex items-center gap-3 text-base text-muted-foreground justify-between whitespace-nowrap">
        <div className="flex items-center gap-2">
          <span className="text-lg">▲</span>
          <span>{route.difficulty}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg">📍</span>
          <span>{route.duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg">💰</span>
          <span>{route.price}</span>
        </div>
      </div>

      {/* Route Title */}
      <h3 className="text-2xl font-title text-foreground uppercase leading-tight">
        {route.title}
      </h3>

      {/* Description */}
      <p className="font-body text-muted-foreground text-base leading-relaxed">
        {route.short_description}
      </p>

      {/* Detail Button */}
      <Button
        variant="outline"
        className="w-fit rounded-full px-8 py-3 font-body border-secondary text-secondary text-lg tracking-wider"
        onClick={() => window.open('https://wa.me/1234567890', '_blank')}
      >
        VER DETALLE
      </Button>
    </>
  )
};

export default OneRouteCard;