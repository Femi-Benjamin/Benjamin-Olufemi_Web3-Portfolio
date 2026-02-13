import React from 'react';
import { motion } from 'framer-motion';
import FloatingCard from './ui/FloatingCard';
import { Code, Box, Globe, ArrowDown } from 'lucide-react';

// Custom Icons for Hero
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#61DAFB]">
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <g stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="12" rx="10" ry="4.5"/>
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"/>
    </g>
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="black" stroke="white" strokeWidth="1.5"/>
    <path d="M15 9L9 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 9V15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 15V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EthIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-300">
    <path d="M11.999 2L11.798 2.684L2 7.042L11.999 12.955L22 7.042L12.2 2.684L11.999 2Z" fill="#8C8C8C" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M11.999 21.055L12.201 20.371L22 8.355L11.999 14.268L2 8.355L11.798 20.371L11.999 21.055Z" fill="#8C8C8C" stroke="currentColor" strokeWidth="0.5"/>
    <path d="M11.999 12.955L2 7.04201L11.999 17.842L22 7.04201L11.999 12.955Z" fill="rgba(255,255,255,0.8)" />
  </svg>
);

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-void">
      {/* Background Grid - Subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Radial Gradient for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-purple-900/10 to-transparent opacity-50 pointer-events-none"></div>

      {/* Floating Elements - The "Anti-Gravity" Effect */}
      {/* Code Blocks */}
      <FloatingCard delay={0} xRange={[-20, 20]} yRange={[-30, 30]} duration={8} className="top-[15%] left-[10%]">
        <div className="glass-panel p-4 rounded-xl border-l-4 border-neon-blue">
          <Code className="text-neon-blue mb-2" />
          <p className="text-xs font-mono text-gray-400">{'<Frontend />'}</p>
        </div>
      </FloatingCard>

      <FloatingCard delay={2} xRange={[20, -20]} yRange={[-40, 40]} duration={10} className="bottom-[20%] right-[10%]">
        <div className="glass-panel p-4 rounded-xl border-l-4 border-neon-purple">
          <Box className="text-neon-purple mb-2" />
          <p className="text-xs font-mono text-gray-400">{'block.number'}</p>
        </div>
      </FloatingCard>

      {/* Tech Icons */}
      <FloatingCard delay={1} duration={6} className="top-[20%] right-[20%]">
        <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center border border-blue-500/30 shadow-[0_0_15px_rgba(97,218,251,0.3)]">
          <ReactIcon />
        </div>
      </FloatingCard>

      <FloatingCard delay={3} duration={9} className="bottom-[30%] left-[15%]">
        <div className="w-20 h-20 rounded-2xl glass-panel flex items-center justify-center rotate-12 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          <NextIcon />
        </div>
      </FloatingCard>
      
      <FloatingCard delay={4} duration={7} className="top-[60%] right-[30%] opacity-80 blur-[0.5px]">
        <div className="w-14 h-14 rounded-lg glass-panel flex items-center justify-center border border-gray-500/30">
          <EthIcon />
        </div>
      </FloatingCard>

       <FloatingCard delay={0.5} duration={12} className="top-[10%] left-[40%] opacity-30 blur-[2px] scale-50">
        <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center">
             <Globe className="text-white/20" size={40}/>
        </div>
      </FloatingCard>

      {/* Main Content */}
      <div className="z-10 text-center relative pointer-events-none">
         <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
         >
            <h2 className="text-neon-blue font-mono text-sm mb-4 tracking-widest uppercase">
                Hello World, I'm
            </h2>
         </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter mb-6 mix-blend-difference"
        >
          BENJAMIN
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
            OLUFEMI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto font-light leading-relaxed"
        >
          Architecting the future of the web. 
          <span className="text-white font-medium"> Frontend </span> 
          & 
          <span className="text-white font-medium"> Web3 </span> 
          Engineering.
        </motion.p>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 pointer-events-auto"
        >
            <a href="#work" className="group relative inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold overflow-hidden transition-all hover:pr-10">
                <span className="relative z-10">VIEW MY WORK</span>
                <div className="absolute inset-0 bg-neon-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>
        </motion.div>
      </div>
      
       <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
