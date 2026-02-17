import React from "react";
import { motion } from "framer-motion";
import { Radio, BookOpen, Coffee } from "lucide-react";

const Currently: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Status Item 1: Building */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue">
              <Radio size={20} className="animate-pulse" />
            </div>
            <div>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">
                Building
              </p>
              <p className="text-white font-medium">DeFi Dashboard v2</p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-white/10" />

          {/* Status Item 2: Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center text-neon-purple">
              <BookOpen size={20} />
            </div>
            <div>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">
                Learning
              </p>
              <p className="text-white font-medium">Rust & Arbitrum Stylus</p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-white/10" />

          {/* Status Item 3: Reading/Listening */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500">
              <Coffee size={20} />
            </div>
            <div>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">
                Exploring
              </p>
              <p className="text-white font-medium">
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
