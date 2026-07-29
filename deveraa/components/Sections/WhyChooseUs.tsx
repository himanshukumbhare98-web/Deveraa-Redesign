import { Users, Zap, ShieldCheck, Maximize, Headphones, RefreshCw } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    { 
      title: "Experienced Engineers", 
      description: "Top-tier talent with years of enterprise software experience building complex systems.", 
      icon: Users 
    },
    { 
      title: "Agile Development", 
      description: "Iterative sprints ensuring flexibility, transparency, and continuous delivery.", 
      icon: RefreshCw 
    },
    { 
      title: "Fast Delivery", 
      description: "Optimized workflows to get your product to market faster without compromising quality.", 
      icon: Zap 
    },
    { 
      title: "Secure Architecture", 
      description: "Bank-grade security protocols and data protection built into every layer.", 
      icon: ShieldCheck 
    },
    { 
      title: "Scalable Solutions", 
      description: "Cloud-native systems designed to grow seamlessly with your expanding user base.", 
      icon: Maximize 
    },
    { 
      title: "Long-term Support", 
      description: "Ongoing maintenance, monitoring, and dedicated support post-launch.", 
      icon: Headphones 
    },
  ];

  return (
    <section className="w-full py-24 bg-background border-t">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Choose Deveraa</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We don't just write code. We build robust, scalable businesses with our modern engineering practices.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="flex flex-col p-6 bg-card border rounded-2xl hover:border-primary/50 transition-colors duration-300 shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}