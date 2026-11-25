interface ExperienceEntry {
  company: string;
  title: string;
  dateRange: string;
  description: string;
  responsibilities: string[];
  type?: string;
}

export const siteConfig = {
  name: "Swallieu Dawud",
  title: "Software Engineer",
  tagline: "Building Digital Solutions That Matter",
  description:
    "Portfolio website of Swallieu Dawud - Full Stack Developer specializing in MERN stack and modern web technologies",
  resumeUrl: "/Swallieu_Dawud_CV.pdf",

  // Theme colors
  colors: {
    primary: "#06b6d4", // Cyan-500
    secondary: "#0f172a",
    accent: "#64ffda",
  },

  social: {
    email: "swallieudawud@gmail.com",
    linkedin: "https://www.linkedin.com/in/swallieu-dawud-96464220b/",
    twitter: "",
    github: "https://github.com/Heisenberg696",
  },

  aboutMe:
    "I'm a back-end-focused full-stack software engineer with 2+ years of experience building production web systems using Node.js/Express, Django REST and MongoDB/PostgreSQL. I design RESTful APIs and third-party integrations (Paystack, Namecheap, WHM/cPanel, Firebase), secure payment and webhook flows, and deploy to Linux servers with Docker, Nginx and CI/CD. I'm comfortable on the front end with JavaScript, HTML/CSS and React when needed.",

  // Reorganized skills by category
  skillCategories: {
    frontend: {
      title: "Frontend Development",
      icon: "code",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Redux",
        "Zustand",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Flutter",
        "Leaflet",
        "Responsive Design",
        "UI/UX Implementation",
      ],
      description: "Building beautiful, performant user interfaces",
    },
    backend: {
      title: "Backend Development",
      icon: "server",
      skills: [
        "Node.js",
        "Express.js",
        "Django",
        "Django REST Framework",
        "Python",
        "PostgreSQL",
        "SQL",
        "MongoDB",
        "Firebase (Auth, Firestore, Storage, Hosting, App Check)",
        "MySQL",
        "RESTful API design",
        "JWT Authentication",
        "Socket.io",
        "webhook security",
        "third-party API integration (Paystack, Namecheap)",
        "Postman",
        "GraphQL",
      ],
      description: "Architecting robust server-side solutions",
    },
    innovation: {
      title: "Innovation & Leadership",
      icon: "lightbulb",
      skills: [
        "Technical Strategy",
        "Solution Architecture",
        "Team Collaboration",
        "Agile Methodologies",
        "Mentoring",
        "Problem Solving",
        "Project Management",
        "Code Review",
      ],
      description: "Leading teams and driving technical excellence",
    },
    other: {
      title: "Tools & Technologies",
      skills: [
        "Linux",
        "Docker",
        "Docker Compose",
        "Nginx",
        "SSH",
        "DNS",
        "SSL/TLS",
        "GitHub Actions (CI/CD)",
        "Git/GitHub",
        "Git workflow",
        "automated testing",
        "OpenCV",
        "TensorFlow",
        "Scikit-learn",
        "Jest",
        "Websockets",
        "Cloudinary",
      ],
    },
  },

  projects: [
    {
      name: "Voxta",
      subtitle: "Full-Stack Polling Application",
      description:
        "A full-stack web application built with the MERN stack that allows users to create, vote on, and manage opinion polls across various topics. Features JWT-based authentication, real-time result viewing, category-based organization, and ensures fairness with one vote per user per poll.",
      link: "https://voxta.vercel.app/",
      demoVideo: "https://youtu.be/obATx2SI1aA",
      github: "https://github.com/Heisenberg696/voxta",
      image: "/images/voxta.png",
      skills: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Lucide-react",
        "Context API",
        "CORS",
        "mongoose",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Lucide-react",
        "Context API",
        "CORS",
        "mongoose",
      ],
      featured: true,
    },
    {
      name: "Handi",
      subtitle: "Local Services Marketplace",
      description:
        "A MERN Stack platform connecting local blue-collar service providers with community members. Features secure authentication, job postings, real-time notifications via Socket.io, portfolio showcasing, and ratings/reviews system.",
      link: "https://handi-three.vercel.app/",
      demoVideo: "https://youtu.be/mnTghdKf4gk",
      github: "https://github.com/Heisenberg696/handi",
      image: "/images/handi.png",
      skills: [
        "React",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "Cloudinary",
        "Zustand",
        "React Query",
        "CORS",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "Cloudinary",
        "Zustand",
        "React Query",
        "CORS",
      ],
      featured: true,
    },
    {
      name: "Afrotales",
      subtitle: "Cultural Media Platform",
      description:
        "A React and Firebase-powered web app celebrating African storytelling by showcasing films, music, literature, and cultural works. Features role-based authentication, personalized watchlists, advanced search with filters, and user-generated reviews.",
      link: "https://afrotales.vercel.app/",
      demoVideo: "",
      github: "https://github.com/Heisenberg696/afrotales",
      githubClickable: false, // Special flag to disable link for this project
      image: "/images/afrotales.png",
      skills: ["React", "Firebase", "Firestore", "Tailwind CSS"],
      technologies: ["React", "Firebase", "Firestore", "Tailwind CSS"],
      featured: true,
    },
  ],

  experience: [
    {
      company: "EazWorld",
      title: "Software Engineer",
      dateRange: "June 2026 - Present",
      description:
        "Co-developed a production web hosting, domain registration and e-commerce platform with an Express/MongoDB REST API and a Next.js 14 frontend.",
      responsibilities: [
        "Co-developed the platform's Express/MongoDB REST API (330+ endpoints, 47 data models, 9 scheduled background jobs) and a Next.js 14 frontend (110+ pages).",
        "Integrated 12 third-party services via REST APIs and webhooks, including Paystack (card and Mobile Money), Namecheap (domains), WHM/cPanel (automated hosting provisioning), Cloudinary, Resend, Arkesel SMS, Google sign-in and Google Maps, plus Anthropic Claude for AI-assisted customer chat.",
        "Hardened the payments flow with HMAC-SHA512 webhook signature verification, alerting on unmatched webhooks, refund review for payments on cancelled orders, automatic recovery of stranded paid orders, and a reconciliation job, admin API and dashboard that flag customers who were charged but not served.",
        "Fixed a race condition that let concurrent webhooks provision the same hosting account twice, using atomic, idempotent payment claims, and moved all bundled-domain and add-on pricing server-side so client-submitted prices are never trusted.",
        "Completed security hardening: Helmet/CSP, rate limiting, Zod input validation and sanitisation, append-only audit logging, OTP rate limiting, superadmin account protection and honeypot spam protection.",
        "Improved SEO (sitemap, structured data, per-page metadata) and consent-gated analytics, and reduced hero image sizes by 88% to speed up page loads.",
        "Deployed to a Linux VPS with Docker Compose, Nginx and Let's Encrypt HTTPS. GitHub Actions pipelines gate every merge on linting, automated tests (2,300+ backend test cases, 170+ frontend test files) and a build, then deploy over SSH with automated health checks.",
      ],
    },
    {
      company: "Apsel",
      title: "Software Engineer",
      dateRange: "May 2026 - Present",
      description:
        "Built a delivery management system and co-developed a vendor platform across React/TypeScript, Firebase and Flutter.",
      responsibilities: [
        "Built Apsel Dispatch (React/TypeScript, Firebase): a delivery management system with a 7-tab dispatcher dashboard and a mobile-first courier app, featuring live SLA tracking, rider assignment, route planning and CSV reports.",
        "Implemented a 10-status delivery lifecycle with code and photo proof of delivery, cancellations and returns, role-based access, and email (dispatcher) and phone OTP (courier) login.",
        "Co-developed the Apsel vendor platform: a 46-page React/TypeScript web dashboard (38 Firestore collections) and a 49-screen Flutter app covering order management, inventory, sales analytics, Paystack subscription billing, 3-tier KYC and WhatsApp commerce onboarding.",
        "Aligned Dispatch's data model with the web platform through shared Firestore collections and read-time joins, eliminating duplicated data, and validated the full delivery workflow against live Firestore data.",
        "On mobile, implemented Google Sign-In, FCM push notifications, offline caching with automatic retry of failed operations, and PDF/Excel transaction exports. On web, added operating hours, a map-based store location picker and scheduled support meetings.",
      ],
    },
    {
      company: "CLA 360",
      title: "Software Engineer",
      dateRange: "October 2025 - March 2026",
      description:
        "Built a Credential Wallet module and core frontend features for a scalable full-stack platform using React, Next.js and TypeScript.",
      responsibilities: [
        "Developed a Credential Wallet that enables students to securely store and verify academic documents and transcripts.",
        "Collaborated with cross-functional engineers to integrate the Credential Wallet as a standalone module within the wider CLA 360 platform.",
        "Built and maintained core frontend features for CLA 360 using React, Next.js, TypeScript, and Zustand, ensuring scalability and clean state management.",
      ],
    },
    {
      company: "Solfa Africa",
      title: "Software Engineer",
      dateRange: "Feb 2025 - Aug 2025",
      description:
        "Built scalable full-stack applications with Django and Next.js",
      responsibilities: [
        "Designed and maintained production-grade Django REST APIs with authentication, authorization and optimised database queries.",
        "Built a scalable Next.js frontend using SSR/SSG for performance, modular components for maintainability and responsive design for multi-device accessibility.",
        "Integrated frontend and backend services, reducing response times through query optimisation, and wrote unit and integration tests to keep the API stable and prevent regressions.",
      ],
    },
    {
      company: "BOST Energies Limited Company",
      title: "IT Consultant",
      dateRange: "Oct 2024 - Apr 2025",
      description:
        "Deployed Microsoft Dynamics 365 and provided day-to-day IT support to staff and management.",
      responsibilities: [
        "Configured and deployed Microsoft Dynamics 365 and supported staff with navigation, data entry and day-to-day system usage.",
        "Provided IT technical support to staff and management, minimizing downtime.",
      ],
    },
    {
      company: "Omlac Group",
      title: "Web Developer",
      dateRange: "Mar 2024 - Nov 2024",
      description: "Developed responsive React-based web applications",
      responsibilities: [
        "Engineered and deployed a responsive React-based company website with optimized performance",
        "Integrated third-party email APIs for secure contact form submissions",
        "Collaborated with stakeholders to align UI/UX with branding goals",
      ],
    },
  ] satisfies ExperienceEntry[],

  education: [
    {
      school: "Ashesi University",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2021 - 2024",
      achievements: [
        "MasterCard Foundation Scholar",
        "Dean's List (September 2021 - April 2022)",
        "Completed capstone project on Computer Vision for Activity Recognition",
      ],
    },
  ],
};
