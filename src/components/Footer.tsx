import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">EM</span>
              </div>
              <span className="font-bold text-xl">Espíritu de Montaña</span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Conectamos aventureros con la naturaleza más pura de América Latina a través del ciclismo de montaña y bikepacking.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <a href="#rutas" className="block text-secondary-foreground/80 hover:text-primary transition-colors">
                Nuestras Rutas
              </a>
              <a href="#experiencias" className="block text-secondary-foreground/80 hover:text-primary transition-colors">
                Experiencias
              </a>
              <a href="#nosotros" className="block text-secondary-foreground/80 hover:text-primary transition-colors">
                Sobre Nosotros
              </a>
              <a href="#contacto" className="block text-secondary-foreground/80 hover:text-primary transition-colors">
                Contacto
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-bold text-lg mb-4">Destinos Populares</h3>
            <div className="space-y-2">
              <a href="#" className="block text-secondary-foreground/80 hover:text-primary transition-colors">
                Colombia
              </a>
              <a href="#" className="block text-secondary-foreground/80 hover:text-primary transition-colors">
                Panamá
              </a>
              <a href="#" className="block text-secondary-foreground/80 hover:text-primary transition-colors">
                México
              </a>
              <a href="#" className="block text-secondary-foreground/80 hover:text-primary transition-colors">
                Bolivia
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <span className="text-secondary-foreground/80">+57 300 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <span className="text-secondary-foreground/80">hola@espiritudemontana.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1" />
                <span className="text-secondary-foreground/80">Medellín, Colombia</span>
              </div>
            </div>
            
            <Button 
              variant="adventure" 
              className="mt-6 footer-whatsapp-cta w-full"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Escríbenos por WhatsApp
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-foreground/60 text-sm">
              © 2024 Espíritu de Montaña. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;