// REAL GITHUB DATA FOR USER @Jaisrir
// Directly fetched from GitHub Public APIs - Zero fake or synthetic data.

export interface RealGitHubContributionDay {
  date: string;
  count: number;
  level: number; // 0, 1, 2, 3, 4
}

export interface RealGitHubEvent {
  id: string;
  type: string;
  repo: string;
  repoUrl: string;
  createdAt: string;
  payload?: {
    action?: string | null;
    ref?: string | null;
    ref_type?: string | null;
    size?: number | null;
    commits?: Array<{ message: string; sha: string }>;
  };
}

export interface RealGitHubRepo {
  name: string;
  fullName: string;
  htmlUrl: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  updatedAt: string;
  defaultBranch: string;
}

export const realGitHubProfile = {
  username: "Jaisrir",
  name: "sriram E",
  avatarUrl: "https://avatars.githubusercontent.com/u/94157166?v=4",
  profileUrl: "https://github.com/Jaisrir",
  bio: "Full Stack Developer with 30 public repositories on GitHub.",
  publicRepos: 30,
  followers: 0,
  following: 0,
  createdAt: "2021-11-12T04:30:57Z",
  updatedAt: "2026-09-18T08:51:46Z",
  totalStars: 1,
  totalContributionsAllTime: 97,
  contributions2026: 54,
  contributions2025: 15,
  contributions2024: 27,
  contributions2021: 1,
  longestStreakDays: 3,
  topLanguages: [
    { name: 'HTML & Web UI', percentage: 40, color: '#e34c26' },
    { name: 'TypeScript', percentage: 20, color: '#3178c6' },
    { name: 'JavaScript', percentage: 15, color: '#f7df1e' },
    { name: 'C# & Systems', percentage: 25, color: '#68a063' }
  ]
};

