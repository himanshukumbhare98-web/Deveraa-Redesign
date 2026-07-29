import { Briefcase, Mail, Globe } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Ritika Malve",
      role: "CEO & Founder",
      initials: "AC",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      id: 2,
      name: "Abhishek Thakare",
      role: "Lead Developer",
      initials: "PS",
      color: "bg-emerald-500/10 text-emerald-600",
    },
    {
      id: 3,
      name: "James Wilson",
      role: "UX/UI Designer",
      initials: "JW",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      id: 4,
      name: "Anita Patel",
      role: "Project Manager",
      initials: "AP",
      color: "bg-orange-500/10 text-orange-600",
    },
  ];

  return (
    <section className="w-full py-24 bg-background border-t">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Meet Our Experts</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The brilliant minds behind our enterprise solutions. A team dedicated to engineering excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group flex flex-col items-center text-center p-6 rounded-2xl border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              
              {/* Image Placeholder */}
              <div className={`w-32 h-32 rounded-full ${member.color} flex items-center justify-center text-3xl font-bold mb-6 overflow-hidden relative`}>
                <span>{member.initials}</span>
                {/* Overlay for hover effect */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
              <p className="text-sm font-medium text-muted-foreground mb-6">{member.role}</p>

              {/* Hover Social Icons */}
              <div className="flex gap-4 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Briefcase className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Globe className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}