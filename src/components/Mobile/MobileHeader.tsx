import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MessageCircle, Instagram, Bike } from "lucide-react";
import { useEffect, useState } from "react";

interface MobileHeaderProps {
  isVisible?: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ setIsMenuOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>

      <div className={`
          fixed inset-0 z-50 bg-primary lg:hidden transition-opacity duration-500
          ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        {/* Top contact bar */}
        <div className="w-full bg-secondary text-white py-3 text-sm z-50">
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
            <div className="hidden md:flex items-center space-x-4">
              <Instagram className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
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
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Hidden "Rutas" mobile Button */}
          <Button variant="default" className="bg-white text-secondary rounded-full px-6 py-0 h-8 hover:bg-primary-hover">
            RUTAS
          </Button>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-20 flex items-center justify-center">
              <img src="/logo.png" alt="Espíritu de Montaña" className="w-20" />
            </div>
          </div>

          {/* Botón hamburguesa mobile */}
          <div className="flex">
            <MessageCircle
              className="md:hidden w-10 h-10 cursor-pointer hover:text-primary transition-colors"
              onClick={() => window.open('https://wa.me/573054499987', '_blank')}
            />
            <Button
              variant="outline"
              className="text-foreground focus:outline-none border-secondary"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Abrir menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
          </div>
        </div>
        <nav className="h-full">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-6 h-full">
            <div className="flex justify-between">
              <a href="#tours" className="font-semibold text-secondary text-foreground hover:text-primary transition-colors font-medium text-lg">
                TOURS
              </a>
              <div className="bloc text-xl pb-1">›</div>
            </div>
            <div className="flex justify-between">
              <a href="#espiritu" className="font-semibold text-secondary text-foreground hover:text-primary transition-colors font-medium text-lg">
                NUESTRO ESPÍRITU
              </a>
              <div className="bloc text-xl pb-1">›</div>
            </div>
            <div className="flex justify-between">
              <a href="#tribu" className="font-semibold text-secondary text-foreground hover:text-primary transition-colors font-medium text-lg">
                TRIBU DE MONTAÑA
              </a>
              <div className="bloc text-xl pb-1">›</div>
            </div>
            <div className="flex flex-col space-y-4 justify-end">
              <Button
                variant="outline"
                className="rounded-full border-2 border-secondary text-secondary font-bold hover:bg-primary-hover"
                onClick={() => window.open('https://wa.me/573054499987', '_blank')}
              >
                CONTACTAR
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-2 border-secondary text-secondary font-bold hover:bg-primary-hover"
              >
                INGRESAR
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileHeader;