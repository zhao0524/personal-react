import { ThemeToggle } from "../components/Themetoggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <div className="min_h_screen bg-background text-foreground overflow-x-hidden">
      {/* theme toggle */}
      <ThemeToggle />
      {/* Background effect */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* main content */}

      {/* Footer */}
    </div>
  );
};
