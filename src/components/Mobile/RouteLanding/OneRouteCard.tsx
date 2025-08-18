import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { formatDateLong, formatPrice } from "@/consts/utils";
import { useNavigateWithSlug } from "@/hooks/use-navigation-with-slug";
import { Adventure } from "@/interfaces/Adventure";

interface OneRouteProps {
  adventure: Adventure;
}

const OneRouteCard: React.FC<OneRouteProps> = ({ adventure }) => {
  const { goToAdventure } = useNavigateWithSlug();

  return (
    <>
      {/* Route Image */}
      <div className="w-full h-44 rounded-2xl overflow-hidden">
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

      {/* Date */}
      <div className="font-body text-muted-foreground">
        {formatDateLong(adventure.firstDate)}
      </div>

      {/* Metadata Icons */}
      <div className="font-body flex items-center gap-3 text-base text-muted-foreground justify-between whitespace-nowrap">
        <div className="flex items-center gap-2">
          <span className="text-lg">▲</span>
          <span>{adventure.difficulty}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg">📍</span>
          <span>{adventure.duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg">💰</span>
          <span>{formatPrice(adventure.price, adventure.currency)}</span>
        </div>
      </div>

      {/* Route Title */}
      <h3 className="text-2xl font-title text-foreground uppercase leading-tight">
        {adventure.title}
      </h3>

      {/* Description */}
      <p className="font-body text-muted-foreground text-base leading-relaxed">
        {adventure.shortDescription}
      </p>

      {/* Detail Button */}
      <Button
        variant="outline"
        className="w-fit rounded-full px-8 py-3 font-body border-secondary text-secondary text-lg tracking-wider"
        onClick={() => goToAdventure(adventure)}
      >
        VER DETALLE
      </Button>
    </>
  )
};

export default OneRouteCard;