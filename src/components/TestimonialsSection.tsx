import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "./ui/button";
import TestimonialCard from "./Testimonial/TestimonialCard";
import { testimonials } from "@/db/testimonials";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

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
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          {/* Title and Description */}
          <div className="lg:w-2/5 lg:pr-12 mb-4 lg:mb-0">
            <h2 className="font-title text-4xl lg:text-5xl text-secondary leading-tight tracking-wide mb-4 lg:mb-6">
              SOMOS ESPÍRITU
            </h2>
            <p className="font-body text-md text-muted-foreground leading-relaxed mb-8">
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
          <div className="hidden lg:block lg:w-3/5 relative overflow-hidden flex justify-center items-center">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 50}%)`,
                // width: `${testimonials.length * 50}%`
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-1/2 flex-shrink-0 pr-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
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

export default TestimonialsSection;