import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text_center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-30 itmes-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">passionate web developer</h3>
            <p className="text-muted-foreground">
              I am a passionate web developer with a keen interest in creating
              dynamic and responsive web applications. My journey in web
              development has been fueled by a love for coding and a desire to
              build user-friendly interfaces.
            </p>

            <p className="text-muted-foreground">
              I specialize in front-end development, focusing on crafting
              visually appealing and intuitive user experiences. My skills
              include HTML, CSS, JavaScript
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#content" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/David.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transitions-colors duration-300"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {/* change the "code" tag to change the icons for these */}
                  <Code classname="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data analytcis</h4>
                  <p className="text-mute-foreground">
                    {" "}
                    Data analytics is the process of examining raw data to
                    uncover patterns, trends, and insights. It helps
                    organizations make informed decisions by transforming
                    complex data into meaningful information.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User classname="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data analytcis</h4>
                  <p className="text-mute-foreground">
                    {" "}
                    Data analytics is the process of examining raw data to
                    uncover patterns, trends, and insights. It helps
                    organizations make informed decisions by transforming
                    complex data into meaningful information.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase classname="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data analytcis</h4>
                  <p className="text-mute-foreground">
                    {" "}
                    Data analytics is the process of examining raw data to
                    uncover patterns, trends, and insights. It helps
                    organizations make informed decisions by transforming
                    complex data into meaningful information.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
