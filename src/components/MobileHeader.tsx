import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MessageCircle, Instagram, Bike } from "lucide-react";

interface MobileHeaderProps {
  isMenuOpen?: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ setIsMenuOpen }) => {

  return (
    <>
      <div className="fixed inset-0 z-50 bg-white lg:hidden" >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Hidden "Rutas" mobile Button */}
          <Button variant="default" className="bg-primary text-white rounded-full px-6 hover:bg-primary-hover">
            RUTAS
          </Button>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-20 flex items-center justify-center">
              <img src="/logo.png" alt="Espíritu de Montaña" className="w-20" />
            </div>
          </div>

          {/* Botón hamburguesa mobile */}
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
        <nav >
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
            <a href="#rutas" className="text-foreground hover:text-primary transition-colors font-medium text-lg">
              RUTAS
            </a>
            <a href="#tours" className="text-foreground hover:text-primary transition-colors font-medium text-lg">
              TOURS
            </a>
            <a href="#espiritu" className="text-foreground hover:text-primary transition-colors font-medium text-lg">
              NUESTRO ESPÍRITU
            </a>
            <a href="#tribu" className="text-foreground hover:text-primary transition-colors font-medium text-lg">
              TRIBU DE MONTAÑA
            </a>
            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={() => window.open('https://wa.me/573054499987', '_blank')}
            >
              Contactar
            </Button>
            <Button
              variant="outline"
              className=" w-full mt-4"
            >
              INGRESAR
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileHeader;