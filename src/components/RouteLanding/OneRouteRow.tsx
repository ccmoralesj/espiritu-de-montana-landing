import { Button } from "@/components/ui/button";
import { formatDateLong, formatPrice } from "@/consts/utils";
import { Adventure } from "@/interfaces/Adventure";
import { ImagePlaceholder } from "../ui/image-placeholder";
import { useNavigateWithSlug } from "@/hooks/use-navigation-with-slug";
import { CircleDollarSign, MapPinPlus, Mountain } from "lucide-react";

interface OneRouteProps {
  adventure: Adventure;
}

const OneRoute: React.FC<OneRouteProps> = ({ adventure }) => {
  const { goToAdventure } = useNavigateWithSlug();

  return (
    <>
      {/* Date */}
      <span className="flex flex-col">
        <div className="text-muted-foreground text-sm font-medium min-w-[100px]">
          {formatDateLong(adventure.firstDate)}
        </div>
      </span>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="font-title text-2xl md:text-3xl text-secondary uppercase leading-tight tracking-wide">
          {adventure.title}
        </h3>
        <p className="text-muted-foreground max-w-md">
          {adventure.shortDescription}
        </p>
        <Button
          variant="outline"
          className="font-body rounded-full px-6 border-secondary text-secondary"
          onClick={() => goToAdventure(adventure)}
        >
          VER DETALLE
        </Button>
      </div>

      {/* Metadata */}
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Mountain />
          <span>{adventure.difficulty}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPinPlus />
          <span>{adventure.duration} días</span>
        </div>
        <div className="flex items-center gap-2">
          <CircleDollarSign />
          <span>{formatPrice(adventure.price, adventure.currency)}</span>
        </div>
      </div>

      {/* Image */}
      <div className="w-72 h-40 rounded-xl overflow-hidden">
        {adventure.image.large !== "" ?
          (<img
            src={adventure.image.large}
            alt={adventure.title}
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