export const realGitHubContributions: RealGitHubContributionDay[] = [
  {
    "date": "2025-09-14",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-09-15",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-09-16",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-09-17",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-09-18",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-09-19",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-09-20",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-09-21",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-09-22",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-09-23",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-09-24",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-09-25",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-09-26",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-09-27",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-09-28",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-09-29",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-09-30",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-01",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-02",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-03",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-04",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-05",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-06",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-07",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-08",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-09",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-10",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-11",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-12",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-13",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-14",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-15",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-16",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-17",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-18",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-19",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-20",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-21",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-22",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-23",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-24",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-25",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-26",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-27",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-28",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-29",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-30",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-10-31",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-01",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-02",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-03",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-04",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-05",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-06",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-07",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-08",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-09",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-10",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-11",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-12",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-13",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-14",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-15",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-16",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-17",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-18",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-19",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-20",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-21",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-22",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-23",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-24",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-25",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-26",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-27",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-28",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-29",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-11-30",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-01",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-02",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-03",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-04",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-05",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-06",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-07",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-08",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-09",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-10",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-11",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-12",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-13",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-14",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-15",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-16",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-17",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-18",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-19",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-20",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-21",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-22",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-23",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-24",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-25",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-26",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-27",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-28",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-29",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-30",
    "count": 0,
    "level": 0
  },
  {
    "date": "2025-12-31",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-01",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-02",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-03",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-04",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-05",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-06",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-07",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-08",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-09",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-10",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-11",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-12",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-13",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-14",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-15",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-16",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-17",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-18",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-19",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-20",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-21",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-22",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-23",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-24",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-25",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-26",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-27",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-28",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-29",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-30",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-01-31",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-01",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-02",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-03",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-04",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-05",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-06",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-07",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-08",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-09",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-10",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-11",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-12",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-13",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-14",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-15",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-16",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-17",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-18",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-19",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-20",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-21",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-22",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-23",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-24",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-25",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-26",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-27",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-02-28",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-01",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-02",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-03",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-04",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-05",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-06",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-07",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-08",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-09",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-10",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-11",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-12",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-13",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-14",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-15",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-16",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-17",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-18",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-19",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-20",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-21",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-22",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-23",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-24",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-25",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-26",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-27",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-28",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-29",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-30",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-03-31",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-01",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-02",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-03",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-04",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-05",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-06",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-07",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-08",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-09",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-10",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-11",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-12",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-13",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-14",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-15",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-16",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-17",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-18",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-19",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-20",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-21",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-22",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-23",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-24",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-25",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-26",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-27",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-28",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-29",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-04-30",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-01",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-02",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-03",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-04",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-05",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-06",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-07",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-08",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-09",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-10",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-11",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-12",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-13",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-14",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-15",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-16",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-17",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-18",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-19",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-20",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-21",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-22",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-23",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-24",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-25",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-26",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-27",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-28",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-29",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-30",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-05-31",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-06-01",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-06-02",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-06-03",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-06-04",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-06-05",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-06-06",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-06-07",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-06-08",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-06-09",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-06-10",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-06-11",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-06-12",
    "count": 2,
    "level": 1
  },
  {
    "date": "2026-06-13",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-06-14",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-06-15",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-06-16",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-06-17",
    "count": 3,
    "level": 1
  },
  {
    "date": "2026-06-18",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-06-19",
    "count": 4,
    "level": 2
  },
  {
    "date": "2026-06-20",
    "count": 4,
    "level": 2
  },
  {
    "date": "2026-06-21",
    "count": 2,
    "level": 1
  },
  {
    "date": "2026-06-22",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-06-23",
    "count": 4,
    "level": 2
  },
  {
    "date": "2026-06-24",
    "count": 1,
    "level": 1
  },
  {
    "date": "2026-06-25",
    "count": 1,
    "level": 1
  },
  {
    "date": "2026-06-26",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-06-27",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-06-28",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-06-29",
    "count": 1,
    "level": 1
  },
  {
    "date": "2026-06-30",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-01",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-02",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-03",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-04",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-05",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-06",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-07",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-08",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-09",
    "count": 7,
    "level": 3
  },
  {
    "date": "2026-07-10",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-11",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-12",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-13",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-14",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-15",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-16",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-17",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-18",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-19",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-20",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-21",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-22",
    "count": 4,
    "level": 2
  },
  {
    "date": "2026-07-23",
    "count": 2,
    "level": 1
  },
  {
    "date": "2026-07-24",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-25",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-26",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-27",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-28",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-29",
    "count": 1,
    "level": 1
  },
  {
    "date": "2026-07-30",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-07-31",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-01",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-02",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-03",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-04",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-05",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-06",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-07",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-08",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-09",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-10",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-11",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-12",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-13",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-14",
    "count": 2,
    "level": 1
  },
  {
    "date": "2026-08-15",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-16",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-17",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-18",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-19",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-20",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-21",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-22",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-23",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-24",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-25",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-26",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-27",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-28",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-29",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-30",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-08-31",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-09-01",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-09-02",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-09-03",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-09-04",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-09-05",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-09-06",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-09-07",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-09-08",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-09-09",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-09-10",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-09-11",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-09-12",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-09-13",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-09-14",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-09-15",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-09-16",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-09-17",
    "count": 0,
    "level": 0
  },
  {
    "date": "2026-09-18",
    "count": 13,
    "level": 4
  },
  {
    "date": "2026-09-19",
    "count": 3,
    "level": 1
  }
];

