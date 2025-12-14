import { Button } from "@/components/ui/button";
import { ArrowRight, User } from "lucide-react";
import profileImage from "@/assets/nabil-profile.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 text-primary text-sm font-medium mb-6">
              Built with Passion.
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Meet <span className="text-gradient">Nabil Islam</span>
            </h1>

            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6">
              A Passionate{" "}
              <span className="text-primary">MERN Stack Developer</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              I build responsive, performance-driven websites and enjoy turning
              ideas into code. Specializing in modern React applications with
              beautiful, functional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow"
              >
                <a
                  target="_blank"
                  href="https://github.com/nabilislam11?tab=repositories"
                >
                  View Projects
                </a>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                My Story
                <User className="ml-2 w-4 h-4" />
              </Button>
              <button>
                <a
                  href="https://drive.google.com/file/d/10khDiHD1XZ0ExblQ0l8GRP8TIKM423WI/view?usp=drive_link"
                  download
                  className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition text-white font-medium"
                >
                  Download CV
                </a>
              </button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 animate-float">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent">
                  <img
                    src={profileImage}
                    alt="Nabil Islam - MERN Stack Developer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-star-twinkle"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/60 rounded-full animate-star-twinkle"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 -left-8 w-4 h-4 bg-primary/40 rounded-full animate-star-twinkle"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Scrolling text banner */}
        <div className="mt-20 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="text-lg text-muted-foreground mx-8">CREATIVE</span>
            <span className="text-lg text-primary mx-8">•</span>
            <span className="text-lg text-muted-foreground mx-8">
              INNOVATIVE
            </span>
            <span className="text-lg text-primary mx-8">•</span>
            <span className="text-lg text-muted-foreground mx-8">
              PASSIONATE
            </span>
            <span className="text-lg text-primary mx-8">•</span>
            <span className="text-lg text-muted-foreground mx-8">
              DEDICATED
            </span>
            <span className="text-lg text-primary mx-8">•</span>
            <span className="text-lg text-muted-foreground mx-8">CREATIVE</span>
            <span className="text-lg text-primary mx-8">•</span>
            <span className="text-lg text-muted-foreground mx-8">
              INNOVATIVE
            </span>
            <span className="text-lg text-primary mx-8">•</span>
            <span className="text-lg text-muted-foreground mx-8">
              PASSIONATE
            </span>
            <span className="text-lg text-primary mx-8">•</span>
            <span className="text-lg text-muted-foreground mx-8">
              DEDICATED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
