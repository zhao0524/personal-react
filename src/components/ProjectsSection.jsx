import { ExternalLink, Github } from "lucide-react";
import { SiDevpost } from "react-icons/si";
import BorderGlow from './BorderGlow';

// in public make a folder called projects and add png images in them.
// multiple of three will look better.
const projects = [
  {
    id: 10,
    title: "A.U.R.A",
    description:
      "An AI-powered platform that transforms 2D floor plans into fully interactive 3D environments you can walk through in the browser. Analyzes the layout, intelligently furnishes the space based on your prompt, and generates a realistic, editable scene for planning and visualization.",
    image: `${import.meta.env.BASE_URL}projects/AURA.png`,
    tags: ["Three.js", "AI", "3D"],
    demoUrl: "https://aura-bay-nu.vercel.app/",
    githubUrl: "https://github.com/zhao0524/FridgeChef",
    devpostUrl: "https://devpost.com/software/a-u-r-a-architectural-understanding-rendering-agent",
    award: "🏆 Winner of Bear Hack",
  },
  {
    id: 8,
    title: "Spar",
    description:
      "An AI-powered mock interview platform where candidates debug real codebases while thinking out loud to a live voice AI interviewer. Evaluates problem-solving, communication, and coding behavior to generate a hiring-style report.",
    image: `${import.meta.env.BASE_URL}projects/Spar.png`,
    tags: ["React", "Voice AI", "AI"],
    demoUrl: "#",
    githubUrl: "https://github.com/RohanGottipati/Spar/tree/main",
    devpostUrl: "https://devpost.com/software/spar-9getb3",
    award: "🏆 Winner of Ignition Hack",
  },
  {
    id: 7,
    title: "GreenLens AI",
    description:
      "Leverages machine learning to analyze complex data and deliver real-time, actionable insights through intuitive reports.",
    image: `${import.meta.env.BASE_URL}projects/greenlens.png`,
    tags: ["Machine Learning", "Data Analysis", "AI"],
    demoUrl: "https://greenlens-ai-pi.vercel.app/",
    githubUrl: "https://github.com/zhao0524/greenlens-ai",
    award: "🏆 Winner of Data Mind Challenge",
  },
  {
    id: 5,
    title: "CareSync",
    description:
      "An AI-powered care coordination platform connecting PSWs, family members, and coordinators through automated shift briefings, medication risk checks, and daily care summaries.",
    image: `${import.meta.env.BASE_URL}projects/CareSync.jpg`,
    tags: ["React", "Node.js", "AI Agents"],
    demoUrl: "https://frontend-three-iota-42.vercel.app/",
    githubUrl: "https://github.com/zhao0524/CareSync",
    devpostUrl: "https://devpost.com/software/caresync-kj2ch4",
    award: "🏆 Winner of HackCanada",
  },
  {
    id: 1,
    title: "Spectra",
    description:
      "A real-time behavioral analytics platform acting as a security layer for AI agents on Solana. Monitors on-chain activity and detects anomalies like abnormal transaction velocity.",
    image: `${import.meta.env.BASE_URL}projects/spectra.png`,
    tags: ["Next.js", "TypeScript", "Solana", "Supabase"],
    demoUrl: "https://spectra-prod-gamma.vercel.app/",
    githubUrl: "https://github.com/boshyxd/Spectra",
    devpostUrl: "https://devpost.com/software/s-e-n-t-r-a",
    award: "🏆 Winner of uOttaHack",
  },
  {
    id: 9,
    title: "FridgeChef",
    description:
      "An AI-powered web app that turns a photo of your fridge into personalized recipes based on your ingredients and available cooking time. Detects what you have, adapts to your schedule, and sends recipes and grocery lists to reduce food waste.",
    image: `${import.meta.env.BASE_URL}projects/Fridgechef.png`,
    tags: ["React", "AI", "Computer Vision"],
    demoUrl: "https://fridgechef-1.vercel.app/",
    githubUrl: "https://github.com/zhao0524/FridgeChef",
    devpostUrl: "https://devpost.com/software/food-for-thought-wnfz1b",
  },
  {
    id: 6,
    title: "Web Editor",
    description:
      "A Chrome extension that lets users describe UI changes in plain English and applies them directly to any webpage in real time — no DevTools required.",
    image: `${import.meta.env.BASE_URL}projects/web_editor.png`,
    tags: ["Chrome Extension", "JavaScript", "AI"],
    demoUrl: "#",
    githubUrl: "https://github.com/zhao0524/web-editor-extension",
  },
  {
    id: 2,
    title: "Amazon Fullstack Clone",
    description:
      "A full-stack e-commerce app replicating core Amazon features including product listings, shopping cart, and checkout with a responsive user interface.",
    image: `${import.meta.env.BASE_URL}projects/amazon-clone-frontpage.png`,
    tags: ["React", "Firebase", "product-API"],
    demoUrl: "#",
    githubUrl: "https://github.com/zhao0524/amazon-clone",
  },
  {
    id: 3,
    title: "Motion Exercise Predictor",
    description:
      "A machine learning app that detects movements through a wearable motion sensor and identifies exercises in real time to track workouts and monitor form.",
    image: `${import.meta.env.BASE_URL}projects/fitness.png`,
    tags: ["Python", "pandas", "numpy"],
    demoUrl: "#",
    githubUrl: "https://github.com/zhao0524/fitness-machine-learning",
  },
  {
    id: 4,
    title: "EventFinder",
    description:
      "A web app that helps users discover local events in real time, connecting people to nearby concerts, festivals, and community activities based on location and interests.",
    image: `${import.meta.env.BASE_URL}projects/eventfinder.png`,
    tags: ["Python", "HTML", "Flask"],
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
            <BorderGlow key={project.id} className="group" edgeSensitivity={30} glowColor="40 80 80" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={28} glowRadius={40} glowIntensity={1} coneSpread={25} animated={false} fillOpacity={0} colors={['#c084fc', '#f472b6', '#38bdf8']}>
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.award && (
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-yellow-400/20 text-yellow-500 border border-yellow-400/30">
                      {project.award}
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground text-sm flex-1">
                  {project.description}
                </p>

                <div className="flex space-x-3 mt-4">
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
                  {project.devpostUrl && (
                    <a
                      href={project.devpostUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <SiDevpost size={20} />
                    </a>
                  )}
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
};
