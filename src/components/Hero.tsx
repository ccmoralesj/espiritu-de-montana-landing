import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cycling-mountains.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          VIVE EL MUNDO
          <br />
          <span className="text-primary">EN DOS RUEDAS</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Descubre paisajes extraordinarios y vive aventuras auténticas en las montañas de América Latina. 
          Bikepacking y ciclismo de montaña para conectar con la naturaleza.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg px-8 py-4 whatsapp-main-cta"
            onClick={() => window.open('https://wa.me/1234567890', '_blank')}
          >
            Planea tu Aventura
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4 border-white/40 text-white hover:bg-white/10"
            onClick={() => document.getElementById('rutas')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Rutas
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;