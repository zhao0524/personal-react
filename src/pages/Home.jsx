import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ScrollReveal } from "../components/ScrollReveal";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* theme toggle */}
      <ThemeToggle />
      {/* Background effect */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* main content */}
      <main>
        <HeroSection />
        <ScrollReveal><AboutSection /></ScrollReveal>
        <ScrollReveal delay={100}><ExperienceSection /></ScrollReveal>
        <ScrollReveal delay={100}><SkillsSection /></ScrollReveal>
        <ScrollReveal delay={100}><ProjectsSection /></ScrollReveal>
        <ScrollReveal delay={100}><ContactSection /></ScrollReveal>
      </main>

      {/* Footer */}
      <ScrollReveal><Footer /></ScrollReveal>
    </div>
  );
};
