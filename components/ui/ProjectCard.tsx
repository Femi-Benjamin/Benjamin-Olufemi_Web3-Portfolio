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
        className="group relative w-full h-full rounded-3xl overflow-hidden bg-white dark:bg-[#101438]/45 border border-slate-300/80 dark:border-[#00f2fe]/10 flex flex-col cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-zinc-800 dark:focus:ring-[#00f2fe]/50 shadow-sm transition-all hover:border-zinc-400 dark:hover:border-[#00f2fe]/30 hover:shadow-lg dark:hover:shadow-[#0072ff]/5"
        aria-label={`View project details for ${project.title}`}
      >
        {/* Image Container */}
        <div className="aspect-video w-full overflow-hidden relative">
          <img
            src={project.image}
            alt=""
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 will-change-transform"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/5 dark:bg-transparent transition-colors duration-500" />

          <div className="absolute top-4 right-4 bg-white/80 dark:bg-black/60 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-zinc-200 dark:border-white/10">
            <Layers size={18} className="text-gray-900 dark:text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative z-10 flex-1 flex flex-col w-full">
          <div className="flex justify-between items-start mb-4 w-full">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-zinc-650 dark:group-hover:text-zinc-350 transition-colors duration-300 line-clamp-1">
              {project.title}
            </h3>
            <div className="text-zinc-400 group-hover:text-[#00f2fe] dark:group-hover:text-[#00f2fe] transition-colors shrink-0 ml-2">
              <ExternalLink size={20} />
            </div>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-1 font-light">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-100 dark:bg-[#101438]/80 text-zinc-700 dark:text-zinc-350 border border-zinc-200 dark:border-[#00f2fe]/10 transition-all duration-300 group-hover:border-zinc-350 dark:group-hover:border-[#00f2fe]/20 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:bg-zinc-200/50 dark:group-hover:bg-[#121640]"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-100 dark:bg-[#101438]/80 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-[#00f2fe]/10">
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
