import React from 'react';
import { ArrowUp, Terminal, Heart, Code2 } from 'lucide-react';
import { PersonalData } from '../types';

interface FooterProps {
  personalData: PersonalData;
}

export const Footer: React.FC<FooterProps> = ({ personalData }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="py-12 border-t border-white/10 bg-[#06080d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-mono">
                {personalData.name}
              </div>
              <p className="text-xs text-slate-500 font-mono">
                © {new Date().getFullYear()} • Designed & Built for GitHub Pages
              </p>
            </div>
          </div>

          {/* Center Note */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <span>Crafted with React & Modern Web Standards</span>
          </div>

          {/* Back to top button */}
          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-mono border border-white/10 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>
    </footer>
  );
};
