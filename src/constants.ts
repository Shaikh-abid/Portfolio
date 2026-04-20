export const PROFILE = {
  name: "AbidAli Shaikh",
  title: "Full Stack Software Engineer | MERN | TypeScript | Cloud",
  summary: "Full Stack Developer specializing in the MERN stack, TypeScript, Redis, Docker, SQL and NoSQL Databases and modern scalable architecture. With a track record of translating complex requirements into high-performance web and mobile applications , I focus on clean system design  and building intuitive, production-grade SaaS products.",
  email: "abidshaikhccc@gmail.com",
  phone: "+91 87673 09420",
  resumeUrl: "https://drive.google.com/file/d/1cRjtIlV2Tn0q4qfOmip_Nf5DMGjM4XvR/view?usp=drivesdk",
  links: {
    linkedin: "https://www.linkedin.com/in/abidali-shaikh-2422b5259",
    github: "https://github.com/Shaikh-abid",
  }
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
    excerpt: "Exploring architectural patterns for building high-performance Node.js backends and React frontends that scale to thousands of users.",
    content: `
      Scalability is a critical factor for any modern web application. In this blog, we dive into how to effectively scale a MERN stack application.
      
      ### 1. Database Optimization
      Using MongoDB effectively involves proper indexing and sharding when necessary. Always analyze your query patterns.
      
      ### 2. Backend Scalability
      Node.js is great for I/O bound tasks, but CPU intensive tasks can block the event loop. Use microservices or worker threads to handle heavy computation.
      
      ### 3. Frontend Performance
      React applications should utilize memoization and lazy loading to ensure a snappy user experience as the dashboard grows in complexity.
    `,
    tags: ["MERN", "Scalability", "Node.js"]
  },
  {
    id: "ai-llm-integration",
    title: "The Future of AI/LLM Integration in Web Apps",
    date: "April 10, 2026",
    excerpt: "A deep dive into integrating Agentic LLM systems into modern full-stack workflows using tRPC and TypeScript.",
    content: `
      Artificial Intelligence is no longer just a buzzword; it's a core component of modern software engineering.
      
      Integrating LLMs like GPT-4 or Gemini into your web apps can provide personalized experiences and automate complex workflows. Using tRPC ensures type safety across your AI integrations, making development smoother.
      
      Key considerations include prompt engineering, token management, and providing meaningful feedback to the user during long-running tasks.
    `,
    tags: ["AI", "LLM", "tRPC", "TypeScript"]
  },
  {
    id: "lighthouse-perfection",
    title: "Achieving 100% Google Lighthouse Scores",
    date: "April 05, 2026",
    excerpt: "Technical strategies for optimizing Next.js performance, accessibility, and SEO to achieve perfect auditing scores.",
    content: `
      Performance isn't just a metric; it's a feature. Achieving a 100/100 Lighthouse score requires a multi-faceted approach.
      
      - **Image Optimization**: Use Next.js Image component for automatic resizing and format conversion.
      - **Asset Loading**: Minimize JavaScript execution on the main thread.
      - **Accessibility**: Use semantic HTML and ensure proper contrast ratios.
      
      A perfect score significantly improves SEO and user retention.
    `,
    tags: ["Performance", "Next.js", "SEO"]
  }
];

