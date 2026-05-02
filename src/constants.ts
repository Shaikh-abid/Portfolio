export const PROFILE = {
  name: "AbidAli Shaikh",
  title: "Full Stack Software Engineer | MERN | TypeScript | Cloud",
  summary:
    "Full Stack Developer specializing in the MERN stack, TypeScript, Redis, Docker, SQL and NoSQL Databases and modern scalable architecture. With a track record of translating complex requirements into high-performance web and mobile applications , I focus on clean system design  and building intuitive, production-grade SaaS products.",
  email: "abidshaikhccc@gmail.com",
  phone: "+91 87673 09420",
  resumeUrl:
    "https://drive.google.com/file/d/1sSk8yMSzIHMHOZ3inE7g6EaUNCuqMM7p/view?usp=sharing",
  links: {
    linkedin: "https://www.linkedin.com/in/abidali-shaikh-2422b5259",
    github: "https://github.com/Shaikh-abid",
  },
};

export const SECTIONS = [
  { id: "introduction", label: "Introduction" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills & Tools" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
  { id: "blogs", label: "Blogs" },
];

export const BLOGS = [
  {
    id: "mern-stack-scalability",
    title: "Mastering MERN Stack Scalability",
    date: "April 15, 2026",
    excerpt:
      "Exploring proven architectural patterns and performance strategies to build MERN applications that scale from hundreds to millions of users.",
    content: `
Mastering MERN Stack Scalability

What happens when your MERN application suddenly grows from 100 users to 100,000? Slow APIs, crashing servers, and frustrated users. Scalability is not something you add later — it must be designed from the beginning.

In this article, we explore practical and production-ready strategies to scale a MERN stack application. From MongoDB optimization and Node.js backend performance to React frontend efficiency and infrastructure scaling, this guide will help you build applications that grow confidently with your users.

  (sub heading) 1. Database Optimization (MongoDB)

Database performance is often the first bottleneck in growing applications.

- Use proper indexing based on real query patterns.
- Analyze slow queries using MongoDB explain().
- Design schemas based on access patterns (embed when reads dominate, reference when data grows large).
- Use sharding for very large datasets.
- Introduce caching with Redis to reduce repeated database hits.

(sub heading) 2. Backend Scalability (Node.js and Express)

Node.js handles I/O operations efficiently, but CPU-heavy operations can block the event loop.

- Avoid blocking the event loop with heavy computations.
- Use worker threads or background job queues for CPU-intensive tasks.
- Implement clustering to utilize multiple CPU cores.
- Deploy behind a load balancer like NGINX or a cloud load balancer.
- Use stateless authentication with JWT to allow horizontal scaling.
- Apply rate limiting to protect APIs from abuse.

(sub heading) 3. Frontend Performance (React)

As applications grow, frontend optimization becomes critical.

- Implement code splitting and lazy loading to reduce bundle size.
- Use memoization techniques such as React.memo and useMemo.
- Optimize re-renders in large dashboards.
- Use virtualization libraries for rendering large lists.
- Serve static assets via CDN for faster global performance.

(sub heading) 4. Infrastructure and Monitoring

Scalability is also about infrastructure decisions.

- Containerize applications using Docker.
- Use orchestration tools like Kubernetes for automated scaling.
- Enable cloud auto-scaling.
- Monitor performance using tools such as PM2, New Relic, or MongoDB Atlas monitoring.

(sub heading) Final Thoughts

Scalability is a mindset, not a feature. Every architectural decision — from database indexing to frontend rendering — affects how well your application handles growth. Build with scale in mind from day one.

If you are building a MERN application, take time to evaluate your current architecture. Optimize early, monitor continuously, and design systems that grow with your users. Share this article with your fellow developers and start building scalable applications today.
  `,
    tags: [
      "MERN",
      "Scalability",
      "Node.js",
      "MongoDB",
      "React",
      "Architecture",
    ],
  },
];

export const PROJECTS = [
  {
    id: "leetcode-clone",
    title: "Full-Stack LeetCode Clone | MERN Stack",
    shortDescription:
      "Architected a scalable competitive programming platform with real-time code execution.",
    description:
      "LeetCode Clone is a high-performance competitive programming platform designed to provide a seamless experience for developers to practice coding in multiple languages. It features real-time code execution, AI-powered insights, and a robust user community system.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Piston API",
      "JWT",
      "Tailwind CSS",
    ],
    features: [
      "Real-time code execution for 4+ languages",
      "AI-powered code reviewer using Hugging Face API",
      "Production-grade JWT authentication",
      "Interactive coding editor with syntax highlighting",
      "Dynamic problem sets and submission history",
    ],
    challenges: [
      "Securing the code execution environment to prevent malicious scripts.",
      "Optimizing real-time synchronization between the client and server.",
      "Handling high-volume concurrent requests during heavy traffic.",
    ],
    learnings: [
      "Gained deep knowledge of containerized code execution.",
      "Improved ability to implement complex OAuth flows.",
      "Mastered global state management with React Context API.",
    ],
    liveLink: "https://leetcode-frontend-udp9.onrender.com/",
    githubLink: "https://github.com/Shaikh-abid/leetcode-clone",
  },
  {
    id: "lms",
    title: "Full-Stack Learning Management System (LMS)",
    shortDescription:
      "Built a scalable online learning platform with RBAC and progress tracking.",
    description:
      "A comprehensive LMS platform focused on course management and student growth. It provides instructors with tools to create multimedia-rich courses while giving students a structured environment to track their academic progress.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "Cloudinary",
      "Prisma",
      "PostgreSQL",
    ],
    features: [
      "Role-based authentication (RBAC) for instructors and students",
      "Dynamic multimedia course creation tool",
      "Real-time student progress tracking and video markers",
      "Integrated e-commerce module for course enrollments",
      "Automated certificate generation upon completion",
    ],
    challenges: [
      "Managing complex state for video progress synchronization.",
      "Implementing efficient media uploads and storage strategies.",
      "Optimizing database queries for large-scale user datasets.",
    ],
    learnings: [
      "Advanced usage of Zustand for complex state management.",
      "Deep dive into serverless architectures with Next.js.",
      "Implemented secure stripe-like payment integrations.",
    ],
    liveLink: "https://lms-frontend-ys2o.onrender.com/",
    githubLink: "https://github.com/Shaikh-abid/lms-repo",
  },
  {
    id: "rewrite-ai",
    title: "Rewrite-AI | AI Message Rewriter",
    shortDescription:
      "Built a fast, AI-powered message rewriting tool to improve everyday communication with multiple tones and language support.",
    description:
      "Rewrite-AI is a lightweight and user-friendly AI tool designed to help users rewrite their messages instantly in different tones. It focuses on real-world communication problems like writing professional replies, apologies, or casual texts more effectively. The tool generates multiple high-quality variations while preserving the original meaning, making it practical for daily use.",
    techStack: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Google Gemini API",
      "Vercel",
    ],
    features: [
      "AI-powered message rewriting using Google Gemini",
      "Supports multiple tones like Professional, Casual, Friendly, Confident, Apology, Funny, and more",
      "Generates 3 unique variations for each input",
      "Built-in language translation (English and Hindi)",
      "Clean, modern UI with fast response time",
      "No login or authentication required (instant usage)",
    ],
    challenges: [
      "Ensuring consistent and structured AI responses using JSON schema",
      "Handling edge cases where AI response formatting fails",
      "Designing a clean and intuitive UI for non-technical users",
    ],
    learnings: [
      "Learned to integrate and optimize Google Gemini API effectively",
      "Improved prompt engineering for better tone accuracy",
      "Enhanced frontend UI/UX skills with modern design principles",
    ],
    liveLink: "https://rewrite-ai-omega.vercel.app/",
    githubLink: "https://github.com/Shaikh-abid/Rewrite-AI",
  },
  {
    id: "nhai-dashboard",
    title: "NHAI Data Visualization Dashboard",
    shortDescription:
      "Data visualization dashboard enabling data-driven decision-making for NHAI.",
    description:
      "A specialized project for the National Highways Authority of India, focused on visualizing geographic and analytical data to assist in high-level decision-making for infrastructure development.",
    techStack: ["Next.js", "Mapbox-gl", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Interactive geospatial map features",
      "Real-time data synchronization with government APIs",
      "Comprehensive analytical charts for road health monitoring",
      "Secure administrative controls for data specialists",
      "Optimized load speeds for high-volume data pipelines",
    ],
    challenges: [
      "Integrating disparate government data sources safely.",
      "Visualizing multi-layered geographic data without lag.",
      "Ensuring extreme data integrity for critical decision reports.",
    ],
    learnings: [
      "Mastered geographic data handling with PostGIS.",
      "Improved experience in building enterprise-grade dashboards.",
      "Enhanced cross-functional collaboration skills.",
    ],
    liveLink: "https://nhai.rasta360.com/",
  },
  {
    id: "markitify",
    title: "Markitify Media Website Redevelopment",
    shortDescription:
      "Modernized company website with 100% Google Lighthouse score.",
    description:
      "A complete overhaul and modernization of a media agency's digital presence. Focused on extreme performance, pixel-perfect design, and highly interactive user components.",
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel", "Vite"],
    features: [
      "Redeveloped with modern Next.js architecture",
      "Achieved 100% Google Lighthouse performance score",
      "High-fidelity Figma-to-code translation",
      "Advanced motion design and page transitions",
      "Zero downtime during server migration",
    ],
    challenges: [
      "Maintaining brand consistency while modernizing design language.",
      "Achieving smooth animations without affecting performance.",
      "Ensuring pixel-perfect responsiveness across all devices.",
      "Optimizing load times for a better user experience.",
    ],
    learnings: [
      "Mastered efficient UI composition with React and Tailwind CSS.",
      "Improved understanding of animation principles using Framer Motion.",
      "Enhanced deployment workflow using Vercel and Vite integration.",
      "Developed better practices for responsive and scalable frontend design.",
    ],
    liveLink: "https://www.markitifymedia.com/",
  },
];

