import { Button } from "@/components/ui/button";
import { assetsFolders, jsDelivrCDN, jsDelivrRepo } from "@/consts/assets";
import { Play, X } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [activeTab, setActiveTab] = useState<'internacionales' | 'nacionales'>('nacionales');
  const [showVideo, setShowVideo] = useState(false);

  const heroImage = `${jsDelivrCDN}/${jsDelivrRepo}/${assetsFolders.LANDING}/new-hero.webp`
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Video/Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
      </div>

      {/* Content */}
      <div className="top-40 lg:top-0 relative z-10 container mx-auto px-4 h-full flex flex-col justify-start lg:justify-center">
        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-8 items-center pb-20">
          {/* Left Side - Main Hero Text */}
          <div className="text-secondary space-y-6 max-w-xl">
            <h1 className="font-title text-6xl lg:text-7xl font-secondary leading-tight tracking-wide">
              VIVE EL MUNDO
              <br />
              EN DOS RUEDAS
            </h1>

            <Button
              variant="outline"
              className="bg-black/40 border-white/30 text-white hover:bg-white/10 rounded-full px-6 py-3"
              onClick={() => setShowVideo(true)}
            >
              <Play className="w-5 h-5 mr-2" />
              INICIAR VIDEO
            </Button>
          </div>

          {/* Right Side - Adventure Info */}
          <div className="text-secondary space-y-6 justify-self-end max-w-xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-body font-bold">
                Aquí empieza tu aventura!
              </h2>
              <p className="font-body text-lg leading-relaxed">
                Pedalea entre los Andes o conquista senderos locales. Activa el modo explorador y cambia entre rutas internacionales o locales.
              </p>

              <p className="text-lg font-body font-bold">
                ¡El destino lo eliges tú, la bici es tu pasaporte!
              </p>
            </div>

            {/* Toggle Buttons */}
            <div className="font-body flex border-2 border-secondary rounded-full p-1 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab('internacionales')}
                className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition-all ${activeTab === 'internacionales'
                  ? 'bg-secondary text-white'
                  : 'text-secondary hover:bg-white/20'
                  }`}
              >
                INTERNACIONALES
              </button>
              <button
                onClick={() => setActiveTab('nacionales')}
                className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition-all ${activeTab === 'nacionales'
                  ? 'bg-secondary text-white'
                  : 'text-secondary hover:bg-white/20'
                  }`}
              >
                NACIONALES
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden text-secondary space-y-8 pb-20">
          {/* Main Hero Text */}
          <div className="space-y-4">
            <h1 className="font-title text-4xl md:text-5xl font-secondary leading-tight tracking-wide">
              VIVE EL MUNDO
              <br />
              EN DOS RUEDAS
            </h1>
          </div>
          {/* Adventure Info */}
          <div className="pb-20">
            <div className="space-y-3 mb-6">
              <h2 className="text-xl font-body font-bold">
                Aquí empieza tu aventura!
              </h2>
              <p className="font-body text-base leading-relaxed">
                Pedalea entre los Andes o conquista senderos locales. Activa el modo explorador y cambia entre rutas internacionales o locales.
              </p>

              <p className="text-base font-body font-bold">
                ¡El destino lo eliges tú, la bici es tu pasaporte!
              </p>
            </div>

            {/* Toggle Buttons */}
            <div className="font-body flex border-2 border-secondary rounded-full p-1 backdrop-blur-sm mb-6">
              <button
                onClick={() => setActiveTab('internacionales')}
                className={`flex-1 py-3 px-4 rounded-full text-sm font-medium transition-all ${activeTab === 'internacionales'
                  ? 'bg-secondary text-white'
                  : 'text-secondary hover:bg-white/20'
                  }`}
              >
                INTERNACIONALES
              </button>
              <button
                onClick={() => setActiveTab('nacionales')}
                className={`flex-1 py-3 px-4 rounded-full text-sm font-medium transition-all ${activeTab === 'nacionales'
                  ? 'bg-secondary text-white'
                  : 'text-secondary hover:bg-white/20'
                  }`}
              >
                NACIONALES
              </button>
            </div>
            <div className="flex justify-center items-center mt-28">
              <Button
                variant="outline"
                className="bg-black/50 border-white/40 text-white hover:bg-white/10 rounded-full px-8 py-5"
                onClick={() => setShowVideo(true)}
              >
                <Play className="w-5 h-5 mr-2" />
                INICIAR VIDEO
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal / Modo Teatro */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)} // Cierra al hacer click en el fondo
        >
          {/* Botón cerrar */}
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
          >
            <X className="w-8 h-8 text-primary" />
          </button>

          {/* Contenedor del video */}
          <div
            className="w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()} // Evita que el click dentro cierre el modal
          >
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Video de presentación"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;