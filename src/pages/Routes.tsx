import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Phone } from "lucide-react";
import { Route, Category } from "@/interfaces/Route";
import { allRoutes } from "@/db/routes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Routes = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('internacional');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredRoutes = allRoutes.filter(route => {
    const matchesCategory = route.category === selectedCategory;
    const matchesSearch = searchTerm === '' ||
      route.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleRouteClick = (route: Route) => {
    // Create a URL-friendly slug from the route title
    const slug = route.title.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');
    navigate(`/rutas/${slug}`, { state: { route } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 mt-10">

          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm font-body text-muted-foreground mb-8">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>/</span>
            <span className="text-secondary">Rutas</span>
          </nav>

          {/* Page Title and Description */}
          <div className="mb-12">
            <h1 className="font-title text-5xl lg:text-7xl text-secondary uppercase leading-tight tracking-wide mb-6">
              RUTAS
            </h1>
            <p className="font-body text-lg text-secondary max-w-3xl leading-relaxed">
              Desde los Andes hasta senderos locales,<br />
              activa el modo explorador y decide tu próxima aventura.<br />
              <span className="font-semibold">¡El destino lo eliges tú, la bici es tu pasaporte!</span>
            </p>
          </div>

          {/* Filter Buttons and Contact Button */}
          <div className="flex flex-col lg:flex-row lg:justify-between items-center mb-8 lg:mb-12 gap-4 lg:gap-0">
            <div className="flex gap-4 overflow-x-auto w-full pb-4 lg:w-auto scrollbar-hide items-center py-4 lg:py-4">
              <Button
                variant={selectedCategory === 'internacional' ? 'default' : 'outline'}
                className={`font-body px-6 py-3 rounded-full transition-all ${selectedCategory === 'internacional'
                  ? 'bg-primary text-primary-foreground'
                  : 'border-secondary text-secondary hover:bg-primary hover:text-white'
                  }`}
                onClick={() => setSelectedCategory('internacional')}
              >
                INTERNACIONAL
              </Button>
              <Button
                variant={selectedCategory === 'nacional' ? 'default' : 'outline'}
                className={`font-body px-6 py-3 rounded-full transition-all ${selectedCategory === 'nacional'
                  ? 'bg-primary text-primary-foreground'
                  : 'border-secondary text-secondary hover:bg-primary hover:text-white'
                  }`}
                onClick={() => setSelectedCategory('nacional')}
              >
                NACIONAL
              </Button>
              <Button
                variant={selectedCategory === 'local' ? 'default' : 'outline'}
                className={`font-body px-6 py-3 rounded-full transition-all ${selectedCategory === 'local'
                  ? 'bg-primary text-primary-foreground'
                  : 'border-secondary text-secondary hover:bg-primary hover:text-white'
                  }`}
                onClick={() => setSelectedCategory('local')}
              >
                LOCAL
              </Button>
            </div>

            {/* Contact Button */}
            <Button
              variant="default"
              className="bg-primary text-primary-foreground font-body mt-2 lg:mt-0 px-8 py-3 rounded-full hover:bg-primary-hover flex items-center gap-2 w-full lg:w-auto"
              onClick={() => window.open('https://wa.me/573054499987', '_blank')}
            >
              <Phone className="w-4 h-4" />
              CONTÁCTANOS
            </Button>
          </div>

          {/* Search Bar and Desktop Pagination */}
          <div className="flex flex-wrap justify-between items-center mb-10">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar por título o ubicación..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 rounded-full border-muted-foreground/30 font-body"
              />
            </div>

            {/* Desktop Pagination */}
            <div className="hidden lg:flex items-center gap-2 font-body text-secondary">
              <span>Páginas</span>
              <Button variant="ghost" className="w-8 h-8 p-0 bg-primary text-primary-foreground rounded-full">1</Button>
              <Button variant="ghost" className="w-8 h-8 p-0 text-secondary hover:bg-primary hover:text-primary-foreground rounded-full">2</Button>
              <Button variant="ghost" className="w-8 h-8 p-0 text-secondary hover:bg-primary hover:text-primary-foreground rounded-full">3</Button>
            </div>
          </div>

          {/* Routes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center lg:justify-items-start">
            {filteredRoutes.map((route, index) => {
              const capacityPercentage = (route.riders / route.capacity) * 100;
              const isFull = route.riders >= route.capacity;

              return (
                <>
                  <div
                    key={index}
                    className="group h-[37rem] w-80 border-0 cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 transform hover:-translate-y-4"
                    onClick={() => handleRouteClick(route)}
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      {/* Image */}
                      <img
                        src={route.image}
                        alt={route.title}
                        loading="lazy"
                        className="w-full h-[29rem] object-cover transition-transform duration-500 group-hover:scale-110 drop-shadow-lg"
                      />

                      {/* Country/Location Badge (top-left) */}
                      <div className="absolute top-4 left-4 z-50">
                        <span className="bg-white/90 text-secondary font-semibold px-4 py-1 rounded-full shadow-sm text-sm">
                          {route.location.toUpperCase()}
                        </span>
                      </div>

                      {/* CERRADO pill (bottom-left) */}
                      {isFull && (
                        <div className="absolute bottom-6 left-2 right-4 transform translate-y-2 z-50">
                          <span className="bg-adventure text-white px-4 py-2 rounded-full font-bold text-sm shadow-sm">
                            CERRADO
                          </span>
                        </div>
                      )}

                      {/* Progress bar (bottom, centered) */}
                      {!isFull && (
                        <div className="absolute bottom-4 left-4 right-4 pointer-events-none z-50">
                          <div className="relative">
                            <div className="bg-white/40 rounded-full h-2 overflow-hidden">
                              <div
                                className="h-full bg-primary transition-all duration-300 rounded-full"
                                style={{ width: `${Math.min(100, Math.round(capacityPercentage))}%` }}
                              />
                            </div>
                            <div className="absolute right-0 top-0 -translate-y-6 text-white text-sm font-semibold drop-shadow">
                              {Math.round(capacityPercentage)}%
                            </div>
                          </div>
                        </div>
                      )}


                      <div className="absolute inset-0 pointer-events-none z-40 rounded-2xl">
                        {/* Overlay visual: degradado oscuro + backdrop blur solo en la parte baja */}
                        <div
                          className="absolute inset-0 rounded-2xl bg-black/30 backdrop-blur-sm"
                          style={{
                            // máscara: 0% = transparente (arriba), 100% = mostrado (abajo)
                            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 10%, rgba(0,0,0,0) 33%)',
                            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 10%, rgba(0,0,0,0) 33%)'
                          }}
                        />
                      </div>
                    </div>

                    <CardContent className="p-1 mt-2 ml-2">
                      <div className="mb-2">
                        <h3 className="font-title text-2xl text-secondary uppercase tracking-wide">
                          {route.title}
                        </h3>
                        <div className="flex items-center gap-4">
                          <p className="font-body text-muted-foreground text-md">Desde</p>
                          <div className="font-body text-secondary text-2xl tracking-wide">
                            {route.price}
                          </div>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        className="w-32 h-8 font-body border-2 border-secondary text-secondary hover:bg-primary hover:text-white transition-all rounded-full py-1 text-md font-semibold tracking-wide"
                        disabled={isFull}
                      >
                        VER DETALLE
                      </Button>
                    </CardContent>
                  </div>

                </>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredRoutes.length === 0 && (
            <div className="text-center py-20">
              <p className="font-body text-xl text-muted-foreground">
                No hay rutas disponibles para esta categoría
              </p>
            </div>
          )}

          {/* Pagination - Mobile Bottom, Desktop Top */}
          <div className="block lg:hidden mt-12">
            <div className="flex justify-center items-center gap-2 font-body text-secondary">
              <span>Páginas</span>
              <Button variant="ghost" className="w-8 h-8 p-0 bg-primary text-primary-foreground rounded-full">1</Button>
              <Button variant="ghost" className="w-8 h-8 p-0 text-secondary hover:bg-primary hover:text-primary-foreground rounded-full">2</Button>
              <Button variant="ghost" className="w-8 h-8 p-0 text-secondary hover:bg-primary hover:text-primary-foreground rounded-full">3</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Routes;