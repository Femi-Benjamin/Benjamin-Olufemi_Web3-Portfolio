import { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: "DeFi Exchange Pro",
    description: "A high-performance decentralized trading interface aggregating liquidity for optimal swap rates.",
    longDescription: "DeFi Exchange Pro is a production-ready DEX interface designed for professional traders. It features real-time TradingView charting, sub-second price updates via WebSocket, and a smart routing algorithm that splits trades across multiple pools to minimize slippage. The application is built with performance in mind, using optimistic UI updates and memoized heavy computations.",
    tags: ["React", "Web3.js", "Tailwind", "Dex API"],
    repoUrl: "https://github.com/benjamin-olufemi",
    liveUrl: "https://example.com/demo",
    image: "https://picsum.photos/800/600?random=1",
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
    image: "https://picsum.photos/800/600?random=2",
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
    image: "https://picsum.photos/800/600?random=3",
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
    image: "https://picsum.photos/800/600?random=4",
    category: 'tools',
    highlights: [
      "Fine-tuned an OpenAI model on 500+ audited smart contracts",
      "Reduced audit turnaround time for preliminary checks by 90%",
      "implemented syntax highlighting and real-time linting in the browser editor"
    ]
  },
  {
    id: 5,
    title: "Metaverse Real Estate",
    description: "3D virtual land explorer integrated with Decentraland registry data.",
    longDescription: "An immersive 3D map interface for exploring and purchasing virtual land. Users can fly over parcels, view ownership history, and place bids. Built with Three.js and React Three Fiber for a seamless in-browser 3D experience.",
    tags: ["Three.js", "R3F", "Polygon"],
    repoUrl: "https://github.com/benjamin-olufemi",
    image: "https://picsum.photos/800/600?random=5",
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
    image: "https://picsum.photos/800/600?random=6",
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
    image: "https://picsum.photos/800/600?random=7",
    category: "web3",
    highlights: ["Detailed APY analytics"]
  },
  {
    id: 8,
    title: "Identity Oracle",
    description: "Decentralized identity verification system using zk-SNARKs for privacy-preserving authentication.",
    tags: ["Circom", "SnarkJS", "React"],
    repoUrl: "https://github.com/benjamin-olufemi",
    image: "https://picsum.photos/800/600?random=8",
    category: "web3",
    highlights: ["Zero-knowledge proof implementation"]
  },
  {
    id: 9,
    title: "Decentralized Social",
    description: "A censorship-resistant social media platform built on the Lens Protocol social graph.",
    tags: ["Lens Protocol", "Next.js", "Arweave"],
    repoUrl: "https://github.com/benjamin-olufemi",
    image: "https://picsum.photos/800/600?random=9",
    category: "web3",
    highlights: ["Arweave data storage"]
  },
  {
    id: 10,
    title: "Crypto Portfolio Tracker",
    description: "Real-time portfolio tracker supporting 50+ chains with historical performance visualization.",
    tags: ["Vue.js", "Chart.js", "Covalent API"],
    repoUrl: "https://github.com/benjamin-olufemi",
    image: "https://picsum.photos/800/600?random=10",
    category: "frontend",
    highlights: ["Multi-chain data aggregation"]
  },
  {
    id: 11,
    title: "Web3 Crowdfunding",
    description: "Kickstarter alternative running on smart contracts with milestone-based fund releasing.",
    tags: ["Solidity", "Hardhat", "React"],
    repoUrl: "https://github.com/benjamin-olufemi",
    image: "https://picsum.photos/800/600?random=11",
    category: "web3",
    highlights: ["Smart contract escrow"]
  },
  {
    id: 12,
    title: "Gas Fee Estimator",
    description: "Browser extension and web app to predict optimal transaction times to save on gas fees.",
    tags: ["Etherscan API", "React", "Chrome Ext"],
    repoUrl: "https://github.com/benjamin-olufemi",
    image: "https://picsum.photos/800/600?random=12",
    category: "tools",
    highlights: ["Real-time gas tracking"]
  }
];
