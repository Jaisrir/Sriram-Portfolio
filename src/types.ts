export interface PersonalData {
  name: string;
  role: string;
  titles: string[];
  shortIntro: string;
  bio: string[];
  location: string;
  status: string;
  email: string;
  secondaryEmail?: string;
  githubUsername: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  resumeUrl: string;
  avatarUrl: string;
  stats: {
    yearsExperience: string;
    projectsCompleted: string;
    technologiesMastered: string;
    githubContributions: string;
  };
}

export type SkillCategory = 'all' | 'frontend' | 'backend' | 'devops' | 'database' | 'languages';

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'database' | 'languages';
  level: number; // 1 to 100
  iconName?: string;
  iconSlug?: string;
  description?: string;
  tag?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'fullstack' | 'frontend' | 'backend' | 'mobile';
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
  metrics?: string;
}

export interface TimelineItem {
  id: string;
  type: 'work' | 'education' | 'milestone';
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface GitHubStatsData {
  username: string;
  profileUrl: string;
  totalRepos: number;
  totalStars: number;
  totalContributions: number;
  longestStreakDays: number;
  topLanguages: {
    name: string;
    percentage: number;
    color: string;
  }[];
}
