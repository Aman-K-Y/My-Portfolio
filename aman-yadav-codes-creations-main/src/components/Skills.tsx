import { Code2, Database, Layers, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design"],
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "MongoDB", "API Integration", "Database Management"],
    },
    {
      icon: Layers,
      title: "Full Stack",
      skills: ["MERN Stack", "RESTful APIs", "Authentication", "State Management"],
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: ["UI/UX Design", "User Interface Optimization", "Clean Aesthetics", "Intuitive Navigation"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-smooth hover:glow-effect animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center justify-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
