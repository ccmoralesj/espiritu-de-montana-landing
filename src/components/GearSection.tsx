import gearImage from "@/assets/cycling-gear.jpg";
import helmetImage from "@/assets/gear-helmet.png";
import backpackImage from "@/assets/gear-backpack.png";
import bottleImage from "@/assets/gear-bottle.png";
import accessoriesImage from "@/assets/gear-accessories.png";

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
            d="M0,300 Q300,200 600,300 T1200,300 L1200,500 Q900,400 600,500 T0,500 Z" 
            fill="hsl(var(--primary))" 
            fillOpacity="0.1"
          />
          <path 
            d="M0,400 Q400,350 800,400 T1200,400 L1200,600 Q800,550 400,600 T0,600 Z" 
            fill="hsl(var(--primary))" 
            fillOpacity="0.08"
          />
          <path 
            d="M200,100 Q500,50 800,100 T1200,100 L1200,250 Q900,200 600,250 T200,250 Z" 
            fill="hsl(var(--primary))" 
            fillOpacity="0.06"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-title text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-wide mb-4">
            NUESTRO EQUIPO RECOMIENDA
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Que llevar para las rutas?
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative w-full h-[600px] max-w-5xl mx-auto">
            {/* Central Bike Image */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <img
                src={gearImage}
                alt="Bicicleta de montaña"
                className="w-72 h-auto object-contain"
              />
            </div>

            {/* Gear Items positioned around the bike */}
            {/* Top Left - Helmet */}
            <div className="absolute top-0 left-0">
              <div className="text-center">
                <div className="w-32 h-32 mb-4">
                  <img
                    src={gearItems[0].image}
                    alt={gearItems[0].alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="inline-block px-6 py-2 bg-primary/20 rounded-full border-2 border-primary/30">
                  <span className="font-body text-sm font-medium text-primary">
                    {gearItems[0].label}
                  </span>
                </div>
              </div>
            </div>

            {/* Top Right - Backpack */}
            <div className="absolute top-0 right-0">
              <div className="text-center">
                <div className="w-32 h-32 mb-4">
                  <img
                    src={gearItems[1].image}
                    alt={gearItems[1].alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="inline-block px-6 py-2 bg-primary/20 rounded-full border-2 border-primary/30">
                  <span className="font-body text-sm font-medium text-primary">
                    {gearItems[1].label}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Left - Water Bottle */}
            <div className="absolute bottom-0 left-0">
              <div className="text-center">
                <div className="w-32 h-32 mb-4">
                  <img
                    src={gearItems[2].image}
                    alt={gearItems[2].alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="inline-block px-6 py-2 bg-primary/20 rounded-full border-2 border-primary/30">
                  <span className="font-body text-sm font-medium text-primary">
                    {gearItems[2].label}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Right - Gloves & Sunglasses */}
            <div className="absolute bottom-0 right-0">
              <div className="text-center">
                <div className="w-32 h-32 mb-4">
                  <img
                    src={gearItems[3].image}
                    alt={gearItems[3].alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="inline-block px-6 py-2 bg-primary/20 rounded-full border-2 border-primary/30">
                  <span className="font-body text-sm font-medium text-primary">
                    {gearItems[3].label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {/* Central Title and Bike */}
          <div className="text-center">
            <div className="w-64 h-48 mx-auto mb-6">
              <img
                src={gearImage}
                alt="Bicicleta de montaña"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Gear Items Grid */}
          <div className="grid grid-cols-2 gap-6">
            {gearItems.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-3">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="inline-block px-4 py-2 bg-primary/20 rounded-full border-2 border-primary/30">
                  <span className="font-body text-xs font-medium text-primary">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GearSection;