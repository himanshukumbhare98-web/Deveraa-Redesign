import { Code, Smartphone, Cloud, PenTool, Bot, Server, Infinity } from "lucide-react";

export default function Services() {
  const servicesList = [
    { title: "Web Development", description: "Modern, fast, and scalable enterprise web applications.", icon: Code },
    { title: "Mobile Apps", description: "High-performance native and cross-platform mobile experiences.", icon: Smartphone },
    { title: "SaaS Development", description: "End-to-end architecture for software as a service products.", icon: Cloud },
    { title: "AI Solutions", description: "Smart machine learning integrations and automation systems.", icon: Bot },
    { title: "UI/UX Design", description: "Beautiful, conversion-focused user interfaces and experiences.", icon: PenTool },
    { title: "Cloud Solutions", description: "Reliable and secure cloud infrastructure and hosting.", icon: Server },
    { title: "DevOps", description: "Automated CI/CD pipelines and infrastructure management.", icon: Infinity },
  ];

  return (
    <section className="w-full py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Core Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We deliver premium engineering solutions to help you scale your business and outpace the competition.
          </p>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group flex flex-col items-start p-8 rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 cursor-pointer"
              >
                {/* Animated Icon Container */}
                <div className="p-3 rounded-xl bg-primary/10 text-primary mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="w-6 h-6" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}