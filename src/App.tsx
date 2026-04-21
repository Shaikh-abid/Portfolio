/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu, X, Search, Moon, Sun, Github, ExternalLink,
  Mail, ChevronRight, ChevronLeft, Music2, Clock,
  Loader2, Globe, Cpu, Layout, Terminal, Code2,
  Wind, Component, Grid, Activity, Atom, Layers,
  Server, Database, HardDrive, Cloud, Box, UploadCloud,
  GitBranch, Package, Volume2, ArrowLeft, Send,
  Check,
  Copy,
  Heart
} from "lucide-react";
import { PROFILE, SECTIONS, PROJECTS, SKILLS, EXPERIENCE, EDUCATION, BLOGS } from "./constants";
import ContactSection from "./ContactSection";

const ICON_MAP: Record<string, any> = {
  code: Code2,
  layout: Layout,
  terminal: Terminal,
  "code-2": Code2,
  wind: Wind,
  component: Component,
  grid: Grid,
  activity: Activity,
  atom: Atom,
  layers: Layers,
  cpu: Cpu,
  server: Server,
  database: Database,
  "hard-drive": HardDrive,
  cloud: Cloud,
  container: Box,
  "upload-cloud": UploadCloud,
  "git-branch": GitBranch,
  github: Github,
  mail: Mail,
  package: Package,
};

