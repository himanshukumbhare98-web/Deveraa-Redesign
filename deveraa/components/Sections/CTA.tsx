import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; // Link import kiya

export default function CTA() {
  return (
    <section className="w-full py-24 bg-primary text-primary-foreground relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-background/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-background/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        
        {/* Headline & Description */}
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
          Ready to Build Your Next Big Idea?
        </h2>
        <p className="text-primary-foreground/80 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Let's turn your vision into a scalable, high-performance digital product. Schedule a free consultation with our engineering experts today.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          {/* Start Your Project Button (Ab Clickable Hai) */}
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto h-14 px-8 text-lg font-bold hover:scale-105 transition-transform duration-300">
              Start Your Project
            </Button>
          </Link>

          {/* Contact Sales Button */}
          <Link href="/contact">
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-105 transition-all duration-300"
            >
              Contact Sales <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>

        </div>

      </div>
    </section>
  );
}