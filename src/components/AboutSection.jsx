import { Briefcase, ChartLine, Code, MonitorCheck, Sparkle, Sparkles, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text_center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-30 itmes-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate developer</h3>
            <p className="text-muted-foreground">
              I see time as one of the most valuable resources and try to use it
              purposefully every day. Whether I’m working on a technical
              project, exploring a new idea, or simply reflecting, I aim to stay
              present and focused. To me, how we spend our time shapes not just
              what we achieve, but who we become.
            </p>

            <p className="text-muted-foreground">
              Outside of my work in data and technology, I stay active through
              swimming, basketball, rock climbing, and going to the gym. These
              activities help me maintain both physical and mental balance, and
              they push me to improve consistently. I believe that investing
              time in both growth and rest is key to long-term progress and
              fulfillment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                target="_blank"
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
                  <ChartLine className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data analytcis</h4>
                  <p className="text-mute-foreground">
                    {" "}
                    I specialize in analyzing complex data to uncover trends,
                    patterns, and insights. Using tools like SQL, Python, and
                    visualization libraries, I turn raw data into clear,
                    actionable information.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MonitorCheck className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-mute-foreground">
                    {" "}
                    I build machine learning models that learn from data and
                    solve real-world problems efficiently. I enjoy working with
                    algorithms like neural networks and decision trees to create
                    smart, adaptive systems.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Artificial Intelligence
                  </h4>
                  <p className="text-mute-foreground">
                    {" "}
                    I’m passionate about AI and its ability to mimic human
                    reasoning and perception. From natural language processing
                    to computer vision, I explore AI’s potential to create
                    meaningful and ethical solutions.{" "}
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