export default function App() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [theme, setTheme] = useState("dark");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      localStorage.setItem("theme", theme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  };

  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId);
  const selectedBlog = BLOGS.find(b => b.id === selectedBlogId);

  const renderSection = () => {
    if (selectedProjectId && selectedProject) {
      return (
        <motion.div
          key="project-details"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-10"
        >
          <button
            onClick={() => setSelectedProjectId(null)}
            className="flex items-center gap-2 text-portfolio-secondary hover:text-portfolio-primary transition-colors text-sm font-medium cursor-pointer"
          >
            <ArrowLeft size={16} /> Back to projects
          </button>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-portfolio-primary tracking-tight leading-tight">
              {selectedProject.title}
            </h1>
            <p className="text-xl text-portfolio-primary font-medium opacity-90">{selectedProject.shortDescription}</p>
          </div>

          <p className="text-lg text-portfolio-secondary leading-relaxed font-light">
            {selectedProject.description}
          </p>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-portfolio-primary uppercase tracking-[0.2em]">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {selectedProject.techStack.map((tech, i) => (
                <span key={i} className="bg-secondary/60 border border-portfolio px-3 py-1 rounded-md text-xs font-medium text-portfolio-secondary">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-portfolio-primary tracking-tight">Features</h3>
              <ul className="space-y-3">
                {selectedProject.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-sm text-portfolio-secondary leading-relaxed">
                    <span className="text-brand">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-portfolio-primary tracking-tight">Challenges</h3>
              <ul className="space-y-3">
                {selectedProject.challenges.map((challenge, i) => (
                  <li key={i} className="flex gap-3 text-sm text-portfolio-secondary leading-relaxed">
                    <span className="text-brand">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-portfolio-primary tracking-tight">Learnings</h3>
              <ul className="space-y-3">
                {selectedProject.learnings.map((learning, i) => (
                  <li key={i} className="flex gap-3 text-sm text-portfolio-secondary leading-relaxed">
                    <span className="text-brand">•</span>
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-portfolio-primary tracking-tight">Links</h3>
              <div className="flex gap-4">
                <a
                  href={selectedProject.liveLink}
                  className="flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:brightness-110 transition-all cursor-pointer"
                >
                  Live <ExternalLink size={14} />
                </a>
                {
                  selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      className="flex items-center gap-2 bg-secondary border border-portfolio text-portfolio-primary px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-secondary/80 transition-all cursor-pointer"
                    >
                      Github <ExternalLink size={14} />
                    </a>
                  )
                }
              </div>
            </div>
          </div>
        </motion.div>
      );
    }

    if (selectedBlogId && selectedBlog) {
      return (
        <motion.div
          key="blog-details"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-10"
        >
          <button
            onClick={() => setSelectedBlogId(null)}
            className="flex items-center gap-2 text-portfolio-secondary hover:text-portfolio-primary transition-colors text-sm font-medium cursor-pointer"
          >
            <ArrowLeft size={16} /> Back to blogs
          </button>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-portfolio-primary tracking-tight leading-tight">
              {selectedBlog.title}
            </h1>
            <div className="flex items-center gap-3 text-portfolio-secondary text-sm">
              <Clock size={14} />
              <span>{selectedBlog.date}</span>
              <span className="opacity-30">•</span>
              <div className="flex gap-2">
                {selectedBlog.tags.map(tag => (
                  <span key={tag} className="text-brand">#{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <article className="prose prose-zinc dark:prose-invert max-w-none text-portfolio-secondary font-light leading-relaxed space-y-4 whitespace-pre-wrap">
            {selectedBlog.content.split('\n').map((line, index, array) => {
              if (line.includes('(sub heading)')) {
                const parts = line.split('(sub heading)');
                return (
                  <span key={index}>
                    {parts[0]}
                    <span className="font-bold text-brand">{parts[1].trimStart()}</span>
                    {index !== array.length - 1 && "\n"}
                  </span>
                );
              }
              return (
                <span key={index}>
                  {line}
                  {index !== array.length - 1 && "\n"}
                </span>
              );
            })}
          </article>

          <div className="pt-12 border-t border-portfolio flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white font-bold">A</div>
              <div>
                <p className="text-sm font-bold text-portfolio-primary">{PROFILE.name}</p>
                <p className="text-[10px] text-portfolio-secondary uppercase tracking-widest leading-none mt-0.5">Author</p>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }

    switch (activeSection) {
      case "introduction":
        return (
          <motion.div
            key="introduction"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-portfolio-primary tracking-tight">{PROFILE.name}</h1>
              <h2 className="text-4xl font-bold text-portfolio-secondary tracking-tight">{PROFILE.title}</h2>
            </div>
            <p className="text-xl text-portfolio-secondary leading-relaxed max-w-3xl font-light">
              {PROFILE.summary}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-brand hover:brightness-110 text-white px-6 py-3 rounded-lg font-medium transition-all cursor-pointer"
              >
                Get Resume <ExternalLink size={18} />
              </a>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 border border-portfolio hover:border-zinc-400 text-portfolio-primary px-6 py-3 rounded-lg font-medium transition-all cursor-pointer relative overflow-hidden group"
              >
                <div className="flex items-center gap-2">
                  {isCopied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                  <span>{isCopied ? "Copied!" : "Copy Mail"}</span>
                </div>
                {isCopied && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    className="absolute inset-0 bg-green-500/20 rounded-full"
                  />
                )}
              </button>
            </div>
            <div className="pt-12 flex justify-end">
              <button
                onClick={() => setActiveSection("about")}
                className="flex items-center gap-2 text-portfolio-secondary hover:text-portfolio-primary transition-colors cursor-pointer"
              >
                About Me <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        );

      case "about":
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-portfolio-primary tracking-tight">About {PROFILE.name.split(' ')[0]}</h1>
              <h2 className="text-3xl font-bold text-portfolio-secondary tracking-tight">Software Engineer | MERN | Cloud</h2>
            </div>
            <div className="space-y-6 text-lg text-portfolio-secondary leading-relaxed max-w-3xl font-light">
              <p>
                I am a Software Development Engineer deeply invested in crafting scalable, robust web applications from the database architecture to the front-end user experience. My engineering journey includes completing multiple hands-on internships where I engineered high-volume backend modules and translated high-fidelity designs into pixel-perfect, highly responsive user interfaces
              </p>
              <p>
                My technical foundation is rooted in the MERN stack, TypeScript, and PostgreSQL, complemented by modern tools like Prisma ORM and Docker. Whether I am designing complex database schemas for organizational tools, implementing role-based access control (RBAC) for comprehensive learning platforms , or tackling complex algorithmic challenges to ensure optimal system performance, I thrive on solving hard engineering problems.
              </p>
              <p>
                I place a strong emphasis on clean architecture and system design, drawing inspiration from modern, high-quality SaaS products that prioritize exceptional UI/UX. From achieving a 100% Google Lighthouse score through advanced Next.js server-side rendering optimizations to deploying containerized workflows that improve team reliability, I build products that are not just functional, but highly performant and user-centric. I am currently seeking opportunities to bring my passion for product development and continuous learning to a dynamic engineering team.
              </p>
            </div>
            <div className="pt-12 flex justify-between text-portfolio-secondary">
              <button
                onClick={() => setActiveSection("introduction")}
                className="flex items-center gap-2 hover:text-portfolio-primary transition-colors cursor-pointer"
              >
                <ChevronLeft size={18} /> Introduction
              </button>
              <button
                onClick={() => setActiveSection("projects")}
                className="flex items-center gap-2 hover:text-portfolio-primary transition-colors cursor-pointer"
              >
                Projects <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        );

      case "projects":
        return (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-portfolio-primary tracking-tight">Projects</h1>
              <h2 className="text-3xl font-bold text-portfolio-secondary tracking-tight">Recent Work & Creative Solutions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map((project, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedProjectId(project.id)}
                  className="bg-secondary/40 border border-portfolio p-6 rounded-xl hover:border-brand/40 transition-all group backdrop-blur-sm cursor-pointer"
                >
                  <h3 className="text-xl font-bold text-portfolio-primary mb-3 group-hover:text-brand transition-colors tracking-tight">{project.title}</h3>
                  <p className="text-portfolio-secondary mb-6 line-clamp-3 text-sm font-light leading-relaxed">{project.shortDescription}</p>
                  <button className="text-sm font-medium text-portfolio-secondary group-hover:text-portfolio-primary transition-colors inline-block border-b border-transparent group-hover:border-brand pb-0.5">
                    View Project Details
                  </button>
                </div>
              ))}
            </div>
            <div className="pt-12 flex justify-between text-portfolio-secondary">
              <button
                onClick={() => setActiveSection("about")}
                className="flex items-center gap-2 hover:text-portfolio-primary transition-colors cursor-pointer"
              >
                <ChevronLeft size={18} /> About
              </button>
              <button
                onClick={() => setActiveSection("skills")}
                className="flex items-center gap-2 hover:text-portfolio-primary transition-colors cursor-pointer"
              >
                Skills & Tools <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        );

      case "skills":
        return (
          <motion.div
            key="skills"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-portfolio-primary tracking-tight">Skills & Tools</h1>
              <h2 className="text-3xl font-bold text-portfolio-secondary tracking-tight">A specialized toolkit for modern engineering.</h2>
            </div>
            <p className="text-lg text-portfolio-secondary max-w-3xl font-light leading-relaxed">
              I specialize in building scalable web applications using the MERN stack and modern cloud infrastructures. My focus is on producing efficient, maintainable, and highly performant code.
            </p>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill, idx) => {
                const Icon = ICON_MAP[skill.icon] || Globe;
                return (
                  <div key={idx} className="flex items-center gap-2 bg-secondary/50 border border-portfolio px-4 py-2 rounded-lg text-portfolio-primary hover:border-brand/40 transition-all cursor-default group backdrop-blur-sm">
                    <Icon size={18} className="group-hover:text-brand transition-colors text-portfolio-secondary" />
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                );
              })}
            </div>
            <div className="pt-12 flex justify-between text-portfolio-secondary">
              <button
                onClick={() => setActiveSection("projects")}
                className="flex items-center gap-2 hover:text-portfolio-primary transition-colors cursor-pointer"
              >
                <ChevronLeft size={18} /> Projects
              </button>
              <button
                onClick={() => setActiveSection("experience")}
                className="flex items-center gap-2 hover:text-portfolio-primary transition-colors cursor-pointer"
              >
                Experience <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        );

      case "experience":
        return (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-portfolio-primary tracking-tight">Experience</h1>
              <h2 className="text-3xl font-bold text-portfolio-secondary tracking-tight">Building impactful software solutions.</h2>
            </div>
            <div className="relative pl-8 space-y-12 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[1px] before:bg-zinc-800">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-brand border-4 bg-primary border-primary z-10" />
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-portfolio-primary tracking-tight">{exp.role} · {exp.company}</h3>
                    {exp.tag && <span className="bg-brand/20 text-brand text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">{exp.tag}</span>}
                  </div>
                  <p className="text-xs font-mono text-portfolio-secondary mb-4">{exp.period}</p>
                  <p className="text-portfolio-secondary leading-relaxed max-w-2xl text-sm font-light">{exp.description}</p>
                </div>
              ))}
            </div>
            <div className="pt-12 flex justify-between text-portfolio-secondary">
              <button
                onClick={() => setActiveSection("skills")}
                className="flex items-center gap-2 hover:text-portfolio-primary transition-colors cursor-pointer"
              >
                <ChevronLeft size={18} /> Skills
              </button>
              <button
                onClick={() => setActiveSection("education")}
                className="flex items-center gap-2 hover:text-portfolio-primary transition-colors cursor-pointer"
              >
                Education <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        );

      case "education":
        return (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-portfolio-primary tracking-tight">Education</h1>
              <h2 className="text-3xl font-bold text-portfolio-secondary tracking-tight">Academic Foundations</h2>
            </div>
            <div className="relative pl-8 space-y-12 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[1px] before:bg-zinc-800">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-brand border-4 bg-primary border-primary z-10" />
                  <h3 className="text-xl font-bold text-portfolio-primary mb-1 tracking-tight">{edu.degree}</h3>
                  <p className="text-portfolio-secondary font-medium text-sm mb-1">{edu.institution} · {edu.location}</p>
                  <p className="text-xs font-mono text-brand mb-4">{edu.period}</p>
                  <p className="text-portfolio-secondary leading-relaxed max-w-2xl text-sm font-light">{edu.description}</p>
                </div>
              ))}
            </div>
            <div className="pt-12 flex justify-between text-portfolio-secondary">
              <button
                onClick={() => setActiveSection("experience")}
                className="flex items-center gap-2 hover:text-portfolio-primary transition-colors cursor-pointer"
              >
                <ChevronLeft size={18} /> Experience
              </button>
              <button
                onClick={() => setActiveSection("contact")}
                className="flex items-center gap-2 hover:text-portfolio-primary transition-colors cursor-pointer"
              >
                Contact <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        );

      case "contact":
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-portfolio-primary tracking-tight">Let's Connect</h1>
              <h2 className="text-3xl font-bold text-portfolio-secondary tracking-tight">Skip the back-and-forth. Grab a time on my calendar below and let's chat about your next project or role!</h2>
            </div>
            <ContactSection />
            <div className="pt-12 flex justify-between text-portfolio-secondary">
              <button
                onClick={() => setActiveSection("education")}
                className="flex items-center gap-2 hover:text-portfolio-primary transition-colors cursor-pointer"
              >
                <ChevronLeft size={18} className="" /> Education
              </button>
              <button
                onClick={() => setActiveSection("blogs")}
                className="flex items-center gap-2 hover:text-portfolio-primary transition-colors cursor-pointer"
              >
                Blogs <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        );

      case "blogs":
        return (
          <motion.div
            key="blogs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-portfolio-primary tracking-tight">Blogs</h1>
              <h2 className="text-3xl font-bold text-portfolio-secondary tracking-tight">Sharing thoughts on code and craft.</h2>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {BLOGS.map((blog, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedBlogId(blog.id)}
                  className="group bg-secondary/30 border border-portfolio p-8 rounded-2xl hover:border-brand/40 transition-all cursor-pointer backdrop-blur-md"
                >
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-portfolio-primary group-hover:text-brand transition-colors tracking-tight">{blog.title}</h3>
                    <span className="text-[10px] font-mono whitespace-nowrap opacity-40 uppercase tracking-widest">{blog.date}</span>
                  </div>
                  <p className="text-portfolio-secondary font-light leading-relaxed mb-6 line-clamp-2">{blog.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      {blog.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold text-portfolio-secondary/60 bg-secondary px-2 py-1 rounded">#{tag}</span>
                      ))}
                    </div>
                    <span className="text-sm font-bold text-brand flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read More <ArrowLeft size={16} className="rotate-180" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-12 flex justify-between text-portfolio-secondary">
              <button
                onClick={() => setActiveSection("contact")}
                className="flex items-center gap-2 hover:text-portfolio-primary transition-colors cursor-pointer"
              >
                <ChevronLeft size={18} /> Contact
              </button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`flex flex-col min-h-screen font-sans transition-colors duration-300 bg-primary text-portfolio-primary selection:bg-brand/30`}>
      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSearchOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-secondary border border-portfolio shadow-2xl rounded-2xl overflow-hidden"
            >
              <div className="p-4 border-b border-portfolio flex items-center gap-3">
                <Search size={20} className="text-portfolio-secondary" />
                <input
                  autoFocus
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent border-none outline-none text-portfolio-primary text-lg font-light"
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-lg text-portfolio-secondary transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-2 max-h-[60vh] overflow-y-auto">
                <div className="px-4 py-3">
                  <h3 className="text-[10px] font-bold text-portfolio-secondary uppercase tracking-widest mb-4">Links</h3>
                  <div className="space-y-1">
                    <button
                      onClick={() => { setActiveSection("introduction"); setSelectedProjectId(null); setSelectedBlogId(null); setIsSearchOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:scale-90 duration-300 transition-all cursor-pointer text-portfolio-primary group"
                    >
                      <Layout size={18} className="text-portfolio-secondary group-hover:text-brand" />
                      <span className="font-medium">Home</span>
                    </button>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <h3 className="text-[10px] font-bold text-portfolio-secondary uppercase tracking-widest mb-4">Sections</h3>
                  <div className="grid grid-cols-1 gap-1">
                    {SECTIONS.map(section => (
                      <button
                        key={section.id}
                        onClick={() => { setActiveSection(section.id); setSelectedProjectId(null); setSelectedBlogId(null); setIsSearchOpen(false); }}
                        className="w-full flex items-center gap-3 px-3 py-3   rounded-xl hover:scale-90 duration-300 transition-all cursor-pointer text-portfolio-primary group text-left"
                      >
                        <ChevronRight size={18} className="text-portfolio-secondary group-hover:text-brand" />
                        <span className="font-medium">{section.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4 bg-primary/50 border-t border-portfolio flex items-center justify-between">
                <div className="flex items-center gap-4 text-[11px] text-portfolio-secondary font-medium">
                  <span className="flex items-center gap-1"><span className="bg-secondary px-1 py-0.5 border border-portfolio rounded uppercase tracking-tighter">Enter</span> to select</span>
                  <span className="flex items-center gap-1"><span className="bg-secondary px-1 py-0.5 border border-portfolio rounded uppercase tracking-tighter">↑↓</span> to navigate</span>
                  <span className="flex items-center gap-1"><span className="bg-secondary px-1 py-0.5 border border-portfolio rounded uppercase tracking-tighter">Esc</span> to close</span>
                </div>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-sm font-bold text-portfolio-primary hover:text-brand transition-colors cursor-pointer"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                  Change Theme
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <audio
        ref={audioRef}
        src="https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3"
        loop
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-backdrop border-b border-portfolio px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div
              className="flex items-center gap-1.5 text-portfolio-primary font-bold text-lg select-none cursor-pointer"
              onClick={() => { setActiveSection("introduction"); setSelectedProjectId(null); }}
            >
              <ChevronRight size={20} className="text-portfolio-secondary opacity-50" />
              <span className="tracking-tighter">abidali.is-dev</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-portfolio-secondary text-[13px] font-medium">
              <span className="hover:text-portfolio-primary cursor-pointer transition-colors" onClick={() => { setActiveSection("introduction"); setSelectedProjectId(null); }}>Home</span>
              <a href={PROFILE.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-portfolio-primary transition-colors">LinkedIn <ExternalLink size={10} /></a>
              <a href={PROFILE.resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-portfolio-primary transition-colors">Resume <ExternalLink size={10} /></a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              onClick={() => setIsSearchOpen(true)}
              className="hidden lg:flex items-center gap-2 bg-secondary/40 border border-portfolio px-3 py-1.5 rounded-xl text-portfolio-secondary text-xs transition-all hover:border-zinc-400 cursor-pointer"
            >
              <Search size={14} />
              <span className="font-light">Search sections...</span>
              <span className="ml-4 opacity-70 font-mono text-[13px]">⌘ K</span>
            </div>
            <div className="flex items-center gap-2.5 bg-secondary px-3 py-1.5 rounded-full border border-portfolio">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)] animate-pulse" />
              <span className="text-portfolio-primary text-sm font-bold tracking-tight">{formatTime(currentTime)}</span>
            </div>
            <div className="flex items-center gap-1 text-portfolio-secondary">
              <button
                onClick={toggleMusic}
                className={`p-2 transition-colors relative cursor-pointer ${isPlaying ? 'text-brand' : 'hover:text-portfolio-primary'}`}
              >
                {isPlaying ? <Volume2 size={16} /> : <Music2 size={16} />}
                {isPlaying && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                  </span>
                )}
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 hover:text-portfolio-primary transition-colors cursor-pointer"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <a href={PROFILE.links.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-portfolio-primary transition-colors ml-1 cursor-pointer"><Github size={16} /></a>
            </div>
            <button
              className="md:hidden p-2 text-portfolio-primary hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 pt-[73px]">
        {/* Sidebar */}
        <aside className={`
          fixed md:sticky top-[73px] md:left-40 z-40 w-64 bg-primary border-r border-portfolio h-[calc(100vh-73px)] overflow-y-auto md:translate-x-0 transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
          <div className="p-8 pb-12">
            <div className="mb-6">
              <h3 className="text-[20px] font-bold text-portfolio-secondary uppercase mb-6">Sections</h3>
              <nav className="space-y-1.5">
                {SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      setSelectedProjectId(null);
                      setSelectedBlogId(null);
                      setIsSidebarOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`
                      w-full text-left px-4 py-2.5 rounded-xl text-[16px] font-medium transition-all group relative cursor-pointer
                      ${activeSection === section.id && !selectedProjectId && !selectedBlogId
                        ? "bg-secondary text-brand shadow-sm"
                        : "text-portfolio-secondary hover:text-portfolio-primary hover:bg-secondary/30"}
                    `}
                  >
                    {section.label}
                    {activeSection === section.id && !selectedProjectId && !selectedBlogId && (
                      <motion.div
                        layoutId="active-nav"
                        className="absolute left-0 top-2 bottom-2 w-0.5 bg-brand rounded-full"
                      />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-6 md:px-12 lg:px-20 py-12 min-h-full">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {renderSection()}
            </AnimatePresence>
          </div>
          <footer className="max-w-4xl mx-auto w-full pt-42">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-portfolio pt-8 text-[11px] text-portfolio-secondary font-medium">
              <div className="flex items-center gap-1">
                <span>© {new Date().getFullYear()} {PROFILE.name}</span>
                <span className="opacity-30 mx-2">|</span>
                <span className="flex items-center gap-1">Built with <Heart size={10} className="text-red-500 animate-pulse" /> in Pune</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span>{PROFILE.email}.</span>
                <span>{PROFILE.phone}</span>
              </div>
            </div>
          </footer>
        </main>



      </div>
    </div >
  );
}
