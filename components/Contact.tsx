import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, ArrowRight, Github, Send } from 'lucide-react';

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ size = 20, className = "" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-void relative border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text & Info */}
            <div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                        Let's Build <br />
                        <span className="text-neon-blue">The Future.</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-lg">
                        Have a project in mind? Looking for a Web3 partner? 
                        Or just want to chat about the metaverse? Drop me a line.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-4"
                >
                    <SocialButton icon={<Github size={20} />} href="#" label="GitHub" />
                    <SocialButton icon={<Linkedin size={20} />} href="#" label="LinkedIn" />
                    <SocialButton icon={<Twitter size={20} />} href="#" label="Twitter" />
                    <SocialButton icon={<WhatsAppIcon size={20} />} href="#" label="WhatsApp" />
                </motion.div>

                <div className="mt-12 space-y-4">
                     <div className="flex items-center gap-4 text-gray-300">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                            <Mail size={18} />
                        </div>
                        <span>hello@benjamin.dev</span>
                    </div>
                </div>
            </div>

            {/* Right Column: Contact Form */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass-panel p-8 rounded-3xl border border-white/10 relative"
            >
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-mono text-gray-400 uppercase">Name</label>
                            <input 
                                type="text" 
                                id="name"
                                className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-mono text-gray-400 uppercase">Email</label>
                            <input 
                                type="email" 
                                id="email"
                                className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-mono text-gray-400 uppercase">Subject</label>
                         <select 
                            id="subject" 
                            className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-neon-blue transition-colors appearance-none"
                        >
                            <option>General Inquiry</option>
                            <option>Project Proposal</option>
                            <option>Recruitment</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-mono text-gray-400 uppercase">Message</label>
                        <textarea 
                            id="message"
                            rows={4}
                            className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-neon-blue transition-colors resize-none"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>

                    <button 
                        type="button" 
                        className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-neon-blue transition-colors flex items-center justify-center gap-2 group"
                    >
                        <span>Send Message</span>
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </motion.div>
        </div>

        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Benjamin Olufemi. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </section>
  );
};

const SocialButton: React.FC<{ icon: React.ReactNode; href: string; label?: string }> = ({ icon, href, label }) => (
    <a 
        href={href}
        aria-label={label}
        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
    >
        {icon}
    </a>
)

export default Contact;
