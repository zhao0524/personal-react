import { Description } from "@radix-ui/react-toast";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

// in public make a folder called projects and add png images in them.
// multiple of three will look better.
const projects = [
  {
    id: 1,
    title: "Amazon-fullstack-clone",
    description:
      "An Amazon-clone web app that replicates core e-commerce features including product listings, shopping cart, and checkout functionality with a responsive user interface.",
    image: `${import.meta.env.BASE_URL}projects/amazon-clone-frontpage.png`,
    tags: ["React", "Firebase", "product-API"],
    demoUrl: "#",
    githubUrl: "https://github.com/zhao0524/amazon-clone",
  },
  {
    id: 2,
    title: "Motion exercise predictor",
    description:
      "Motion Exercise Predictor is a machine learning-powered app that detects your movements through a wearable motion sensor and identifies the exercise you’re performing in real time. It helps track workouts, monitor form, and provide insights for better performance.",
    image: `${import.meta.env.BASE_URL}projects/fitness.png`,
    tags: ["Python", "pandas", "numpy"],
    demoUrl: "#",
    githubUrl: "https://github.com/zhao0524/fitness-machine-learning",
  },
  {
    id: 3,
    title: "Eventfinder",
    description:
      "EventFinder is a web app that helps users discover local events in real time. It connects people to nearby concerts, festivals, and community activities based on their location and interests. With personalized filters, users can easily stay updated and never miss out on what’s happening around them.",
    image: `${import.meta.env.BASE_URL}projects/eventfinder.png`,
    tags: ["Python", "html", "flask"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          creativity. Each project is a testament to my dedication to coding and
          problem-solving.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overfow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {" "}
                  {project.title}{" "}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {" "}
                  {project.description}{" "}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/zhao0524"
            target="_blank"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