export const SKILLS = [
  { name: "JavaScript", icon: "code" },
  { name: "TypeScript", icon: "code-2" },
  { name: "Java", icon: "code" },
  { name: "Python", icon: "code" },
  { name: "React.js", icon: "atom" },
  { name: "Next.js", icon: "cpu" },
  { name: "Node.js", icon: "server" },
  { name: "Express.js", icon: "database" },
  { name: "MongoDB", icon: "hard-drive" },
  { name: "PostgreSQL", icon: "database" },
  { name: "Tailwind CSS", icon: "wind" },
  { name: "Framer Motion", icon: "activity" },
  { name: "Docker", icon: "container" },
  { name: "Vercel", icon: "upload-cloud" },
  { name: "Git", icon: "git-branch" },
  { name: "Redux", icon: "layers" },
  { name: "Zustand", icon: "layers" },
  { name: "TanStack Query", icon: "layers" },
  { name: "RESTful APIs", icon: "layers" },
  { name: "Socket.io", icon: "layers" },
  { name: "Microservices Architecture", icon: "layers" },
  { name: "Prisma ORM", icon: "layers" },
  { name: "JWT", icon: "layers" },
  { name: "OAuth 2.0", icon: "layers" },
  { name: "RBAC", icon: "layers" },
  { name: "Session Management", icon: "layers" },
  { name: "XSS/CSRF Prevention", icon: "layers" },
];

