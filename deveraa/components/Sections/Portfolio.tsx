"use client";

import { useState } from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web", "Mobile", "SaaS", "AI"];

  // Yahan har project mein imageUrl add kar diya hai
  const projects = [
    {
      id: 1,
      title: "Fintech Dashboard Pro",
      category: "Web",
      industry: "FinTech",
      technology: "Next.js, Node.js",
      description: "A comprehensive financial dashboard for real-time market tracking and portfolio management.",
      results: "Increased user retention by 40%",
      color: "bg-blue-500/20",
      imageUrl: "/project1.jpg", // Apni image 1 yahan link karo
    },
    {
      id: 2,
      title: "HealthTrack App",
      category: "Mobile",
      industry: "Healthcare",
      technology: "React Native",
      description: "Patient monitoring mobile application with real-time doctor consultation features.",
      results: "Over 500k+ downloads",
      color: "bg-emerald-500/20",
      imageUrl:"/project2.jpg", // Apni image 2 yahan link karo
    },
    {
      id: 3,
      title: "CloudHR Platform",
      category: "SaaS",
      industry: "Enterprise",
      technology: "Vue.js, AWS",
      description: "Automated human resource management system for large scale organizations.",
      results: "Reduced HR admin time by 60%",
      color: "bg-purple-500/20",
      imageUrl: "/project3.jpg", // Apni image 3 yahan link karo
    },
    {
      id: 4,
      title: "Smart Logistics AI",
      category: "AI",
      industry: "Logistics",
      technology: "Python, TensorFlow",
      description: "Predictive route optimization engine for nationwide supply chain delivery networks.",
      results: "Cut fuel costs by 22%",
      color: "bg-orange-500/20",
      imageUrl: "/project4.jpg", // Apni image 4 yahan link karo
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="w-full py-24 bg-muted/20 scroll-mt-10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Featured Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve digital excellence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === filter 
                  ? "bg-primary text-primary-foreground shadow-md scale-105" 
                  : "bg-background border hover:bg-muted text-muted-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid with Pop-up Hover Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group flex flex-col rounded-2xl border bg-background overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              
              {/* Project Cover Image (Updated with Inline CSS) */}
              <div 
                className={`w-full h-64 relative overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-105 bg-cover bg-center ${project.color}`}
                style={{ backgroundImage: `url('${project.imageUrl}')` }}
              >
                {/* Gradient overlay jo hover pe dikhega */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Details */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.industry}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {project.technology}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                
                {/* Key Results */}
                <div className="mt-auto pt-6 border-t">
                  <p className="text-sm text-muted-foreground">Key Result</p>
                  <p className="font-semibold text-foreground">{project.results}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}