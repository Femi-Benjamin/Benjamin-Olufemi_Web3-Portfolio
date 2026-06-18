import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NavItem } from "../types";

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
          isScrolled || isOpen
            ? "glass-panel border-b border-black/5 dark:border-[#00f2fe]/10 bg-white/80 dark:bg-[#0b0c16]/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <a href="#home" className="z-50 flex items-center focus:outline-none" aria-label="Home page">
          <svg
            width="38"
            height="38"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-900 dark:text-white transition-colors duration-300"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              className="stroke-gray-900/20 dark:stroke-[#00f2fe]/40"
              strokeWidth="3.5"
            />
            <text
              x="49"
              y="52"
              fontFamily="Georgia, serif"
              fontSize="34"
              fontWeight="bold"
              fill="currentColor"
              textAnchor="middle"
              dominantBaseline="central"
            >
              BO
            </text>
            <circle
              cx="86"
              cy="67"
              r="6.5"
              className="fill-[#0072ff] dark:fill-[#00f2fe]"
            />
          </svg>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 dark:bg-[#00f2fe] transition-all group-hover:w-full" />
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a
            href="#contact"
            className="px-5 py-2.5 text-xs font-bold rounded-full bg-gradient-to-r from-[#00f2fe] to-[#0072ff] text-white hover:opacity-90 hover:shadow-md hover:shadow-cyan-500/10 hover:-translate-y-0.5 active:scale-95 transition-all shadow-sm"
          >
            LET'S TALK
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 md:hidden z-50">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            className="p-2 text-gray-900 dark:text-white hover:text-[#00f2fe] transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-40 bg-white/98 dark:bg-[#0b0c16]/98 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-display font-bold text-gray-900 dark:text-white hover:text-[#00f2fe] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-3.5 text-sm font-bold rounded-full bg-gradient-to-r from-[#00f2fe] to-[#0072ff] text-white hover:opacity-90 hover:shadow-lg active:scale-95 transition-all shadow-md"
            >
              LET'S TALK
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