export const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "AlphaDeveloper's",
    period: "Feb 2026 – Present",
    tag: "Latest",
    description:
      "Contributed to an Agentic LLM-based system using Node.js, TypeScript, tRPC, and PostgreSQL. Containerized workflows with Docker and maintained a React Native mobile application.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "AI Unika Technologies Pvt. Ltd.",
    period: "Jun 2025 – Dec 2025",
    description:
      "Architected a NHAI data visualization dashboard. Engineered scalable backend modules and implemented interactive geospatial map features in Next.js, improving engagement by 40%.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "Markitify Media",
    period: "Sep 2024 – Jan 2025",
    description:
      "Led the migration of the company website to Next.js. Translated high-fidelity Figma designs into pixel-perfect components and achieved a 100% Google Lighthouse score.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Business Administration (Computer Application)",
    institution: "Savitribai Phule Pune University",
    location: "Pune | Maharashtra",
    period: "CGPA: 8.91 / 10.0",
    description:
      "Completed Bachelor of Business Administration (Computer Application) with high academic standing, focusing on full-stack development and computer applications.",
  },
  {
    degree: "HSC",
    institution: "Maharashtra State Board",
    location: "Pune | Maharashtra",
    period: "Percentage: 70%",
    description:
      "Completed Higher Secondary education with a strong academic foundation, developing analytical and problem-solving skills along with an early interest in computer applications and technology.",
  },
  {
    degree: "SSC",
    institution: "Maharashtra State Board",
    location: "Pune | Maharashtra",
    period: "Percentage: 58%",
    description:
      "Completed Secondary education with a foundational understanding of core subjects, developing discipline, problem-solving abilities, and an early interest in technology.",
  },
];
