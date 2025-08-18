import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Phone } from "lucide-react";
import { Adventure, Category } from "@/interfaces/Adventure";
// import { allRoutes } from "@/db/routes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSearchParams } from "react-router-dom";
import RouteCards from "@/components/RoutesPage/RouteCards";
import Pagination from "@/components/RoutesPage/Pagination";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useAdventures } from "@/hooks/api/useAdventures";
import LoadingAdventure from "@/components/LoadingAdventure";
import { useNavigateWithSlug } from "@/hooks/use-navigation-with-slug";


const Routes = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as Category) ?? 'Internacional';

  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [routesPerPage, setRoutesPerPage] = useState(8);
  const { goToAdventure } = useNavigateWithSlug();
  const searchBarRef = useRef<HTMLDivElement>(null);

  const { adventures, loading: loadingAdventures, error } = useAdventures()

  const whatsAPPNumber = import.meta.env.VITE_COMPANY_WHATSAPP

  if (loadingAdventures) {
    console.log('Cargando aventuras...')
  }

  // Update routes per page based on screen size
  useEffect(() => {
    const updateRoutesPerPage = () => {
      if (window.innerWidth >= 1024) { // lg screens
        setRoutesPerPage(8);
      } else if (window.innerWidth >= 768) { // md screens
        setRoutesPerPage(6);
      } else { // sm screens
        setRoutesPerPage(5);
      }
    };

    updateRoutesPerPage();
    window.addEventListener('resize', updateRoutesPerPage);

    return () => window.removeEventListener('resize', updateRoutesPerPage);
  }, []);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  const filteredRoutes = adventures.filter(route => {
    const matchesCategory = route.category === selectedCategory;
    const matchesSearch = searchTerm === '' ||
      route.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredRoutes.length / routesPerPage);


  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    // Responsive scroll behavior:
    // - Large screens (≥1024px): No scroll (pagination is at top)
    // - Medium/Small screens (<1024px): Scroll to search bar section
    const screenWidth = window.innerWidth;

    if (screenWidth < 1024) {
      // Scroll to search bar section instead of very top
      if (searchBarRef.current) {
        // Add a small delay to ensure the page state has updated
        setTimeout(() => {
          const searchBarElement = searchBarRef.current;
          if (searchBarElement) {
            const rect = searchBarElement.getBoundingClientRect();
            // Calculate scroll position: element position + current scroll - 100px offset for better UX
            const scrollTop = window.pageYOffset + rect.top - 100;
            window.scrollTo({
              top: scrollTop,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 mt-10">

          {/* Breadcrumb */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-muted-foreground hover:text-secondary">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-secondary font-medium">
                  Rutas
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

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
                variant={selectedCategory === 'Internacional' ? 'default' : 'outline'}
                className={`font-body px-6 py-3 rounded-full transition-all ${selectedCategory === 'Internacional'
                  ? 'bg-primary text-primary-foreground'
                  : 'border-secondary text-secondary hover:bg-primary hover:text-white'
                  }`}
                onClick={() => setSelectedCategory('Internacional')}
              >
                INTERNACIONAL
              </Button>
              <Button
                variant={selectedCategory === 'Nacional' ? 'default' : 'outline'}
                className={`font-body px-6 py-3 rounded-full transition-all ${selectedCategory === 'Nacional'
                  ? 'bg-primary text-primary-foreground'
                  : 'border-secondary text-secondary hover:bg-primary hover:text-white'
                  }`}
                onClick={() => setSelectedCategory('Nacional')}
              >
                NACIONAL
              </Button>
              <Button
                variant={selectedCategory === 'Local' ? 'default' : 'outline'}
                className={`font-body px-6 py-3 rounded-full transition-all ${selectedCategory === 'Local'
                  ? 'bg-primary text-primary-foreground'
                  : 'border-secondary text-secondary hover:bg-primary hover:text-white'
                  }`}
                onClick={() => setSelectedCategory('Local')}
              >
                LOCAL
              </Button>
            </div>

            {/* Contact Button */}
            <Button
              variant="default"
              className="bg-primary text-primary-foreground font-body mt-2 lg:mt-0 px-8 py-3 rounded-full hover:bg-primary-hover flex items-center gap-2 w-full lg:w-auto"
              onClick={() => window.open(`https://wa.me/${whatsAPPNumber}?text=${encodeURIComponent("Hola, necesito ayuda")}`, '_blank')}
            >
              <Phone className="w-4 h-4" />
              CONTÁCTANOS
            </Button>
          </div>

          {/* Search Bar and Desktop Pagination */}
          <div ref={searchBarRef} className="flex flex-wrap justify-between items-center mb-10">
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar por título o ubicación..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 rounded-full border-muted-foreground/30 font-body text-center lg:text-start"
              />
            </div>

            {/* Desktop Pagination */}
            <div className="hidden lg:block">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                showPageInfo={true}
                totalItems={filteredRoutes.length}
                itemsPerPage={routesPerPage}
              />
            </div>
          </div>

          {/* Results Summary */}
          {filteredRoutes.length > 0 && (
            <div className="mb-6 text-center lg:text-left">
              <p className="font-body text-sm text-muted-foreground">
                Página {currentPage} de {totalPages} • {filteredRoutes.length} ruta{filteredRoutes.length !== 1 ? 's' : ''} encontrada{filteredRoutes.length !== 1 ? 's' : ''}
              </p>
            </div>
          )}

          {/* Loading State */}
          <LoadingAdventure loadingAdventures={loadingAdventures} ></LoadingAdventure>

          {/* Routes Grid */}
          <RouteCards
            routes={filteredRoutes}
            handleRouteClick={(adv) => goToAdventure(adv)}
            currentPage={currentPage}
            routesPerPage={routesPerPage}
          />

          {/* Empty State */}
          {!loadingAdventures && filteredRoutes.length === 0 && (
            <div className="text-center py-20">
              <p className="font-body text-xl text-muted-foreground">
                No hay rutas disponibles para esta categoría
              </p>
            </div>
          )}

          {/* Pagination - Mobile Bottom */}
          <div className="block lg:hidden mt-12">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              showPageInfo={true}
              totalItems={filteredRoutes.length}
              itemsPerPage={routesPerPage}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Routes;