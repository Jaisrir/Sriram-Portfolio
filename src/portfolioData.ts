import { PersonalData, SkillItem, ProjectItem, TimelineItem, GitHubStatsData } from './types';
import { avatarBase64 } from './assets/avatarBase64';

/**
 * ============================================================================
 * 🛠️ PORTFOLIO CONFIGURATION - CUSTOMIZE YOUR INFORMATION HERE!
 * ============================================================================
 * Edit the values below to personalize your portfolio.
 * You can also use the built-in "Quick Customizer" in the website navbar!
 */

export const initialPersonalData: PersonalData = {
  // 👉 YOUR NAME & TITLES
  name: "Sriram E",
  role: "Full Stack Developer",
  titles: [
    "Full Stack Developer",
    "Software Engineer",
    "Frontend & Backend Builder",
    "Open Source Developer"
  ],

  // 👉 SHORT INTRODUCTION (Hero Section)
  shortIntro: "Full Stack Developer dedicated to building performant web applications, responsive user interfaces, and robust backend APIs across 30+ GitHub projects.",

  // 👉 DETAILED BIO (About Me Section)
  bio: [
    "I am Sriram E, a Software Developer and Computer Science Engineering graduate (B.E. - CSE, 2021—2025).",
    "I have 9 months of industry experience at Wise Work (23 Dec 2024 – 10 Sep 2025) as a Software Engineer Trainee specializing in C# and backend architecture for enterprise solutions like WiseHR. Currently, I am advancing full-stack software engineering with the MERN stack (MongoDB, Express.js, React, Node.js) at JSpiders Bengaluru."
  ],

  location: "Bengaluru / India • Open to Remote & On-site",
  status: "Available for full-time opportunities",

  // 👉 CONTACT & SOCIAL PLACEHOLDERS
  email: "sriram.cse.elangovan@gmail.com",
  secondaryEmail: "sriramjai983@gmail.com",
  githubUsername: "Jaisrir",
  githubUrl: "https://github.com/Jaisrir",
  linkedinUrl: "https://linkedin.com/in/sriram-e",
  twitterUrl: "https://x.com/Jaisrir",
  resumeUrl: "/resume.pdf", // User can upload resume.pdf to public folder to update anytime
  avatarUrl: avatarBase64, // Real Cyber Developer Portrait photo embedded

  // 👉 QUICK STATS (Accurate, Real Details Only)
  stats: {
    yearsExperience: "9 Mos",
    projectsCompleted: "30",
    technologiesMastered: "MERN & C#",
    githubContributions: "97"
  }
};

/**
 * 👉 SKILLS SECTION
 * Technologies matching Sriram's repositories and full stack skill set.
 */
export const initialSkills: SkillItem[] = [
  // Frontend & Core Web
  { name: "HTML5", category: "frontend", level: 96, iconSlug: "html", description: "Semantic markup, modern layout, accessibility" },
  { name: "CSS3", category: "frontend", level: 94, iconSlug: "css", description: "Flexbox, Grid systems, responsive UI, animations" },
  { name: "Bootstrap", category: "frontend", level: 90, iconSlug: "bootstrap", description: "Responsive grid systems, flex utilities, modern components" },
  { name: "JavaScript (ES6+)", category: "languages", level: 92, iconSlug: "js", description: "DOM manipulation, async/await, event loop, modern ES6+" },
  { name: "React", category: "frontend", level: 88, iconSlug: "react", description: "Hooks, state management, component architecture" },

  // Backend & APIs
  { name: "C#", category: "languages", level: 90, iconSlug: "csharp", description: "Backend development, enterprise architecture, object-oriented systems" },
  { name: "Node.js", category: "backend", level: 90, iconSlug: "nodejs", description: "REST APIs, asynchronous runtime, package management" },
  { name: "Express.js", category: "backend", level: 88, iconSlug: "express", description: "Routing, middleware, backend microservices" },
  { name: "Python", category: "languages", level: 80, iconSlug: "python", description: "Flask, backend scripts, data automation" },
  { name: "Java", category: "languages", level: 88, iconSlug: "java", description: "Object-oriented programming (OOP), core Java, backend logic" },

  // Databases & Storage
  { name: "MySQL", category: "database", level: 86, iconSlug: "mysql", description: "Relational database management, SQL queries, schema design" },
  { name: "MongoDB & NoSQL", category: "database", level: 86, iconSlug: "mongodb", description: "Document modeling, collections, database aggregation" },

  // DevOps & Tooling
  { name: "Git", category: "devops", level: 92, iconSlug: "git", description: "Version control, branching, rebasing, commits" },
  { name: "GitHub", category: "devops", level: 94, iconSlug: "github", description: "Repository management, Pages deployment, open source" },
  { name: "VS Code", category: "devops", level: 95, iconSlug: "vscode", description: "Extensions, debugging, modern developer workflow" }
];

