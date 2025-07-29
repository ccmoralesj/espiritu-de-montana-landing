import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MessageCircle, Instagram, Bike } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Top contact bar */}
      <div className="absolute w-full bg-secondary text-white py-3 text-sm z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>hola@espiritumdemontana.com</span>
          </div>
          <div className="text-xl">›</div>
        </div>
      </div>

      {/* Main header */}
      <header className="absolute top-12 w-full backdrop-blur-md z-50 h-16 font-body tracking-wide">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            
            {/* Left - RUTAS Button */}
            <Button className="bg-primary text-white rounded-full px-6 py-2 font-semibold text-sm flex items-center space-x-2">
              <Bike className="w-4 h-4" />
              <span>RUTAS</span>
            </Button>

            {/* Center - Logo */}
            <div className="flex items-center justify-center">
              <img src="/logo.png" alt="Espíritu de Montaña" className="h-12" />
            </div>

            {/* Right - WhatsApp + Menu */}
            <div className="flex items-center space-x-4">
              <MessageCircle
                className="w-8 h-8 cursor-pointer hover:text-primary transition-colors"
                onClick={() => window.open('https://wa.me/573054499987', '_blank')}
              />
              <button onClick={toggleMenu} className="lg:hidden">
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#rutas" className="text-foreground hover:text-primary transition-colors font-medium">
                  RUTAS
                </a>
                <a href="#tours" className="text-foreground hover:text-primary transition-colors font-medium">
                  TOURS
                </a>
                <a href="#espiritu" className="text-foreground hover:text-primary transition-colors font-medium">
                  NUESTRO ESPÍRITU
                </a>
                <a href="#tribu" className="text-foreground hover:text-primary transition-colors font-medium">
                  TRIBU DE MONTAÑA
                </a>
                <Button
                  variant="outline"
                  className="w-full mt-2"
                  onClick={() => window.open('https://wa.me/573054499987', '_blank')}
                >
                  Contactar
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;