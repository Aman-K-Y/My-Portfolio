import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Project Coming Soon",
      description: "Exciting projects are currently in development. Check back soon to see my latest work!",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Personal Experiments",
      description: "Hands-on learning exercises and coding experiments that showcase my growing expertise.",
      tags: ["JavaScript", "API Integration", "Design"],
    },
    {
      title: "Future Showcase",
      description: "This space is reserved for upcoming projects that will demonstrate my full-stack capabilities.",
      tags: ["Full Stack", "Creative Design", "Innovation"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-gradient">Portfolio</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A glimpse into my ongoing projects and future work
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-smooth group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center group-hover:bg-secondary/80 transition-smooth">
                  <span className="text-muted-foreground text-sm">Coming Soon</span>
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" disabled className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button variant="outline" size="sm" disabled className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As a fresher, I'm actively building my portfolio with real-world projects. 
            This section will be regularly updated with completed work that demonstrates my skills and creativity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
