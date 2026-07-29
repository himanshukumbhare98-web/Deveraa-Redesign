"use client";

import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      company: "TechFlow Inc.",
      role: "CTO",
      review: "Deveraa completely transformed our legacy architecture. Their team's expertise in cloud migration saved us thousands of dollars monthly while improving our system's speed by 3x. Truly a premium engineering partner.",
      rating: 5,
      image: "SJ" // Initials as placeholder for photo
    },
    {
      id: 2,
      name: "David Chen",
      company: "HealthSync",
      role: "Founder & CEO",
      review: "The mobile app they delivered was flawless. From UI/UX design to final deployment, their agile process kept us in the loop every step of the way. We hit 100k downloads in the first month!",
      rating: 5,
      image: "DC"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      company: "FinVertex",
      role: "VP of Engineering",
      review: "Security and scalability were our top priorities. Deveraa built a highly secure SaaS platform that easily passed all our compliance audits. Their engineers are top-tier professionals.",
      rating: 5,
      image: "ER"
    },
    {
      id: 4,
      name: "Michael Chang",
      company: "LogistiCore",
      role: "Operations Director",
      review: "The AI integration they built into our supply chain software was a game changer. We can now predict inventory shortages weeks in advance. Excellent team, excellent delivery.",
      rating: 5,
      image: "MC"
    }
  ];

  return (
    <section className="w-full py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Client Success Stories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here is what industry leaders say about working with us.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="max-w-5xl mx-auto px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="flex flex-col h-full p-8 rounded-2xl border bg-background shadow-sm hover:shadow-md transition-shadow duration-300">
                    
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-6 text-amber-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    
                    {/* Review Text */}
                    <p className="text-foreground leading-relaxed flex-grow mb-8 text-lg">
                      "{testimonial.review}"
                    </p>
                    
                    {/* Client Info */}
                    <div className="flex items-center gap-4 pt-6 border-t mt-auto">
                      {/* Placeholder for Client Photo */}
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                        {testimonial.image}
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>

                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Buttons */}
            <CarouselPrevious className="hidden md:flex -left-12 bg-background hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex -right-12 bg-background hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>

      </div>
    </section>
  );
}