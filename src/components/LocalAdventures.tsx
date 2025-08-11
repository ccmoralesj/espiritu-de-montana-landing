import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Route } from "@/interfaces/Route";
import { localRoutes } from "@/db/routes";
import LocalRouteCard from "./RouteLanding/LocalRouteCard";

const LocalAdventures = () => {
  const [selectedType, setSelectedType] = useState("AVENTURA");
  const [selectedLocation, setSelectedLocation] = useState("JERICÓ");

  const adventureTypes = ["AVENTURA", "GASTRONÓMICOS", "CULTURALES"];
  const locations = localRoutes.map(route => route.title.toUpperCase())

  // Sample data - you can replace with actual data
  const sampleRoute: Route = localRoutes[0]

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
        {localRoutes.map((route) => (
          <LocalRouteCard route={route} selectedLocation={selectedLocation} />
        ))}
      </div>
    </section>
  );
};

export default LocalAdventures;