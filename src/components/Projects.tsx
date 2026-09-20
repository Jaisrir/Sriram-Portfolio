import React, { useState } from 'react';
import { Github, Sparkles, Layers, ArrowUpRight, Check, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem } from '../types';

interface ProjectsProps {
  projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend / Cloud' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>03. FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Selected <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Engineering Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Real-world applications engineered for speed, scalability, and seamless user experiences.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              id={`project-tab-${tab.id}`}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-200 ${
                activeFilter === tab.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              id={`project-card-${project.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-3xl bg-slate-900/60 hover:bg-slate-900/90 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md shadow-xl flex flex-col overflow-hidden hover:-translate-y-1.5"
            >
              {/* Project Image Container */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-slate-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                    {project.category}
                  </span>

                  {project.metrics && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                      {project.metrics}
                    </span>
                  )}
                </div>

                {/* Hover overlay quick view button */}
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs px-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-3.5 py-2 text-xs font-mono font-bold text-white bg-slate-800/90 hover:bg-slate-700 rounded-xl shadow-lg border border-white/10 transition-transform transform scale-95 group-hover:scale-100 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-3.5 py-2 text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-lg transition-transform transform scale-95 group-hover:scale-100 flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 font-mono">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-[11px] font-mono text-slate-300 bg-slate-800/80 border border-white/5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Button - Source Code Only */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    id={`project-github-btn-${project.id}`}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-mono font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/90 rounded-xl border border-white/10 hover:border-cyan-500/40 transition-all duration-200 group-hover:border-cyan-500/30 group-hover:bg-cyan-950/30"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>Source Code</span>
                  </a>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0e1322] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto pr-2 space-y-6">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {selectedProject.category} Project
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-mono mt-1">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="rounded-2xl overflow-hidden h-60 w-full bg-slate-900 border border-white/10">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-mono font-bold text-slate-200 uppercase mb-2">Overview & Architecture</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {selectedProject.highlights && (
                  <div>
                    <h4 className="text-sm font-mono font-bold text-slate-200 uppercase mb-2">Key Engineering Highlights</h4>
                    <ul className="space-y-1.5">
                      {selectedProject.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-mono font-bold text-slate-200 uppercase mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono text-cyan-200 bg-cyan-950/60 border border-cyan-500/30 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2.5 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code on GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
