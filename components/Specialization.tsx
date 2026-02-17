import React from "react";
import { motion } from "framer-motion";
import { Zap, Layout, Box, Shield } from "lucide-react";

const Specialization: React.FC = () => {
  const specialties = [
    {
      icon: <Zap size={32} className="text-neon-blue" />,
      title: "High-Performance Apps",
      description:
        "Building React/Next.js applications that load consistently under 1 second. I optimize core web vitals, implement aggressive caching, and ensure smooth 60fps animations.",
    },
    {
      icon: <Layout size={32} className="text-neon-purple" />,
      title: "Production UI Systems",
      description:
        "Translating complex designs into pixel-perfect, accessible, and scalable UI components. I maintain design systems that ensure consistency across large codebases.",
    },
    {
      icon: <Box size={32} className="text-pink-500" />,
      title: "Web3 Integration",
      description:
        "Seamlessly connecting frontends to smart contracts. I handle wallet connection states, transaction lifecycles, and data indexing with libraries like Wagmi and Viem.",
    },
    {
      icon: <Shield size={32} className="text-green-400" />,
      title: "Scalable Architecture",
      description:
        "Designing frontend architecture that scales. From state management strategies to modular folder structures, I write code that is easy to read, test, and maintain.",
    },
  ];

  return (
    <section className="py-24 bg-void relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-neon-blue font-mono text-sm tracking-widest uppercase mb-4">
            What I Do Best
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Premium
            </span>{" "}
            Digital Experiences.
          </h3>
          <p className="text-gray-400 text-lg">
            I don't just write code; I solve complex product problems with
            technical elegance. Here is where I deliver the most value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialties.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group"
            >
              <div className="mb-6 bg-black/50 w-16 h-16 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">
                {item.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialization;
