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
    <section className="w-full bg-black/40 border-y border-white/5 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
              key={index}
              className="flex items-center gap-3 text-gray-400 font-mono text-sm group hover:text-white transition-colors"
            >
              <span className="text-neon-blue/70 group-hover:text-neon-blue transition-colors">
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
