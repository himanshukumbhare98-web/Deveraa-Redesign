import { HeartPulse, Wallet, Truck, GraduationCap, Building, Factory, ShoppingCart, Sparkles } from "lucide-react";

export default function Industries() {
  const industries = [
    { name: "Healthcare", icon: HeartPulse },
    { name: "FinTech", icon: Wallet },
    { name: "Logistics", icon: Truck },
    { name: "Education", icon: GraduationCap },
    { name: "Real Estate", icon: Building },
    { name: "Manufacturing", icon: Factory },
    { name: "Retail", icon: ShoppingCart },
    { name: "AI Startups", icon: Sparkles },
  ];

  return (
    <section className="w-full py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Industries We Serve</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tailored software solutions designed for the unique challenges of your industry.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center justify-center p-8 rounded-xl border bg-background hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer group shadow-sm hover:shadow-md"
              >
                <Icon className="w-10 h-10 mb-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                <h3 className="font-semibold text-lg">{industry.name}</h3>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}