import React from 'react';
import { Download, Printer, X, Mail, Phone, MapPin, Github, Linkedin, CheckCircle2, GraduationCap, Briefcase, Code } from 'lucide-react';
import { PersonalData } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  personalData: PersonalData;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, personalData }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/70 border-b border-white/10">
          <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="font-bold">RESUME & CURRICULUM VITAE • SRIRAM E</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg transition-colors"
              title="Open /resume.pdf directly"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Direct File</span>
            </a>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-950 font-bold bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Canvas Container */}
        <div className="p-6 sm:p-10 bg-slate-950/90 overflow-y-auto max-h-[82vh]">
          <div className="p-8 sm:p-12 rounded-2xl bg-white text-slate-900 shadow-2xl border border-slate-200 font-sans">
            
            {/* Resume Header */}
            <div className="border-b-2 border-slate-900 pb-6 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                  SRIRAM E
                </h1>
                <p className="text-sm sm:text-base font-bold text-cyan-800 font-mono mt-1">
                  MERN Full Stack Developer • Software Engineer
                </p>
              </div>

              <div className="text-xs font-mono text-slate-600 space-y-1 sm:text-right">
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>{personalData.email}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-slate-500" />
                  <span>github.com/{personalData.githubUsername} (30 Public Repos)</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <section className="mb-6">
              <h2 className="text-xs font-mono font-black uppercase tracking-widest text-slate-950 pb-1 border-b border-slate-300 mb-2 flex items-center gap-2">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Computer Science & Engineering graduate (BE - CSE, 2021—2025) with 9 months of industry software engineering experience at Wise Work developing backend enterprise solutions with C# and RESTful APIs. Currently advancing MERN Full Stack specialization (MongoDB, Express.js, React.js, Node.js) at JSpiders Bengaluru, architecting performant full-stack web applications.
              </p>
            </section>

            {/* Experience */}
            <section className="mb-6">
              <h2 className="text-xs font-mono font-black uppercase tracking-widest text-slate-950 pb-1 border-b border-slate-300 mb-3 flex items-center gap-2">
                Work & Professional Experience
              </h2>

              <div className="space-y-4">
                {/* JSpiders */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
                    <h3 className="text-sm font-bold text-slate-950">MERN Full Stack Developer (Advanced Specialization)</h3>
                    <span className="text-xs font-mono text-slate-600 font-semibold">2025 — Present</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-700 mb-1.5">JSpiders Bengaluru • Karnataka, India</div>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 leading-relaxed">
                    <li>Engineering full-stack applications with React, modern state management, and responsive component design.</li>
                    <li>Developing scalable RESTful APIs, asynchronous controllers, and middleware using Node.js and Express.js.</li>
                    <li>Designing NoSQL document schemas, CRUD aggregation pipelines, and secure database interactions in MongoDB.</li>
                  </ul>
                </div>

                {/* Wise Work */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
                    <h3 className="text-sm font-bold text-slate-950">Software Engineer Trainee (C# Developer)</h3>
                    <span className="text-xs font-mono text-slate-600 font-semibold">23 Dec 2024 — 10 Sep 2025 (9 Months)</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-700 mb-1.5">Wise Work • Bengaluru, India • Ref: WW/HR/2025</div>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 leading-relaxed">
                    <li>Awarded certificate of appreciation for high professionalism, proactive initiative, and software delivery competence.</li>
                    <li>Built backend services and REST APIs in C# powering enterprise software modules including WiseHR.</li>
                    <li>Developed and maintained database schemas and SQL queries for efficient data models and storage layers.</li>
                    <li>Collaborated across engineering cycles on API testing, debugging, and client-server integration.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-6">
              <h2 className="text-xs font-mono font-black uppercase tracking-widest text-slate-950 pb-1 border-b border-slate-300 mb-3">
                Education
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
                <div>
                  <h3 className="text-sm font-bold text-slate-950">Bachelor of Engineering in Computer Science & Engineering (BE - CSE)</h3>
                  <p className="text-xs text-slate-700">College of Engineering • India</p>
                </div>
                <span className="text-xs font-mono text-slate-600 font-semibold">2021 — 2025</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Foundations in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering. Published capstone project: Final_year_projectsaviour.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-6">
              <h2 className="text-xs font-mono font-black uppercase tracking-widest text-slate-950 pb-1 border-b border-slate-300 mb-2">
                Technical Arsenal
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div><strong className="text-slate-950">Languages:</strong> JavaScript (ES6+), C#, Python, Java, SQL</div>
                <div><strong className="text-slate-950">Frontend:</strong> React.js, Tailwind CSS, HTML5, CSS3, Bootstrap</div>
                <div><strong className="text-slate-950">Backend & APIs:</strong> Node.js, Express.js, RESTful APIs, .NET / C#</div>
                <div><strong className="text-slate-950">Databases & Tools:</strong> MongoDB, MySQL, Git, GitHub, VS Code</div>
              </div>
            </section>

          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 bg-slate-950/80 border-t border-white/10 flex items-center justify-between">
          <div className="text-xs font-mono text-slate-400">
            Click "Print / Save PDF" to download or save as a clean PDF file.
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors cursor-pointer"
          >
            Close Resume
          </button>
        </div>

      </div>
    </div>
  );
};
