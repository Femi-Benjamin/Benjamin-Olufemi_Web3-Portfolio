import React from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu, Globe, Database } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden transition-colors duration-300">
      {/* Decorational light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-200/30 dark:bg-[#0072ff]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-display font-bold text-gray-900 dark:text-white mb-4">
            The <span className="text-zinc-550 dark:text-zinc-400">Architect</span>
          </h2>
          <div className="h-1 w-20 bg-zinc-200 dark:bg-[#101438]/60 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-zinc-800 dark:bg-gradient-to-r dark:from-[#00f2fe] dark:to-[#0072ff]"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-2xl text-gray-750 dark:text-gray-300 leading-relaxed mb-6 font-heavy">
              I'm <span className="text-gray-950 dark:text-white font-bold">Benjamin Olufemi</span>, a developer who thrives at the intersection of design and decentralization.
            </p>
            <p className="text-gray-950 text-lg dark:text-zinc-400 leading-relaxed mb-6 font-heavy">
              With a deep understanding of modern frontend frameworks and blockchain protocols, I build applications that are not only functional but also intuitive and engaging. I believe in a web that is open, permissionless, and user-centric.
            </p>
            <p className="text-gray-950 text-lg dark:text-zinc-400 leading-relaxed font-heavy">
              When I'm not pushing pixels or deploying smart contracts, you can find me exploring the latest DeFi protocols or contributing to open-source Web3 projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <Terminal className="text-zinc-700 dark:text-[#00f2fe]" size={28} />,
                title: "Frontend",
                desc: "React, Next.js, Tailwind",
              },
              {
                icon: <Database className="text-zinc-700 dark:text-[#0072ff]" size={28} />,
                title: "Web3",
                desc: "Solidity, Ethers.js, Wagmi",
              },
              {
                icon: <Globe className="text-zinc-700 dark:text-[#00f2fe]" size={28} />,
                title: "Integration",
                desc: "API, GraphQL, IPFS",
              },
              {
                icon: <Cpu className="text-zinc-700 dark:text-[#0072ff]" size={28} />,
                title: "Performance",
                desc: "Optimization, SEO, UX",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass-panel p-6 rounded-3xl border border-slate-300/80 dark:border-[#00f2fe]/10 bg-white dark:bg-[#101438]/45 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5 active:scale-95"
              >
                <div className="mb-4 bg-zinc-100/50 dark:bg-[#101438]/85 w-12 h-12 rounded-2xl flex items-center justify-center border border-zinc-200/50 dark:border-[#00f2fe]/15">
                  {item.icon}
                </div>
                <h3 className="text-gray-900 dark:text-white font-bold mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
