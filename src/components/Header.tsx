import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">EM</span>
            </div>
            <span className="font-bold text-xl text-foreground">Espíritu de Montaña</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#rutas" className="text-foreground hover:text-primary transition-colors font-medium">
              Rutas
            </a>
            <a href="#experiencias" className="text-foreground hover:text-primary transition-colors font-medium">
              Experiencias
            </a>
            <a href="#nosotros" className="text-foreground hover:text-primary transition-colors font-medium">
              Nosotros
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors font-medium">
              Contacto
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="adventure" 
              size="lg"
              className="whatsapp-button"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Reservar Aventura
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
                Rutas
              </a>
              <a href="#experiencias" className="text-foreground hover:text-primary transition-colors font-medium">
                Experiencias
              </a>
              <a href="#nosotros" className="text-foreground hover:text-primary transition-colors font-medium">
                Nosotros
              </a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors font-medium">
                Contacto
              </a>
              <Button 
                variant="adventure" 
                className="whatsapp-button w-full mt-2"
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              >
                Reservar Aventura
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;