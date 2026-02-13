import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  // Custom Cursor Logic
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "transparent",
      border: "1px solid rgba(255, 255, 255, 0.3)",
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0)",
      mixBlendMode: "difference" as any,
    }
  };

  return (
    <div className="bg-void min-h-screen text-white font-sans selection:bg-neon-blue selection:text-black">
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-50 hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      
      <Navbar />
      
      <main 
        onMouseEnter={() => setCursorVariant("default")} 
        className="relative z-10"
      >
        <Hero />
        
        {/* Hover trigger for cursor */}
        <div onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")}>
            <About />
        </div>
        
        <Skills />
        
        <div onMouseEnter={() => setCursorVariant("hover")} onMouseLeave={() => setCursorVariant("default")}>
            <Projects />
        </div>
        
        <Contact />
      </main>
    </div>
  );
};

export default App;
