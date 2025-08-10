import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Instagram, Bike } from "lucide-react";
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
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@edm.com.co</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(+57) 305 449 9987</span>
              </div>
            </div>

            <div className="block md:hidden flex items-center space-x-4">
              <Instagram
                className="w-4 h-4 cursor-pointer hover:text-primary transition-colors"
                onClick={() => window.open('https://www.instagram.com/espiritu.montana/', '_blank')} />
              <img
                src="/whatsapp-logo.svg"
                alt="Espíritu de Montaña"
                className="w-4 h-4 cursor-pointer hover:border-primary transition-all duration-300 m-2"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(90%)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(330%) hue-rotate(70deg) brightness(100%) contrast(146%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(90%)';
                }}
                loading="lazy"
                onClick={() => window.open('https://wa.me/573054499987', '_blank')}
              />
            </div>

          </div>
        </div>
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">

          <Button
            variant="default"
            className="bg-white text-secondary rounded-full px-6 py-0 h-8 hover:bg-primary-hover"
            onClick={() => window.location.href = '/rutas'}
          >
            RUTAS
          </Button>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-20 flex items-center justify-center">
              <img src="/logo.png" alt="Espíritu de Montaña" className="w-20" loading="lazy" />
            </div>
          </div>

          {/* Botón hamburguesa mobile */}
          <div className="flex items-center">
            <img
              src="/whatsapp-logo.svg"
              alt="Espíritu de Montaña"
              className="w-8 h-8 cursor-pointer hover:border-primary transition-all duration-300 m-2"
              style={{
                filter: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(330%) hue-rotate(70deg) brightness(100%) contrast(146%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'none';
              }}
              loading="lazy"
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
            </div>
            <div className="flex justify-between">
              <a href="#espiritu" className="font-semibold text-secondary text-foreground hover:text-primary transition-colors font-medium text-lg">
                NUESTRO ESPÍRITU
              </a>

            </div>
            <div className="flex justify-between">
              <a href="#tribu" className="font-semibold text-secondary text-foreground hover:text-primary transition-colors font-medium text-lg">
                TRIBU DE MONTAÑA
              </a>
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