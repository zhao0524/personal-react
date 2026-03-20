import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const fullName = "David Zhao";

export const HeroSection = () => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}{displayed}
              <span className={`inline-block w-[3px] h-[1em] bg-primary align-middle ml-1 ${done ? "opacity-0" : "animate-pulse"}`} />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            I'm an aspiring data scientist focused on machine learning and
            data-driven problem solving. I enjoy building intelligent systems
            that turn complex data into actionable insights.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button ">
              view my projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
