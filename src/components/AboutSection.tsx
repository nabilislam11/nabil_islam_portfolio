import { Card, CardContent } from "@/components/ui/card";
import professionalPhoto from "@/assets/professional-photo.jpg";
import developer from "../assets/developer.png";

const AboutSection = () => {
  const skills = [
    { name: "React.js", level: 95 },
    { name: "JavaScript ES6+", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Next.js", level: 85 },
  ];

  // const stats = [
  //   { number: "15+", label: "Projects Completed" },
  //   { number: "2+", label: "Years Experience" },
  //   { number: "100%", label: "Client Satisfaction" },
  //   { number: "24/7", label: "Support Available" },
  // ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image and stats */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-transparent">
                <img
                  src={developer}
                  alt="Nabil Islam - Professional Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-lg border border-primary/20 animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div> */}
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center p-4 bg-card/50 border-border/50"
                >
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div> */}
          </div>

          {/* Right side - About content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary text-sm font-medium mb-4">
                About Me
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Crafting Digital Experiences Since{" "}
                <span className="text-gradient">2024</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate MERN Stack Developer who's deeply committed to
                bringing ideas to life through thoughtful, user-centered design.
                Every project I take on is built with care, creativity, and a
                clear understanding of what the client truly needs.
              </p>
              <p className="text-lg text-muted-foreground">
                What truly drives me is the satisfaction of solving problems and
                making a real impact for the people I work with. I believe in
                clean code, modern design patterns, and building applications
                that not only look great but perform exceptionally.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specializations */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-semibold mb-2 text-primary">Frontend</h4>
                <p className="text-sm text-muted-foreground">
                  React, Next.js, Tailwind CSS
                </p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-semibold mb-2 text-primary">Backend</h4>
                <p className="text-sm text-muted-foreground">
                  Node.js, Express, MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
