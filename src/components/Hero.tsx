import { Button } from "@/components/ui/button";
import { Play, Bike } from "lucide-react";
import heroImage from "@/assets/hero-cycling-mountains.jpg";
import { useState } from "react";

const Hero = () => {
  const [activeTab, setActiveTab] = useState<'internacionales' | 'nacionales'>('internacionales');

  return (
    <section className="relative h-screen flex items-center overflow-hidden mt-20">
      {/* Background Video/Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
        {/* Left Side - Main Hero Text */}
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-none">
            VIVE EL MUNDO
            <br />
            EN DOS RUEDAS
          </h1>
          
          <Button 
            variant="outline" 
            className="bg-black/20 border-white/30 text-white hover:bg-white/10 rounded-full px-6 py-3"
          >
            <Play className="w-5 h-5 mr-2" />
            INICIAR VIDEO
          </Button>
        </div>

        {/* Right Side - Adventure Info */}
        <div className="text-white space-y-6 lg:ml-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Aquí empieza tu aventura!
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Pedalea entre los Andes o conquista senderos locales. Activa el modo explorador y cambia entre rutas internacionales o locales.
            </p>
            
            <p className="text-lg md:text-xl font-bold text-white">
              ¡El destino lo eliges tú, la bici es tu pasaporte!
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex bg-white/10 rounded-full p-1 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('internacionales')}
              className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition-all ${
                activeTab === 'internacionales'
                  ? 'bg-white text-black'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              INTERNACIONALES
            </button>
            <button
              onClick={() => setActiveTab('nacionales')}
              className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition-all ${
                activeTab === 'nacionales'
                  ? 'bg-white text-black'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              NACIONALES
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Route Cards */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
            {/* Featured Route Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 min-w-[200px] border border-white/20">
              <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-4 mb-3 h-24 flex items-end">
                <div className="text-white">
                  <h3 className="font-bold text-sm">CUSCO Y</h3>
                  <h3 className="font-bold text-sm">MACHU PICCHU</h3>
                </div>
              </div>
              <div className="text-white">
                <p className="font-bold text-lg">$2.700.000</p>
                <Button 
                  size="sm" 
                  className="bg-primary text-white rounded-full mt-2 w-full hover:bg-primary-hover"
                >
                  <Bike className="w-4 h-4 mr-2" />
                  RODEMOS
                </Button>
              </div>
            </div>

            {/* Other Route Indicators */}
            <div className="flex items-center space-x-8 text-white text-center">
              <div className="flex flex-col items-center space-y-2">
                <Bike className="w-8 h-8" />
                <span className="text-sm font-medium">CANAL DE PANAMÁ</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Bike className="w-8 h-8" />
                <span className="text-sm font-medium">RIVIERA MAYA</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Bike className="w-8 h-8" />
                <span className="text-sm font-medium">ECUADOR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;