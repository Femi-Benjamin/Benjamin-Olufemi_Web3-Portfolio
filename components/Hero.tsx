import React from "react";
import { motion } from "framer-motion";
import FloatingCard from "./ui/FloatingCard";
import {
  Code,
  Box,
  Globe,
  ArrowDown,
  Download,
  MessageSquare,
} from "lucide-react";
import TrustStrip from "./TrustStrip";

// Custom Icons for Hero
const ReactIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-[#61DAFB]"
  >
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
    </g>
  </svg>
);

const NextIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-white"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill="black"
      stroke="white"
      strokeWidth="1.5"
    />
    <path
      d="M15 9L9 15"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 9V15"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 15V9"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EthIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-gray-300"
  >
    <path
      d="M11.999 2L11.798 2.684L2 7.042L11.999 12.955L22 7.042L12.2 2.684L11.999 2Z"
      fill="#8C8C8C"
      stroke="currentColor"
      strokeWidth="0.5"
    />
    <path
      d="M11.999 21.055L12.201 20.371L22 8.355L11.999 14.268L2 8.355L11.798 20.371L11.999 21.055Z"
      fill="#8C8C8C"
      stroke="currentColor"
      strokeWidth="0.5"
    />
    <path
      d="M11.999 12.955L2 7.04201L11.999 17.842L22 7.04201L11.999 12.955Z"
      fill="rgba(255,255,255,0.8)"
    />
  </svg>
);

