export default function TrustedBy() {
  const logos = ["Vercel", "Stripe", "Linear", "Clerk", "Supabase", "Framer", "Raycast"];

  return (
    <section className="w-full border-y bg-muted/20 py-12">
      <div className="flex flex-col items-center justify-center gap-6 overflow-hidden">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted by innovative startups and enterprises
        </p>
        
        {/* Marquee Container */}
        <div className="relative flex w-full max-w-5xl overflow-hidden">
          {/* Gradient Masks for smooth fading on edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent"></div>
          
          {/* Scrolling Content */}
          <div className="animate-marquee flex w-max items-center gap-16">
            {logos.map((logo, index) => (
              <span key={index} className="text-2xl font-bold text-muted-foreground/40 transition-colors hover:text-muted-foreground">
                {logo}
              </span>
            ))}
            {/* Duplicate set for infinite scroll effect */}
            {logos.map((logo, index) => (
              <span key={`dup-${index}`} className="text-2xl font-bold text-muted-foreground/40 transition-colors hover:text-muted-foreground">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}