/**
 * 👉 PROJECTS SECTION
 * Sriram's real public GitHub projects!
 */
export const initialProjects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Final Year Project Saviour",
    category: "fullstack",
    description: "Academic & engineering project resource platform designed to assist students with project workflows, documentation, and source code.",
    longDescription: "An end-to-end web portal created to streamline academic project submissions. Features modular resource categories, clean user interfaces, code samples, and comprehensive project guides.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    technologies: ["HTML5", "CSS3", "JavaScript", "Full Stack"],
    githubUrl: "https://github.com/Jaisrir/Final_year_projectsaviour",
    featured: true,
    highlights: ["Starred GitHub repository", "Comprehensive project templates", "Responsive UI"],
    metrics: "1 Star • Popular Repo"
  },
  {
    id: "proj-2",
    title: "GrowEasy Platform",
    category: "fullstack",
    description: "Full stack web application engineered with modern JavaScript, featuring decoupled frontend client architecture and scalable backend services.",
    longDescription: "Architected across modular frontend and backend repositories ('GrowEasy---Front_End' and 'GrowEasy---Back_End') with Node.js and Express for clean data flow, reliable APIs, and modern responsive styling.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    technologies: ["JavaScript", "Node.js", "Express", "REST APIs", "CSS3"],
    githubUrl: "https://github.com/Jaisrir/GrowEasy---Front_End",
    featured: true,
    highlights: ["Decoupled client/server architecture", "Express REST APIs", "Clean state handling"],
    metrics: "Full Stack Monorepo"
  },
  {
    id: "proj-3",
    title: "DONART Artistry Client Project",
    category: "frontend",
    description: "Digital artistry and custom client portfolio web application built with modern JavaScript and fluid responsive layout design.",
    longDescription: "Developed for a real client showcasing creative artwork, commissions, and visual galleries with high responsiveness across mobile, tablet, and desktop viewports.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    technologies: ["JavaScript", "HTML5", "CSS3", "Client Delivery"],
    githubUrl: "https://github.com/Jaisrir/client_project_DONART-ARTISTRY",
    featured: true,
    highlights: ["Delivered for real client", "High visual fidelity", "Fast load times"],
    metrics: "Client Production"
  },
  {
    id: "proj-4",
    title: "WiseHR Enterprise Portal",
    category: "backend",
    description: "Human Resource management portal and employee administration system with Node.js backend services and structured relational data.",
    longDescription: "Engineered with Node.js and Express backend services integrated with a dedicated frontend interface for managing staff records, departments, and administrative workflows efficiently.",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80",
    technologies: ["Node.js", "Express", "SQL", "HTML5", "CSS3"],
    githubUrl: "https://github.com/Jaisrir/WiseHR_Backend",
    featured: false,
    highlights: ["Enterprise schema architecture", "Robust Node.js backend", "HR management workflows"],
    metrics: "Enterprise System"
  },
  {
    id: "proj-5",
    title: "Personal Expense Tracker",
    category: "frontend",
    description: "Interactive personal budgeting and expense tracking web app with live calculation, balance summaries, and local persistence.",
    longDescription: "Allows users to log income and expenditures, organize categories, view visual balance breakdowns, and maintain their data locally across browser sessions.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    githubUrl: "https://github.com/Jaisrir/Personal-Expense-Tracker",
    featured: false,
    highlights: ["Instant budget calculation", "Zero-server offline storage", "Category tagging"],
    metrics: "Personal Finance"
  },
  {
    id: "proj-6",
    title: "Interactive XO (Tic-Tac-Toe) Game",
    category: "frontend",
    description: "Responsive browser game with interactive state evaluation, turn mechanics, and animated winning strike indicators.",
    longDescription: "Crafted with pure JavaScript, semantic HTML, and CSS animations. Demonstrates core algorithmic game logic, win-condition matrix checks, and reset state handling.",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=800&q=80",
    technologies: ["JavaScript", "HTML5", "CSS3", "Game Logic"],
    githubUrl: "https://github.com/Jaisrir/xo_game",
    featured: false,
    highlights: ["Win-condition algorithm", "Dynamic turn states", "Smooth CSS transitions"],
    metrics: "Interactive Game"
  }
];

