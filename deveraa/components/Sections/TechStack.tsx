import { LayoutTemplate, Server, Smartphone, Database, Cloud, Terminal } from "lucide-react";

export default function TechStack() {
  const categories = [
    {
      name: "Frontend",
      icon: LayoutTemplate,
      skills: ["React", "Next.js", "Vue", "Angular", "Tailwind", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      name: "Backend",
      icon: Server,
      skills: ["Node.js", "NestJS", "Express", "Laravel", "Django", "ASP.NET", "Spring Boot", "GraphQL", "REST APIs"],
    },
    {
      name: "Mobile",
      icon: Smartphone,
      skills: ["Flutter", "React Native", "Kotlin", "Swift", "Ionic", "Xamarin", "Java"],
    },
    {
      name: "Database",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "SQLite", "Oracle", "Cassandra", "DynamoDB"],
    },
    {
      name: "Cloud",
      icon: Cloud,
      skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Vercel", "Netlify", "Heroku", "Docker", "Kubernetes"],
    },
    {
      name: "DevOps",
      icon: Terminal,
      skills: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Terraform", "Ansible", "CI/CD Pipelines", "Monitoring & Logging"],
    },
  ];

  return (
    <section className="w-full py-24 bg-background border-t">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Tech Stack</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We use the latest and most reliable technologies to build scalable, high-performance digital products.
          </p>
        </div>

        {/* Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index} 
                className="group flex flex-col p-8 border rounded-2xl bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
                
                {/* Technology Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 text-sm font-medium border rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:-translate-y-0.5 hover:shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}