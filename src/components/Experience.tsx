import React from 'react';
import { Briefcase, GraduationCap, Trophy, Calendar, MapPin, CheckCircle2, Award, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { TimelineItem } from '../types';

interface ExperienceProps {
  timeline: TimelineItem[];
  onOpenExperienceLetter?: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ timeline, onOpenExperienceLetter }) => {
  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-4 h-4 text-cyan-400" />;
      case 'education':
        return <GraduationCap className="w-4 h-4 text-indigo-400" />;
      case 'milestone':
        return <Trophy className="w-4 h-4 text-amber-400" />;
      default:
        return <Briefcase className="w-4 h-4 text-cyan-400" />;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30';
      case 'education':
        return 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30';
      case 'milestone':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-white/10';
    }
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>05. CAREER & EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base font-mono">
            Timeline of education, verified industry experience, and full-stack engineering milestones.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-32 space-y-12">
          {timeline.map((item, idx) => (
            <motion.div
              key={item.id}
              id={`timeline-item-${item.id}`}
              className="relative pl-6 sm:pl-8 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              {/* Timeline Dot Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-500/50 flex items-center justify-center group-hover:border-cyan-400 group-hover:scale-110 transition-all shadow-md shadow-cyan-500/20">
                {getTimelineIcon(item.type)}
              </div>

              {/* Date Marker for Large Screens */}
              <div className="hidden sm:block absolute -left-36 top-2 text-right w-28 text-xs font-mono text-slate-400">
                {item.period.split('—')[0]}
              </div>

              {/* Content Card */}
              <div className={`p-6 rounded-2xl bg-slate-900/60 border backdrop-blur-md hover:border-white/20 transition-all duration-200 ${
                item.id === 'exp-wise-work' ? 'border-cyan-500/40 shadow-xl shadow-cyan-500/5' : 'border-white/10'
              }`}>
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${getTypeBadge(item.type)}`}>
                      {item.type.toUpperCase()}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 sm:text-slate-400">
                    <Calendar className="w-3.5 h-3.5 sm:hidden" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Company & Location */}
                <div className="text-xs font-mono text-slate-400 mb-3 flex items-center gap-1.5">
                  <span className="text-white font-semibold">{item.company}</span>
                  <span>•</span>
                  <span>{item.location}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Bullet achievements */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="space-y-1.5 mb-4">
                    {item.achievements.map((ach, i) => (
                      <div key={i} className="text-xs text-slate-400 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-normal">{ach}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech tags & Actions */}
                <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 text-[11px] font-mono text-slate-300 bg-slate-800/70 border border-white/5 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.id === 'exp-wise-work' && onOpenExperienceLetter && (
                    <button
                      onClick={onOpenExperienceLetter}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 border border-cyan-400 rounded-lg transition-colors cursor-pointer shadow-sm"
                      title="View Official Wise Work Experience Certificate"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-slate-950" />
                      <span>View Wise Work Experience Letter</span>
                    </button>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
