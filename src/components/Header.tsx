import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MessageCircle, Instagram } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Top contact bar */}
      <div className="absolute w-full bg-secondary text-white py-2 text-sm z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>hola@espiritudemontana.com</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(+57) 305 449 9987</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Instagram className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
            <MessageCircle
              className="w-4 h-4 cursor-pointer hover:text-primary transition-colors"
              onClick={() => window.open('https://wa.me/573054499987', '_blank')}
            />
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="absolute top-9 w-full bg-white/10 backdrop-blur-md z-50 h-20">
        <div className="container mx-auto px-4 py-1">

          {/* Flex principal con justify-between */}
          <div className="flex items-center justify-between">

            {/* Contenedor izquierdo: Logo + Nav */}
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-20 flex items-center justify-center">
                  <img src="/logo.png" alt="Espíritu de Montaña" className="w-20" />
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <Button variant="default" className="bg-primary text-white rounded-full px-6 hover:bg-primary-hover">
                  RUTAS
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
            </div>

            {/* CTA Buttons alineado a la derecha */}
            <div className="hidden md:flex items-center space-x-4">
              <MessageCircle
                className="w-8 h-8 cursor-pointer hover:text-primary transition-colors"
                onClick={() => window.open('https://wa.me/573054499987', '_blank')}
              />
              <Button
                variant="outline"
                className="rounded-full border-2 border-secondary text-black-700 hover:bg-primary-hover"
              >
                INGRESAR
              </Button>
            </div>

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