import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Mail, Github, Linkedin, Terminal, Sparkles, ExternalLink, Code2, Camera, Upload, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { PersonalData } from '../types';
import defaultAvatar from '../assets/avatar.png';
import { avatarBase64 } from '../assets/avatarBase64';

interface HeroProps {
  personalData: PersonalData;
  onUpdateAvatar?: (avatarUrl: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ personalData, onUpdateAvatar }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!personalData.titles || personalData.titles.length === 0) return;
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % personalData.titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [personalData.titles]);

  const handleFileProcess = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setUploadError('Please choose an image file (PNG, JPG, WEBP)');
      setTimeout(() => setUploadError(null), 3500);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const rawDataUrl = event.target?.result as string;
      if (!rawDataUrl) return;

      // Optimize image resolution so it fits safely in localStorage without quota limits
      const img = new Image();
      img.onload = () => {
        try {
          const maxDimension = 640;
          let width = img.width;
          let height = img.height;

          if (width > maxDimension || height > maxDimension) {
            if (width > height) {
              height = Math.round((height * maxDimension) / width);
              width = maxDimension;
            } else {
              width = Math.round((width * maxDimension) / height);
              height = maxDimension;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');

          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const optimizedUrl = canvas.toDataURL('image/jpeg', 0.85);
            if (onUpdateAvatar) {
              onUpdateAvatar(optimizedUrl);
              setUploadSuccess(true);
              setUploadError(null);
              setTimeout(() => setUploadSuccess(false), 2500);
            }
            return;
          }
        } catch (e) {
          console.warn('Canvas optimization fallback to original:', e);
        }

        if (onUpdateAvatar) {
          onUpdateAvatar(rawDataUrl);
          setUploadSuccess(true);
          setUploadError(null);
          setTimeout(() => setUploadSuccess(false), 2500);
        }
      };

      img.onerror = () => {
        setUploadError('Could not process this image.');
        setTimeout(() => setUploadError(null), 3000);
      };

      img.src = rawDataUrl;
    };

    reader.onerror = () => {
      setUploadError('Failed to read file.');
      setTimeout(() => setUploadError(null), 3000);
    };

    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-cyber-grid"
    >
      {/* Dynamic Futuristic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Main Text Column */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Terminal Command Status Pill */}
            <div 
              id="hero-terminal-pill"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-6 shadow-sm shadow-cyan-950/50 backdrop-blur-md"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-slate-400">~/profile $</span>
              <span className="font-semibold text-cyan-300">ready --status=hireable</span>
              <span className="w-1.5 h-3 bg-cyan-400 animate-pulse ml-0.5" />
            </div>

            {/* Main Greeting & Name */}
            <h1 
              id="hero-name-heading"
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none mb-4"
            >
              <span className="block text-slate-400 text-lg sm:text-xl font-mono font-medium mb-2 tracking-normal">
                Hello World, I'm
              </span>
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                {personalData.name}
              </span>
            </h1>

            {/* Rotating Title / Specialization */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                {personalData.titles && personalData.titles.length > 0 
                  ? personalData.titles[titleIndex] 
                  : personalData.role}
              </span>
            </div>

            {/* Short Introduction */}
            <p 
              id="hero-intro-text"
              className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mb-8"
            >
              {personalData.shortIntro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                id="hero-view-projects-btn"
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                id="hero-contact-btn"
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 hover:text-white border border-slate-700/80 hover:border-cyan-500/40 rounded-xl transition-all duration-200 shadow-sm hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <a
                id="hero-github-link"
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 rounded-xl transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                id="hero-linkedin-link"
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 rounded-xl transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Tech Highlights Badge Ticker */}
            <div className="pt-4 border-t border-white/5 w-full flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Tech Stack:</span>
              </span>
              {['HTML5 & CSS3', 'Bootstrap', 'JavaScript', 'React', 'Node.js', 'Express.js', 'Java', 'Python', 'MySQL', 'MongoDB', 'Git'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-900/60 border border-white/5 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Futuristic Profile Image Hologram Frame */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <div className="relative group">
              {/* Hidden file input for uploading photo */}
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                accept="image/*" 
                className="hidden" 
              />

              {/* Animated Glowing Ring Backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-indigo-500 to-teal-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500 group-hover:scale-105" />

              {/* Holographic Tech Badges surrounding the portrait (Matching the Cyber Portrait) */}
              {/* Top-Left: GitHub */}
              <motion.div 
                className="absolute -top-4 -left-4 z-20 px-2.5 py-1 rounded-xl bg-slate-900/90 border border-white/20 text-slate-100 flex items-center gap-1.5 shadow-lg shadow-black/40 backdrop-blur-md text-[11px] font-mono"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span>GitHub</span>
              </motion.div>

              {/* Top-Right: Node.js & Express */}
              <motion.div 
                className="absolute -top-5 right-2 z-20 px-2.5 py-1 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5 shadow-lg shadow-black/40 backdrop-blur-md text-[11px] font-mono"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Node.js</span>
              </motion.div>

              {/* Middle-Right: React Glowing Atom */}
              <motion.div 
                className="absolute top-24 -right-6 z-20 px-2.5 py-1 rounded-xl bg-slate-900/90 border border-cyan-400/40 text-cyan-300 flex items-center gap-1.5 shadow-lg shadow-cyan-500/20 backdrop-blur-md text-[11px] font-mono"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>React</span>
              </motion.div>

              {/* Middle-Left: MongoDB */}
              <motion.div 
                className="absolute top-28 -left-7 z-20 px-2.5 py-1 rounded-xl bg-slate-900/90 border border-green-500/30 text-green-300 flex items-center gap-1.5 shadow-lg shadow-green-500/20 backdrop-blur-md text-[11px] font-mono"
                animate={{ x: [0, -4, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>MongoDB</span>
              </motion.div>

              {/* Bottom-Right: Docker */}
              <motion.div 
                className="absolute bottom-20 -right-5 z-20 px-2.5 py-1 rounded-xl bg-slate-900/90 border border-sky-500/30 text-sky-300 flex items-center gap-1.5 shadow-lg shadow-sky-500/20 backdrop-blur-md text-[11px] font-mono"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span>Docker</span>
              </motion.div>

              {/* Holographic Container with Drag-and-Drop */}
              <div 
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl p-1 bg-gradient-to-b from-cyan-500/40 via-slate-800 to-indigo-500/40 backdrop-blur-xl shadow-2xl transition-all duration-300 ${
                  isDragging ? 'ring-4 ring-cyan-400 scale-[1.02]' : ''
                }`}
              >
                <div className="w-full h-full bg-[#090e1a] rounded-[22px] overflow-hidden relative flex flex-col justify-end">
                  
                  {/* Profile Photo */}
                  <img
                    id="hero-profile-avatar"
                    src={personalData.avatarUrl && personalData.avatarUrl !== '/avatar.png' && personalData.avatarUrl !== '/avatar.svg' && !personalData.avatarUrl.includes('avatar.svg') ? personalData.avatarUrl : avatarBase64}
                    alt={personalData.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = avatarBase64;
                    }}
                  />

                  {/* Cyber Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e1a]/95 via-[#090e1a]/20 to-transparent pointer-events-none" />

                  {/* Corner Accent Tech Decals */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/80 border border-white/10 backdrop-blur-md z-10">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-cyan-200">SYS_ONLINE</span>
                  </div>

                  {/* Interactive Upload Button Overlay */}
                  <div className="absolute top-3 right-3 z-10">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      title="Click to upload or change image"
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-950/80 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 border border-cyan-500/40 backdrop-blur-md transition-all text-[11px] font-mono shadow-md cursor-pointer"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Change Photo</span>
                    </button>
                  </div>

                  {/* Drag-over or Upload success notification */}
                  {isDragging && (
                    <div className="absolute inset-0 z-30 bg-cyan-950/80 backdrop-blur-sm flex flex-col items-center justify-center text-cyan-200 p-4 text-center">
                      <Upload className="w-10 h-10 mb-2 animate-bounce text-cyan-400" />
                      <p className="text-xs font-mono font-bold">Drop your image here to use as photo</p>
                    </div>
                  )}

                  {uploadSuccess && (
                    <div className="absolute inset-0 z-30 bg-emerald-950/90 backdrop-blur-sm flex flex-col items-center justify-center text-emerald-200 p-4 text-center animate-fadeIn">
                      <Check className="w-10 h-10 mb-2 text-emerald-400" />
                      <p className="text-xs font-mono font-bold">Photo updated successfully!</p>
                    </div>
                  )}

                  {uploadError && (
                    <div className="absolute inset-0 z-30 bg-rose-950/90 backdrop-blur-sm flex flex-col items-center justify-center text-rose-200 p-4 text-center animate-fadeIn">
                      <p className="text-xs font-mono font-bold">{uploadError}</p>
                    </div>
                  )}

                  {/* Status Overlay Card at bottom of avatar matching image.png */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-950/85 border border-white/10 backdrop-blur-md z-10">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="relative flex h-2 w-2 flex-shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-semibold text-white truncate">Opportunities</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-300 text-right truncate">
                        India • Available for Remote &amp; Global
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Code Snippet Card */}
              <motion.div 
                className="hidden sm:flex absolute -bottom-6 -left-8 p-3.5 rounded-2xl bg-slate-900/95 border border-cyan-500/30 shadow-xl backdrop-blur-xl flex-col gap-1 max-w-[220px]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="ml-1 text-slate-400">developer.js</span>
                </div>
                <p className="text-[11px] font-mono text-slate-300">
                  <span className="text-indigo-400">const</span> dev = &#123;
                  <br />
                  &nbsp;&nbsp;code: <span className="text-emerald-400">"clean"</span>,
                  <br />
                  &nbsp;&nbsp;solve: <span className="text-cyan-400">true</span>
                  <br />
                  &#125;;
                </p>
              </motion.div>

              {/* Floating Projects Shipped Card */}
              <motion.div 
                className="hidden sm:flex absolute -top-5 -right-6 px-3.5 py-2.5 rounded-2xl bg-slate-900/95 border border-indigo-500/30 shadow-xl backdrop-blur-xl items-center gap-2.5"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs font-mono">
                  {personalData.stats.projectsCompleted}
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-white leading-tight">Projects Built</span>
                  <span className="text-[10px] text-slate-400 font-mono">Production ready</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
