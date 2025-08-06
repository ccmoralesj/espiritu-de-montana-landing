import gearImage from "@/assets/cycling-gear.png";
import helmetImage from "@/assets/gear-helmet.png";
import backpackImage from "@/assets/gear-backpack.png";
import bottleImage from "@/assets/gear-bottle.png";
import accessoriesImage from "@/assets/gear-accessories.png";
import { Button } from "./ui/button";

const GearSection = () => {
  const gearItems = [
    {
      label: "PROTECCIÓN",
      image: helmetImage,
      alt: "Casco de protección para ciclismo"
    },
    {
      label: "BACKPACK Y ROPA CÓMODA",
      image: backpackImage,
      alt: "Mochila y ropa cómoda para aventuras"
    },
    {
      label: "HIDRATACIÓN",
      image: bottleImage,
      alt: "Botella de hidratación"
    },
    {
      label: "GUANTES Y GAFAS",
      image: accessoriesImage,
      alt: "Guantes y gafas de protección"
    }
  ];

  return (
    <section className="relative py-20 bg-accent overflow-hidden">
      {/* Green Vector Background */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <path
            d="M0,600 Q400,500 800,550 T1200,550 L1200,750 Q900,700 600,750 T0,750 Z"
            fill="hsl(var(--primary))"
            fillOpacity="0.06"
          />
          <path
            d="M0,350 Q400,320 800,350 T1200,350 L1200,420 Q800,390 400,420 T0,420 Z"
            fill="hsl(var(--primary))"
            fillOpacity="0.02"
          />
          <path
            d="M0,100 Q400,50 800,100 T1200,100 L1200,250 Q900,200 600,250 T0,250 Z"
            fill="hsl(var(--primary))"
            fillOpacity="0.06"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative w-full h-[34rem] max-w-9xl mx-auto">
            {/* Central Bike Image */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <span className="flex flex-col items-center">
                <img
                  src={gearImage}
                  alt="Bicicleta de montaña"
                  className="w-[32rem] h-auto object-contain"
                />
                <div className="text-center mb-4 mt-4">
                  <h2 className="font-title text-3xl md:text-4xl text-secondary leading-tight tracking-wide mb-4">
                    NUESTRO EQUIPO RECOMIENDA
                  </h2>
                  <p className="font-body text-lg text-muted-foreground">
                    ¿Qué llevar para las rutas?
                  </p>
                </div>
              </span>
            </div>

            {/* Gear Items positioned around the bike */}
            <section className="flex w-full gap-40 -translate-y-[7%]">
              <aside className="flex flex-col gap-20 w-full items-center justify-between">
                {/* Top Left - Helmet */}
                <div className="h-64 text-center flex flex-col items-center">
                  <div className="w-48 h-48">
                    <img
                      src={gearItems[0].image}
                      alt={gearItems[0].alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <Button
                    variant='outline'
                    className="font-body text-sm font-medium text-primary rounded-full"
                    onClick={() => alert('hello')}
                  >
                    {gearItems[0].label}
                  </Button>

                </div>

                {/* Bottom Left - Water Bottle */}
                <div className="h-64 text-center flex flex-col items-center">
                  <div className="w-52 h-52">
                    <img
                      src={gearItems[2].image}
                      alt={gearItems[2].alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <Button
                    variant='outline'
                    className="font-body text-sm font-medium text-primary rounded-full"
                    onClick={() => alert('hello')}
                  >
                    {gearItems[2].label}
                  </Button>

                </div>
              </aside>
              <aside className="flex flex-col w-full items-center justify-between">
                {/* Top Right - Backpack */}
                <div className="h-64 text-center flex flex-col items-center">
                  <div className="w-52 h-52">
                    <img
                      src={gearItems[1].image}
                      alt={gearItems[1].alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <Button
                    variant='outline'
                    className="font-body text-sm font-medium text-primary rounded-full"
                    onClick={() => alert('hello')}
                  >
                    {gearItems[1].label}
                  </Button>

                </div>

                {/* Bottom Right - Gloves & Sunglasses */}
                <div className="h-64 text-center flex flex-col items-center">
                  <div className="w-52 h-52">
                    <img
                      src={gearItems[3].image}
                      alt={gearItems[3].alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <Button
                    variant='outline'
                    className="font-body text-sm font-medium text-primary rounded-full"
                    onClick={() => alert('hello')}
                  >
                    {gearItems[3].label}
                  </Button>

                </div>
              </aside>
            </section>

          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8 flex flex-col items-center">
          <span className="font-body font-semibold text-xs font-medium text-secondary">
            haz click en algún ítem
          </span>
          {/* Central Title and Bike */}
          <div className="absolute transform translate-y-1/2 text-center">
            <div className="h-auto mx-auto mb-6">
              <img
                src={gearImage}
                alt="Bicicleta de montaña"
                className="w-full h-full object-contain"
              />
              <div className="text-center mb-4 mt-4">
                <h2 className="font-title text-xl text-secondary leading-tight tracking-wide mb-1">
                  NUESTRO EQUIPO RECOMIENDA
                </h2>
                <p className="font-body text-sm text-muted-foreground">
                  ¿Qué llevar para las rutas?
                </p>
              </div>
            </div>
          </div>

          {/* Gear Items Grid */}
          <div className="grid grid-cols-2 gap-6 items-center">
            {gearItems.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 mx-auto mb-80">
                  <a href="#link">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-contain"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
};

export default GearSection;