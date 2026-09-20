import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Code2, Layers, Database, Cpu, Terminal, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SkillItem, SkillCategory } from '../types';

interface SkillsProps {
  skills: SkillItem[];
  onOpenCustomizer?: () => void;
}

// Exact list of technologies featured in the visual tech strip (matching user's uploaded banner + Bootstrap & Java)
const techStripIcons = [
  { slug: 'html', name: 'HTML5', category: 'Frontend' },
  { slug: 'css', name: 'CSS3', category: 'Frontend' },
  { slug: 'bootstrap', name: 'Bootstrap', category: 'Frontend' },
  { slug: 'js', name: 'JavaScript', category: 'Languages' },
  { slug: 'react', name: 'React', category: 'Frontend' },
  { slug: 'nodejs', name: 'Node.js', category: 'Backend' },
  { slug: 'express', name: 'Express.js', category: 'Backend' },
  { slug: 'python', name: 'Python', category: 'Languages' },
  { slug: 'java', name: 'Java', category: 'Languages' },
  { slug: 'csharp', name: 'C#', category: 'Languages' },
  { slug: 'mysql', name: 'MySQL', category: 'Databases' },
  { slug: 'mongodb', name: 'MongoDB', category: 'Databases' },
  { slug: 'git', name: 'Git', category: 'DevOps' },
  { slug: 'github', name: 'GitHub', category: 'DevOps' },
  { slug: 'vscode', name: 'VS Code', category: 'DevOps' },
];

export const Skills: React.FC<SkillsProps> = ({ skills, onOpenCustomizer }) => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const categories = [
    { id: 'all' as SkillCategory, label: 'All Technologies', icon: Layers },
    { id: 'frontend' as SkillCategory, label: 'Frontend', icon: Code2 },
    { id: 'backend' as SkillCategory, label: 'Backend & APIs', icon: Cpu },
    { id: 'languages' as SkillCategory, label: 'Languages', icon: Terminal },
    { id: 'database' as SkillCategory, label: 'Databases', icon: Database },
    { id: 'devops' as SkillCategory, label: 'DevOps & Tools', icon: Sparkles },
  ];

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [skills, activeCategory, searchQuery]);

  const handleIconClick = (name: string) => {
    setSearchQuery(name);
    // Smooth scroll down slightly to cards if filtered
    const cardsEl = document.getElementById('skills-cards-grid');
    if (cardsEl) {
      cardsEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>02. TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Core languages, frontend frameworks, backend runtimes, and databases powering real-world applications.
          </p>
        </div>

        {/* 🌟 Tech Stack Visual Banner (Exact Style of the User's Image) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-cyan-500/20 backdrop-blur-md shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle Ambient Background Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>CORE ARSENAL ICONOGRAPHY</span>
            </div>
            
            <p className="text-xs text-slate-400 mb-6 font-mono max-w-md">
              Tap any technology icon to filter or inspect details:
            </p>

            {/* Visual Icon Strip — Styled like the requested image */}
            <div className="w-full overflow-x-auto pb-3 pt-1 flex items-center justify-start md:justify-center gap-2.5 sm:gap-3 scrollbar-thin scrollbar-thumb-slate-700">
              {techStripIcons.map((tech) => {
                const isHovered = hoveredIcon === tech.slug;
                const isSelected = searchQuery.toLowerCase() === tech.name.toLowerCase();

                return (
                  <button
                    key={tech.slug}
                    id={`tech-icon-${tech.slug}`}
                    onClick={() => handleIconClick(tech.name)}
                    onMouseEnter={() => setHoveredIcon(tech.slug)}
                    onMouseLeave={() => setHoveredIcon(null)}
                    title={`${tech.name} (${tech.category})`}
                    className={`relative group/icon shrink-0 p-1 rounded-2xl transition-all duration-200 cursor-pointer focus:outline-none ${
                      isSelected 
                        ? 'ring-2 ring-cyan-400 scale-110 bg-cyan-950/60 shadow-lg shadow-cyan-500/30' 
                        : 'hover:scale-110 hover:-translate-y-1'
                    }`}
                  >
                    {/* SVG Icon with exact rounded squircle look */}
                    <img 
                      src={`/icons/${tech.slug}.svg`} 
                      alt={tech.name}
                      className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl shadow-md transition-transform"
                      loading="lazy"
                    />

                    {/* Tooltip on hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.9 }}
                          transition={{ duration: 0.15 }}
                          className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-slate-950 border border-cyan-500/40 text-[11px] font-mono font-semibold text-cyan-200 whitespace-nowrap shadow-xl pointer-events-none z-20"
                        >
                          {tech.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>

            {/* Quick reset if search active */}
            {searchQuery && (
              <div className="mt-4 inline-flex items-center gap-2">
                <span className="text-xs font-mono text-slate-300">
                  Filtering by: <strong className="text-cyan-300">{searchQuery}</strong>
                </span>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 underline cursor-pointer"
                >
                  Clear filter
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`skill-category-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25 font-bold'
                      : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Instant Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              id="skills-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technology..."
              className="w-full pl-10 pr-4 py-2 text-xs text-white bg-slate-900/80 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono placeholder:text-slate-500"
            />
          </div>

        </div>

        {/* Skills Cards Grid — Clean layout with icon, name, category, and description (Zero Proficiency mentions) */}
        <div id="skills-cards-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const slug = skill.iconSlug || skill.name.toLowerCase().replace(/[^a-z0-9]/g, '');

              return (
                <motion.div
                  key={skill.name}
                  id={`skill-badge-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  className="group p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900/95 border border-white/5 hover:border-cyan-500/40 transition-all duration-200 backdrop-blur-sm flex flex-col justify-between"
                >
                  <div>
                    {/* Header with official tech squircle icon and category tag */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="relative shrink-0 w-11 h-11 rounded-xl overflow-hidden shadow-sm bg-slate-950/80 p-0.5 border border-white/10 group-hover:border-cyan-500/40 transition-colors">
                          <img 
                            src={`/icons/${slug}.svg`} 
                            alt={skill.name}
                            onError={(e) => {
                              // Fallback if svg filename differs
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                            className="w-full h-full object-contain rounded-lg"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <h3 className="font-mono font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </h3>
                          <span className="text-[10px] font-mono text-slate-400 capitalize">
                            {skill.category}
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-white/5 uppercase shrink-0">
                        {skill.category === 'languages' ? 'Lang' : skill.category}
                      </span>
                    </div>

                    {/* Skill Description */}
                    {skill.description && (
                      <p className="text-xs text-slate-400 leading-relaxed mt-2 mb-4">
                        {skill.description}
                      </p>
                    )}
                  </div>

                  {/* Operational status badge (No proficiency percentage) */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Production Ready</span>
                    </span>
                    <span className="text-cyan-400/80 font-mono text-[10px]">
                      Core Stack
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Technical Arsenal Note */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-slate-900/50 to-indigo-950/30 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Full-Stack & Backend Readiness</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Experienced in C# backend development and actively advancing enterprise MERN stack engineering.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Ready for Opportunities</span>
          </div>
        </div>

      </div>
    </section>
  );
};
