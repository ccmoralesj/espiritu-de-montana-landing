import { Button } from "@/components/ui/button";
import { formatDateLong, formatPrice } from "@/consts/utils";
import { Adventure } from "@/interfaces/Adventure";
import { ImagePlaceholder } from "../ui/image-placeholder";

interface OneRouteProps {
  route: Adventure;
}

const OneRoute: React.FC<OneRouteProps> = ({ route }) => {
  return (
    <>
      {/* Date */}
      <span className="flex flex-col">
        <div className="text-muted-foreground text-sm font-medium min-w-[100px]">
          {formatDateLong(route.firstDate)}
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
          <span>{formatPrice(route.price, route.currency)}</span>
        </div>
      </div>

      {/* Image */}
      <div className="w-72 h-40 rounded-xl overflow-hidden">
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
    </>
  )
};

export default OneRoute;