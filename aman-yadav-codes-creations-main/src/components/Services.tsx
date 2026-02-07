import { Globe, Smartphone, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Responsive Web Development",
      description: "Creating websites that look great and function perfectly on all devices, from mobile to desktop.",
    },
    {
      icon: Zap,
      title: "Interactive User Experiences",
      description: "Building engaging, intuitive interfaces with smooth animations and seamless interactions.",
    },
    {
      icon: Smartphone,
      title: "Full Stack Solutions",
      description: "End-to-end development from database design to frontend implementation, ensuring cohesive functionality.",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-gradient">Services</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Dedicated to delivering excellence in web design and development
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-smooth hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            My focus is on creating web experiences that combine clean aesthetics with intuitive navigation and functional design. Every project is built with user engagement and client satisfaction at the forefront, ensuring that the final product not only meets but exceeds expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
