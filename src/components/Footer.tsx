import { Button } from "@/components/ui/button";
import { Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        {/* Main Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-start lg:justify-items-between">
          {/* Brand */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="w-20">
              <img src="/logo-white.png" alt="Espíritu de Montaña" className="w-20" />
            </div>
            <nav className="flex flex-col font-body font-semibold text-white tracking-wide">
              <a href="#tours" className="hover:text-primary transition-colors font-medium">
                RUTAS
              </a>
              <a href="#tours" className="hover:text-primary transition-colors font-medium">
                TOURS
              </a>
              <a href="#espiritu" className="hover:text-primary transition-colors font-medium">
                NUESTRO ESPÍRITU
              </a>
              <a href="#tribu" className="hover:text-primary transition-colors font-medium">
                TRIBU DE MONTAÑA
              </a>
            </nav>
          </div>

          {/* Quick Links */}
          <div className="flex items-end">
            <div className="flex flex-col font-body font-semibold text-white tracking-wide">
              <a href="#tribu" className="hover:text-primary transition-colors font-medium">
                INGLÉS
              </a>
              <a href="#tribu" className="hover:text-primary transition-colors font-medium">
                ESPAÑOL
              </a>
            </div>
          </div>

          {/* Empty Column */}
          <div className="flex items-end">
            <div className="flex flex-col font-body font-semibold text-white tracking-wide">
              <a href="#tribu" className="hover:text-primary transition-colors font-medium">
                TÉRMINOS DE SERVICIO
              </a>
              <a href="#tribu" className="hover:text-primary transition-colors font-medium">
                POLÍTICAS DE PRIVACIDAD
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-end w-full justify-start lg:justify-end">
            <div className="flex flex-col w-full font-body text-white tracking-wide justify-start lg:justify-end">
              {/* Buttons Span */}
              <span className="flex space-x-4 py-4 w-full justify-center lg:justify-end order-2">
                <Button
                  variant='default'
                  onClick={() => window.open('https://wa.me/573054499987', '_blank')}
                >
                  Hablemos por WhatsApp
                </Button>
                <Instagram size={34}
                  className="cursor pointer"
                  onClick={() => window.open('https://www.instagram.com/espiritu.montana/', '_blank')}
                />
              </span>
              {/* Contact Span */}
              <span className="flex order-1 lg:justify-around">
                <div className="flex flex-col space-y-2 ">
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-primary" />
                    <span className="text-secondary-foreground/80">(+57) 305 449 9987</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={18} className="text-primary" />
                    <span className="text-secondary-foreground/80">info@edm.com.co</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin size={18} className="text-primary mt-1" />
                    <span className="text-secondary-foreground/80">Medellín, Colombia</span>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-foreground/60 text-sm">
              © 2025 Espíritu de Montaña. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Somos Espíritu
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Somos Movimiento
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;