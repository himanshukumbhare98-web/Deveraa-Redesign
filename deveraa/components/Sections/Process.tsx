import { Search, Map, PenTool, Code2, ShieldCheck, Rocket, Wrench } from "lucide-react";

export default function Process() {
  const steps = [
    { id: 1, name: "Discovery", description: "Understanding your business goals and technical requirements.", icon: Search },
    { id: 2, name: "Planning", description: "Creating a roadmap, architecture design, and project timeline.", icon: Map },
    { id: 3, name: "Design", description: "Crafting intuitive UI/UX wireframes and premium visual prototypes.", icon: PenTool },
    { id: 4, name: "Development", description: "Writing clean, scalable code using modern technologies.", icon: Code2 },
    { id: 5, name: "Testing", description: "Rigorous QA testing to ensure bug-free and secure performance.", icon: ShieldCheck },
    { id: 6, name: "Deployment", description: "Smooth launch and integration into your live production environment.", icon: Rocket },
    { id: 7, name: "Maintenance", description: "Ongoing support, monitoring, and feature updates.", icon: Wrench },
  ];

  return (
    <section className="w-full py-24 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Development Process</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven, transparent timeline to turn your vision into a reality.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="relative border-l border-primary/20 ml-6 md:ml-0 md:border-l-0">
          
          {/* Animated Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50 animate-pulse -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 1;

              return (
                <div key={step.id} className="relative flex flex-col md:flex-row items-center justify-between w-full">
                  
                  {/* Timeline Dot (Mobile & Desktop) */}
                  <div className="absolute left-[-24px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-primary text-primary-foreground z-10 shadow-sm transition-transform hover:scale-110">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Left Side (Empty on Mobile, Content on Even Desktop) */}
                  <div className={`hidden md:block w-5/12 ${isEven ? 'text-right pr-8' : 'opacity-0'}`}>
                    {isEven && (
                      <>
                        <h3 className="text-xl font-bold mb-2">
                          <span className="text-primary mr-2">0{step.id}.</span> {step.name}
                        </h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </>
                    )}
                  </div>

                  {/* Right Side (Content on Mobile, Content on Odd Desktop) */}
                  <div className={`w-full pl-8 md:pl-0 md:w-5/12 ${!isEven ? 'md:text-left md:pl-8' : 'md:opacity-0 md:hidden'}`}>
                    <h3 className="text-xl font-bold mb-2 md:mt-0 mt-2">
                      <span className="text-primary mr-2 md:hidden">0{step.id}.</span> 
                      <span className="hidden md:inline text-primary mr-2">0{step.id}.</span> 
                      {step.name}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  
                  {/* Right Side Fallback for Mobile (When Even on Desktop) */}
                  {isEven && (
                    <div className="w-full pl-8 md:hidden">
                      <h3 className="text-xl font-bold mb-2 mt-2">
                        <span className="text-primary mr-2">0{step.id}.</span> {step.name}
                      </h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}