/**
 * 👉 GITHUB STATS SECTION (100% Verified Real Data from GitHub API for @Jaisrir)
 */
export const initialGitHubStats: GitHubStatsData = {
  username: "Jaisrir",
  profileUrl: "https://github.com/Jaisrir",
  totalRepos: 30,
  totalStars: 1,
  totalContributions: 97,
  longestStreakDays: 3,
  topLanguages: [
    { name: "HTML & Web UI", percentage: 40, color: "#e34c26" },
    { name: "TypeScript", percentage: 20, color: "#3178c6" },
    { name: "JavaScript", percentage: 15, color: "#f7df1e" },
    { name: "C# & Systems", percentage: 25, color: "#68a063" }
  ]
};

/**
 * 👉 EXPERIENCE & JOURNEY TIMELINE
 */
export const initialTimeline: TimelineItem[] = [
  {
    id: "exp-mern-jspiders",
    type: "work",
    role: "MERN Full Stack Developer",
    company: "JSpiders Bengaluru",
    location: "Bengaluru, Karnataka, India",
    period: "Currently (2025 — Present)",
    description: "Undergoing intensive advanced full-stack software development with the MERN stack (MongoDB, Express.js, React, Node.js), engineering scalable web applications, responsive user interfaces, and robust backend API services.",
    achievements: [
      "Architecting full-stack web applications with React component trees, hooks, and clean state management",
      "Engineering RESTful API endpoints and backend middleware using Node.js and Express",
      "Designing NoSQL document schemas, CRUD pipelines, and aggregation operations in MongoDB"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript (ES6+)", "TypeScript", "REST APIs", "Tailwind CSS"]
  },
  {
    id: "exp-wise-work",
    type: "work",
    role: "Software Engineer Trainee (C# Developer)",
    company: "Wise Work",
    location: "Bengaluru, Karnataka, India",
    period: "23 Dec 2024 — 10 Sep 2025 (9 Months)",
    description: "Employed as a Software Engineer Trainee at Wise Work (Ref: WW/HR/2025). Contributed significantly to enterprise software projects including the WiseHR software suite, engineering backend services in C# and demonstrating high competence, initiative, and dedication.",
    achievements: [
      "Certified by Wise Work People Team for high professionalism, dedication, and proactive initiative in software delivery",
      "Engineered reliable backend business services and RESTful APIs utilizing C# and object-oriented design principles",
      "Developed and maintained database schemas, SQL queries, and data models powering WiseHR systems",
      "Collaborated on backend-to-frontend API integration, debugging, and code quality workflows"
    ],
    technologies: ["C#", ".NET / Backend", "RESTful APIs", "SQL & Database", "WiseHR Backend", "Git"]
  },
  {
    id: "exp-college-cse",
    type: "education",
    role: "B.E. in Computer Science & Engineering (BE - CSE)",
    company: "College of Engineering",
    location: "India",
    period: "2021 — 2025",
    description: "Completed Bachelor of Engineering in Computer Science and Engineering (BE - CSE), acquiring strong computer science foundations across software architecture, data structures, algorithms, and full-stack software development.",
    achievements: [
      "Created and published 'Final Year Project Saviour' (GitHub starred project) to assist peers with engineering capstone projects",
      "Developed solid competencies in Data Structures, Algorithms, Object-Oriented Programming, and Database Systems",
      "Constructed multiple academic software systems and web applications throughout the 4-year degree"
    ],
    technologies: ["Computer Science (BE - CSE)", "Data Structures", "Algorithms", "C#", "DBMS & SQL", "JavaScript", "Software Engineering"]
  }
];
