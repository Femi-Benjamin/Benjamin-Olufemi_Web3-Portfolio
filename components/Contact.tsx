import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Twitter,
  Github,
  Send,
  Loader2,
  CheckCircle2,
  Phone,
} from "lucide-react";

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
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-void relative border-t border-white/5"
    >
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
              <h2 className="text-neon-blue font-mono text-sm tracking-widest uppercase mb-4">
                Contact
              </h2>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                Let's Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                  The Future.
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                Have a project in mind? Looking for a Web3 partner? Or just want
                to chat about the metaverse? Drop me a line.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <SocialButton
                icon={<Github size={20} />}
                href="https://github.com/Femi-Benjamin"
                label="GitHub"
              />
              <SocialButton
                icon={<Linkedin size={20} />}
                href="https://www.linkedin.com/in/benjamin-olufemi-7524ab226/"
                label="LinkedIn"
              />
              <SocialButton
                icon={<Twitter size={20} />}
                href="https://twitter.com/Mr1Best"
                label="Twitter"
              />
              <SocialButton
                icon={<WhatsAppIcon size={20} />}
                href="https://web.whatsapp.com/"
                label="WhatsApp"
              />
            </motion.div>

            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-blue">
                  <Mail size={20} />
                </div>
                <a
                  href="mailto:benjaminolufemi16@gmail.com"
                  className="text-lg hover:text-white transition-colors"
                >
                  benjaminolufemi16@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-blue">
                  <Phone size={20} />
                </div>
                <div className="flex flexcol">
                  <a
                    href="tel:08160989601"
                    className="text-lg hover:text-white transition-colors"
                  >
                    08160989601
                  </a>
                  {/* <a
                    href="tel:08113639891"
                    className="text-lg hover:text-white transition-colors"
                  >
                    08113639891
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 relative"
          >
            {formState === "success" ? (
              <div className="h-[400px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400">
                  I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-8 text-neon-blue hover:text-white transition-colors text-sm font-mono uppercase"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-mono text-gray-400 uppercase"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 transition-all placeholder:text-white/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-mono text-gray-400 uppercase"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 transition-all placeholder:text-white/20"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-mono text-gray-400 uppercase"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 transition-all appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Project Proposal</option>
                    <option>Recruitment</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-mono text-gray-400 uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 transition-all resize-none placeholder:text-white/20"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-neon-blue transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === "submitting" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Benjamin Olufemi. All rights
            reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialButton: React.FC<{
  icon: React.ReactNode;
  href: string;
  label?: string;
}> = ({ icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
  >
    {icon}
  </a>
);

export default Contact;
