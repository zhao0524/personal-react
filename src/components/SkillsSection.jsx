import React, { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "javascript", level: 90, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },

  { name: "MongoDB", level: 75, category: "database" },
  { name: "Python", level: 70, category: "backend" },
  { name: "SQL", level: 70, category: "database" },
  { name: "Git", level: 80, category: "database" },
  { name: "Docker", level: 70, category: "database" },

  { name: "AWS", level: 60, category: "cloud" },
  { name: "GraphQL", level: 65, category: "cloud" },
  { name: "REST APIs", level: 75, category: "cloud" },
  { name: "TypeScript", level: 70, category: "cloud" },
  { name: "Next.js", level: 75, category: "cloud" },
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
          {filteredSkills.map((skills, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="front-semibold text-lg">{skills.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                  style={{ width: `${skills.level}%` }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skills.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
