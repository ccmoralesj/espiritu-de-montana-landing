import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const testimonials = [
    {
      id: 1,
      name: "JUAN PÉREZ",
      date: "Mayo 16, 2025",
      avatar: "/lovable-uploads/02cb4c16-7988-4b8e-b198-8679a7e4ddb2.png",
      rating: 5,
      comment: "Espíritu de Montaña nos ha mostrado que cada ruta es una nueva oportunidad para crecer y conectar. ¡Una experiencia que recomiendo a todos los ciclistas!"
    },
    {
      id: 2,
      name: "ISABEL MARTÍNEZ",
      date: "Mayo 23, 2025",
      avatar: "/lovable-uploads/02cb4c16-7988-4b8e-b198-8679a7e4ddb2.png",
      rating: 5,
      comment: "Gracias a esta comunidad he descubierto lugares y amigos increíbles. Siempre atentos, profesionales y llenos de energía positiva."
    },
    {
      id: 3,
      name: "CARLOS RODRÍGUEZ",
      date: "Abril 8, 2025",
      avatar: "/lovable-uploads/02cb4c16-7988-4b8e-b198-8679a7e4ddb2.png",
      rating: 4,
      comment: "Las rutas organizadas por Espíritu de Montaña superaron todas mis expectativas. Cada detalle está pensado para crear momentos únicos."
    },
    {
      id: 4,
      name: "MARÍA GONZÁLEZ",
      date: "Abril 15, 2025",
      avatar: "/lovable-uploads/02cb4c16-7988-4b8e-b198-8679a7e4ddb2.png",
      rating: 5,
      comment: "Un grupo increíble de personas apasionadas por el ciclismo. He vivido aventuras que jamás imaginé y he hecho amistades para toda la vida."
    },
    {
      id: 5,
      name: "DIEGO MORALES",
      date: "Marzo 30, 2025",
      avatar: "/lovable-uploads/02cb4c16-7988-4b8e-b198-8679a7e4ddb2.png",
      rating: 3,
      comment: "La organización es impecable y el ambiente siempre es fantástico. Cada salida es una nueva oportunidad de superar límites y disfrutar."
    },
    {
      id: 6,
      name: "ANA LÓPEZ",
      date: "Marzo 12, 2025",
      avatar: "/lovable-uploads/02cb4c16-7988-4b8e-b198-8679a7e4ddb2.png",
      rating: 4,
      comment: "Espíritu de Montaña ha transformado mi forma de ver el ciclismo. No es solo deporte, es comunidad, es crecimiento personal y mucha diversión."
    }
  ];

  const nextTestimonial = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
          {/* Title and Description */}
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <h2 className="font-title text-4xl lg:text-5xl text-secondary leading-tight tracking-wide mb-6">
              SOMOS ESPÍRITU
            </h2>
            <p className="font-body text-lg text-foreground leading-relaxed mb-8">
              En Espíritu de Montaña, cada ruta es más que un destino; es una historia compartida. Creemos que el poder de la bicicleta transforma, conecta y nos une como una gran comunidad. Por eso, no solo rodamos juntos, también creamos lazos, compartimos experiencias y celebramos cada logro como parte de un viaje colectivo.
            </p>
            
            {/* Navigation Arrows - Desktop */}
            <div className="hidden lg:flex gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Testimonials Carousel - Desktop */}
          <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 50}%)`,
                width: `${testimonials.length * 50}%` 
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-1/2 flex-shrink-0 pr-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex justify-start gap-4 mb-8 lg:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Testimonials Scroll - Mobile/Tablet */}
        <div className="lg:hidden">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-shrink-0 w-80">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="bg-background rounded-lg p-8 h-full">
      {/* User Info */}
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="h-16 w-16">
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          <AvatarFallback className="text-lg font-semibold">{testimonial.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-title text-xl text-secondary leading-tight tracking-wide font-bold">
            {testimonial.name}
          </h4>
          <p className="font-body text-base text-muted-foreground mt-1">
            {testimonial.date}
          </p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < testimonial.rating 
                ? 'fill-accent text-accent' 
                : 'fill-muted text-muted'
            }`}
          />
        ))}
      </div>

      {/* Comment */}
      <p className="font-body text-lg text-foreground leading-relaxed">
        {testimonial.comment}
      </p>
    </div>
  );
};

export default TestimonialsSection;