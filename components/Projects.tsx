import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { Project } from "../types";
import { projects } from "../data";
import ProjectCard from "./ui/ProjectCard";
import ProjectModal from "./ui/ProjectModal";

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [filter, setFilter] = useState<"all" | "frontend" | "web3" | "tools">(
    "all",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Filter Logic
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter = filter === "all" || project.category === filter;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchQuery]);

  // Limit displayed projects if "Show All" is not active
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section
      id="work"
      className="py-24 bg-transparent relative transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Selected Works
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 max-w-2xl text-lg font-light">
            A curation of high-impact applications demonstrating expertise in
            Web3 protocols, frontend performance, and complex state management.
          </p>
        </motion.div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 sticky top-20 z-35 bg-white/80 dark:bg-[#0b0c16]/80 backdrop-blur-md py-4 -mx-4 px-4 md:static md:bg-transparent md:p-0 transition-colors">
          {/* Category Tabs */}
          <div className="flex p-1.5 bg-zinc-100 dark:bg-[#101438]/60 rounded-full border border-zinc-200 dark:border-[#00f2fe]/10 backdrop-blur-sm overflow-x-auto max-w-full no-scrollbar">
            {(["all", "frontend", "web3", "tools"] as const).map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 capitalize whitespace-nowrap active:scale-95 ${
                  filter === category
                    ? "bg-gray-950 text-white dark:bg-gradient-to-r dark:from-[#00f2fe] dark:to-[#0072ff] dark:text-white shadow-md shadow-cyan-500/10"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-white/5"
                }`}
              >
                {category === "web3" ? "Web3 & Blockchain" : category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64 group">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500 group-focus-within:text-zinc-800 dark:group-focus-within:text-white transition-colors"
              size={18}
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-100/80 dark:bg-[#101438]/45 border border-zinc-200 dark:border-[#00f2fe]/10 rounded-full pl-10 pr-4 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-zinc-400 dark:focus:border-[#00f2fe]/35 transition-all font-light"
            />
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.length > 0 ? (
              displayedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedId(project.id)}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-20 text-zinc-500"
              >
                <p className="text-xl">
                  No projects found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setFilter("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 text-zinc-800 dark:text-zinc-350 hover:underline"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Less */}
        {filteredProjects.length > 6 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 px-8 py-3 bg-zinc-100/85 dark:bg-[#101438]/45 border border-zinc-200 dark:border-[#00f2fe]/10 hover:border-zinc-350 dark:hover:border-[#00f2fe]/30 rounded-full text-zinc-900 dark:text-white transition-all hover:bg-zinc-200 dark:hover:bg-[#101438]/80 active:scale-95 hover:-translate-y-0.5 shadow-sm hover:shadow-cyan-500/5"
            >
              <span>
                {showAll
                  ? "Show Less"
                  : `Show All (${filteredProjects.length})`}
              </span>
              {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
        )}
      </div>

      {/* Project Modal */}
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

export default Projects;
