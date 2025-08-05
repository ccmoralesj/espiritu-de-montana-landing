import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Calendar, Tag } from "lucide-react";

const ReasonsToJoin = () => {
  const categories = [
    { name: "AVENTURA", active: true },
    { name: "GASTRONÓMICOS", active: false },
    { name: "CULTURALES", active: false }
  ];

  const locations = ["JERICÓ", "CONCEPCIÓN", "NORCACIA"];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h1 className="font-title text-4xl md:text-5xl text-foreground mb-8 font-bold leading-tight tracking-wide">
          AVENTURAS LOCALES
        </h1>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Category Pills */}
          <div className="flex gap-4 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-body text-sm font-medium transition-colors ${
                  category.active
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Location Filter */}
          <div className="flex items-center justify-between mb-12 pb-4 border-b border-border">
            <div className="flex items-center gap-2 text-muted-foreground font-body">
              <span className="text-primary font-medium">JERICÓ</span>
              <span>•</span>
              <span>CONCEPCIÓN</span>
              <span>•</span>
              <span>NORCACIA</span>
            </div>
            <Button variant="outline" className="rounded-full px-6 font-body">
              VER TODOS
            </Button>
          </div>

          {/* Adventure Card */}
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="flex">
              {/* Image */}
              <div className="w-1/2">
                <img
                  src="/lovable-uploads/0932f491-6ceb-467f-8f54-2ddeec360576.png"
                  alt="Jericó"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="w-1/2 p-8 space-y-6">
                <h2 className="font-title text-3xl text-foreground font-bold leading-tight tracking-wide">
                  JERICÓ
                </h2>
                
                <p className="font-body text-foreground text-lg leading-relaxed">
                  Donde cada calle cuenta una historia y cada pedalada es una experiencia
                </p>

                {/* Info Icons */}
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <span className="font-body text-foreground">Grupo de 3 pax</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <span className="font-body text-foreground">2-3 Días</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-5 h-5 text-muted-foreground" />
                    <span className="font-body text-foreground">$2.700.000</span>
                  </div>
                </div>

                <p className="font-body text-muted-foreground leading-relaxed">
                  Siente la magia de este pueblo encantador enclavado en la montaña. Jericó te invita 
                  a recorrer sus coloridas calles, conocer su historia y respirar aire fresco mientras 
                  ruedas junto a quienes comparten tu pasión por la bici.
                </p>

                <p className="font-body text-muted-foreground leading-relaxed">
                  Prepara tu grupo y déjate llevar por rutas llenas de cultura, tradición y paisajes que 
                  enamoran.
                </p>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" className="rounded-full px-8 font-body">
                    CONOCER MÁS
                  </Button>
                  <Button className="rounded-full px-8 font-body bg-primary hover:bg-primary-hover">
                    RESERVAR
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {/* Category Pills - Horizontal Slider */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.slice(0, 2).map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-body text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors ${
                  category.active
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Location Filter - Horizontal Slider */}
          <div className="overflow-x-auto pb-4 border-b border-border">
            <div className="flex items-center gap-2 text-muted-foreground font-body whitespace-nowrap">
              <span className="text-primary font-medium">JERICÓ</span>
              <span>•</span>
              <span>CONCEPCIÓN</span>
              <span>•</span>
              <span>NORC...</span>
            </div>
          </div>

          {/* Adventure Card */}
          <Card className="overflow-hidden border-0 shadow-lg">
            {/* Image */}
            <div className="w-full">
              <img
                src="/lovable-uploads/5ab349b6-7a6e-432f-bd02-1a5c3b192a17.png"
                alt="Jericó"
                className="w-full h-64 object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="p-6 space-y-4">
              <h2 className="font-title text-2xl text-foreground font-bold leading-tight tracking-wide">
                JERICÓ
              </h2>
              
              <p className="font-body text-foreground leading-relaxed">
                Donde cada calle cuenta una historia y cada pedalada es una experiencia
              </p>

              {/* Info Icons */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-muted-foreground" />
                  <span className="font-body text-foreground">Grupo de 3 pax</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <span className="font-body text-foreground">2-3 Días</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-5 h-5 text-muted-foreground" />
                  <span className="font-body text-foreground">$2.700.000</span>
                </div>
              </div>

              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                Siente la magia de este pueblo encantador enclavado en la montaña. Jericó te invita 
                a recorrer sus coloridas calles, conocer su historia y respirar aire fresco mientras 
                ruedas junto a quienes comparten tu pasión por la bici.
              </p>

              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                Prepara tu grupo y déjate llevar por rutas llenas de cultura, tradición y paisajes que enamoran.
              </p>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="rounded-full px-6 font-body flex-1">
                  CONOCER MÁS
                </Button>
                <Button className="rounded-full px-6 font-body bg-primary hover:bg-primary-hover flex-1">
                  RESERVAR
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReasonsToJoin;