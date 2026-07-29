import { Target, Lightbulb, Code2, TrendingUp, ArrowRight } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      client: "Global FinServe",
      title: "Modernizing Legacy Banking Infrastructure",
      problem: "Outdated monolithic architecture causing slow transaction processing and frequent server downtime during peak hours.",
      solution: "Migrated to a highly scalable microservices architecture using Node.js and AWS, implementing automated CI/CD pipelines.",
      technology: "Node.js, AWS, React, Kubernetes",
      businessImpact: "Achieved zero downtime during peak hours and significantly improved user satisfaction scores.",
      metrics: [
        { label: "Performance", value: "+300%" },
        { label: "Downtime", value: "-99%" },
        { label: "Cost Saved", value: "$1.2M" }
      ]
    },
    {
      id: 2,
      client: "RetailMax",
      title: "AI-Powered Inventory Optimization",
      problem: "Inefficient inventory tracking leading to frequent stockouts, overstocking issues, and lost revenue.",
      solution: "Developed an AI predictive model integrated with a custom web-based ERP dashboard for real-time tracking.",
      technology: "Python, TensorFlow, Next.js, PostgreSQL",
      businessImpact: "Optimized global stock levels, preventing lost sales and reducing warehouse operational costs.",
      metrics: [
        { label: "Stockouts", value: "-85%" },
        { label: "Efficiency", value: "+40%" },
        { label: "Revenue", value: "+15%" }
      ]
    }
  ];

  return (
    <section className="w-full py-24 bg-background border-t">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Case Studies</h2>
            <p className="text-muted-foreground text-lg">
              Deep dives into how we solve complex engineering challenges and deliver measurable business value.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="flex flex-col rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 overflow-hidden group">
              
              <div className="p-8 flex-grow">
                <div className="mb-6">
                  <span className="text-sm font-bold tracking-wider uppercase text-muted-foreground">
                    {study.client}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* Problem & Solution */}
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Target className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold mb-1">The Problem</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{study.problem}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold mb-1">The Solution</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Technology & Impact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Code2 className="w-4 h-4 text-primary" />
                        <h4 className="text-sm font-semibold">Technology</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{study.technology}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <h4 className="text-sm font-semibold">Business Impact</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{study.businessImpact}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics Footer */}
              <div className="bg-primary/5 border-t p-6">
                <div className="grid grid-cols-3 gap-4 divide-x divide-border">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className={`flex flex-col items-center justify-center text-center ${idx !== 0 ? 'pl-4' : ''}`}>
                      <span className="text-2xl font-extrabold text-foreground">{metric.value}</span>
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}