import React, { useState, useRef } from 'react';
import { X, Copy, Check, Sparkles, BookOpen, Code, RefreshCw, Upload, Camera } from 'lucide-react';
import { motion } from 'motion/react';
import { PersonalData } from '../types';

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  personalData: PersonalData;
  onUpdatePersonalData: (data: PersonalData) => void;
  onResetToDefaults: () => void;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  isOpen,
  onClose,
  personalData,
  onUpdatePersonalData,
  onResetToDefaults
}) => {
  const [activeTab, setActiveTab] = useState<'live' | 'guide' | 'code'>('live');
  const [copiedCode, setCopiedCode] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFieldChange = (field: keyof PersonalData, value: string) => {
    onUpdatePersonalData({
      ...personalData,
      [field]: value
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const rawDataUrl = event.target?.result as string;
        if (!rawDataUrl) return;

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
              handleFieldChange('avatarUrl', optimizedUrl);
              return;
            }
          } catch (err) {
            console.warn('Canvas optimization fallback:', err);
          }
          handleFieldChange('avatarUrl', rawDataUrl);
        };
        img.src = rawDataUrl;
      };
      reader.readAsDataURL(file);
    }
  };

  const generatedCode = `// Edit src/portfolioData.ts with your details:
export const initialPersonalData: PersonalData = {
  name: "${personalData.name}",
  role: "${personalData.role}",
  titles: [
    "Full Stack Developer",
    "Software Engineer",
    "Cloud Architecture Enthusiast"
  ],
  shortIntro: "${personalData.shortIntro.replace(/"/g, '\\"')}",
  bio: [
    "${personalData.bio[0]?.replace(/"/g, '\\"') || ''}",
    "${personalData.bio[1]?.replace(/"/g, '\\"') || ''}"
  ],
  location: "${personalData.location}",
  status: "${personalData.status}",
  email: "${personalData.email}",
  githubUsername: "${personalData.githubUsername}",
  githubUrl: "${personalData.githubUrl}",
  linkedinUrl: "${personalData.linkedinUrl}",
  twitterUrl: "${personalData.twitterUrl}",
  resumeUrl: "${personalData.resumeUrl}",
  avatarUrl: "${personalData.avatarUrl}",
  stats: {
    yearsExperience: "${personalData.stats.yearsExperience}",
    projectsCompleted: "${personalData.stats.projectsCompleted}",
    technologiesMastered: "${personalData.stats.technologiesMastered}",
    githubContributions: "${personalData.stats.githubContributions}"
  }
};`;

  const copyToClipboard = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(generatedCode);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = generatedCode;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (e) {
      console.warn('Clipboard writeText failed or was denied:', e);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-3xl bg-[#0b0f19] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-mono">Portfolio Information Customizer</h3>
              <p className="text-xs text-slate-400">Test live in-browser or generate ready-to-paste code</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-2 pt-4 pb-2 border-b border-white/5">
          <button
            onClick={() => setActiveTab('live')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'live' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Live Editor</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'code' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Generated Code</span>
          </button>

          <button
            onClick={() => setActiveTab('guide')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'guide' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>File Edit Guide</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="overflow-y-auto py-4 space-y-4 pr-1">
          
          {activeTab === 'live' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-200">
                💡 <strong>Instant Live Preview:</strong> Any changes typed below will update the hero, navbar, projects, and contact sections instantaneously on this page!
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    YOUR_NAME
                  </label>
                  <input
                    type="text"
                    value={personalData.name}
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-white/10 rounded-xl focus:border-cyan-400 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    YOUR_USERNAME (GitHub)
                  </label>
                  <input
                    type="text"
                    value={personalData.githubUsername}
                    onChange={(e) => {
                      handleFieldChange('githubUsername', e.target.value);
                      handleFieldChange('githubUrl', `https://github.com/${e.target.value}`);
                    }}
                    className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-white/10 rounded-xl focus:border-cyan-400 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    YOUR_EMAIL
                  </label>
                  <input
                    type="email"
                    value={personalData.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-white/10 rounded-xl focus:border-cyan-400 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    YOUR_LINKEDIN
                  </label>
                  <input
                    type="text"
                    value={personalData.linkedinUrl}
                    onChange={(e) => handleFieldChange('linkedinUrl', e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-white/10 rounded-xl focus:border-cyan-400 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    YOUR_TWITTER
                  </label>
                  <input
                    type="text"
                    value={personalData.twitterUrl}
                    onChange={(e) => handleFieldChange('twitterUrl', e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-white/10 rounded-xl focus:border-cyan-400 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    YOUR_RESUME Link
                  </label>
                  <input
                    type="text"
                    value={personalData.resumeUrl}
                    onChange={(e) => handleFieldChange('resumeUrl', e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-white/10 rounded-xl focus:border-cyan-400 font-mono"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-mono text-slate-400">
                    YOUR_PROFILE_IMAGE (URL or Upload Local Photo)
                  </label>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 underline cursor-pointer"
                  >
                    <Upload className="w-3 h-3" />
                    <span>Upload Image File</span>
                  </button>
                </div>
                
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileUpload} 
                  accept="image/*" 
                  className="hidden" 
                />

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-900 border border-white/10 shrink-0">
                    <img 
                      src={personalData.avatarUrl} 
                      alt="Avatar Preview" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => { e.currentTarget.src = "/avatar.png"; }}
                    />
                  </div>
                  <input
                    type="text"
                    value={personalData.avatarUrl.startsWith('data:') ? '(Local uploaded image)' : personalData.avatarUrl}
                    onChange={(e) => handleFieldChange('avatarUrl', e.target.value)}
                    placeholder="https://... or click Upload Image File"
                    className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-white/10 rounded-xl focus:border-cyan-400 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  Short Introduction
                </label>
                <textarea
                  rows={2}
                  value={personalData.shortIntro}
                  onChange={(e) => handleFieldChange('shortIntro', e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-white/10 rounded-xl focus:border-cyan-400 font-mono resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onResetToDefaults}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-400 hover:text-white bg-slate-900 border border-white/5 rounded-xl transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset to Placeholders</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors"
                >
                  Close & View Live Site
                </button>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">Copy and paste into <code>src/portfolioData.ts</code>:</span>
                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied to Clipboard!' : 'Copy Code'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-2xl bg-slate-950 border border-white/10 text-xs font-mono text-cyan-200 overflow-x-auto leading-relaxed max-h-80">
                {generatedCode}
              </pre>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-mono">
              <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 space-y-2">
                <div className="font-bold text-cyan-300 text-sm">📁 Which files to edit?</div>
                <p className="text-slate-400">
                  You only need to edit <strong>1 primary file</strong> for all personal information:
                </p>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-white/5 text-cyan-200">
                  <code>src/portfolioData.ts</code> — Central source for Name, Bio, Skills, Projects, GitHub stats & Experience.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 space-y-2">
                <div className="font-bold text-slate-200 text-sm">Additional files if needed:</div>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  <li><code className="text-slate-200">index.html</code>: Change the page <code>&lt;title&gt;</code> and <code>&lt;meta&gt;</code> descriptions.</li>
                  <li><code className="text-slate-200">public/</code>: Add your <code>resume.pdf</code> or custom avatar images.</li>
                  <li><code className="text-slate-200">vite.config.ts</code>: Already configured with <code>base: './'</code> for GitHub Pages!</li>
                </ul>
              </div>
            </div>
          )}

        </div>

      </motion.div>
    </div>
  );
};
