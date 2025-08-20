import { Button } from "@/components/ui/button";
import { Adventure } from "@/interfaces/Adventure";
import { Card } from "../ui/card";
import { contactThruWhatsapp, formatDateLong, formatPrice } from "@/consts/utils";
import { ImagePlaceholder } from "../ui/image-placeholder";
import { useNavigateWithSlug } from "@/hooks/use-navigation-with-slug";
import { Calendar, CalendarClock, CircleDollarSign } from "lucide-react";

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
              <CalendarClock className="w-5 h-5 text-muted-foreground" />
              <span className="font-body font-semibold text-secondary">{formatDateLong(adventure.firstDate)}</span>
            </div>

            <div className="flex items-center gap-2">
              <CircleDollarSign className="w-5 h-5 text-muted-foreground" />
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
              onClick={() => contactThruWhatsapp({
                adventureTitle: adventure.title,
                price: adventure.price,
                currency: adventure.currency,
                date: adventure.firstDate,
              })}
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