const Hero: React.FC = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col pt-20 overflow-x-hidden transition-colors duration-300"
    >
      {/* Main Hero Area */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden dark:bg-transparent transition-colors duration-300">
        {/* Background Grid - Subtle */}
        <div className="absolute inset-0 bg-transparent"></div>

        {/* Radial Gradient for depth */}
        <div className="absolute inset-0 bg-radial-gradient from-zinc-500/5 to-transparent dark:from-[#0072ff]/5 dark:to-transparent opacity-60 pointer-events-none"></div>

        {/* Floating Elements - Glass Badges */}
        <div aria-hidden="true" className="pointer-events-none select-none">
          {/* Code Blocks */}
          <FloatingCard
            delay={0}
            xRange={[-20, 20]}
            yRange={[-30, 30]}
            duration={isMobile ? 12 : 8}
            className="top-[15%] left-[8%] md:left-[10%]"
          >
            <div className="glass-panel p-3 md:p-4 rounded-2xl border-l-4 border-gray-400 dark:border-[#00f2fe]/40 opacity-50 md:opacity-100">
              <Code
                className="text-gray-650 dark:text-[#00f2fe] mb-2"
                size={20}
              />
              <p className="text-[10px] md:text-xs font-mono text-gray-550 dark:text-zinc-400">
                {"<Frontend />"}
              </p>
            </div>
          </FloatingCard>

          <FloatingCard
            delay={2}
            xRange={[20, -20]}
            yRange={[-40, 40]}
            duration={isMobile ? 15 : 10}
            className="bottom-[25%] right-[8%] md:right-[10%]"
          >
            <div className="glass-panel p-3 md:p-4 rounded-2xl border-l-4 border-gray-400 dark:border-[#0072ff]/40 opacity-50 md:opacity-100">
              <Box
                className="text-gray-650 dark:text-[#0072ff] mb-2"
                size={20}
              />
              <p className="text-[10px] md:text-xs font-mono text-gray-550 dark:text-zinc-400">
                {"block.num"}
              </p>
            </div>
          </FloatingCard>

          {/* Tech Icons - Only show on Desktop/Tablet to reduce clutter on mobile */}
          <div className="hidden md:block">
            <FloatingCard
              delay={1}
              duration={6}
              className="top-[20%] right-[20%]"
            >
              <div className="w-16 h-16 rounded-3xl glass-panel flex items-center justify-center border border-zinc-200/50 dark:border-[#00f2fe]/10 shadow-sm">
                <ReactIcon />
              </div>
            </FloatingCard>

            <FloatingCard
              delay={3}
              duration={9}
              className="bottom-[30%] left-[15%]"
            >
              <div className="w-20 h-20 rounded-3xl glass-panel flex items-center justify-center rotate-12 border border-zinc-200/50 dark:border-[#0072ff]/10 shadow-sm">
                <NextIcon />
              </div>
            </FloatingCard>

            <FloatingCard
              delay={4}
              duration={7}
              className="top-[60%] right-[30%] opacity-80 blur-[0.5px]"
            >
              <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center border border-zinc-200/50 dark:border-[#00f2fe]/15">
                <EthIcon />
              </div>
            </FloatingCard>

            <FloatingCard
              delay={0.5}
              duration={12}
              className="top-[10%] left-[40%] opacity-30 blur-[2px] scale-50"
            >
              <div className="w-24 h-24 rounded-full border border-zinc-200/30 dark:border-white/5 flex items-center justify-center">
                <Globe className="text-gray-300 dark:text-white/20" size={40} />
              </div>
            </FloatingCard>
          </div>
        </div>

        {/* Main Content */}
        <div className="z-10 text-center relative max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="inline-flex items-center justify-center px-4 py-2 mb-8 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-gray-800 dark:text-zinc-300 text-sm font-medium rounded-full shadow-sm backdrop-blur-sm transition-colors">
              <span className="mr-2">⚡</span> Frontend & Web3 Engineer
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tight mb-8 leading-[1.05] text-gray-900 dark:text-white"
          >
            BENJAMIN
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-700 to-black dark:from-[#00f2fe] dark:to-[#0072ff]">
              OLUFEMI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-650 dark:text-zinc-350 max-w-2xl mx-auto font-light leading-relaxed mb-12"
          >
            I build fast, scalable, and user-focused dApps —{" "}
            <br className="hidden md:block" />
            from{" "}
            <span className="text-gray-900 dark:text-white font-semibold">
              smart contract interaction
            </span>{" "}
            to{" "}
            <span className="text-gray-900 dark:text-white font-semibold">
              production UI
            </span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a
              href="#work"
              className="w-full sm:w-auto px-10 py-3 bg-gray-950 text-white hover:bg-black dark:bg-gradient-to-r dark:from-[#00f2fe] dark:to-[#0072ff] dark:text-white dark:hover:opacity-95 rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-cyan-500/10 hover:-translate-y-0.5 active:scale-95 group"
            >
              <span>View Projects</span>
              <ArrowDown
                size={20}
                className="group-hover:translate-y-1 transition-transform"
              />
            </a>

            <div className="flex gap-4 w-full sm:w-auto">
              <a
                href="/resume.pdf"
                target="_blank"
                className="flex-1 sm:flex-none px-6 py-3 bg-zinc-100/80 dark:bg-white/5 border border-zinc-200 dark:border-[#00f2fe]/10 text-gray-900 dark:text-zinc-300 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 dark:hover:bg-[#00f2fe]/5 hover:border-zinc-300 dark:hover:border-[#00f2fe]/30 active:scale-95 hover:-translate-y-0.5 transition-all group"
              >
                <Download
                  size={18}
                  className="text-gray-500 dark:text-gray-400 group-hover:text-gray-950 dark:group-hover:text-white transition-colors"
                />
                <span>CV</span>
              </a>
              <a
                href="#contact"
                className="flex-1 sm:flex-none px-6 py-4.5 bg-zinc-100/80 dark:bg-white/5 border border-zinc-200 dark:border-[#00f2fe]/10 text-gray-900 dark:text-zinc-300 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 dark:hover:bg-[#00f2fe]/5 hover:border-zinc-300 dark:hover:border-[#00f2fe]/30 active:scale-95 hover:-translate-y-0.5 transition-all group"
              >
                <MessageSquare
                  size={18}
                  className="text-gray-500 dark:text-gray-400 group-hover:text-gray-950 dark:group-hover:text-white transition-colors"
                />
                <span>Let's Talk</span>
              </a>
            </div>
          </motion.div>

          {/* Meta info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-16 text-xs font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest"
          >
            Nigeria (WAT) • Open to Remote • Contract / Full-time
          </motion.div>
        </div>
      </div>

      {/* Trust Strip */}
      <TrustStrip />
    </section>
  );
};

export default Hero;