export const PROJECTS = [
  {
    id: "leetcode-clone",
    title: "Full-Stack LeetCode Clone | MERN Stack",
    shortDescription: "Architected a scalable competitive programming platform with real-time code execution.",
    description: "LeetCode Clone is a high-performance competitive programming platform designed to provide a seamless experience for developers to practice coding in multiple languages. It features real-time code execution, AI-powered insights, and a robust user community system.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Piston API", "JWT", "Tailwind CSS"],
    features: [
      "Real-time code execution for 4+ languages",
      "AI-powered code reviewer using Hugging Face API",
      "Production-grade JWT authentication",
      "Interactive coding editor with syntax highlighting",
      "Dynamic problem sets and submission history"
    ],
    challenges: [
      "Securing the code execution environment to prevent malicious scripts.",
      "Optimizing real-time synchronization between the client and server.",
      "Handling high-volume concurrent requests during heavy traffic."
    ],
    learnings: [
      "Gained deep knowledge of containerized code execution.",
      "Improved ability to implement complex OAuth flows.",
      "Mastered global state management with React Context API."
    ],
    liveLink: "https://leetcode-frontend-udp9.onrender.com/",
    githubLink: "https://github.com/Shaikh-abid/leetcode-clone",
  },
  {
    id: "lms",
    title: "Full-Stack Learning Management System (LMS)",
    shortDescription: "Built a scalable online learning platform with RBAC and progress tracking.",
    description: "A comprehensive LMS platform focused on course management and student growth. It provides instructors with tools to create multimedia-rich courses while giving students a structured environment to track their academic progress.",
    techStack: ["Next.js", "TypeScript", "Zustand", "Cloudinary", "Prisma", "PostgreSQL"],
    features: [
      "Role-based authentication (RBAC) for instructors and students",
      "Dynamic multimedia course creation tool",
      "Real-time student progress tracking and video markers",
      "Integrated e-commerce module for course enrollments",
      "Automated certificate generation upon completion"
    ],
    challenges: [
      "Managing complex state for video progress synchronization.",
      "Implementing efficient media uploads and storage strategies.",
      "Optimizing database queries for large-scale user datasets."
    ],
    learnings: [
      "Advanced usage of Zustand for complex state management.",
      "Deep dive into serverless architectures with Next.js.",
      "Implemented secure stripe-like payment integrations."
    ],
    liveLink: "https://lms-frontend-ys2o.onrender.com/",
    githubLink: "https://github.com/Shaikh-abid/lms-repo",
  },
  {
    id: "nhai-dashboard",
    title: "NHAI Data Visualization Dashboard",
    shortDescription: "Data visualization dashboard enabling data-driven decision-making for NHAI.",
    description: "A specialized project for the National Highways Authority of India, focused on visualizing geographic and analytical data to assist in high-level decision-making for infrastructure development.",
    techStack: ["Next.js", "D3.js", "PostGIS", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Interactive geospatial map features",
      "Real-time data synchronization with government APIs",
      "Comprehensive analytical charts for road health monitoring",
      "Secure administrative controls for data specialists",
      "Optimized load speeds for high-volume data pipelines"
    ],
    challenges: [
      "Integrating disparate government data sources safely.",
      "Visualizing multi-layered geographic data without lag.",
      "Ensuring extreme data integrity for critical decision reports."
    ],
    learnings: [
      "Mastered geographic data handling with PostGIS.",
      "Improved experience in building enterprise-grade dashboards.",
      "Enhanced cross-functional collaboration skills."
    ],
    liveLink: "https://nhai.rasta360.com/",
  },
  {
    id: "markitify",
    title: "Markitify Media Website Redevelopment",
    shortDescription: "Modernized company website with 100% Google Lighthouse score.",
    description: "A complete overhaul and modernization of a media agency's digital presence. Focused on extreme performance, pixel-perfect design, and highly interactive user components.",
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel", "Vite"],
    features: [
      "Redeveloped with modern Next.js architecture",
      "Achieved 100% Google Lighthouse performance score",
      "High-fidelity Figma-to-code translation",
      "Advanced motion design and page transitions",
      "Zero downtime during server migration"
    ],
    challenges: [
      "Maintaining brand consistency while modernizing design language.",
      "Achieving smooth animations without affecting performance.",
      "Ensuring pixel-perfect responsiveness across all devices.",
      "Optimizing load times for a better user experience."
    ],
    learnings: [
      "Mastered efficient UI composition with React and Tailwind CSS.",
      "Improved understanding of animation principles using Framer Motion.",
      "Enhanced deployment workflow using Vercel and Vite integration.",
      "Developed better practices for responsive and scalable frontend design."
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
    role: "Software Engineer Consultant",
    company: "AlphaDeveloper's",
    period: "Feb 2026 – Present",
    tag: "Latest",
    description: "Contributed to an Agentic LLM-based system using Node.js, TypeScript, tRPC, and PostgreSQL. Containerized workflows with Docker and maintained a React Native mobile application."
  },
  {
    role: "Full Stack Developer Intern",
    company: "AI Unika Technologies Pvt. Ltd.",
    period: "Jun 2025 – Dec 2025",
    description: "Architected a NHAI data visualization dashboard. Engineered scalable backend modules and implemented interactive geospatial map features in Next.js, improving engagement by 40%."
  },
  {
    role: "Full Stack Developer Intern",
    company: "Markitify Media",
    period: "Sep 2024 – Jan 2025",
    description: "Led the migration of the company website to Next.js. Translated high-fidelity Figma designs into pixel-perfect components and achieved a 100% Google Lighthouse score."
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Business Administration (Computer Application)",
    institution: "Savitribai Phule Pune University",
    location: "Pune | Maharashtra",
    period: "CGPA: 8.91 / 10.0",
    description: "Completed Bachelor of Business Administration (Computer Application) with high academic standing, focusing on full-stack development and computer applications."
  },
  {
    degree: "HSC",
    institution: "Maharashtra State Board",
    location: "Pune | Maharashtra",
    period: "Percentage: 70%",
    description: "Completed Higher Secondary Certificate with high academic standing, focusing on full-stack development and computer applications."
  },
  {
    degree: "SSC",
    institution: "Maharashtra State Board",
    location: "Pune | Maharashtra",
    period: "Percentage: 58%",
    description: "Completed Secondary School Certificate with high academic standing, focusing on full-stack development and computer applications."
  }
];
