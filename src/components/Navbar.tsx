import React, { useState, useEffect } from 'react';
import { Menu, X, Award, Sparkles, Terminal } from 'lucide-react';
import { PersonalData } from '../types';

interface NavbarProps {
  personalData: PersonalData;
  onOpenExperienceLetter?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ personalData, onOpenExperienceLetter }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'GitHub', href: '#github' },
    { label: 'Journey', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ['contact', 'experience', 'github', 'projects', 'skills', 'about', 'hero'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#07090e]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          id="navbar-brand-link"
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
            <Terminal className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              {personalData.name === 'YOUR_NAME' ? '<Developer />' : `<${personalData.name.split(' ')[0]} />`}
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase -mt-0.5">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 font-semibold shadow-sm border border-cyan-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Wise Work Experience Letter Button */}
          <button
            id="navbar-experience-letter-btn"
            onClick={onOpenExperienceLetter}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-semibold text-cyan-200 bg-cyan-950/60 hover:bg-cyan-900/70 hover:text-white border border-cyan-500/40 rounded-full transition-all duration-200 shadow-sm cursor-pointer hover:border-cyan-400 hover:scale-105"
            title="View Wise Work Experience Letter (Sriram E)"
          >
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Wise Work Certificate</span>
          </button>

          {/* Availability Beacon */}
          <div 
            id="navbar-status-badge" 
            className="flex items-center gap-2 px-3 py-1.5 bg-emerald-950/30 border border-emerald-500/20 rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-mono text-emerald-300 whitespace-nowrap">Available</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors border border-white/5"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu-drawer" 
          className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-[#0b0f19] border border-white/10 shadow-2xl backdrop-blur-xl animate-fadeIn"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenExperienceLetter) onOpenExperienceLetter();
                }}
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 rounded-xl cursor-pointer"
              >
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Wise Work Certificate</span>
              </button>

              <div className="flex items-center justify-center gap-2 py-2 text-xs font-mono text-emerald-400 bg-emerald-950/30 rounded-xl border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{personalData.status}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
