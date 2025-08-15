import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { formatDateLong, formatPrice } from "@/consts/utils";
import { Adventure } from "@/interfaces/Adventure";

interface OneRouteProps {
  route: Adventure;
}

const OneRouteCard: React.FC<OneRouteProps> = ({ route }) => {
  return (
    <>
      {/* Route Image */}
      <div className="w-full h-44 rounded-2xl overflow-hidden">
        {route.image.large !== "" ?
          (<img
            src={route.image.large}
            alt={route.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          ) : (
            <ImagePlaceholder width="100%" height="100%" />
          )}
      </div>

      {/* Date */}
      <div className="font-body text-muted-foreground">
        {formatDateLong(route.firstDate)}
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
          <span>{formatPrice(route.price, route.currency)}</span>
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