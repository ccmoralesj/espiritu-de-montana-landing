import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Clock, MapPin, Users, Star, Search, Phone } from "lucide-react";
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
            {filteredRoutes.map((route, index) => (
              <Card 
                key={index} 
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => handleRouteClick(route)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={route.image}
                    alt={route.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      className={`${
                        route.category === 'internacional' 
                          ? 'bg-adventure text-adventure-foreground' 
                          : route.category === 'nacional'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      {route.category === 'internacional' ? 'Internacional' : 
                       route.category === 'nacional' ? 'Nacional' : 'Local'}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={getDifficultyColor(route.difficulty)}>
                      {route.difficulty}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-body text-sm opacity-90">{route.date}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-title text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                      {route.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="font-body">{route.location}</span>
                    </div>
                    <p className="font-body text-muted-foreground leading-relaxed line-clamp-3">
                      {route.short_description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="font-body">{route.duration}</span>
                      </div>
                    </div>
                    <div className="font-body font-bold text-primary text-lg">
                      {route.price}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full font-body border-secondary text-secondary hover:bg-secondary hover:text-white transition-all"
                  >
                    VER DETALLES
                  </Button>
                </CardContent>
              </Card>
            ))}
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