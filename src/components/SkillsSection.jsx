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
  SiScala,
  SiTensorflow,
  SiPytorch,
  SiFastapi,
  SiPandas,
  SiNumpy,
  SiKubernetes,
} from "react-icons/si";
import {
  TbMathFunction,
  TbChartBar,
  TbTable,
  TbBrandPython,
  TbCode,
  TbLetterC,
  TbLetterR,
  TbBrandSpeedtest,
} from "react-icons/tb";
import { cn } from "@/lib/utils";
import BorderGlow from './BorderGlow';

const skills = [
  // Frontend
  { name: "HTML", category: "frontend", icon: <SiHtml5 /> },
  { name: "CSS", category: "frontend", icon: <SiCss3 /> },
  { name: "JavaScript", category: "frontend", icon: <SiJavascript /> },
  { name: "React", category: "frontend", icon: <SiReact /> },
  // Backend
  { name: "Node.js", category: "backend", icon: <SiNodedotjs /> },
  { name: "Express.js", category: "backend", icon: <SiExpress /> },
  { name: "Python", category: "backend", icon: <SiPython /> },
  // Database
  { name: "MongoDB", category: "database", icon: <SiMongodb /> },
  { name: "SQL (Postgres)", category: "database", icon: <SiPostgresql /> },
  { name: "Git", category: "database", icon: <SiGit /> },
  { name: "Docker", category: "database", icon: <SiDocker /> },
  // Cloud
  { name: "AWS", category: "cloud", icon: <SiAmazonwebservices /> },
  { name: "GraphQL", category: "cloud", icon: <SiGraphql /> },
  { name: "REST APIs", category: "cloud", icon: <SiPostman /> },
  { name: "TypeScript", category: "cloud", icon: <SiTypescript /> },
  { name: "Next.js", category: "cloud", icon: <SiNextdotjs /> },
  // Languages
  { name: "Java", category: "backend", icon: <TbCode /> },
  { name: "C/C++", category: "backend", icon: <TbLetterC /> },
  { name: "Julia", category: "backend", icon: <TbCode /> },
  { name: "R", category: "backend", icon: <TbLetterR /> },
  { name: "Scala", category: "backend", icon: <SiScala /> },
  { name: "Matlab", category: "backend", icon: <TbMathFunction /> },
  // Frameworks
  { name: "TensorFlow", category: "backend", icon: <SiTensorflow /> },
  { name: "PyTorch", category: "backend", icon: <SiPytorch /> },
  { name: "Scikit-learn", category: "backend", icon: <TbBrandPython /> },
  { name: "Kubeflow", category: "cloud", icon: <SiKubernetes /> },
  { name: "FastAPI", category: "backend", icon: <SiFastapi /> },
  { name: "MLflow", category: "backend", icon: <TbBrandSpeedtest /> },
  // Analytics
  { name: "pandas", category: "analytics", icon: <SiPandas /> },
  { name: "NumPy", category: "analytics", icon: <SiNumpy /> },
  { name: "Matplotlib", category: "analytics", icon: <TbChartBar /> },
  { name: "ggplot2", category: "analytics", icon: <TbChartBar /> },
  { name: "data.table", category: "analytics", icon: <TbTable /> },
  { name: "Polars", category: "analytics", icon: <TbTable /> },
];

const categories = ["all", "frontend", "backend", "database", "cloud", "analytics"];

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
            <BorderGlow key={key} edgeSensitivity={30} glowColor="40 80 80" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius={28} glowRadius={40} glowIntensity={1} coneSpread={25} animated={false} fillOpacity={0} colors={['#c084fc', '#f472b6', '#38bdf8']}>
              <div className="p-6">
                <div className="flex flex-col items-center gap-3">
                  <div className="text-primary text-3xl">{skill.icon}</div>
                  <h3 className="front-semibold text-lg">{skill.name}</h3>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
};
