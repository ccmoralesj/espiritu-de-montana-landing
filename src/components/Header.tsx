import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MessageCircle, Instagram, Bike } from "lucide-react";
import { useState } from "react";
import MobileHeader from "./Mobile/MobileHeader";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top contact bar */}
      <div className={`
        w-full bg-secondary text-white py-3 text-sm z-50
        ${isMenuOpen ? 'hidden' : 'absolute'}
        `}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="font-body flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@edm.com.co</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(+57) 305 449 9987</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Instagram
              className="w-4 h-4 cursor-pointer hover:text-primary transition-colors"
              onClick={() => window.open('https://www.instagram.com/espiritu.montana/', '_blank')} />
            <MessageCircle
              className="w-4 h-4 cursor-pointer hover:text-primary transition-colors"
              onClick={() => window.open('https://wa.me/573054499987', '_blank')}
            />
          </div>
          <div className="block md:hidden flex items-center space-x-4">
            <Instagram className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
            <MessageCircle
              className="w-4 h-4 cursor-pointer hover:text-primary transition-colors"
              onClick={() => window.open('https://wa.me/573054499987', '_blank')}
            />
            <div className="text-xl pb-1">›</div>
          </div>

        </div>
      </div>

      {/* Main header */}
      <header className="absolute top-12 w-full z-50 h-16 font-body tracking-wide">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">

          {/* Hidden "Rutas" mobile Button */}
          <Button 
            variant="default" 
            className="block md:hidden bg-primary text-white rounded-full px-6 py-0 h-8 hover:bg-primary-hover"
            onClick={() => window.location.href = '/rutas'}
          >
            RUTAS
          </Button>
          {/* Lado izquierdo*/}
          <div className="flex items-center gap-4">

            {/* Logo */}
            <div className="w-20">
              <img src="/logo.png" alt="Espíritu de Montaña" className="w-20" loading="lazy" />
            </div>

            {/* Desktop Nav */}
            <nav className="pl-4 hidden md:flex items-center space-x-12 font-semibold">
              <Button 
                variant="default" 
                className="bg-primary text-white rounded-full px-6 h-8 hover:bg-primary-hover"
                onClick={() => window.location.href = '/rutas'}
              >
                RUTAS
              </Button>
              <a href="#tours" className="text-foreground hover:text-primary transition-colors font-medium">
                TOURS
              </a>
              <a href="#espiritu" className="text-foreground hover:text-primary transition-colors font-medium">
                NUESTRO ESPÍRITU
              </a>
              <a href="#tribu" className="text-foreground hover:text-primary transition-colors font-medium">
                TRIBU DE MONTAÑA
              </a>
            </nav>
          </div>

          {/* LADO DERECHO */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
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

            {/* Mobile Hamburger */}
            <div className="flex md:hidden space-x2">
              <MessageCircle
                className="w-10 h-10 cursor-pointer hover:text-primary transition-colors"
                onClick={() => window.open('https://wa.me/573054499987', '_blank')}
              />
              <Button
                variant="outline"
                className="text-foreground focus:outline-none border-secondary"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Abrir menú"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>

        </div>

        {/* Navegación Mobile */}
        {isMenuOpen && (<MobileHeader setIsMenuOpen={setIsMenuOpen} />)}

      </header>
    </>
  );
};

export default Header;