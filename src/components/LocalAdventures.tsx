import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Route } from "@/interfaces/Route";

const LocalAdventures = () => {
  const [selectedType, setSelectedType] = useState("AVENTURA");
  const [selectedLocation, setSelectedLocation] = useState("JERICÓ");

  const adventureTypes = ["AVENTURA", "GASTRONÓMICOS", "CULTURALES"];
  const locations = ["JERICÓ", "CONCEPCIÓN", "NORCASIA", "AMALFI", "SONSÓN"];

  // Sample data - you can replace with actual data
  const sampleRoute: Route = {
    title: "JERICÓ",
    date: "2024-03-15",
    location: "Jericó, Antioquia",
    short_description: "Donde cada calle cuenta una historia y cada pedalada es una experiencia",
    long_description: "Siente la magia de este pueblo encantador enclavado en la montaña. Jericó te invita a recorrer sus coloridas calles, conocer su historia y respirar aire fresco mientras ruedas junto a quienes comparten tu pasión por la bici.\n\nPrepara tu grupo y déjate llevar por rutas llenas de cultura, tradición y paisajes que enamoran.",
    image: "https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg",
    difficulty: "Intermedio",
    price: "$2.700.000",
    duration: "2-3 Días",
    category: "nacional"
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <span className="flex items-center justify-between">
          {/* Title */}
          <h2 className="font-title text-4xl mb-6 md:text-5xl text-secondary leading-tight tracking-wide md:mb-12">
            AVENTURAS LOCALES
          </h2>

          {/* Adventure Type Filters */}
          <div className="mb-8">
            {/* Desktop Layout */}
            <div className="hidden md:flex gap-4">
              {adventureTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  className={`font-body text-lg px-8 py-3 view-all-routes rounded-full transition-all ${selectedType === type
                    ? "text-white"
                    : "border-secondary text-secondary hover:bg-primary hover:text-white"
                    }`}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </span>

        {/* Mobile Slider */}
        <div className="md:hidden mb-6">
          <div className="flex gap-4 pb-4 overflow-x-auto scrollbar-hide">
            {adventureTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                className={`font-body text-lg px-8 py-3 rounded-full whitespace-nowrap flex-shrink-0 transition-all ${selectedType === type
                  ? "text-white"
                  : "border-secondary text-secondary hover:bg-primary hover:text-white"
                  }`}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-border mb-8"></div>

        {/* Location Filters */}
        <div className="mb-8">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
              {locations.map((location, index) => (
                <div key={location} className="flex items-center gap-6">
                  <button
                    onClick={() => setSelectedLocation(location)}
                    className={`font-body text-lg transition-all ${selectedLocation === location
                      ? "text-primary hover:font-medium hover:mb-1"
                      : "text-muted-foreground hover:text-secondary hover:font-medium hover:mb-1"
                      }`}
                  >
                    {location}
                  </button>
                  {index < locations.length - 1 && (
                    <span className="text-muted-foreground">•</span>
                  )}
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="font-body text-sm px-6 py-2 rounded-full border-secondary text-secondary hover:border-secondary hover:text-white hover:bg-primary ml-auto"
            >
              VER TODOS
            </Button>
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden">
            <div className="flex gap-6 overflow-x-auto scrollbar-hide">
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => setSelectedLocation(location)}
                  className={`font-body text-lg whitespace-nowrap flex-shrink-0 transition-all ${selectedLocation === location
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-border mb-12"></div>

        {/* Route Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="">
            <Card className="overflow-hidden border-0 shadow-lg rounded-3xl">
              <img
                src={sampleRoute.image}
                alt={sampleRoute.title}
                className="w-full h-80 lg:h-96 object-cover"
              />
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="font-title text-3xl md:text-4xl text-secondary leading-tight tracking-wide">
              {sampleRoute.title}
            </h3>

            <p className="font-body text-xl text-secondary leading-tight">
              {sampleRoute.short_description}
            </p>

            {/* Metadata */}
            <div className="flex flex-col gap-4 md:flex-row mdgap-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="font-body font-semibold text-secondary">Grupo de 3 pax</span>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-body font-semibold text-secondary">{sampleRoute.duration}</span>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span className="font-body font-semibold text-secondary">{sampleRoute.price}</span>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="space-y-4">
              {sampleRoute.long_description.split('\n\n').map((paragraph, index) => (
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
      </div>
    </section>
  );
};

export default LocalAdventures;