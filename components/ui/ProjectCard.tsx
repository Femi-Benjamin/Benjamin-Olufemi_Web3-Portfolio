import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  // Handle Enter/Space for keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-full"
    >
      <button
        onClick={onClick}
        onKeyDown={handleKeyDown}
        className="group relative w-full h-full rounded-xl overflow-hidden bg-white/5 border border-white/10 flex flex-col cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all hover:border-neon-blue/30 hover:shadow-[0_0_30px_rgba(0,243,255,0.05)]"
        aria-label={`View project details for ${project.title}`}
      >
        {/* Image Container */}
        <div className="aspect-video w-full overflow-hidden relative">
          <img
            src={project.image}
            alt=""
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 will-change-transform"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />

          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Layers size={20} className="text-neon-blue" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative z-10 flex-1 flex flex-col w-full">
          <div className="flex justify-between items-start mb-4 w-full">
            <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300 line-clamp-1">
              {project.title}
            </h3>
            <div className="text-gray-400 group-hover:text-white transition-colors shrink-0 ml-2">
              <ExternalLink size={20} />
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5 transition-all duration-300 group-hover:border-neon-blue/30 group-hover:text-neon-blue group-hover:bg-neon-blue/5"
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
      </button>
    </motion.div>
  );
};

export default ProjectCard;
