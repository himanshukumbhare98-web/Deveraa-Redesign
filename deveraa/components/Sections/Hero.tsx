import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-background overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
        
        {/* Background Gradient Effect */}
        <div className="absolute top-0 z-0 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        {/* Hero Content */}
        <div className="z-10 flex max-w-5xl flex-col items-center text-center">
          
          {/* Animated Badge */}
          <div className="mb-6 rounded-full border bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
            ✨ Welcome to Deveraa
          </div>

          {/* Large Headline */}
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Build Modern Software <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Products Faster
            </span>
          </h1>

          {/* Short Description */}
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            We deliver enterprise-grade web, mobile, and AI solutions designed for high conversion, fast performance, and infinite scalability.
          </p>
        </div>
      </section>

    </main>
  );
}