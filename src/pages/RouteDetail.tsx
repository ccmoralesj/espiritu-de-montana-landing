import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ArrowLeft, Calendar, Clock, MapPin, Users, Star, Phone, MessageCircle, Share2, Mountain, Car, Utensils, Shield, Camera, ChevronRight } from "lucide-react";
import { Route } from "@/interfaces/Route";
import { allRoutes } from "@/db/routes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RouteDetail = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  
  // Get route from state or find by slug
  const route: Route = location.state?.route || allRoutes.find(r => 
    r.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') === slug
  );

  if (!route) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary mb-4">Ruta no encontrada</h1>
          <Button onClick={() => navigate('/rutas')}>
            Volver a Rutas
          </Button>
        </div>
      </div>
    );
  }

  const progressPercentage = Math.round((route.riders / route.capacity) * 100);

  const handleContact = () => {
    const message = `Hola! Estoy interesado en la ruta "${route.title}" programada para el ${route.date}. ¿Podrían darme más información?`;
    window.open(`https://wa.me/573054499987?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: route.title,
        text: route.short_description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const includedItems = [
    { icon: Car, text: "Recogida y traslado" },
    { icon: Users, text: "Estadía por los 7 días" },
    { icon: Utensils, text: "Desayuno, almuerzo y cena" },
    { icon: Shield, text: "Hidratación y snacks" },
    { icon: Mountain, text: "Entradas a los parques naturales" },
    { icon: Users, text: "Rutas guiadas" },
    { icon: Shield, text: "Seguro médico de accidentes" },
    { icon: Shield, text: "Seguro de viaje" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          
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
                <BreadcrumbLink href="/rutas" className="text-muted-foreground hover:text-secondary">
                  Rutas
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-secondary font-medium">
                  {route.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Title and Progress */}
            <div className="mb-8">
              <h1 className="font-title text-4xl xl:text-5xl text-secondary uppercase leading-tight tracking-wide mb-6">
                {route.title}
              </h1>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <span className="font-body font-bold text-xl text-secondary whitespace-nowrap">
                    {progressPercentage}%
                  </span>
                </div>
              </div>

              <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {route.long_description.split('\n\n')[0]}
              </p>
              
              {route.long_description.split('\n\n').length > 1 && (
                <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mt-4">
                  {route.long_description.split('\n\n')[1]}
                </p>
              )}
            </div>

            {/* Price and Dates */}
            <div className="flex items-center gap-8 mb-12">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <span className="font-title text-3xl text-secondary font-bold">
                  {route.price}
                </span>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  className="px-8 py-3 rounded-full border-secondary text-secondary hover:bg-secondary hover:text-white"
                >
                  JUNIO 23, 2025
                </Button>
                <Button 
                  variant="outline" 
                  className="px-8 py-3 rounded-full border-secondary text-secondary hover:bg-secondary hover:text-white"
                >
                  JULIO 12, 2025
                </Button>
              </div>
            </div>

            {/* Images and Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="space-y-6">
                {/* Main Image */}
                <div className="relative">
                  <Card className="overflow-hidden border-0 shadow-lg rounded-3xl">
                    <img
                      src={route.image}
                      alt={route.title}
                      className="w-full h-64 object-cover"
                    />
                  </Card>
                  <Button 
                    variant="outline" 
                    className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm hover:bg-white border-gray-300"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    VER FOTOS
                  </Button>
                </div>
                
                {/* Second Image */}
                <div className="relative">
                  <Card className="overflow-hidden border-0 shadow-lg rounded-3xl">
                    <img
                      src={route.image}
                      alt={route.title}
                      className="w-full h-64 object-cover"
                    />
                  </Card>
                  <Button 
                    variant="outline" 
                    className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm hover:bg-white border-gray-300"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    VER FOTOS
                  </Button>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-3xl flex items-center justify-center h-full min-h-[400px]">
                <div className="text-center text-gray-500">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="font-body text-lg">Mapa de la ruta</p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mb-16">
              <h2 className="font-title text-3xl text-secondary uppercase mb-8 text-center">
                VIVAMOS EL MUNDO JUNTOS!
              </h2>
              
              <div className="flex justify-center gap-16 mb-12">
                <div className="text-center">
                  <Mountain className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
                  <p className="font-title text-2xl text-secondary mb-1">Difícil</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
                  <p className="font-title text-2xl text-secondary mb-1">54 Km</p>
                </div>
                <div className="text-center">
                  <Calendar className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
                  <p className="font-title text-2xl text-secondary mb-1">7 Días</p>
                </div>
              </div>

              {/* Package Selection */}
              <div className="max-w-md mx-auto">
                <h3 className="font-title text-2xl text-secondary uppercase mb-4 text-center">
                  SEPARA TU CUPO
                </h3>
                <p className="font-body text-muted-foreground text-center mb-8">
                  ¡No pierdas tu lugar para esta experiencia inolvidable!
                </p>
                
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full p-6 h-auto bg-primary/10 border-primary hover:bg-primary/20"
                    onClick={() => setSelectedPackage('package1')}
                  >
                    <div className="flex justify-between items-center w-full">
                      <div className="text-left">
                        <p className="font-title text-2xl text-secondary">$1.800.000</p>
                        <p className="font-body text-sm text-muted-foreground">PAQUETE 01</p>
                      </div>
                      <ChevronRight className="w-6 h-6 text-secondary" />
                    </div>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full p-6 h-auto bg-primary/10 border-primary hover:bg-primary/20"
                    onClick={() => setSelectedPackage('package2')}
                  >
                    <div className="flex justify-between items-center w-full">
                      <div className="text-left">
                        <p className="font-title text-2xl text-secondary">$1.400.000</p>
                        <p className="font-body text-sm text-muted-foreground">PAQUETE 02</p>
                      </div>
                      <ChevronRight className="w-6 h-6 text-secondary" />
                    </div>
                  </Button>
                </div>
              </div>
            </div>

            {/* Large Image */}
            <div className="mb-16">
              <div className="relative">
                <Card className="overflow-hidden border-0 shadow-lg rounded-3xl">
                  <img
                    src={route.image}
                    alt={route.title}
                    className="w-full h-96 object-cover"
                  />
                </Card>
                <Button 
                  variant="outline" 
                  className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm hover:bg-white border-gray-300"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  VER FOTOS
                </Button>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="mb-16">
              <Tabs defaultValue="incluye" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger 
                    value="incluye" 
                    className="text-lg font-medium data-[state=active]:text-primary data-[state=active]:bg-primary/10"
                  >
                    QUE INCLUYE
                  </TabsTrigger>
                  <TabsTrigger 
                    value="no-incluye" 
                    className="text-lg font-medium data-[state=active]:text-primary data-[state=active]:bg-primary/10"
                  >
                    QUE NO INCLUYE
                  </TabsTrigger>
                  <TabsTrigger 
                    value="transporte" 
                    className="text-lg font-medium data-[state=active]:text-primary data-[state=active]:bg-primary/10"
                  >
                    TRANSPORTE
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="incluye" className="mt-8">
                  <div>
                    <h3 className="font-title text-xl text-secondary mb-6">
                      Donde cada calle cuenta una historia y cada pedaleada es una experiencia
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {includedItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <item.icon className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          <span className="font-body text-muted-foreground">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="no-incluye" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <span className="font-body text-muted-foreground">Gastos personales</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <span className="font-body text-muted-foreground">Propinas</span>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="transporte" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <Car className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <span className="font-body text-muted-foreground">Transporte incluido desde punto de encuentro</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Car className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <span className="font-body text-muted-foreground">Vehículo de apoyo durante la ruta</span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                className="font-body text-lg px-12 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleContact}
              >
                VER ITINERARIO
              </Button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Images and Map */}
            <div className="mb-8">
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div className="relative">
                  <Card className="overflow-hidden border-0 shadow-lg rounded-3xl">
                    <img
                      src={route.image}
                      alt={route.title}
                      className="w-full h-48 object-cover"
                    />
                  </Card>
                </div>
                <div className="relative">
                  <Card className="overflow-hidden border-0 shadow-lg rounded-3xl">
                    <img
                      src={route.image}
                      alt={route.title}
                      className="w-full h-48 object-cover"
                    />
                  </Card>
                  <Button 
                    variant="outline" 
                    className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm hover:bg-white border-gray-300 text-sm"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    FOTOS
                  </Button>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-3xl flex items-center justify-center h-40 mb-6">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-body text-sm">Mapa</p>
                </div>
              </div>
            </div>

            {/* Title and Progress */}
            <div className="mb-8">
              <h1 className="font-title text-3xl text-secondary uppercase leading-tight tracking-wide mb-6">
                {route.title}
              </h1>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <span className="font-body font-bold text-xl text-secondary whitespace-nowrap">
                    {progressPercentage}%
                  </span>
                </div>
              </div>

              <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
                {route.long_description.split('\n\n')[0]}
              </p>
              
              {route.long_description.split('\n\n').length > 1 && (
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  {route.long_description.split('\n\n')[1]}
                </p>
              )}
            </div>

            {/* Price and Dates */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <span className="font-title text-3xl text-secondary font-bold">
                  {route.price}
                </span>
              </div>
              
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full px-8 py-3 rounded-full border-secondary text-secondary hover:bg-secondary hover:text-white"
                >
                  JUNIO 23, 2025
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full px-8 py-3 rounded-full border-secondary text-secondary hover:bg-secondary hover:text-white"
                >
                  JULIO 12, 2025
                </Button>
              </div>
            </div>

            {/* Rest of mobile content would continue here... */}
            <div className="text-center">
              <Button
                className="font-body text-lg px-12 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleContact}
              >
                VER ITINERARIO
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RouteDetail;