import { Project } from './types';
import vault from './components/images/vault.png';
import web3 from './components/images/web3.png';
import spendwise from './components/images/spendwise.png';
import titan from './components/images/titan.png';
import unique from './components/images/unique.png';
import shoe from './components/images/shoe.png';
import arctic from './components/images/arctic.png';
import elearn from './components/images/elearn.png';
import cardify from './components/images/cardify.png';
import animefinance from './components/images/animefinance.png';
import personarise from './components/images/personarise.png';
import ben from './components/images/ben.jpg';

// Local static images for Web3 / Blockchain projects
import defiExchangeProImage from './assets/defi-exchange-pro.svg';
import nftMarketplaceImage from './assets/nft-marketplace.svg';
import daoGovernanceDashboardImage from './assets/dao-governance-dashboard.svg';
import crossChainBridgeImage from './assets/cross-chain-bridge.svg';
import yieldFarmingAggregatorImage from './assets/yield-farming-aggregator.svg';
import identityOracleImage from './assets/identity-oracle.svg';
import decentralizedSocialImage from './assets/decentralized-social.svg';
import web3CrowdfundingImage from './assets/web3-crowdfunding.svg';

export const projects: Project[] = [
  // Original Projects
  {
    id: 1,
    title: "DeFi Exchange Pro",
    description: "A high-performance decentralized trading interface aggregating liquidity for optimal swap rates.",
    longDescription: "DeFi Exchange Pro is a production-ready DEX interface designed for professional traders. It features real-time TradingView charting, sub-second price updates via WebSocket, and a smart routing algorithm that splits trades across multiple pools to minimize slippage. The application is built with performance in mind, using optimistic UI updates and memoized heavy computations.",
    tags: ["React", "Web3.js", "Tailwind", "Dex API"],
    repoUrl: "https://github.com/benjamin-olufemi",
    liveUrl: "https://example.com/demo",
    image: defiExchangeProImage,
    screenshots: ["https://picsum.photos/800/600?random=101", "https://picsum.photos/800/600?random=102"],
    category: 'web3',
    role: "Lead Frontend Engineer",
    stack: ["React", "TypeScript", "Viem", "TailwindCSS", "Recharts"],
    highlights: [
      "Reduced initial load time by 40% using code-splitting and dynamic imports",
      "Implemented optimistic UI updates for instant feedback on transaction status",
      "Integrated 5+ wallet providers using RainbowKit with custom theming"
    ],
    challenges: [
      "Handling real-time price updates for 100+ token pairs without performance degradation.",
      "Managing complex state for multi-hop swap routes."
    ]
  },
  {
    id: 2,
    title: "NFT Marketplace",
    description: "Gas-optimized marketplace for minting and trading ERC-721 assets on Ethereum Sepolia.",
    longDescription: "Empowering creators with a zero-fee minting platform. This marketplace supports lazy minting to lower entry barriers, an auction system with real-time bidding, and robust metadata management using IPFS. The UI focuses on showcasing digital art with immersive layouts and smooth transitions.",
    tags: ["Next.js", "Solidity", "IPFS", "Pinata"],
    repoUrl: "https://github.com/benjamin-olufemi",
    liveUrl: "https://example.com/demo",
    image: nftMarketplaceImage,
    category: 'web3',
    role: "Full Stack Web3 Developer",
    stack: ["Next.js", "Wagmi", "Solidity", "IPFS", "Framer Motion"],
    highlights: [
      "Implemented lazy minting, saving creators 100% on upfront gas fees",
      "Designed a custom auction engine with WebSocket integration for live bids",
      "Built a responsive grid layout processing 1000+ NFT items efficiently"
    ]
  },
  {
    id: 3,
    title: "DAO Governance Dashboard",
    description: "Comprehensive voting interface for decentralized organizations, featuring quadratic voting.",
    longDescription: "A governance hub for DAOs to manage proposals, treasury, and voting. It introduces quadratic voting to prevent whale dominance and integrates with Snapshot for gasless off-chain voting. The dashboard provides deep analytics into voter participation and proposal outcomes.",
    tags: ["TypeScript", "Ethers.js", "GraphQL"],
    repoUrl: "https://github.com/benjamin-olufemi",
    image: daoGovernanceDashboardImage,
    category: 'web3',
    highlights: [
      "Integrated Snapshot API for gasless voting, increasing participation by 300%",
      "Visualized complex voting data using D3.js for intuitive insights",
      "Secured admin routes with role-based access control (RBAC)"
    ]
  },
  {
    id: 4,
    title: "Smart Contract Auditor AI",
    description: "AI-powered analysis tool identifying vulnerabilities and gas optimizations in Solidity code.",
    longDescription: "Leveraging LLMs to secure smart contracts. This tool accepts Solidity code, parses it, and runs it against a fine-tuned model to detect common vulnerabilities like Reentrancy and Overflow. It generates detailed PDF reports with remediation steps and gas optimization tips.",
    tags: ["React", "OpenAI API", "Solidity", "Node.js"],
    repoUrl: "https://github.com/benjamin-olufemi",

    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    category: 'tools',
    highlights: [
      "Fine-tuned an OpenAI model on 500+ audited smart contracts",
      "Reduced audit turnaround time for preliminary checks by 90%",
      "implemented syntax highlighting and real-time linting in the browser editor"
    ]
  },
  {
    id: 25,
    title: "My Portfolio Frontend",
    description: "A personal portfolio website showcasing projects and skills with modern UI.",
    tags: ["React Js", "Material UI", "Framer Motion"],
    repoUrl: "https://github.com/Femi-Benjamin/Portfolio_Benjamin-Olufemi",
    liveUrl: "https://benjamin-olufemi-portfolio.vercel.app/",
    image: ben,
    category: 'frontend',
    highlights: ["Modern and responsive UI design", "Smooth animations with Framer Motion", "Showcase of Web3 and Frontend projects"],
  },
  {
    id: 5,
    title: "Metaverse Real Estate",
    description: "3D virtual land explorer integrated with Decentraland registry data.",
    longDescription: "An immersive 3D map interface for exploring and purchasing virtual land. Users can fly over parcels, view ownership history, and place bids. Built with Three.js and React Three Fiber for a seamless in-browser 3D experience.",
    tags: ["Three.js", "R3F", "Polygon"],
    repoUrl: "https://github.com/benjamin-olufemi",
    image: "https://images.unsplash.com/photo-1614728263952-84ea206f0c41?q=80&w=800&auto=format&fit=crop",
    category: 'frontend',
    stack: ["React", "Three.js", "React Three Fiber", "Zustand"],
    highlights: [
      "Optimized 3D rendering to maintain 60fps on average consumer laptops",
      "Implemented instanced mesh rendering for thousands of land parcels",
      "Seamlessly integrated blockchain transaction state into the 3D environment"
    ]
  },
  {
    id: 6,
    title: "Cross-Chain Bridge",
    description: "Secure asset bridge between Ethereum, BSC, and Solana with proof-of-stake validation.",
    longDescription: "Facilitating seamless asset transfers across fragmented blockchains. This bridge uses a lock-and-mint mechanism securitized by a decentralized set of validators. The UI prioritizes trust and clarity, showing users exactly where their funds are at every step of the cross-chain journey.",
    tags: ["Rust", "React", "Wormhole SDK"],
    repoUrl: "https://github.com/benjamin-olufemi",
    image: crossChainBridgeImage,
    category: 'web3',
    highlights: [
      "Designed a fail-safe UI that prevents user errors during critical transactions",
      "Reduced perceived waiting time with detailed step-by-step progress tracking",
      "Handled edge cases for chain reorgs and dropped transactions elegantly"
    ]
  },
  {
    id: 7,
    title: "Yield Farming Aggregator",
    description: "Dashboard tracking highest APY farms across multiple protocols with one-click staking capabilities.",
    tags: ["Next.js", "Redux", "The Graph"],
    repoUrl: "https://github.com/benjamin-olufemi",
    image: yieldFarmingAggregatorImage,
    category: "web3",
    highlights: ["Detailed APY analytics"]
  },
  {
    id: 8,
    title: "Identity Oracle",
    description: "Decentralized identity verification system using zk-SNARKs for privacy-preserving authentication.",
    tags: ["Circom", "SnarkJS", "React"],
    repoUrl: "https://github.com/benjamin-olufemi",
    image: "identity-oracle",
    category: "web3",
    highlights: ["Zero-knowledge proof implementation"]
  },
  {
    id: 9,
    title: "Decentralized Social",
    description: "A censorship-resistant social media platform built on the Lens Protocol social graph.",
    tags: ["Lens Protocol", "Next.js", "Arweave"],
    repoUrl: "https://github.com/benjamin-olufemi",
    image: decentralizedSocialImage,
    category: "web3",
    highlights: ["Arweave data storage"]
  },
  {
    id: 10,
    title: "Crypto Portfolio Tracker",
    description: "Real-time portfolio tracker supporting 50+ chains with historical performance visualization.",
    tags: ["Vue.js", "Chart.js", "Covalent API"],
    repoUrl: "https://github.com/benjamin-olufemi",
    image: "https://images.unsplash.com/photo-1611974762655-6c6467000d11?q=80&w=800&auto=format&fit=crop",
    category: "frontend",
    highlights: ["Multi-chain data aggregation"]
  },
  {
    id: 11,
    title: "Web3 Crowdfunding",
    description: "Kickstarter alternative running on smart contracts with milestone-based fund releasing.",
    tags: ["Solidity", "Hardhat", "React"],
    repoUrl: "https://github.com/benjamin-olufemi",
    image: web3CrowdfundingImage,
    category: "web3",
    highlights: ["Smart contract escrow"]
  },
  {
    id: 12,
    title: "Gas Fee Estimator",
    description: "Browser extension and web app to predict optimal transaction times to save on gas fees.",
    tags: ["Etherscan API", "React", "Chrome Ext"],
    repoUrl: "https://github.com/benjamin-olufemi",
    image: "https://images.unsplash.com/photo-1621416848440-276911377bcc?q=80&w=800&auto=format&fit=crop",
    category: "tools",
    highlights: ["Real-time gas tracking"]
  },
  // New Projects
  {
    id: 13,
    title: "FAITH VAULT",
    description: "A secure digital vault application for managing digital assets and sensitive information.",
    tags: ["React Js", "Typescript", "Framer Motion", "TailwindCSS"],
    repoUrl: "https://github.com/Femi-Benjamin/faith-media-hub",
    liveUrl: "https://faith-vault.vercel.app/",
    image: vault,
    category: 'frontend',
    highlights: ["Secure digital asset management", "User-friendly interface", "Robust security features"],
  },
  {
    id: 14,
    title: "MY WEB3 HUB",
    description: "A comprehensive Web3 dashboard for tracking crypto assets and exploring decentralized applications.",
    tags: ["React Js", "Typescript", "TailwindCSS"],
    repoUrl: "https://github.com/Femi-Benjamin/my-web3-hub",
    liveUrl: "https://my-web3-hub.vercel.app/",
    image: web3,
    category: 'web3',
    highlights: ["Real-time crypto asset tracking", "Decentralized application explorer", "Dapp Integration"],
  },
  {
    id: 15,
    title: "SPENDWISE",
    description: "Your personal finance companion for tracking expenses, budgeting, and financial planning.",
    tags: ["React Js", "Typescript", "TailwindCSS"],
    repoUrl: "https://github.com/Femi-Benjamin/spendwise-your-personal-finance-companion",
    liveUrl: "https://spendwise-your-personal-finance-com.vercel.app/",
    image: spendwise,
    category: 'frontend',
    highlights: ["Expense tracking and budgeting", "Visual financial reports", "Goal setting features"],
  },
  {
    id: 16,
    title: "TITAN LEAP",
    description: "A dynamic landing page and platform for Titan Leap, showcasing services and offerings.",
    tags: ["React Js", "Typescript", "TailwindCSS"],
    repoUrl: "https://github.com/Femi-Benjamin/Titan-leap",
    liveUrl: "https://titan-leap-ruddy.vercel.app/",
    image: titan,
    category: 'frontend',
    highlights: ["Modern landing page design", "Service showcase", "Responsive layout"],
  },
  {
    id: 17,
    title: "UNIQUE HAIR TREATMENT",
    description: "A beauty and wellness platform specifically designed for hair treatment services.",
    tags: ["React Js", "TailwindCSS"],
    repoUrl: "https://github.com/Femi-Benjamin/Unique-Hair-Treatment",
    liveUrl: "https://unique-hair-treatment.vercel.app/",
    image: unique,
    category: 'frontend',
    highlights: ["Service booking system", "Gallery of treatments", "Customer testimonials"],
  },
  {
    id: 18,
    title: "CHARM COMMERCE",
    description: "A modern e-commerce user interface for an online fashion and accessories store.",
    tags: ["React Js", "TailwindCSS"],
    repoUrl: "https://github.com/Femi-Benjamin/charm-commerce-ui",
    liveUrl: "https://charm-commerce-ui.vercel.app/",
    image: shoe,
    category: 'frontend',
    highlights: ["Product catalog with filters", "Shopping cart functionality", "Checkout process flow"],
  },
  {
    id: 19,
    title: "ARCTIC TRAVEL AGENCY",
    description: "A travel agency website offering tour packages and destination guides for arctic adventures.",
    tags: ["React Js", "TailwindCSS"],
    repoUrl: "https://github.com/Femi-Benjamin/arctic_travels",
    liveUrl: "https://arctic-travels-two.vercel.app/",
    image: arctic,
    category: 'frontend',
    highlights: ["Tour package browsing", "Destination guides", "Booking inquiry form"],
  },
  {
    id: 20,
    title: "HEALTH CARE MANAGEMENT SYSTEM",
    description: "A comprehensive system for managing patient records, appointments, and hospital resources.",
    tags: ["React Js", "TailwindCSS", "Material UI", "MySQL"],
    repoUrl: "https://github.com/Femi-Benjamin/HealthCare_App",
    liveUrl: "https://healthcare-app.vercel.app/",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop",
    category: 'frontend',
    highlights: ["Patient record management", "Appointment scheduling", "Resource allocation tracking"],
  },
  {
    id: 21,
    title: "E-LEARNING PLATFORM",
    description: "An educational platform facilitating online learning with courses and interactive content.",
    tags: ["React Js", "Chakra UI", "TailwindCSS"],
    repoUrl: "https://github.com/Femi-Benjamin/e-learn_project1",
    liveUrl: "https://e-learn-project1.vercel.app/",
    image: elearn,
    category: 'frontend',
    highlights: ["Course catalog and enrollment", "Interactive learning modules", "Progress tracking"],
  },
  {
    id: 22,
    title: "Cardify",
    description: "A digital card generation and management application with cloud integration.",
    tags: ["React Js", "TailwindCSS", "Chara UI", "Firebase"],
    repoUrl: "https://github.com/Femi-Benjamin/Cardify",
    liveUrl: "https://cardify-bice.vercel.app/",
    image: cardify,
    category: 'tools',
    highlights: ["Digital card creation", "Cloud storage integration", "Easy sharing options"],
  },
  {
    id: 23,
    title: "Anime Finance 1.0",
    description: "A decentralized finance platform with an anime-themed user interface.",
    tags: ["React Js", "Material UI"],
    repoUrl: "https://github.com/Femi-Benjamin/anime-finance",
    liveUrl: "https://anime-finance-five.vercel.app/",
    image: animefinance,
    category: 'web3',
    highlights: ["Anime-themed UI", "DeFi protocol integration", "Yield farming features"],
  },
  {
    id: 24,
    title: "PERSONARISE WEB APP",
    description: "A web application for personalized user experiences and content management.",
    tags: ["React Js", "Tailwind CSS", "Material UI"],
    repoUrl: "https://github.com/Femi-Benjamin/Personarise-Project",
    image: personarise,
    category: 'frontend',
    highlights: ["Personalized content delivery", "User preference management", "Dynamic themes"],
  },
];
