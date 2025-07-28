import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface RouteCardProps {
  title: string;
  location: string;
  description: string;
  image: string;
  difficulty: string;
  duration: string;
  category?: 'nacional' | 'internacional';
}

const RouteCard = ({ 
  title, 
  location, 
  description, 
  image, 
  difficulty, 
  duration,
  category = 'nacional'
}: RouteCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            category === 'internacional' 
              ? 'bg-adventure text-adventure-foreground' 
              : 'bg-primary text-primary-foreground'
          }`}>
            {category === 'internacional' ? 'Internacional' : 'Nacional'}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-primary font-semibold mb-2">{location}</p>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
        
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground">
              <strong>Nivel:</strong> {difficulty}
            </span>
            <span className="text-muted-foreground">
              <strong>Duración:</strong> {duration}
            </span>
          </div>
        </div>
        
        <Button 
          variant="default" 
          className="w-full route-more-info"
          onClick={() => window.open('https://wa.me/1234567890', '_blank')}
        >
          Más Información
        </Button>
      </CardContent>
    </Card>
  );
};

export default RouteCard;