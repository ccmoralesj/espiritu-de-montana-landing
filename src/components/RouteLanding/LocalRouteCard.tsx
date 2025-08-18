import { Button } from "@/components/ui/button";
import { Adventure } from "@/interfaces/Adventure";
import { Card } from "../ui/card";
import { formatDateLong, formatPrice } from "@/consts/utils";
import { ImagePlaceholder } from "../ui/image-placeholder";
import { useNavigateWithSlug } from "@/hooks/use-navigation-with-slug";

interface OneRouteProps {
  adventure: Adventure;
  selectedLocation: string;
}

const LocalRouteCard: React.FC<OneRouteProps> = ({ adventure, selectedLocation }) => {
  const { goToAdventure } = useNavigateWithSlug();

  return (
    <>
      {/* Image */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center
            ${selectedLocation === adventure.title.toUpperCase()
          ? "block"
          : "hidden"
        }`}>
        <div className="">
          <Card className="overflow-hidden border-0 shadow-lg rounded-3xl">
            {adventure.image.large !== "" ?
              (<img
                src={adventure.image.large}
                alt={adventure.title}
                loading="lazy"
                className="w-full h-80 lg:h-96 object-cover"
              />
              ) : (
                <ImagePlaceholder width="100%" height="20rem" />
              )}
          </Card>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h3 className="font-title text-3xl md:text-4xl text-secondary leading-tight tracking-wide">
            {adventure.title}
          </h3>

          <p className="font-body text-xl text-secondary leading-tight">
            {adventure.shortDescription}
          </p>

          {/* Metadata */}
          <div className="flex flex-col gap-4 md:flex-row mdgap-8">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-body font-semibold text-secondary">{adventure.capacity - adventure.riders} cupos disp</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-body font-semibold text-secondary">{formatDateLong(adventure.firstDate)}</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              <span className="font-body font-semibold text-secondary">{formatPrice(adventure.price, adventure.currency)}</span>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="space-y-4">
            {adventure.longDescription.split('\n\n').map((paragraph, index) => (
              <p key={index} className="font-body text-muted-foreground leading-tight">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              variant="outline"
              className="font-body text-lg px-8 py-3 rounded-full border-secondary text-secondary text-lg tracking-wider hover:border-secondary hover:text-white"
              onClick={() => goToAdventure(adventure)}
            >
              CONOCER MÁS
            </Button>
            <Button
              className="font-body text-lg px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              RESERVAR
            </Button>
          </div>
        </div>
      </div>
    </>
  )
};

export default LocalRouteCard;