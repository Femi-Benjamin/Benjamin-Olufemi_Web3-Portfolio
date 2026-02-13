import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Globe, Database } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-void relative overflow-hidden">
        {/* Decorational light */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-4">
            The <span className="text-neon-purple">Architect</span>
          </h2>
          <div className="h-1 w-20 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-neon-purple"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              I'm <span className="text-white font-bold">Benjamin Olufemi</span>, a developer who thrives at the intersection of design and decentralization. 
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              With a deep understanding of modern frontend frameworks and blockchain protocols, I build applications that are not only functional but also intuitive and engaging. I believe in a web that is open, permissionless, and user-centric.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not pushing pixels or deploying smart contracts, you can find me exploring the latest DeFi protocols or contributing to open-source Web3 projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Terminal className="text-blue-400" size={32} />, title: "Frontend", desc: "React, Next.js, Tailwind" },
              { icon: <Database className="text-purple-400" size={32} />, title: "Web3", desc: "Solidity, Ethers.js, Wagmi" },
              { icon: <Globe className="text-green-400" size={32} />, title: "Integration", desc: "API, GraphQL, IPFS" },
              { icon: <Cpu className="text-red-400" size={32} />, title: "Performance", desc: "Optimization, SEO, UX" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="glass-panel p-6 rounded-2xl border border-white/5 transition-colors duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-white font-bold mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
