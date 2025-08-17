import { Button } from "@/components/ui/button";
import { Adventure } from "@/interfaces/Adventure";
import { CardContent } from "../ui/card";
import { formatDateLong, formatPrice } from "@/consts/utils";
import { ImagePlaceholder } from "../ui/image-placeholder";
import { useNavigateWithSlug } from "@/hooks/use-navigation-with-slug";

interface RouteProps {
  adventure: Adventure
}

const OneRouteCard: React.FC<RouteProps> = ({ adventure }) => {
  const { goToAdventure } = useNavigateWithSlug()

  const capacityPercentage = (adventure.riders / adventure.capacity) * 100;
  const isFull = adventure.riders >= adventure.capacity;
  return (
    <>
      <div className="relative overflow-hidden rounded-2xl">
        {/* Image */}
        {adventure.image.large !== "" ?
          (<img
            src={adventure.image.large}
            alt={adventure.title}
            loading="lazy"
            className="w-full h-[29rem] object-cover transition-transform duration-500 group-hover:scale-110 drop-shadow-lg"
          />
          ) : (
            <ImagePlaceholder width="100%" height="29rem" />
          )}
        {/* Country/Location Badge (top-left) */}
        <div className="absolute top-4 left-4 z-50">
          <span className="bg-white/90 text-secondary font-semibold px-4 py-1 rounded-full shadow-sm text-sm">
            {adventure.location.toUpperCase()}
          </span>
        </div>

        {/* CERRADO pill (bottom-left) */}
        {isFull && (
          <div className="absolute bottom-6 left-2 right-4 transform translate-y-2 z-50">
            <span className="bg-adventure text-white px-4 py-2 rounded-full font-bold text-sm shadow-sm">
              CERRADO
            </span>
          </div>
        )}

        {/* Progress bar (bottom, centered) */}
        {!isFull && (
          <div className="absolute bottom-4 left-4 right-4 pointer-events-none z-50">
            <div className="relative">
              <div className="bg-white/40 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300 rounded-full"
                  style={{ width: `${Math.min(100, Math.round(capacityPercentage))}%` }}
                />
              </div>
              <div className="flex w-full justify-between absolute right-0 top-0 -translate-y-7 px-1.5 text-background/80 text-sm font-semibold drop-shadow">
                <span>
                  {formatDateLong(adventure.firstDate)}
                </span>
                <div className="">
                  {Math.round(capacityPercentage)}%
                </div>
              </div>
            </div>
          </div>
        )}


        <div className="absolute inset-0 pointer-events-none z-40 rounded-2xl">
          {/* Overlay visual: degradado oscuro + backdrop blur solo en la parte baja */}
          <div
            className="absolute inset-0 rounded-2xl bg-black/30 backdrop-blur-sm"
            style={{
              // máscara: 0% = transparente (arriba), 100% = mostrado (abajo)
              WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 10%, rgba(0,0,0,0) 33%)',
              maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 10%, rgba(0,0,0,0) 33%)'
            }}
          />
        </div>
      </div>

      <CardContent className="p-1 mt-2 ml-2">
        <div className="mb-2">
          <h3 className="font-title text-2xl text-secondary uppercase tracking-wide">
            {adventure.title}
          </h3>
          <div className="flex items-center gap-4">
            <p className="font-body text-muted-foreground text-md">Desde</p>
            <div className="font-body text-secondary text-2xl tracking-wide">
              {formatPrice(adventure.price, adventure.currency)}
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-32 h-8 font-body border-2 border-secondary text-secondary hover:bg-primary hover:text-white transition-all rounded-full py-1 text-md font-semibold tracking-wide"
          disabled={isFull}
          onClick={() => goToAdventure(adventure)}
        >
          VER DETALLE
        </Button>
      </CardContent>
    </>
  );
};

export default OneRouteCard;