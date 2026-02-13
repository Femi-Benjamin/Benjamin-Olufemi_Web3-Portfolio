import React from 'react';
import { motion } from 'framer-motion';
import { Box, Code, Cpu, Database, FileCode, Layers, Server, Triangle, Zap } from 'lucide-react';

const SkillIcon: React.FC<{ name: string; className?: string }> = ({ name, className = "w-5 h-5" }) => {
  switch (name) {
    case "React":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${className} text-[#61DAFB]`}>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
          <g stroke="currentColor" strokeWidth="1.5">
            <ellipse cx="12" cy="12" rx="10" ry="4.5"/>
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"/>
          </g>
        </svg>
      );
    case "TypeScript":
        return <div className={`${className} bg-[#3178C6] rounded-sm text-white font-bold text-[10px] flex items-center justify-center`}>TS</div>;
    case "Next.js":
        return (
            <svg viewBox="0 0 24 24" className={`${className} text-white fill-current`}>
               <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8 4.41 0 8 3.59 8 8 0 4.41-3.59 8-8 8zm-1-13h2v10h-2zm-3 3h2v7h-2zm6-3h2v10h-2z" fill="transparent" />
               <path d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,12,20Z" />
               <polygon points="10 8 10 16 12 16 12 10.828 15.172 14 15.172 8 16.586 8 16.586 16 13.586 16 10 12.414 10 16 8 16 8 8 10 8" />
            </svg>
        );
    case "Tailwind CSS":
        return (
             <svg viewBox="0 0 24 24" fill="none" className={`${className} text-[#38BDF8]`}>
                <path d="M11.25 7.5C9.75 3.75 5.25 3.75 3.75 7.5C2.25 11.25 6 13.5 6 13.5C6 13.5 8.25 14.25 9.75 16.5C11.25 18.75 14.25 19.5 16.5 16.5C18.75 13.5 15.75 10.5 15.75 10.5C15.75 10.5 12.75 11.25 11.25 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.75 7.5C17.25 3.75 12.75 3.75 11.25 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
        );
    case "Framer Motion":
        return <Triangle className={`${className} text-pink-500`} />;
    case "Node.js":
        return <Server className={`${className} text-[#68A063]`} />;
    case "Solidity":
        return (
            <svg viewBox="0 0 24 24" fill="none" className={`${className} text-gray-300`}>
                <path d="M12 2L12.5 3.5L20 7L12 12L4 7L11.5 3.5L12 2Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 22L12.5 20.5L20 17L12 12L4 17L11.5 20.5L12 22Z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
        );
    case "Ethers.js":
        return <Code className={`${className} text-blue-400`} />;
    case "Hardhat":
        return <div className={`${className} bg-yellow-400 rounded-full w-4 h-4`} />;
    case "IPFS":
        return <Box className={`${className} text-teal-400`} />;
    case "GraphQL":
        return <div className={`${className} text-[#E535AB] font-bold`}>G</div>;
    case "Three.js":
        return <Triangle className={`${className} text-white`} fill="white"/>;
    default:
        return <Zap className={className} />;
  }
};

const skills = [
  "React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion",
  "Node.js", "Solidity", "Ethers.js", "Hardhat", "IPFS", "GraphQL", "Three.js"
];

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-void border-y border-white/5 relative">
        <div className="container mx-auto px-6 text-center">
             <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm font-mono text-neon-blue mb-10 tracking-widest uppercase"
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
                        whileHover={{ scale: 1.1, y: -5, borderColor: '#3b82f6' }}
                        className="pl-4 pr-6 py-3 rounded-full border border-white/10 text-gray-300 text-sm md:text-base cursor-default bg-white/5 backdrop-blur-sm transition-colors flex items-center gap-3 hover:text-white group"
                    >
                        <SkillIcon name={skill} className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>{skill}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Skills;
