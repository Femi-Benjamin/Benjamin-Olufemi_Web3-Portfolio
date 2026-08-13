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
      className="py-24 bg-transparent relative border-t border-zinc-200 dark:border-[#00f2fe]/10 transition-colors duration-300"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-200/30 dark:bg-[#0072ff]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text & Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-zinc-500 dark:text-zinc-400 font-mono text-sm tracking-widest uppercase mb-4">
                Contact
              </h2>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white mb-6">
                Let's Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-black dark:from-[#00f2fe] dark:to-[#0072ff]">
                  The Future.
                </span>
              </h2>
              <p className="text-xl text-gray-650 dark:text-zinc-400 mb-8 max-w-lg leading-relaxed font-light">
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
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-350">
                <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-[#101438]/85 border border-zinc-200 dark:border-[#00f2fe]/15 flex items-center justify-center text-zinc-700 dark:text-[#00f2fe]">
                  <Mail size={20} />
                </div>
                <a
                  href="mailto:benjaminolufemi16@gmail.com"
                  className="text-lg hover:text-gray-950 dark:hover:text-white transition-colors"
                >
                  benjaminolufemi16@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-350">
                <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-[#101438]/85 border border-zinc-200 dark:border-[#00f2fe]/15 flex items-center justify-center text-zinc-700 dark:text-[#0072ff]">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <a
                    href="tel:08160989601"
                    className="text-lg hover:text-gray-950 dark:hover:text-white transition-colors"
                  >
                    08160989601, 08113639891
                  </a>
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
            className="glass-panel p-8 md:p-10 rounded-3xl border border-slate-300/80 dark:border-[#00f2fe]/10 relative shadow-sm hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
          >
            {formState === "success" ? (
              <div className="h-[400px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6 border border-green-500/20">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-950 dark:text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-8 text-zinc-800 dark:text-zinc-350 hover:text-gray-950 dark:hover:text-white transition-colors text-sm font-mono uppercase"
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
                      className="text-sm font-mono text-zinc-500 dark:text-zinc-400 uppercase"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full bg-white dark:bg-[#0b0c16]/60 border border-zinc-200 dark:border-[#00f2fe]/10 rounded-2xl p-4 text-gray-900 dark:text-white focus:outline-none focus:border-zinc-400 dark:focus:border-[#00f2fe]/45 dark:focus:ring-1 dark:focus:ring-[#00f2fe]/45 transition-all placeholder:text-zinc-400/50 dark:placeholder:text-white/10 font-light"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-mono text-zinc-500 dark:text-zinc-400 uppercase"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-white dark:bg-[#0b0c16]/60 border border-zinc-200 dark:border-[#00f2fe]/10 rounded-2xl p-4 text-gray-900 dark:text-white focus:outline-none focus:border-zinc-400 dark:focus:border-[#00f2fe]/45 dark:focus:ring-1 dark:focus:ring-[#00f2fe]/45 transition-all placeholder:text-zinc-400/50 dark:placeholder:text-white/10 font-light"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-mono text-zinc-500 dark:text-zinc-400 uppercase"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      className="w-full bg-white dark:bg-[#0b0c16]/60 border border-zinc-200 dark:border-[#00f2fe]/10 rounded-2xl p-4 text-gray-900 dark:text-white focus:outline-none focus:border-zinc-400 dark:focus:border-[#00f2fe]/45 dark:focus:ring-1 dark:focus:ring-[#00f2fe]/45 transition-all appearance-none font-light"
                    >
                      <option className="bg-white dark:bg-[#0b0c16] text-gray-900 dark:text-white">
                        General Inquiry
                      </option>
                      <option className="bg-white dark:bg-[#0b0c16] text-gray-900 dark:text-white">
                        Project Proposal
                      </option>
                      <option className="bg-white dark:bg-[#0b0c16] text-gray-900 dark:text-white">
                        Recruitment
                      </option>
                      <option className="bg-white dark:bg-[#0b0c16] text-gray-900 dark:text-white">
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-mono text-zinc-500 dark:text-zinc-400 uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-white dark:bg-[#0b0c16]/60 border border-zinc-200 dark:border-[#00f2fe]/10 rounded-2xl p-4 text-gray-900 dark:text-white focus:outline-none focus:border-zinc-400 dark:focus:border-[#00f2fe]/45 dark:focus:ring-1 dark:focus:ring-[#00f2fe]/45 transition-all resize-none placeholder:text-zinc-400/50 dark:placeholder:text-white/10 font-light"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full bg-gray-950 text-white hover:bg-black dark:bg-gradient-to-r dark:from-[#00f2fe] dark:to-[#0072ff] dark:text-white font-bold py-4 rounded-full hover:opacity-95 active:scale-95 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
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

        <div className="mt-24 pt-8 border-t border-zinc-200 dark:border-[#00f2fe]/10 flex flex-col md:flex-row justify-between items-center text-zinc-450 dark:text-zinc-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Benjamin Olufemi. All rights
            reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
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
    className="w-12 h-12 rounded-full border border-zinc-200 dark:border-[#00f2fe]/10 flex items-center justify-center text-gray-750 dark:text-white hover:bg-gray-950 hover:text-white dark:hover:bg-gradient-to-r dark:hover:from-[#00f2fe] dark:hover:to-[#0072ff] dark:hover:text-white hover:border-gray-950 dark:hover:border-white transition-all duration-300 group"
  >
    {icon}
  </a>
);

export default Contact;
