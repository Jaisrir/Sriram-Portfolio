import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { GitHubSection } from './components/GitHubSection';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ExperienceLetterModal } from './components/ExperienceLetterModal';
import { avatarBase64 } from './assets/avatarBase64';
import {
  initialPersonalData,
  initialSkills,
  initialProjects,
  initialGitHubStats,
  initialTimeline
} from './portfolioData';
import { PersonalData, GitHubStatsData } from './types';

// Safe localStorage wrappers to avoid unhandled exceptions in sandboxed environments or quota exhaustion
const safeStorage = {
  getItem: (key: string): string | null => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return window.localStorage.getItem(key);
      }
    } catch (e) {
      console.warn('localStorage.getItem restricted or failed:', e);
    }
    return null;
  },
  setItem: (key: string, value: string): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, value);
      }
    } catch (e) {
      console.warn('localStorage.setItem restricted or quota exceeded:', e);
    }
  },
  removeItem: (key: string): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(key);
      }
    } catch (e) {
      console.warn('localStorage.removeItem failed:', e);
    }
  }
};

// Error boundary to gracefully catch any rendering exceptions
class AppErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('AppErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md p-8 rounded-3xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-xl shadow-2xl">
            <h2 className="text-2xl font-bold font-mono text-cyan-400 mb-3">System Recovered</h2>
            <p className="text-sm text-slate-300 mb-6">
              A temporary interface state occurred. You can restore default settings to continue.
            </p>
            <button
              onClick={() => {
                safeStorage.removeItem('portfolio_personal_data');
                window.location.reload();
              }}
              className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono text-sm font-bold transition-colors"
            >
              Reset to Defaults & Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  const [personalData, setPersonalData] = useState<PersonalData>(() => {
    const saved = safeStorage.getItem('portfolio_personal_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.name && parsed.name !== 'YOUR_NAME' && parsed.githubUsername !== 'YOUR_USERNAME') {
          // Always ensure verified primary user email
          parsed.email = 'sriram.cse.elangovan@gmail.com';
          parsed.secondaryEmail = 'sriramjai983@gmail.com';
          // Guarantee real photo is always used
          parsed.avatarUrl = avatarBase64;
          // Always use up-to-date bio from initialPersonalData to keep (@Jaisrir) removed
          parsed.bio = initialPersonalData.bio;
          if (!parsed.resumeUrl || parsed.resumeUrl === '#contact') {
            parsed.resumeUrl = '/resume.pdf';
          }
          return parsed;
        }
      } catch (e) {
        console.warn('Failed to parse saved portfolio data', e);
      }
    }
    return initialPersonalData;
  });

  const [gitHubStats, setGitHubStats] = useState<GitHubStatsData>(() => {
    return {
      ...initialGitHubStats,
      username: personalData.githubUsername || initialGitHubStats.username,
      profileUrl: personalData.githubUrl || initialGitHubStats.profileUrl,
    };
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isExpLetterOpen, setIsExpLetterOpen] = useState(false);

  // Sync githubStats when personalData changes
  useEffect(() => {
    setGitHubStats((prev) => ({
      ...prev,
      username: personalData.githubUsername,
      profileUrl: personalData.githubUrl,
    }));
    safeStorage.setItem('portfolio_personal_data', JSON.stringify(personalData));
  }, [personalData]);

  return (
    <AppErrorBoundary>
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col relative selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Top Sticky Navigation */}
      <Navbar 
        personalData={personalData} 
        onOpenExperienceLetter={() => setIsExpLetterOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          personalData={personalData} 
          onUpdateAvatar={(newAvatarUrl) => {
            setPersonalData((prev) => ({
              ...prev,
              avatarUrl: newAvatarUrl
            }));
          }}
        />
        <About 
          personalData={personalData} 
          onOpenExperienceLetter={() => setIsExpLetterOpen(true)}
        />
        <Skills skills={initialSkills} />
        <Projects projects={initialProjects} />
        <GitHubSection stats={gitHubStats} />
        <Experience 
          timeline={initialTimeline} 
          onOpenExperienceLetter={() => setIsExpLetterOpen(true)}
        />
        <Contact 
          personalData={personalData} 
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer personalData={personalData} />

      {/* Official Experience Certificate Modal */}
      <ExperienceLetterModal
        isOpen={isExpLetterOpen}
        onClose={() => setIsExpLetterOpen(false)}
      />

      {/* Professional Resume & CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        personalData={personalData}
      />

    </div>
    </AppErrorBoundary>
  );
}
