import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      year: "Present",
      degree: "B.Tech in Computer Science (AI/ML)",
      institution: "IILM University",
      status: "Ongoing",
    },
    {
      year: "2023",
      degree: "Intermediate",
      institution: "Bal Bharti Vidya Peeth Sr. Sec. School",
      percentage: "82%",
    },
    {
      year: "2021",
      degree: "High School",
      institution: "Bal Bharti Vidya Peeth Sr. Sec. School",
      percentage: "84%",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Get to know more about who I am, what I do, and my journey
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate full-stack web developer and multidisciplinary creative with a deep commitment to transforming innovative ideas into functional, elegant code.
              </p>
              <p>
                My journey in technology began with a curiosity about how digital experiences are crafted. Today, I specialize in building responsive, user-friendly web applications that seamlessly blend aesthetics with functionality.
              </p>
              <p>
                As a continuous learner, I stay updated with the latest technologies and best practices in web development. My multidisciplinary creative skills allow me to approach problems from unique perspectives, creating solutions that are both technically sound and visually compelling.
              </p>
              <p>
                I believe in the power of clean code, intuitive design, and the impact that well-crafted digital experiences can have on users.
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-smooth"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-primary font-semibold">{edu.year}</span>
                    {edu.percentage && (
                      <span className="text-sm text-muted-foreground">{edu.percentage}</span>
                    )}
                    {edu.status && (
                      <span className="text-sm text-primary">{edu.status}</span>
                    )}
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
