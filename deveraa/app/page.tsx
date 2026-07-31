import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

// Saare Sections ke Imports
import TrustedBy from "@/components/Sections/TrustedBy";
import Services from "@/components/Sections/Services";
import Industries from "@/components/Sections/Industries";
import WhyChooseUs from "@/components/Sections/WhyChooseUs";
import Process from "@/components/Sections/Process";
import TechStack from "@/components/Sections/TechStack";
import Portfolio from "@/components/Sections/Portfolio";
import CaseStudies from "@/components/Sections/CaseStudies";
import Testimonials from "@/components/Sections/Testimonials";
import FAQ from "@/components/Sections/FAQ";
import CTA from "@/components/Sections/CTA";
import Footer from "@/components/Sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-background overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20">
        
        {/* Background Gradient Effect with Glow Animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[35rem] w-[35rem] bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(99,102,241,0.25),rgba(255,255,255,0))] blur-3xl pointer-events-none animate-pulse"></div>

        {/* Hero Content */}
        <div className="z-10 flex max-w-5xl flex-col items-center text-center">
          
          {/* Animated Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border bg-muted/40 px-5 py-2 text-base font-semibold text-foreground backdrop-blur-md shadow-sm transition-transform duration-300 hover:scale-105">
            <Sparkles className="w-5 h-5 text-indigo-500 mr-2.5 animate-spin" style={{ animationDuration: '4s' }} />
            ✨ Welcome to Deveraa
          </div>

          {/* Large Headline with Gradient */}
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl leading-tight">
            Build Modern Software <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Products Faster
            </span>
          </h1>

          {/* Short Description */}
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
            We deliver enterprise-grade web, mobile, and AI solutions designed for high conversion, fast performance, and infinite scalability.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center items-center">
            
            {/* 🔴 UPDATE: /contact ko #contact kiya gaya hai */}
            <Link href="#contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-md font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300 rounded-xl cursor-pointer">
                Schedule Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            
            <Link href="#portfolio" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-md font-bold hover:bg-muted/80 hover:scale-105 active:scale-95 transition-all duration-300 rounded-xl cursor-pointer">
                View Portfolio
              </Button>
            </Link>

          </div> 
          
        </div>
      </section>

      {/* --- OTHER SECTIONS --- */}
      <TrustedBy />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Process />
      <TechStack />
      <Portfolio />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      
      {/* 🔴 UPDATE: CTA ke upar id="contact" lagaya gaya hai taaki navbar wahan scroll kare */}
      <section id="contact" className="scroll-mt-24">
        <CTA />
      </section>
      
      <Footer />

    </main>
  );
}