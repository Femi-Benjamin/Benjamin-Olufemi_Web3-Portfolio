import React from "react";
import { motion } from "framer-motion";
import { Radio, BookOpen, Coffee } from "lucide-react";

const Currently: React.FC = () => {
  return (
    <section className="py-12 border-y border-zinc-200 dark:border-[#00f2fe]/10 bg-white/65 dark:bg-[#101438]/45 backdrop-blur-sm transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-evenly items-start md:items-center gap-8">
          {/* Status Item 1: Building */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-gradient-to-tr dark:from-[#101438] dark:to-[#121640] text-zinc-700 dark:text-[#00f2fe] border border-zinc-200 dark:border-[#00f2fe]/15 flex items-center justify-center shadow-sm">
              <Radio size={20} className="animate-pulse" />
            </div>
            <div>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-1">
                Building
              </p>
              <p className="text-gray-900 dark:text-white font-medium">DeFi Dashboard v2</p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-zinc-200 dark:bg-[#00f2fe]/10" />

          {/* Status Item 2: Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-gradient-to-tr dark:from-[#101438] dark:to-[#121640] text-zinc-700 dark:text-[#0072ff] border border-zinc-200 dark:border-[#0072ff]/15 flex items-center justify-center shadow-sm">
              <BookOpen size={20} />
            </div>
            <div>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-1">
                Learning
              </p>
              <p className="text-gray-900 dark:text-white font-medium">Rust & Arbitrum Stylus</p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-zinc-200 dark:bg-[#00f2fe]/10" />

          {/* Status Item 3: Reading/Listening */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-gradient-to-tr dark:from-[#101438] dark:to-[#121640] text-zinc-700 dark:text-[#00f2fe] border border-zinc-200 dark:border-[#00f2fe]/15 flex items-center justify-center shadow-sm">
              <Coffee size={20} />
            </div>
            <div>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-1">
                Exploring
              </p>
              <p className="text-gray-900 dark:text-white font-medium">
                Account Abstraction (ERC-4337)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Currently;
