import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MessageCircle, Instagram } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-secondary text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>hola@espiritudemontana.com</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(+51) 322 234 56 78</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Instagram className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
            <div className="w-4 h-4 bg-white rounded-sm cursor-pointer"></div>
            <MessageCircle className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="fixed top-10 w-full bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">EM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-foreground text-sm leading-none">Espíritu de</span>
                <span className="font-bold text-foreground text-sm leading-none">Montaña</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Button variant="default" className="bg-primary text-white rounded-full px-6 hover:bg-primary-hover">
                🚴 RUTAS
              </Button>
              <a href="#tours" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
                TOURS
              </a>
              <a href="#espiritu" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
                NUESTRO ESPÍRITU
              </a>
              <a href="#tribu" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
                TRIBU DE MONTAÑA
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                className="rounded-full border-2 border-gray-400 text-gray-700 hover:bg-gray-100 p-2"
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full border-2 border-gray-400 text-gray-700 hover:bg-gray-100"
              >
                INGRESAR
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border">
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
                  variant="adventure" 
                  className="whatsapp-button w-full mt-2"
                  onClick={() => window.open('https://wa.me/1234567890', '_blank')}
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