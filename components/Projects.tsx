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
    <section id="work" className="py-24 bg-void relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            Selected Works
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            A curation of high-impact applications demonstrating expertise in
            Web3 protocols, frontend performance, and complex state management.
          </p>
        </motion.div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 sticky top-20 z-30 bg-void/80 backdrop-blur-md py-4 -mx-4 px-4 md:static md:bg-transparent md:p-0">
          {/* Category Tabs */}
          <div className="flex p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm overflow-x-auto max-w-full no-scrollbar">
            {(["all", "frontend", "web3", "tools"] as const).map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize whitespace-nowrap ${
                  filter === category
                    ? "bg-neon-blue text-black shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {category === "web3" ? "Web3 & Blockchain" : category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64 group">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-neon-blue transition-colors"
              size={18}
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 transition-all"
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
                className="col-span-full text-center py-20 text-gray-500"
              >
                <p className="text-xl">
                  No projects found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setFilter("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 text-neon-blue hover:underline"
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
              className="group flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 hover:border-white/30 rounded-full text-white transition-all hover:bg-white/10"
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
