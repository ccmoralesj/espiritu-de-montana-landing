import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, MapPin, Users, Star, Phone, MessageCircle, Share2 } from "lucide-react";
import { Route } from "@/interfaces/Route";
import { allRoutes } from "@/db/routes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RouteDetail = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Fácil': return 'bg-green-500/20 text-green-700';
      case 'Intermedio': return 'bg-yellow-500/20 text-yellow-700';
      case 'Avanzado': return 'bg-red-500/20 text-red-700';
      default: return 'bg-gray-500/20 text-gray-700';
    }
  };

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
      // Could add a toast notification here
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          
          {/* Back Button */}
          <Button
            variant="outline"
            className="mb-8 font-body border-secondary text-secondary hover:bg-secondary hover:text-white"
            onClick={() => navigate('/rutas')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Rutas
          </Button>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="relative">
              <Card className="overflow-hidden border-0 shadow-2xl rounded-3xl">
                <img
                  src={route.image}
                  alt={route.title}
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </Card>
              <div className="absolute top-6 left-6 flex gap-3">
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
                <Badge className={getDifficultyColor(route.difficulty)}>
                  {route.difficulty}
                </Badge>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h1 className="font-title text-3xl lg:text-5xl text-secondary uppercase leading-tight tracking-wide mb-6">
                  {route.title}
                </h1>
                
                <div className="flex items-center text-lg text-muted-foreground mb-6">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="font-body">{route.location}</span>
                </div>

                <p className="font-body text-xl text-secondary leading-relaxed">
                  {route.short_description}
                </p>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4 text-center">
                  <Calendar className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="font-body font-semibold text-secondary">Fecha</p>
                  <p className="font-body text-sm text-muted-foreground">{route.date}</p>
                </Card>
                <Card className="p-4 text-center">
                  <Clock className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="font-body font-semibold text-secondary">Duración</p>
                  <p className="font-body text-sm text-muted-foreground">{route.duration}</p>
                </Card>
                <Card className="p-4 text-center">
                  <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="font-body font-semibold text-secondary">Precio</p>
                  <p className="font-body text-sm text-muted-foreground">{route.price}</p>
                </Card>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="font-body text-lg px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 flex-1"
                  onClick={handleContact}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  RESERVAR AHORA
                </Button>
                <Button
                  variant="outline"
                  className="font-body text-lg px-8 py-4 rounded-full border-secondary text-secondary hover:bg-secondary hover:text-white"
                  onClick={handleContact}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  CONTACTAR
                </Button>
                <Button
                  variant="outline"
                  className="font-body px-4 py-4 rounded-full border-secondary text-secondary hover:bg-secondary hover:text-white"
                  onClick={handleShare}
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h2 className="font-title text-2xl text-secondary uppercase mb-6">
                Descripción Detallada
              </h2>
              <div className="space-y-4">
                {route.long_description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="font-body text-muted-foreground leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>
          </div>

          {/* What's Included Section */}
          <div className="max-w-4xl mx-auto mt-12">
            <Card className="p-8">
              <h2 className="font-title text-2xl text-secondary uppercase mb-6">
                Qué Incluye
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-body font-semibold text-secondary mb-3">✅ Incluido</h3>
                  <ul className="space-y-2 font-body text-muted-foreground">
                    <li>• Guía experto certificado</li>
                    <li>• Seguro de accidentes</li>
                    <li>• Transporte desde punto de encuentro</li>
                    <li>• Refrigerios y almuerzo</li>
                    <li>• Equipos de seguridad</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-body font-semibold text-secondary mb-3">❌ No Incluido</h3>
                  <ul className="space-y-2 font-body text-muted-foreground">
                    <li>• Bicicleta personal (se puede alquilar)</li>
                    <li>• Gastos personales</li>
                    <li>• Propinas</li>
                    <li>• Hospedaje (en tours de varios días)</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="p-12 bg-gradient-to-r from-primary/10 to-adventure/10">
              <h2 className="font-title text-3xl text-secondary uppercase mb-4">
                ¿Listo para la aventura?
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Únete a nosotros en esta experiencia única. Contáctanos para más información y reserva tu lugar.
              </p>
              <Button
                size="lg"
                className="font-body text-lg px-12 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleContact}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                CONTACTAR POR WHATSAPP
              </Button>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RouteDetail;