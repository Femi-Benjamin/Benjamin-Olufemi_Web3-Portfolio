import React from "react";
import { motion } from "framer-motion";
import { Box, Code, Cpu, Database, Server, Triangle, Zap } from "lucide-react";

const SkillIcon: React.FC<{ name: string; className?: string }> = ({
  name,
  className = "w-5 h-5",
}) => {
  switch (name) {
    case "React":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={`${className} text-[#61DAFB]`}
        >
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.5">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4.5"
              transform="rotate(60 12 12)"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="4.5"
              transform="rotate(120 12 12)"
            />
          </g>
        </svg>
      );
    case "TypeScript":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} text-[#3178C6]`}
          fill="currentColor"
        >
          <path d="M22 2H2v20h20V2zM11.1 14.5c0 1.9-1.3 3.2-3.3 3.2-1.2 0-2.3-.5-2.8-1.2l1.1-1c.4.5.9.8 1.5.8.9 0 1.4-.5 1.4-1.2 0-.8-.6-1.1-1.6-1.5-1.4-.6-2.4-1.1-2.4-2.7 0-1.6 1.2-2.8 3.1-2.8 1.1 0 1.9.4 2.4.9l-.9 1.1c-.4-.4-.9-.6-1.5-.6-.8 0-1.2.4-1.2 1 0 .7.5.9 1.5 1.3 1.5.6 2.3 1.2 2.3 2.8zm8.7-6.2h-2.3V17h-1.6V8.3h-2.3V7h6.2v1.3z" />
        </svg>
      );
    case "Next.js":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} text-black dark:text-white fill-current`}
        >
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm3.9 12.2L9.4 6.6H8.2v10.9h1.1V10.4l5.5 7.6c.4-.3.7-.7 1.1-1.1V6.6h-1.1v7.8z" />
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${className} text-[#38BDF8]`}
        >
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.002 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.912-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      );
    case "Framer Motion":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${className} text-[#FF00BF]`}
          style={{ fillRule: "evenodd" }}
        >
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
      );
    case "Node.js":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${className} text-[#339933]`}
        >
          <path d="M12 2a1 1 0 0 0-.52.15l-8 4.67A1 1 0 0 0 3 7.68v9.37a1 1 0 0 0 .48.86l8 4.67a1 1 0 0 0 1 0l8-4.67a1 1 0 0 0 .48-.86V7.68a1 1 0 0 0-.48-.86l-8-4.67A1 1 0 0 0 12 2zm-1 3.27v5.56l-4.8-2.77zm2 0l4.8 2.79-4.8 2.77V5.27zm-7 4.61l4.8 2.77-4.8 2.77zm12 0v5.54l-4.8-2.77zm-11 6.38l4.8-2.77v5.56zm10 0l-4.8 2.79v-5.56z" />
        </svg>
      );
    case "Solidity":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${className} text-zinc-700 dark:text-zinc-300`}
        >
          <path d="M12 22.75L3.33 17.75L4.83 15.25L12 19.38L19.17 15.25L20.67 17.75L12 22.75ZM12 1.25L20.67 6.25L19.17 8.75L12 4.62L4.83 8.75L3.33 6.25L12 1.25ZM12 5.88L18 9.38L12 12.88L6 9.38L12 5.88ZM12 11.12L18 14.62L12 18.12L6 14.62L12 11.12ZM3.33 8.75L4.83 11.25L12 7.12L19.17 11.25L20.67 8.75L12 3.75L3.33 8.75ZM3.33 15.25L4.83 17.75L12 13.62L19.17 17.75L20.67 15.25L12 10.25L3.33 15.25Z" />
        </svg>
      );
    case "Ethers.js":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className={`${className} text-[#2535A0] dark:text-[#3b82f6]`}
        >
          <path d="M8 4h10M8 12h8M8 20h10M8 4v16M5 6v12" />
        </svg>
      );
    case "Hardhat":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${className} text-[#FFF176] dark:text-[#FDE24F]`}
        >
          <path d="M12 3c-4.97 0-9 4.03-9 9h18c0-4.97-4.03-9-9-9zm0 1.5c3.08 0 5.67 2.08 6.4 4.9H5.6c.73-2.82 3.32-4.9 6.4-4.9zM2 14h20a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
          <rect x="11" y="2.5" width="2" height="2" rx="0.5" />
        </svg>
      );
    case "IPFS":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${className} text-[#049CAC] dark:text-[#00F2FE]`}
        >
          <path d="M12 2.25L3.75 7.02v9.54L12 21.33l8.25-4.77V7.02L12 2.25zm6.75 13.43L12 19.53l-6.75-3.85V8.04L12 4.19l6.75 3.85v7.64z" />
          <path d="M12 8.35L7.73 10.8v4.9L12 18.15l4.27-2.45v-4.9L12 8.35zm2.73 6.43l-2.73 1.57-2.73-1.57v-3.14l2.73-1.57 2.73 1.57v3.14z" />
        </svg>
      );
    case "GraphQL":
      return (
        <svg
          viewBox="0 0 100 100"
          fill="currentColor"
          className={`${className} text-[#E10098]`}
        >
          <path d="M50 5.485a3.42 3.42 0 0 0-2.96 1.71L1.242 86.485c-.91 1.576.228 3.515 2.05 3.515h86.705c1.823 0 2.96-1.939 2.05-3.515L62.04 7.195a3.42 3.42 0 0 0-2.96-1.71h-9.08zM14.675 80.37L50 19.349l35.325 61.02H14.675z" />
          <path d="M50 94.515a3.42 3.42 0 0 0 2.96-1.71l45.798-79.29c.91-1.576-.228-3.515-2.05-3.515H9.988c-1.823 0-2.96 1.939-2.05 3.515l45.798 79.29a3.42 3.42 0 0 0 2.96 1.71l-6.7 11.603z" />
          <circle cx="50" cy="5.485" r="5.485" />
          <circle cx="94.515" cy="31.182" r="5.485" />
          <circle cx="94.515" cy="80.818" r="5.485" />
          <circle cx="50" cy="94.515" r="5.485" />
          <circle cx="5.485" cy="80.818" r="5.485" />
          <circle cx="5.485" cy="31.182" r="5.485" />
        </svg>
      );
    case "Three.js":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`${className} text-black dark:text-white`}
        >
          <polygon points="12 2 2 20 22 20" />
          <line x1="12" y1="2" x2="12" y2="14" />
          <line x1="2" y1="20" x2="12" y2="14" />
          <line x1="22" y1="20" x2="12" y2="14" />
        </svg>
      );
    default:
      return <Zap className={className} />;
  }
};

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Solidity",
  "Ethers.js",
  "Hardhat",
  "IPFS",
  "GraphQL",
  "Three.js",
];

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-transparent border-y border-zinc-200 dark:border-[#00f2fe]/10 relative transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-mono text-zinc-500 dark:text-zinc-400 mb-10 tracking-widest uppercase"
        >
          Technological Arsenal
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="pl-4 pr-6 py-3 rounded-full border border-slate-300/80 dark:border-[#00f2fe]/10 text-zinc-700 dark:text-zinc-300 text-sm md:text-base cursor-default bg-white dark:bg-[#101438]/45 shadow-sm backdrop-blur-sm transition-all duration-300 flex items-center gap-3 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-350 dark:hover:border-[#00f2fe]/30 active:scale-95 group hover:shadow-md hover:shadow-cyan-500/5"
            >
              <SkillIcon
                name={skill}
                className="w-5 h-5 group-hover:scale-110 transition-transform"
              />
              <span className="font-light">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
