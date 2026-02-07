import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/pp.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              Hi, I'm{" "}
              <span className="text-gradient">Aman Kumar Yadav</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Full Stack Developer & Creative Designer
            </p>
            <p className="text-lg text-muted-foreground max-w-lg">
              Building responsive, user-friendly web applications and visually compelling designs that transform ideas into functional reality.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
              >
                Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Work
              </Button>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-float"></div>
              <img
                src={profilePhoto}
                alt="Aman Kumar Yadav"
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover object-top border-4 border-primary/50 glow-effect"
                style={{ objectPosition: "center 5%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