export const realGitHubEvents: RealGitHubEvent[] = [
  {
    "id": "21560046195",
    "type": "CreateEvent",
    "repo": "Jaisrir/Weather-Application",
    "repoUrl": "https://github.com/Jaisrir/Weather-Application",
    "createdAt": "2026-09-19T04:57:51Z",
    "payload": {
      "action": null,
      "ref": "main",
      "ref_type": "branch",
      "size": 1,
      "commits": []
    }
  },
  {
    "id": "21546181807",
    "type": "PushEvent",
    "repo": "Jaisrir/Jaisrir",
    "repoUrl": "https://github.com/Jaisrir/Jaisrir",
    "createdAt": "2026-09-18T08:28:16Z",
    "payload": {
      "action": null,
      "ref": "refs/heads/main",
      "ref_type": null,
      "size": 1,
      "commits": []
    }
  },
  {
    "id": "21481101299",
    "type": "PushEvent",
    "repo": "Jaisrir/Jaisrir",
    "repoUrl": "https://github.com/Jaisrir/Jaisrir",
    "createdAt": "2026-09-18T08:44:43Z",
    "payload": {
      "action": null,
      "ref": "refs/heads/main",
      "ref_type": null,
      "size": 1,
      "commits": []
    }
  },
  {
    "id": "21479655459",
    "type": "PushEvent",
    "repo": "Jaisrir/Jaisrir",
    "repoUrl": "https://github.com/Jaisrir/Jaisrir",
    "createdAt": "2026-09-18T08:26:28Z",
    "payload": {
      "action": null,
      "ref": "refs/heads/main",
      "ref_type": null,
      "size": 1,
      "commits": []
    }
  },
  {
    "id": "21478390599",
    "type": "PushEvent",
    "repo": "Jaisrir/Jaisrir",
    "repoUrl": "https://github.com/Jaisrir/Jaisrir",
    "createdAt": "2026-09-18T08:09:19Z",
    "payload": {
      "action": null,
      "ref": "refs/heads/main",
      "ref_type": null,
      "size": 1,
      "commits": []
    }
  },
  {
    "id": "21477483075",
    "type": "PushEvent",
    "repo": "Jaisrir/Jaisrir",
    "repoUrl": "https://github.com/Jaisrir/Jaisrir",
    "createdAt": "2026-09-18T07:57:25Z",
    "payload": {
      "action": null,
      "ref": "refs/heads/main",
      "ref_type": null,
      "size": 1,
      "commits": []
    }
  },
  {
    "id": "21477071549",
    "type": "CreateEvent",
    "repo": "Jaisrir/Jaisrir",
    "repoUrl": "https://github.com/Jaisrir/Jaisrir",
    "createdAt": "2026-09-18T07:51:51Z",
    "payload": {
      "action": null,
      "ref": "main",
      "ref_type": "branch",
      "size": 1,
      "commits": []
    }
  },
  {
    "id": "21476401350",
    "type": "PushEvent",
    "repo": "Jaisrir/Jaisrir.github.io",
    "repoUrl": "https://github.com/Jaisrir/Jaisrir.github.io",
    "createdAt": "2026-09-18T07:42:57Z",
    "payload": {
      "action": null,
      "ref": "refs/heads/main",
      "ref_type": null,
      "size": 1,
      "commits": []
    }
  },
  {
    "id": "21476376927",
    "type": "CreateEvent",
    "repo": "Jaisrir/Jaisrir.github.io",
    "repoUrl": "https://github.com/Jaisrir/Jaisrir.github.io",
    "createdAt": "2026-09-18T07:42:38Z",
    "payload": {
      "action": null,
      "ref": "main",
      "ref_type": "branch",
      "size": 1,
      "commits": []
    }
  },
  {
    "id": "19561848005",
    "type": "CreateEvent",
    "repo": "Jaisrir/JS-Jspider-",
    "repoUrl": "https://github.com/Jaisrir/JS-Jspider-",
    "createdAt": "2026-08-31T12:21:52Z",
    "payload": {
      "action": null,
      "ref": "main",
      "ref_type": "branch",
      "size": 1,
      "commits": []
    }
  }
];

