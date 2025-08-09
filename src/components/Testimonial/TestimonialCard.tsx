import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Testimonial } from "@/interfaces/Testimonial";
import { Star } from "lucide-react";
interface TestimonialProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <>
      <div className="bg-accent rounded-lg p-6 h-full">
        {/* User Info */}
        <div className="flex items-center gap-4 mb-2">
          <Avatar className="h-16 w-16">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback className="text-lg font-semibold">{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center">
            <h4 className="font-body text-xl text-secondary leading-tight tracking-wide font-semibold">
              {testimonial.name}
            </h4>
            <p className="font-body text-md text-muted-foreground font-light">
              {testimonial.date}
            </p>
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex gap-1 my-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < testimonial.rating
                ? 'fill-adventure text-adventure'
                : 'fill-muted-foreground text-muted-foreground'
                }`}
            />
          ))}
        </div>

        {/* Comment */}
        <p className="font-body text-md text-muted-foreground leading-relaxed">
          {testimonial.comment}
        </p>
      </div>
    </>
  );
};

export default TestimonialCard;