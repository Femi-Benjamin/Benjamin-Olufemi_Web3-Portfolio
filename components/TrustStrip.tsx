import React from "react";
import { Terminal, Database, Code2, Globe } from "lucide-react";
import { motion } from "framer-motion";

const TrustStrip: React.FC = () => {
  const items = [
    { icon: <Terminal size={18} />, text: "Frontend & Web3 Engineer" },
    { icon: <Code2 size={18} />, text: "React / Next.js / Solidity" },
    { icon: <Globe size={18} />, text: "Production-ready UI Systems" },
    { icon: <Database size={18} />, text: "Open to Remote Work" },
  ];

  return (
    <section className="w-full bg-white/40 dark:bg-black/40 border-y border-zinc-200 dark:border-white/5 backdrop-blur-sm relative z-20 transition-colors duration-300">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-6 md:gap-0">
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
              key={index}
              className="flex items-center gap-3 text-zinc-500 dark:text-gray-400 font-mono text-sm group hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <span className="text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                {item.icon}
              </span>
              <span>{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
