import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Clock, MapPin, Users, Star, Search, Phone } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Route, Category } from "@/interfaces/Route";
import { allRoutes } from "@/db/routes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Routes = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('internacional');
  const navigate = useNavigate();

  const filteredRoutes = allRoutes.filter(route => route.category === selectedCategory);

  const handleRouteClick = (route: Route) => {
    // Create a URL-friendly slug from the route title
    const slug = route.title.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');
    navigate(`/rutas/${slug}`, { state: { route } });
  };

  const getCategoryDisplayName = (category: Category | 'all') => {
    switch (category) {
      case 'internacional': return 'INTERNACIONALES';
      case 'nacional': return 'NACIONALES';
      case 'local': return 'LOCALES';
      default: return 'TODAS LAS RUTAS';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Fácil': return 'bg-green-500/20 text-green-700';
      case 'Intermedio': return 'bg-yellow-500/20 text-yellow-700';
      case 'Avanzado': return 'bg-red-500/20 text-red-700';
      default: return 'bg-gray-500/20 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          
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
          <div className="flex flex-wrap justify-between items-center mb-12">
            <div className="flex flex-wrap gap-4">
              <Button
                variant={selectedCategory === 'internacional' ? 'default' : 'outline'}
                className={`font-body px-8 py-3 rounded-full transition-all ${
                  selectedCategory === 'internacional' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'border-secondary text-secondary hover:bg-secondary hover:text-white'
                }`}
                onClick={() => setSelectedCategory('internacional')}
              >
                INTERNACIONAL
              </Button>
              <Button
                variant={selectedCategory === 'nacional' ? 'default' : 'outline'}
                className={`font-body px-8 py-3 rounded-full transition-all ${
                  selectedCategory === 'nacional' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'border-secondary text-secondary hover:bg-secondary hover:text-white'
                }`}
                onClick={() => setSelectedCategory('nacional')}
              >
                NACIONAL
              </Button>
              <Button
                variant={selectedCategory === 'local' ? 'default' : 'outline'}
                className={`font-body px-8 py-3 rounded-full transition-all ${
                  selectedCategory === 'local' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'border-secondary text-secondary hover:bg-secondary hover:text-white'
                }`}
                onClick={() => setSelectedCategory('local')}
              >
                LOCAL
              </Button>
            </div>
            
            {/* Contact Button */}
            <Button
              variant="default"
              className="bg-primary text-primary-foreground font-body px-8 py-3 rounded-full hover:bg-primary-hover flex items-center gap-2"
              onClick={() => window.open('https://wa.me/573054499987', '_blank')}
            >
              <Phone className="w-4 h-4" />
              CONTÁCTANOS
            </Button>
          </div>

          {/* Search Bar and Pagination */}
          <div className="flex flex-wrap justify-between items-center mb-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar"
                className="pl-10 pr-4 py-3 rounded-full border-muted-foreground/30 font-body"
              />
            </div>
            
            <div className="flex items-center gap-2 font-body text-secondary">
              <span>Páginas</span>
              <Button variant="ghost" className="w-8 h-8 p-0 bg-primary text-primary-foreground rounded-full">1</Button>
              <Button variant="ghost" className="w-8 h-8 p-0 text-secondary hover:bg-primary hover:text-primary-foreground rounded-full">2</Button>
              <Button variant="ghost" className="w-8 h-8 p-0 text-secondary hover:bg-primary hover:text-primary-foreground rounded-full">3</Button>
            </div>
          </div>

          {/* Routes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRoutes.map((route, index) => {
              const capacityPercentage = (route.riders / route.capacity) * 100;
              const isFull = route.riders >= route.capacity;
              
              return (
                <Card 
                  key={index} 
                  className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  onClick={() => handleRouteClick(route)}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={route.image}
                      alt={route.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Country/Location Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-secondary font-semibold px-4 py-1 rounded-full">
                        {route.location.toUpperCase()}
                      </Badge>
                    </div>

                    {/* Full Overlay */}
                    {isFull && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="bg-red-500 text-white px-6 py-3 rounded-full font-bold text-lg">
                          CERRADO
                        </div>
                      </div>
                    )}

                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="bg-white/20 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-primary transition-all duration-300"
                          style={{ width: `${capacityPercentage}%` }}
                        />
                      </div>
                      <div className="text-white text-sm font-semibold mt-2 text-right">
                        {Math.round(capacityPercentage)}%
                      </div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="font-title text-2xl font-bold text-secondary mb-3 uppercase tracking-wide">
                        {route.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="font-body text-muted-foreground text-lg">
                          Desde
                        </p>
                        <div className="font-body font-bold text-secondary text-2xl">
                          {route.price}
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full font-body border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all rounded-full py-3 text-lg font-semibold"
                      disabled={isFull}
                    >
                      VER DETALLE
                    </Button>
                  </CardContent>
                </Card>
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Routes;