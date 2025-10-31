export const siteConfig = {
  name: "Swallieu Dawud",
  title: "Software Engineer",
  tagline: "Building Digital Solutions That Matter",
  description:
    "Portfolio website of Swallieu Dawud - Full Stack Developer specializing in MERN stack and modern web technologies",

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
    "I'm a passionate Software Engineer and recent Computer Science graduate from Ashesi University with hands-on experience building scalable full-stack applications. I specialize in the MERN stack and modern web technologies, with a strong foundation in backend API development, frontend architecture, and cloud deployment. My work spans from building local service marketplaces to cultural media platforms, always with a focus on creating meaningful solutions that bridge technology and real-world needs.",

  // Reorganized skills by category
  skillCategories: {
    frontend: {
      title: "Frontend Development",
      icon: "code",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "HTML5/CSS3",
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
        "Python",
        "REST APIs",
        "GraphQL",
        "JWT Authentication",
        "Socket.io",
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
        "MongoDB",
        "MySQL",
        "Git/GitHub",
        "Jest",
        "Postman",
        "Websockets",
        "Firebase",
        "Cloudinary",
        "Flutter/Dart",
      ],
    },
  },

  // Legacy skills array (for backward compatibility)
  skills: [
    "JavaScript",
    "Python",
    "Java",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Django",
    "MongoDB",
    "MySQL",
    "Flutter/Dart",
    "Socket.io",
    "JWT",
    "REST APIs",
  ],

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
      company: "Solfa Africa",
      title: "Software Engineer",
      dateRange: "Feb 2025 - Aug 2025",
      description:
        "Built scalable full-stack applications with Django and Next.js",
      responsibilities: [
        "Designed RESTful Django APIs with well-structured data models, authentication and optimized query performance",
        "Built scalable frontend in Next.js using SSR/SSG for performance, modular components for maintainability, and responsive design",
        "Integrated frontend and backend services seamlessly with comprehensive testing and optimization",
      ],
    },
    {
      company: "BOST Company Limited",
      title: "IT Consultant",
      dateRange: "Oct 2024 - Jun 2025",
      description: "Provided technical support and system deployment",
      responsibilities: [
        "Configured and deployed Microsoft Dynamics 365, assisting employees in navigation and system usage",
        "Provided day-to-day IT technical support to staff and management ensuring minimal downtime",
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
  ],

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
