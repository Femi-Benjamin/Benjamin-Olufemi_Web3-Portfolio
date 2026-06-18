import React from "react";
import { motion } from "framer-motion";
import { Zap, Layout, Box, Shield } from "lucide-react";

const Specialization: React.FC = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-200/30 dark:bg-[#0072ff]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-zinc-500 dark:text-zinc-400 font-mono text-sm tracking-widest uppercase mb-4">
            What I Do Best
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-black dark:from-[#00f2fe] dark:to-[#0072ff]">
              Premium
            </span>{" "}
            Digital Experiences.
          </h3>
          <p className="text-gray-600 dark:text-zinc-400 text-lg font-light">
            I don't just write code; I solve complex product problems with
            technical elegance. Here is where I deliver the most value.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Card 1: High-Performance Apps (Spans 4 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="md:col-span-4 glass-panel border border-slate-300/80 dark:border-[#00f2fe]/10 bg-white dark:bg-[#101438]/45 shadow-sm rounded-3xl p-8 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 group flex flex-col justify-between min-h-[340px]"
          >
            <div>
              <div className="mb-6 bg-zinc-100 dark:bg-[#121640]/65 w-16 h-16 rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-[#00f2fe]/15">
                <Zap size={32} className="text-zinc-700 dark:text-[#00f2fe]" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                High-Performance Apps
              </h4>
              <p className="text-gray-600 dark:text-zinc-400 leading-relaxed font-light max-w-xl">
                Building React and Next.js applications that load consistently under 1 second. I optimize Core Web Vitals, implement intelligent caching layers, and guarantee smooth 60fps rendering transitions.
              </p>
            </div>

            {/* Performance metrics display */}
            <div className="mt-8 flex items-center gap-6 p-4 rounded-2xl bg-zinc-100/50 dark:bg-[#121640]/45 border border-zinc-200/55 dark:border-[#00f2fe]/10 self-start md:self-auto w-full md:w-auto">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-gray-550 dark:text-zinc-400">FCP: 0.3s</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-gray-550 dark:text-zinc-400">TBT: 0ms</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-gray-550 dark:text-zinc-400">Score: 100/100</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Production UI Systems (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="md:col-span-2 glass-panel border border-slate-300/80 dark:border-[#0072ff]/10 bg-white dark:bg-[#101438]/45 shadow-sm rounded-3xl p-8 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 group flex flex-col justify-between min-h-[340px]"
          >
            <div>
              <div className="mb-6 bg-zinc-100 dark:bg-[#121640]/65 w-16 h-16 rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-[#0072ff]/15">
                <Layout size={32} className="text-zinc-700 dark:text-[#0072ff]" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Production UI
              </h4>
              <p className="text-gray-600 dark:text-zinc-400 leading-relaxed font-light">
                Translating complex design guides into responsive, highly accessible (WCAG), and reusable component libraries that scale seamlessly.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Web3 Integration (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="md:col-span-2 glass-panel border border-slate-300/80 dark:border-[#00f2fe]/10 bg-white dark:bg-[#101438]/45 shadow-sm rounded-3xl p-8 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 group flex flex-col justify-between min-h-[340px]"
          >
            <div>
              <div className="mb-6 bg-zinc-100 dark:bg-[#121640]/65 w-16 h-16 rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-[#00f2fe]/15">
                <Box size={32} className="text-zinc-700 dark:text-[#00f2fe]" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Web3 Connect
              </h4>
              <p className="text-gray-600 dark:text-zinc-400 leading-relaxed font-light">
                Integrating UI states with smart contracts. Managing wallet flows, chain switches, raw event streams, and RPC states using Wagmi, Viem, and Ethers.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Scalable Architecture (Spans 4 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="md:col-span-4 glass-panel border border-slate-300/80 dark:border-[#0072ff]/10 bg-white dark:bg-[#101438]/45 shadow-sm rounded-3xl p-8 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 group flex flex-col justify-between min-h-[340px]"
          >
            <div>
              <div className="mb-6 bg-zinc-100 dark:bg-[#121640]/65 w-16 h-16 rounded-2xl flex items-center justify-center border border-zinc-200/50 dark:border-[#0072ff]/15">
                <Shield size={32} className="text-zinc-700 dark:text-[#0072ff]" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Scalable Architecture
              </h4>
              <p className="text-gray-600 dark:text-zinc-400 leading-relaxed font-light max-w-xl">
                Structuring large codebases using modular clean architecture. I separate concerns into domain, data, and presentation layers for robust maintainability.
              </p>
            </div>

            {/* Folder mockup visual */}
            <div className="mt-8 flex flex-col gap-1.5 p-4 rounded-2xl bg-zinc-100/50 dark:bg-[#121640]/45 border border-zinc-200/55 dark:border-[#0072ff]/10 self-start w-full font-mono text-[11px] text-gray-550 dark:text-zinc-400">
              <div className="flex items-center gap-1.5">
                <span className="text-zinc-400 dark:text-zinc-500">📁</span>
                <span>components/</span>
              </div>
              <div className="flex items-center gap-1.5 pl-4">
                <span className="text-zinc-400 dark:text-zinc-500">📁</span>
                <span>ui/</span>
              </div>
              <div className="flex items-center gap-1.5 pl-8">
                <span className="text-zinc-400 dark:text-zinc-500">📄</span>
                <span>ProjectCard.tsx</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Specialization;