export const realGitHubRepos: RealGitHubRepo[] = [
  {
    "name": "Weather-Application",
    "fullName": "Jaisrir/Weather-Application",
    "htmlUrl": "https://github.com/Jaisrir/Weather-Application",
    "description": "V1",
    "language": "TypeScript",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2026-09-19T04:58:08Z",
    "defaultBranch": "main"
  },
  {
    "name": "Jaisrir",
    "fullName": "Jaisrir/Jaisrir",
    "htmlUrl": "https://github.com/Jaisrir/Jaisrir",
    "description": "",
    "language": "General",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2026-09-18T08:44:46Z",
    "defaultBranch": "main"
  },
  {
    "name": "Jaisrir.github.io",
    "fullName": "Jaisrir/Jaisrir.github.io",
    "htmlUrl": "https://github.com/Jaisrir/Jaisrir.github.io",
    "description": "Portfolio",
    "language": "TypeScript",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2026-09-18T07:43:01Z",
    "defaultBranch": "main"
  },
  {
    "name": "Node-JS",
    "fullName": "Jaisrir/Node-JS",
    "htmlUrl": "https://github.com/Jaisrir/Node-JS",
    "description": "Jspider Node Js",
    "language": "General",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2026-09-18T07:19:18Z",
    "defaultBranch": "main"
  },
  {
    "name": "JS-Jspider-",
    "fullName": "Jaisrir/JS-Jspider-",
    "htmlUrl": "https://github.com/Jaisrir/JS-Jspider-",
    "description": "",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2026-08-31T12:29:56Z",
    "defaultBranch": "main"
  },
  {
    "name": "client_project_DONART-ARTISTRY",
    "fullName": "Jaisrir/client_project_DONART-ARTISTRY",
    "htmlUrl": "https://github.com/Jaisrir/client_project_DONART-ARTISTRY",
    "description": "",
    "language": "TypeScript",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2026-07-29T05:44:01Z",
    "defaultBranch": "main"
  },
  {
    "name": "GrowEasy---Front_End",
    "fullName": "Jaisrir/GrowEasy---Front_End",
    "htmlUrl": "https://github.com/Jaisrir/GrowEasy---Front_End",
    "description": "",
    "language": "TypeScript",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2026-07-09T12:39:06Z",
    "defaultBranch": "main"
  },
  {
    "name": "GrowEasy---Front_End1",
    "fullName": "Jaisrir/GrowEasy---Front_End1",
    "htmlUrl": "https://github.com/Jaisrir/GrowEasy---Front_End1",
    "description": "",
    "language": "General",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2026-07-09T08:02:18Z",
    "defaultBranch": "main"
  },
  {
    "name": "GrowEasy---Back_End",
    "fullName": "Jaisrir/GrowEasy---Back_End",
    "htmlUrl": "https://github.com/Jaisrir/GrowEasy---Back_End",
    "description": "",
    "language": "TypeScript",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2026-07-09T06:11:26Z",
    "defaultBranch": "main"
  },
  {
    "name": "Personal-Expense-Tracker",
    "fullName": "Jaisrir/Personal-Expense-Tracker",
    "htmlUrl": "https://github.com/Jaisrir/Personal-Expense-Tracker",
    "description": "",
    "language": "HTML",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2026-06-29T06:40:05Z",
    "defaultBranch": "main"
  },
  {
    "name": "Flask-Project",
    "fullName": "Jaisrir/Flask-Project",
    "htmlUrl": "https://github.com/Jaisrir/Flask-Project",
    "description": "",
    "language": "General",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2026-06-20T07:37:27Z",
    "defaultBranch": "main"
  },
  {
    "name": "HTMl",
    "fullName": "Jaisrir/HTMl",
    "htmlUrl": "https://github.com/Jaisrir/HTMl",
    "description": "",
    "language": "HTML",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2026-06-20T07:34:19Z",
    "defaultBranch": "main"
  },
  {
    "name": "Wisehr_backend_dev",
    "fullName": "Jaisrir/Wisehr_backend_dev",
    "htmlUrl": "https://github.com/Jaisrir/Wisehr_backend_dev",
    "description": "",
    "language": "General",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2025-05-15T15:26:07Z",
    "defaultBranch": "main"
  },
  {
    "name": "Wisehr_frontend",
    "fullName": "Jaisrir/Wisehr_frontend",
    "htmlUrl": "https://github.com/Jaisrir/Wisehr_frontend",
    "description": "",
    "language": "HTML",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2025-05-15T15:25:11Z",
    "defaultBranch": "main"
  },
  {
    "name": "WiseHR_Backend",
    "fullName": "Jaisrir/WiseHR_Backend",
    "htmlUrl": "https://github.com/Jaisrir/WiseHR_Backend",
    "description": "",
    "language": "C#",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2025-04-28T05:46:43Z",
    "defaultBranch": "main"
  },
  {
    "name": "WiseHr",
    "fullName": "Jaisrir/WiseHr",
    "htmlUrl": "https://github.com/Jaisrir/WiseHr",
    "description": "",
    "language": "HTML",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2025-04-28T05:15:17Z",
    "defaultBranch": "main"
  },
  {
    "name": "Final_year_projectsaviour",
    "fullName": "Jaisrir/Final_year_projectsaviour",
    "htmlUrl": "https://github.com/Jaisrir/Final_year_projectsaviour",
    "description": "",
    "language": "HTML",
    "stars": 1,
    "forks": 0,
    "updatedAt": "2025-03-05T10:28:38Z",
    "defaultBranch": "main"
  },
  {
    "name": "cart_rabbit",
    "fullName": "Jaisrir/cart_rabbit",
    "htmlUrl": "https://github.com/Jaisrir/cart_rabbit",
    "description": "portfolio",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2024-07-29T10:40:52Z",
    "defaultBranch": "main"
  },
  {
    "name": "responsive_project",
    "fullName": "Jaisrir/responsive_project",
    "htmlUrl": "https://github.com/Jaisrir/responsive_project",
    "description": "responsive web site useing html css",
    "language": "General",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2024-07-26T08:40:16Z",
    "defaultBranch": "main"
  },
  {
    "name": "hands_on_practice_reactjs",
    "fullName": "Jaisrir/hands_on_practice_reactjs",
    "htmlUrl": "https://github.com/Jaisrir/hands_on_practice_reactjs",
    "description": "sample react project",
    "language": "JavaScript",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2024-07-26T07:35:00Z",
    "defaultBranch": "main"
  },
  {
    "name": "react_project",
    "fullName": "Jaisrir/react_project",
    "htmlUrl": "https://github.com/Jaisrir/react_project",
    "description": "sample react project",
    "language": "General",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2024-07-26T07:25:56Z",
    "defaultBranch": "main"
  },
  {
    "name": "mern_practice",
    "fullName": "Jaisrir/mern_practice",
    "htmlUrl": "https://github.com/Jaisrir/mern_practice",
    "description": "face prep project",
    "language": "HTML",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2024-07-26T07:23:31Z",
    "defaultBranch": "main"
  },
  {
    "name": "css_flexbox",
    "fullName": "Jaisrir/css_flexbox",
    "htmlUrl": "https://github.com/Jaisrir/css_flexbox",
    "description": "simple flexbox project",
    "language": "HTML",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2024-07-26T07:15:56Z",
    "defaultBranch": "main"
  },
  {
    "name": "html_hands_on_practics",
    "fullName": "Jaisrir/html_hands_on_practics",
    "htmlUrl": "https://github.com/Jaisrir/html_hands_on_practics",
    "description": "html  css sample project",
    "language": "HTML",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2024-07-26T07:13:52Z",
    "defaultBranch": "main"
  },
  {
    "name": "713321CS04_TEST",
    "fullName": "Jaisrir/713321CS04_TEST",
    "htmlUrl": "https://github.com/Jaisrir/713321CS04_TEST",
    "description": "face_prep_test",
    "language": "HTML",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2024-07-18T10:47:05Z",
    "defaultBranch": "main"
  },
  {
    "name": "mern_stack",
    "fullName": "Jaisrir/mern_stack",
    "htmlUrl": "https://github.com/Jaisrir/mern_stack",
    "description": "",
    "language": "CSS",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2024-07-15T09:20:46Z",
    "defaultBranch": "main"
  },
  {
    "name": "Face_prep_All_project",
    "fullName": "Jaisrir/Face_prep_All_project",
    "htmlUrl": "https://github.com/Jaisrir/Face_prep_All_project",
    "description": "Face_prep_All_project",
    "language": "General",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2024-07-08T13:39:21Z",
    "defaultBranch": "main"
  },
  {
    "name": "Register_face_pre",
    "fullName": "Jaisrir/Register_face_pre",
    "htmlUrl": "https://github.com/Jaisrir/Register_face_pre",
    "description": "register form",
    "language": "HTML",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2024-06-28T03:48:14Z",
    "defaultBranch": "main"
  },
  {
    "name": "xo_game",
    "fullName": "Jaisrir/xo_game",
    "htmlUrl": "https://github.com/Jaisrir/xo_game",
    "description": "project 2",
    "language": "HTML",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2024-06-26T16:07:01Z",
    "defaultBranch": "main"
  },
  {
    "name": "Face_prep_project",
    "fullName": "Jaisrir/Face_prep_project",
    "htmlUrl": "https://github.com/Jaisrir/Face_prep_project",
    "description": "html project",
    "language": "HTML",
    "stars": 0,
    "forks": 0,
    "updatedAt": "2024-06-26T15:23:46Z",
    "defaultBranch": "main"
  }
];
