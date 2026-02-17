import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Globe, Layers, Award } from "lucide-react";
import { Project } from "../../types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      // Focus trap logic (simple version)
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = "hidden";

    // Initial focus
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  // Close on click outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end md:items-center justify-center p-0 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={handleBackdropClick}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        aria-hidden="true"
      />

      <motion.div
        ref={modalRef}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-5xl h-[90vh] md:h-auto md:max-h-[90vh] bg-[#0a0a0a] border-t md:border border-white/10 rounded-t-3xl md:rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row focus:outline-none"
        tabIndex={-1}
      >
        {/* Close Button Mobile */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-20 md:hidden p-2 bg-black/50 text-white rounded-full focus:ring-2 focus:ring-neon-blue focus:outline-none"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Left Side / Top Side: Image */}
        <div className="w-full md:w-5/12 h-64 md:h-auto relative bg-gray-900 shrink-0">
          <img
            src={project.image}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent md:bg-gradient-to-r" />

          {/* Floating Back Button for Desktop */}
          <button
            onClick={onClose}
            className="hidden md:flex absolute top-4 left-4 z-20 p-2 bg-black/40 hover:bg-neon-blue hover:text-black text-white rounded-full backdrop-blur-md transition-all border border-white/10 focus:ring-2 focus:ring-neon-blue focus:outline-none"
            aria-label="Close modal"
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
                {project.category && (
                  <span className="text-xs font-mono px-2 py-1 rounded bg-neon-purple/10 text-neon-purple border border-neon-purple/20 uppercase tracking-wider">
                    {project.category}
                  </span>
                )}
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 rounded bg-neon-blue/10 text-neon-blue border border-neon-blue/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2
                id="modal-title"
                className="text-3xl md:text-5xl font-display font-bold text-white mb-2 leading-tight"
              >
                {project.title}
              </h2>
              <p className="text-lg text-gray-400 font-light border-l-2 border-neon-blue pl-4 my-4">
                {project.description}
              </p>
            </div>

            {/* Highlights Section (Impact) */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-8 bg-white/5 rounded-xl p-6 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Award size={20} className="text-neon-blue" />
                  Key Highlights
                </h3>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-300 text-sm"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-blue shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white hover:text-black rounded-lg transition-all font-medium group focus:ring-2 focus:ring-neon-blue focus:outline-none"
                >
                  <Github size={20} />
                  <span>Source Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-neon-blue text-black font-bold rounded-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] focus:ring-2 focus:ring-white focus:outline-none"
                >
                  <Globe size={20} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            {/* Tech Stack & Role */}
            {(project.stack || project.role) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {project.role && (
                  <div>
                    <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">
                      Role
                    </h4>
                    <p className="text-white font-medium">{project.role}</p>
                  </div>
                )}
                {project.stack && (
                  <div>
                    <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-sm text-gray-300 bg-white/5 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Long Description */}
            <div className="prose prose-invert max-w-none mb-10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Layers size={20} className="text-neon-purple" />
                Project Details
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Challenges (if available) */}
            {project.challenges && project.challenges.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-bold text-white mb-4">
                  Challenges & Solutions
                </h3>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, idx) => (
                    <li
                      key={idx}
                      className="bg-white/5 p-4 rounded-lg border-l-2 border-red-500/50"
                    >
                      <p className="text-gray-300 text-sm">{challenge}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Gallery</h3>
                <div className="grid grid-cols-1 gap-4">
                  {project.screenshots.map((shot, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg overflow-hidden border border-white/10 group"
                    >
                      <img
                        src={shot}
                        alt={`Screenshot ${idx + 1}`}
                        className="w-full h-auto hover:scale-105 transition-transform duration-500 will-change-transform"
                        loading="lazy"
                        decoding="async"
                      />
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
};

export default ProjectModal;
