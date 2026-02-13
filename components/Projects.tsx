import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp, X, Globe, Layers } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "DeFi Exchange Pro",
    description: "A decentralized exchange interface enabling token swaps and liquidity pool management with real-time price charts.",
    longDescription: "DeFi Exchange Pro is a high-performance decentralized trading interface designed for the modern Web3 user. It aggregates liquidity from multiple sources to provide the best swap rates. The platform features real-time TradingView charts, gas estimation optimization, and a comprehensive portfolio management dashboard. Built with React and optimized for speed, it ensures that traders never miss a market movement.",
    tags: ["React", "Web3.js", "Tailwind", "Dex API"],
    link: "#",
    demoLink: "https://example.com/demo",
    image: "https://picsum.photos/800/600?random=1",
    screenshots: ["https://picsum.photos/800/600?random=101", "https://picsum.photos/800/600?random=102"]
  },
  {
    id: 2,
    title: "NFT Marketplace",
    description: "A fully functional marketplace for minting, buying, and selling NFTs on the Ethereum Sepolia testnet.",
    longDescription: "This marketplace empowers creators to mint, list, and sell their digital assets with zero platform fees. It supports ERC-721 and ERC-1155 standards. Features include a lazy-minting architecture to reduce gas costs for creators, an auction system, and social sharing integrations. The backend utilizes IPFS for decentralized storage of asset metadata.",
    tags: ["Next.js", "Solidity", "IPFS", "Pinata"],
    link: "#",
    demoLink: "#",
    image: "https://picsum.photos/800/600?random=2",
    screenshots: ["https://picsum.photos/800/600?random=103", "https://picsum.photos/800/600?random=104"]
  },
  {
    id: 3,
    title: "DAO Governance",
    description: "A voting dashboard for decentralized autonomous organizations to manage proposals and treasury funds.",
    longDescription: "A comprehensive governance dashboard allowing token holders to participate in the decision-making process of DAOs. It features proposal creation, quadratic voting mechanisms, and on-chain execution of passed proposals. The interface integrates with Snapshot for gasless voting and Tally for on-chain execution tracking.",
    tags: ["TypeScript", "Ethers.js", "GraphQL"],
    link: "#",
    demoLink: "#",
    image: "https://picsum.photos/800/600?random=3"
  },
  {
    id: 4,
    title: "Smart Contract Auditor",
    description: "AI-powered tool that analyzes Solidity smart contracts for common vulnerabilities and gas optimizations.",
    longDescription: "An advanced security tool that leverages machine learning models to static-analyze Solidity code. It detects reentrancy attacks, integer overflows, and unoptimized loops. The tool provides a detailed PDF report with remediation steps and gas optimization suggestions.",
    tags: ["Python", "React", "OpenAI API", "Solidity"],
    link: "#",
    demoLink: "#",
    image: "https://picsum.photos/800/600?random=4"
  },
  {
    id: 5,
    title: "Metaverse Real Estate",
    description: "Virtual land explorer and purchasing platform integrated with Decentraland land registry data.",
    longDescription: "Explore the metaverse with this immersive 3D real estate platform. Users can visualize parcels of land, check ownership history, and make bids directly through the interface. It utilizes Three.js to render a map of the virtual world directly in the browser.",
    tags: ["Three.js", "React Three Fiber", "Polygon"],
    link: "#",
    demoLink: "#",
    image: "https://picsum.photos/800/600?random=5",
    screenshots: ["https://picsum.photos/800/600?random=105", "https://picsum.photos/800/600?random=106"]
  },
  {
    id: 6,
    title: "Cross-Chain Bridge",
    description: "A secure bridge interface for transferring assets between Ethereum, BSC, and Solana networks.",
    longDescription: "A trustless bridge allowing seamless asset transfer across major blockchains. It employs a lock-and-mint mechanism with validator proof-of-stake to ensure security. The UI provides real-time transaction tracking and estimated arrival times for cross-chain swaps.",
    tags: ["Rust", "React", "Wormhole SDK"],
    link: "#",
    demoLink: "#",
    image: "https://picsum.photos/800/600?random=6"
  },
  {
    id: 7,
    title: "Yield Farming Aggregator",
    description: "Dashboard tracking highest APY farms across multiple protocols with one-click staking capabilities.",
    tags: ["Next.js", "Redux", "The Graph"],
    link: "#",
    demoLink: "#",
    image: "https://picsum.photos/800/600?random=7"
  },
  {
    id: 8,
    title: "Identity Oracle",
    description: "Decentralized identity verification system using zk-SNARKs for privacy-preserving authentication.",
    tags: ["Circom", "SnarkJS", "React"],
    link: "#",
    demoLink: "#",
    image: "https://picsum.photos/800/600?random=8"
  },
  {
    id: 9,
    title: "Decentralized Social",
    description: "A censorship-resistant social media platform built on the Lens Protocol social graph.",
    tags: ["Lens Protocol", "Next.js", "Arweave"],
    link: "#",
    demoLink: "#",
    image: "https://picsum.photos/800/600?random=9"
  },
  {
    id: 10,
    title: "Crypto Portfolio Tracker",
    description: "Real-time portfolio tracker supporting 50+ chains with historical performance visualization.",
    tags: ["Vue.js", "Chart.js", "Covalent API"],
    link: "#",
    demoLink: "#",
    image: "https://picsum.photos/800/600?random=10"
  },
  {
    id: 11,
    title: "Web3 Crowdfunding",
    description: "Kickstarter alternative running on smart contracts with milestone-based fund releasing.",
    tags: ["Solidity", "Hardhat", "React"],
    link: "#",
    demoLink: "#",
    image: "https://picsum.photos/800/600?random=11"
  },
  {
    id: 12,
    title: "Gas Fee Estimator",
    description: "Browser extension and web app to predict optimal transaction times to save on gas fees.",
    tags: ["Etherscan API", "React", "Chrome Ext"],
    link: "#",
    demoLink: "#",
    image: "https://picsum.photos/800/600?random=12"
  }
];

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  
  const visibleProjects = showAll ? projects : projects.slice(0, 3);
  const selectedProject = projects.find(p => p.id === selectedId);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedId]);

  return (
    <section id="work" className="py-24 bg-void relative">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex items-end justify-between"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-2">
                Selected Works
            </h2>
            <p className="text-gray-500">A curation of my recent digital explorations.</p>
          </div>
        </motion.div>

        <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          <AnimatePresence mode='popLayout'>
            {visibleProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => setSelectedId(project.id)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-center">
            <button
                onClick={() => setShowAll(!showAll)}
                className="group flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 hover:border-neon-blue rounded-full text-white transition-all hover:bg-white/10"
            >
                <span>{showAll ? 'Show Less' : 'View All Projects'}</span>
                {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedId(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="group relative rounded-xl overflow-hidden bg-white/5 border border-white/10 h-full flex flex-col cursor-pointer"
    >
      {/* Image Container */}
      <div className="aspect-video overflow-hidden">
        <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />
        
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Layers size={20} className="text-neon-blue" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">{project.title}</h3>
            <div className="flex space-x-3">
                <span className="text-gray-400 hover:text-white transition-colors"><ExternalLink size={20}/></span>
            </div>
        </div>
        
        <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={tag} 
              className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5 transition-all duration-300 group-hover:border-neon-blue/40 group-hover:text-neon-blue group-hover:bg-neon-blue/5"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">
                +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center p-0 md:p-6">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            
            <motion.div 
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '100%', opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-5xl h-[90vh] md:h-auto md:max-h-[90vh] bg-[#0a0a0a] border-t md:border border-white/10 rounded-t-3xl md:rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
                {/* Close Button Mobile */}
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 z-20 md:hidden p-2 bg-black/50 text-white rounded-full"
                >
                    <X size={24} />
                </button>

                {/* Left Side / Top Side: Image */}
                <div className="w-full md:w-5/12 h-64 md:h-auto relative bg-gray-900 shrink-0">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent md:bg-gradient-to-r" />
                    
                    {/* Floating Back Button for Desktop */}
                    <button 
                        onClick={onClose} 
                        className="hidden md:flex absolute top-4 left-4 z-20 p-2 bg-black/40 hover:bg-neon-blue hover:text-black text-white rounded-full backdrop-blur-md transition-all border border-white/10"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Right Side / Bottom Side: Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar relative">
                    <div className="p-6 md:p-10">
                        {/* Header */}
                        <div className="mb-8">
                             <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-neon-blue/10 text-neon-blue border border-neon-blue/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2 leading-tight">
                                {project.title}
                            </h2>
                            <p className="text-lg text-gray-400 font-light border-l-2 border-neon-blue pl-4 my-4">
                                {project.description}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            <a href={project.link} target="_blank" rel="noreferrer" className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white hover:text-black rounded-lg transition-all font-medium group">
                                <Github size={20} /> 
                                <span>Source Code</span>
                            </a>
                            {project.demoLink && (
                                <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-neon-blue text-black font-bold rounded-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                                    <Globe size={20} /> 
                                    <span>Live Demo</span>
                                </a>
                            )}
                        </div>

                        {/* Long Description */}
                        <div className="prose prose-invert max-w-none mb-10">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Layers size={20} className="text-neon-purple" />
                                Project Details
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {project.longDescription || project.description}
                                {!project.longDescription && " Additional details about the architectural decisions, challenges overcome, and specific technologies utilized in this project would go here. This includes information about smart contract optimization, frontend state management, and API integrations."}
                            </p>
                        </div>

                        {/* Screenshots */}
                        {project.screenshots && project.screenshots.length > 0 && (
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">Gallery</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {project.screenshots.map((shot, idx) => (
                                        <div key={idx} className="rounded-lg overflow-hidden border border-white/10 group">
                                            <img src={shot} alt={`Screenshot ${idx + 1}`} className="w-full h-auto hover:scale-105 transition-transform duration-500" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Projects;