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
import RouteCards from "@/components/RoutesPage/RouteCards";

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
          <RouteCards routes={filteredRoutes} handleRouteClick={handleRouteClick} />

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