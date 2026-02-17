import React, { useState } from "react";
import {
  SiAmazonwebservices,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML", category: "frontend", icon: <SiHtml5 /> },
  { name: "CSS", category: "frontend", icon: <SiCss3 /> },
  { name: "JavaScript", category: "frontend", icon: <SiJavascript /> },
  { name: "React", category: "frontend", icon: <SiReact /> },
  { name: "Node.js", category: "backend", icon: <SiNodedotjs /> },
  { name: "Express.js", category: "backend", icon: <SiExpress /> },
  { name: "MongoDB", category: "database", icon: <SiMongodb /> },
  { name: "Python", category: "backend", icon: <SiPython /> },
  { name: "SQL", category: "database", icon: <SiPostgresql /> },
  { name: "Git", category: "database", icon: <SiGit /> },
  { name: "Docker", category: "database", icon: <SiDocker /> },
  { name: "AWS", category: "cloud", icon: <SiAmazonwebservices /> },
  { name: "GraphQL", category: "cloud", icon: <SiGraphql /> },
  { name: "REST APIs", category: "cloud", icon: <SiPostman /> },
  { name: "TypeScript", category: "cloud", icon: <SiTypescript /> },
  { name: "Next.js", category: "cloud", icon: <SiNextdotjs /> },
];

const categories = ["all", "frontend", "backend", "database", "cloud"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foregrounnd"
                  : "bg-secondary/70 text-foreground hover:bd-secondary hover:bg-secondary/50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="text-primary text-3xl">{skill.icon}</div>
                <h3 className="front-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
