import React from 'react';
import { 
  GraduationCap, Briefcase, Code2, FolderGit2, 
  MapPin, CheckCircle2, Terminal, Calendar, Building2, Github, Award, FileText, ExternalLink, ShieldCheck, Download
} from 'lucide-react';
import { motion } from 'motion/react';
import { PersonalData } from '../types';

interface AboutProps {
  personalData: PersonalData;
  onOpenExperienceLetter?: () => void;
}

export const About: React.FC<AboutProps> = ({ personalData, onOpenExperienceLetter }) => {
  // Required core factual metrics
  const keyFacts = [
    {
      id: 'fact-education',
      title: 'BE - CSE',
      value: '2021 — 2025',
      label: 'B.E. Computer Science',
      detail: 'Bachelor of Engineering in CSE',
      icon: GraduationCap,
      accent: 'text-cyan-400',
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-950/20'
    },
    {
      id: 'fact-experience',
      title: 'Wise Work',
      value: '9 Months',
      label: 'Software Engineer Trainee',
      detail: 'C# backend & API engineering',
      icon: Briefcase,
      accent: 'text-indigo-400',
      border: 'border-indigo-500/30',
      bg: 'bg-indigo-950/20'
    },
    {
      id: 'fact-current',
      title: 'JSpiders Bengaluru',
      value: 'MERN Stack',
      label: 'Full Stack Specialization',
      detail: 'MongoDB, Express, React, Node',
      icon: Code2,
      accent: 'text-teal-400',
      border: 'border-teal-500/30',
      bg: 'bg-teal-950/20'
    },
    {
      id: 'fact-repos',
      title: 'GitHub Profile',
      value: '30 Repos',
      label: 'Public Repositories',
      detail: 'Active full stack projects',
      icon: FolderGit2,
      accent: 'text-emerald-400',
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-950/20'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Profile & <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Background</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base font-mono">
            Education, verified industry experience, and full-stack technical specialization.
          </p>
        </div>

        {/* 4 Essential Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {keyFacts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={fact.id}
                id={fact.id}
                className={`p-5 rounded-2xl bg-slate-900/70 border ${fact.border} backdrop-blur-md shadow-lg flex flex-col justify-between`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl ${fact.bg} ${fact.accent} border border-white/5`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">{fact.title}</span>
                </div>
                <div>
                  <div className="text-2xl font-extrabold font-mono text-white tracking-tight mb-0.5">
                    {fact.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-200">{fact.label}</div>
                  <div className="text-[11px] font-mono text-slate-400 mt-1">{fact.detail}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlighted Wise Work Experience Letter Banner (Highly Visible on page) */}
        <div className="mb-10 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-indigo-950/50 via-slate-900/90 to-cyan-950/40 border-2 border-cyan-500/40 shadow-2xl backdrop-blur-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-cyan-500/20">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  Verified Employment Certificate
                </span>
                <span className="text-xs font-mono text-slate-400">Ref: WW/HR/2025</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-mono mt-1">
                Wise Work Experience Letter — Sriram E
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Official certificate verifying 9 months employment as <strong>Software Engineer Trainee (C# Developer)</strong> from <strong>23 Dec 2024 to 10 Sep 2025</strong> in Bengaluru. Commended for professionalism, competence, and initiative.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full lg:w-auto shrink-0">
            <a
              href="/wise-work-experience-letter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-mono font-semibold text-cyan-200 bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 transition-colors shrink-0 w-full sm:w-auto"
              title="Open uploaded PDF in new tab"
            >
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <span>PDF Document</span>
            </a>

            <button
              onClick={onOpenExperienceLetter}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-mono font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-300 hover:opacity-95 transition-opacity shadow-lg shadow-cyan-500/25 shrink-0 cursor-pointer w-full sm:w-auto"
            >
              <ShieldCheck className="w-4 h-4 text-slate-950" />
              <span>Open Certificate</span>
            </button>
          </div>
        </div>

        {/* Detailed Breakdown: Education, Experience, Stack & Location */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column (7 cols): Summary Bio & Education */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Direct Summary Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <h3 className="text-base font-bold text-white font-mono">Summary</h3>
              </div>

              <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                {personalData.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Education Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <h3 className="text-base font-bold text-white font-mono">Education Details</h3>
              </div>

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="text-base font-bold text-white">B.E. in Computer Science & Engineering (BE - CSE)</h4>
                    <p className="text-xs font-mono text-cyan-400">College of Engineering • 2021 — 2025</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 w-fit">
                    4-Year Degree Completed
                  </span>
                </div>

                <div className="pt-2 text-xs text-slate-300 space-y-1.5">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Graduated in Computer Science and Engineering with foundational focus in Data Structures, Algorithms, DBMS, and Software Engineering.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Developed and published the capstone repository <strong className="text-white font-mono">Final_year_projectsaviour</strong> on GitHub.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-400 border border-white/5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Location</div>
                  <div className="text-sm font-semibold text-white">Bengaluru, Karnataka, India</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-emerald-300 font-semibold">
                  Open for Full-Time Roles (Remote & On-site)
                </span>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Work Experience & Active Skills */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Experience 1: Wise Work (9 Months) */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border-2 border-cyan-500/30 backdrop-blur-md shadow-xl">
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-sm font-bold text-white font-mono">Industry Experience</h3>
                </div>
                <span className="text-xs font-mono text-cyan-300 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/20">
                  9 Months
                </span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white">Software Engineer Trainee (C# Developer)</h4>
                <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mt-0.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Wise Work • Bengaluru (23 Dec 2024 – 10 Sep 2025)</span>
                </p>
                
                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Recognized by Wise Work People Team for high professionalism, dedication, and initiative.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Backend engineering with C#, building business logic and RESTful API endpoints.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Database design, query handling, and backend logic for WiseHR enterprise suite.</span>
                  </li>
                </ul>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex flex-wrap gap-1.5">
                    {['C#', 'REST APIs', 'SQL Database', 'WiseHR Backend'].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {onOpenExperienceLetter && (
                    <button
                      onClick={onOpenExperienceLetter}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer shadow-sm"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>View Letter</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Experience 2: JSpiders Bengaluru (Current) */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm font-bold text-white font-mono">Current Specialization</h3>
                </div>
                <span className="text-xs font-mono text-emerald-300 px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Present</span>
                </span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white">MERN Full Stack Developer</h4>
                <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mt-0.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>JSpiders Bengaluru • Intensive Full Stack Program</span>
                </p>

                <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>Engineering end-to-end full stack web applications with MongoDB, Express, React, and Node.js.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>Building decoupled architectures, RESTful APIs, modern state management, and responsive frontends.</span>
                  </li>
                </ul>

                <div className="mt-3 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript', 'Tailwind CSS'].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* GitHub Summary Link */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-xs font-mono font-bold text-white">GitHub: @Jaisrir</div>
                  <div className="text-[11px] font-mono text-slate-400">30 Public Repositories • Active Contributions</div>
                </div>
              </div>
              <a
                href="https://github.com/Jaisrir"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-mono font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white transition-colors border border-white/10"
              >
                View GitHub →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
