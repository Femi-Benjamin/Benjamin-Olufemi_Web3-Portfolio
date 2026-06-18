import React, { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SEO from "./components/SEO";
import Specialization from "./components/Specialization";
import Currently from "./components/Currently";
import { motion } from "framer-motion";

const App: React.FC = () => {
  // Theme State
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "dark"; // Default to dark premium
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Custom Cursor Logic
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isMousePresent, setIsMousePresent] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      setIsMousePresent(true);
    };

    const mouseLeave = () => {
      setIsMousePresent(false);
    };

    const mouseEnter = () => {
      setIsMousePresent(true);
    };

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseleave", mouseLeave);
    document.addEventListener("mouseenter", mouseEnter);

    // Initial check if document is focused
    if (typeof document !== "undefined" && document.hasFocus()) {
      setIsMousePresent(true);
    }

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseleave", mouseLeave);
      document.removeEventListener("mouseenter", mouseEnter);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "transparent",
      border: theme === "dark" ? "1px solid rgba(0, 242, 254, 0.45)" : "1px solid rgba(0, 0, 0, 0.2)",
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: theme === "dark" ? "rgba(0, 242, 254, 0.04)" : "rgba(0, 0, 0, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0)",
      mixBlendMode: "difference" as any,
    },
  };

  return (
    <HelmetProvider>
      <div className="bg-transparent text-gray-900 dark:text-gray-100 min-h-screen font-sans selection:bg-[#0072ff] selection:text-white transition-colors duration-300 relative overflow-hidden">
        {/* Spotlight illumination overlay tracking the cursor (illuminates the dot grid on hover) */}
        <div 
          className="fixed inset-0 pointer-events-none z-0 hidden dark:block transition-opacity duration-300"
          style={{
            opacity: isMousePresent ? 1 : 0,
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 242, 254, 0.07), rgba(99, 102, 241, 0.02) 40%, transparent 70%)`
          }}
        />

        {/* Organic Navy/Indigo Orbs with Cyan/Blue gradient elements (inspired by the reference images) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden dark:block">
          <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#00c6ff]/10 to-[#0072ff]/5 blur-[120px] animate-float-slow opacity-80" />
          <div className="absolute top-[40%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#0072ff]/10 to-[#0b0c16]/10 blur-[130px] animate-float-medium opacity-90" />
          <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#00f2fe]/8 to-[#0072ff]/5 blur-[120px] animate-float-fast opacity-70" />
        </div>
        <SEO />

        {/* Custom Cursor */}
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-50 hidden md:block"
          variants={variants}
          animate={cursorVariant}
          transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
        />

        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main
          onMouseEnter={() => setCursorVariant("default")}
          className="relative z-10"
        >
          <Hero />

          <Currently />

          {/* Hover trigger for cursor */}
          <div
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <About />
          </div>

          <Specialization />

          <Skills />

          <div
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <Projects />
          </div>

          <Contact />
        </main>
      </div>
    </HelmetProvider>
  );
};

export default App;
