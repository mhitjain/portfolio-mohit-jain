import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Sparkles, Terminal, Briefcase, Award, ChevronRight, Cpu, Database, Rocket, Camera, Trophy, Target, Sun, Moon } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });
  const fullText = "Building intelligent systems...";

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const codeSnippets = [
    { text: 'const build = () => "future"', x: 5, y: 8, delay: 0 },
    { text: 'while(learning) { grow() }', x: 82, y: 10, delay: 1 },
    { text: 'export default Innovation', x: 6, y: 85, delay: 3 },
    { text: 'if(possible) makeIt()', x: 84, y: 67, delay: 5 },
    { text: 'class Engineer: transform', x: 4, y: 40, delay: 2.5 },
    { text: 'def optimize(system)', x: 87, y: 52, delay: 3.5 },
  ];

  const projects = [
    {
      title: "Agentic Resume Optimizer",
      description: "AI-powered Streamlit application that analyzes job descriptions and generates intelligent, targeted resume optimizations. Features multi-LLM support (Groq/Gemini), interactive suggestion review interface, and secure browser-based API key storage with encrypted cookies. Generates LaTeX output with 6-8 AI-driven improvements per job posting.",
      tech: ["Python", "Streamlit", "Groq LLM", "Google Gemini", "LaTeX", "Cookies Manager"],
      icon: <Sparkles className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      link: "https://github.com/mhitjain/resume-optimizer",
      highlights: ["Multi-LLM AI agents", "Browser-based encryption", "LaTeX generation", "Interactive UI"]
    },
    {
      title: "Job Search Automation Tool",
      description: "Comprehensive job search platform with modern React + TypeScript dashboard. Automatically scrapes jobs from LinkedIn, Indeed, Glassdoor using Selenium, performs AI-powered matching against resume using RAG systems, and provides relevance scoring with detailed reasoning. Includes AI chatbot assistant, automated scheduling every 3 hours, and one-command setup script with visual configuration UI.",
      tech: ["React", "TypeScript", "Vite", "Python", "Selenium", "Groq/Gemini AI", "SQLite", "Flask"],
      icon: <Database className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      link: "https://github.com/mhitjain/job-search",
      highlights: ["15+ modular React components", "Multi-source scraping", "AI-powered matching 0-100 score", "Setup UI for config"]
    },
    {
      title: "Cloud Automation Platform (AWS)",
      description: "Enterprise-grade cloud infrastructure automation suite consisting of three integrated components: (1) Node.js/Express RESTful API with user/product management, PostgreSQL database, BCrypt authentication, and 139+ integration tests (2) Terraform IaC for VPC networking, multi-region deployment, auto-scaling groups, load balancers, RDS, and SSL/TLS configuration (3) Serverless Lambda functions for email verification via Mailgun with DynamoDB tracking and SNS triggers. Includes GitHub Actions CI/CD with Packer AMI builds.",
      tech: ["Node.js", "Express", "PostgreSQL", "Terraform", "AWS Lambda", "Packer", "GitHub Actions", "Mailgun", "DynamoDB"],
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
      link: "https://github.com/orgs/CSYE6225-mohit-jain/repositories",
      highlights: ["Auto-scaling infrastructure", "Multi-region deployment", "Email verification flow", "75% faster deployments"]
    },
    {
      title: "Clinical Trial Data Pipeline",
      description: "Comprehensive ETL pipeline extracting clinical trial data from ClinicalTrials.gov API, verifying public company sponsors via SEC filings, downloading and parsing 8-K/10-K documents for trial mentions, enriching metadata using OpenAI GPT-4 (drug info, endpoints, baseline characteristics), and storing structured data in PostgreSQL with relational schema. Includes proof-of-concept publication matching via SerpAPI.",
      tech: ["Python", "OpenAI GPT-4", "PostgreSQL", "SEC API", "BeautifulSoup", "Pandas", "Jupyter"],
      icon: <Database className="w-6 h-6" />,
      gradient: "from-cyan-500 to-blue-500",
      link: "https://github.com/mhitjain/clinical-trial-data-pipeline",
      highlights: ["AI-powered data extraction", "Multi-source integration", "Automated enrichment", "Publication matching"]
    },
    {
      title: "ShareBite - Zero Hunger Platform",
      description: "Full-stack social impact platform connecting surplus food providers (restaurants, farmers) with NGOs and individuals in need. Features vendor surplus food posting with allergen info and shelf life, rider pickup/delivery system, NGO impact story sharing, farmer raw material donation coordination, event management for meal preparation, fundraising capabilities, and volunteer/chef hiring portal. Built with Object-Oriented Design principles.",
      tech: ["Spring Boot", "React", "MySQL", "Java", "REST APIs", "Thymeleaf"],
      icon: <Sparkles className="w-6 h-6" />,
      gradient: "from-pink-500 to-rose-500",
      link: "https://github.com/mhitjain/sharebite",
      highlights: ["Social impact focus", "Multi-role platform", "Real-time delivery tracking", "Event management"]
    },
    {
      title: "Cloud Resource Management System (CRMS)",
      description: "Enterprise-level Spring Boot application for managing cloud resources with role-based access control (Admin, Regional Manager, Resource Manager, Client). Features dynamic resource allocation, multi-region state mapping, flexible pricing models, usage tracking with detailed logging, automated billing system, payment processing, PDF report generation using iText, and responsive Thymeleaf/JSP UI. Supports cloud resource lifecycle management across regions.",
      tech: ["Spring Boot", "Hibernate", "MySQL", "Thymeleaf", "iText PDF", "Maven", "JSP"],
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-orange-500 to-amber-500",
      link: "https://github.com/mhitjain/Cloud-Resource-Mangement-System",
      highlights: ["Multi-role RBAC", "Automated billing", "PDF reports", "Multi-region support"]
    },
    {
      title: "Lox Interpreter (Python)",
      description: "Tree-walk interpreter for the Lox scripting language following Robert Nystrom's 'Crafting Interpreters' book. Implements full lexical analysis (tokenization), recursive descent parsing, Abstract Syntax Tree (AST) generation, expression evaluation, variable scoping, control flow (if/while/for), function calls with closures, and class-based object-oriented features. Built as part of CodeCrafters challenge.",
      tech: ["Python", "AST", "Lexical Analysis", "Parsing", "Tree-Walk Interpretation"],
      icon: <Code2 className="w-6 h-6" />,
      gradient: "from-violet-500 to-purple-500",
      link: "https://github.com/mhitjain/codecrafters-interpreter-python",
      highlights: ["Lexer & Parser", "AST evaluation", "Closures & scoping", "OOP features"]
    },
    {
      title: "BetBrains - Sports Analytics",
      description: "Hackathon project (EaseA Hackathon) providing intelligent sports betting analytics and predictions. Built with modern web technologies to deliver data-driven insights for sports enthusiasts.",
      tech: ["React", "Python", "Data Analytics", "REST APIs"],
      icon: <Rocket className="w-6 h-6" />,
      gradient: "from-teal-500 to-cyan-500",
      link: "https://github.com/mhitjain/BetBrains",
      highlights: ["Hackathon winner", "Predictive analytics", "Real-time data", "Modern UI"]
    }
  ];

  const skills = {
    "Languages": ["Python", "Java", "JavaScript", "TypeScript", "Node.js", "SQL", "HTML/CSS", "Bash/Shell"],
    "AI/ML & LLMs": ["OpenAI GPT-4", "Groq LLama", "Google Gemini", "LangChain", "RAG Systems", "Vector Databases", "NLP", "Agentic AI", "Semantic Search"],
    "Backend & Frameworks": ["FastAPI", "Spring Boot", "Express.js", "Hibernate", "Flask", "Sequelize ORM", "REST APIs", "Microservices", "Kafka"],
    "Frontend & UI": ["React", "TypeScript", "Tailwind CSS", "Vite", "Thymeleaf", "JSP", "Streamlit", "Responsive Design"],
    "Databases": ["PostgreSQL", "MySQL", "SQLite", "DynamoDB", "Redis", "Database Design", "SQL Optimization"],
    "Cloud & DevOps": ["AWS (Lambda, EC2, RDS, S3, SNS)", "Terraform", "Packer", "Docker", "GitHub Actions", "CI/CD", "Infrastructure as Code"],
    "Tools & Technologies": ["Git/GitHub", "Selenium", "BeautifulSoup", "Jupyter", "Maven", "Postman/Newman", "iText PDF", "Mailgun API"],
    "Development Practices": ["Test-Driven Development", "Agile/Scrum", "API Design", "Authentication (OAuth, JWT, BCrypt)", "Security Best Practices", "Code Review"]
  };

    const experience = [
    {
      role: "Software Development Engineer Intern",
      company: "TekLink International (HGS)",
      period: "Feb 2025 – Aug 2025",
      location: "Boston, MA",
      highlights: [
        "Engineered a full-stack AML (Anti-Money Laundering) compliance platform with a React/TypeScript frontend and FastAPI backend. The platform features a document analysis system powered by Retrieval-Augmented Generation (RAG) that helps compliance analysts quickly search and analyze regulatory documents, reducing their review time by 30% through intelligent semantic search and automated information retrieval",
        "Built an enterprise chatbot interface that allows users to ask questions about compliance documents in natural language. The system uses OpenAI embeddings to understand queries and Pinecone vector database to retrieve relevant document sections, providing accurate answers with source citations to help analysts navigate complex regulatory requirements",
        "Set up comprehensive CI/CD pipelines with GitHub Actions that automatically run tests (Pytest for Python backend, Jest for React frontend) on every code commit. Implemented validation gates to prevent buggy code from reaching production, achieving 85% code coverage across the codebase to ensure reliability",
        "Developed a file validation tool that uses AI agents to automatically check uploaded files for common errors and data quality issues. The system detects problems using rule-based validation and leverages AI to suggest specific fixes, helping users correct issues before they cause downstream problems",
        "Created development documentation and established coding standards for the team, including API design guidelines, authentication best practices, and Git workflow procedures. This standardization helped new developers get up to speed faster when joining projects"
      ],
      technologies: ["React", "TypeScript", "FastAPI", "Python", "OpenAI", "Pinecone", "RAG", "GitHub Actions"]
    },
    {
      role: "Application Development Analyst",
      company: "Accenture",
      period: "Sept 2022 – Dec 2023",
      location: "Mumbai, India",
      highlights: [
        "Designed and built microservices for an insurance processing system using Java 8 and Spring Boot. Implemented Circuit Breaker pattern to handle service failures gracefully and API Gateway pattern to manage routing between services. These architectural improvements made the system more resilient and scalable, with faster response times even during peak loads",
        "Created data extraction pipelines to parse and process insurance documents in various formats. The pipeline handles JSON payloads from 40+ different document types (claims, policies, endorsements, etc.), validates data integrity, transforms it into a standardized format, and achieves 95% accuracy in extracting critical information like policy numbers, coverage amounts, and dates",
        "Integrated Apache Kafka into the system to enable real-time event streaming between microservices. When one service processes a claim, it publishes events that other services consume to trigger their workflows. Also optimized AWS infrastructure (EC2 instances, S3 storage) to reliably handle over 10,000 daily transactions with 99.9% uptime",
        "Mentored and trained 5 new team members on the insurance system workflows, codebase architecture, and development practices. Conducted regular knowledge-sharing sessions to help them understand the business domain and technical implementation"
      ],
      technologies: ["Java 8", "Spring Boot", "Apache Kafka", "AWS EC2", "AWS S3", "Microservices"]
    },
    {
      role: "Application Development Associate",
      company: "Accenture",
      period: "Jun 2021 – Aug 2022",
      location: "Mumbai, India",
      highlights: [
        "Built full-stack web applications with React for interactive user interfaces, Next.js for server-side rendering and SEO optimization, and Node.js/Express for RESTful backend APIs. Focused on creating scalable architecture patterns and optimizing performance through techniques like code splitting, lazy loading, and efficient state management",
        "Designed and implemented comprehensive error handling across all application layers - from frontend validation to backend API error responses to database transaction handling. Set up centralized logging to track errors and application behavior, which helped the team quickly identify and fix production issues, reducing incident response times",
        "Automated the validation of JSON data files using Python scripts to catch data quality issues early. The scripts check for missing fields, invalid formats, type mismatches, and business rule violations. This automation increased data accuracy from initial processing to 80% better quality, preventing errors from propagating downstream",
        "Created a test automation framework using Selenium WebDriver to automatically generate test data for QA environments. The framework simulates user interactions with the web UI to create realistic test datasets, cutting manual data creation time in half and allowing testers to focus on actual testing rather than data setup"
      ],
      technologies: ["React", "Next.js", "Node.js", "Express", "Python", "Selenium"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 text-slate-900 dark:text-white overflow-hidden relative transition-colors duration-300">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-4 rounded-full bg-white dark:bg-slate-800/80 backdrop-blur-md border border-slate-300 dark:border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-110 shadow-lg group"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6 text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
        ) : (
          <Moon className="w-6 h-6 text-slate-700 group-hover:rotate-180 transition-transform duration-500" />
        )}
      </button>

      {/* Animated gradient orb following cursor */}
      <div 
        className="fixed w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 dark:from-blue-500/20 dark:to-purple-500/20 blur-3xl pointer-events-none transition-all duration-300 ease-out z-0"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Floating code snippets */}
      {codeSnippets.map((snippet, idx) => (
        <div
          key={idx}
          className="absolute text-blue-600 dark:text-blue-300 font-mono text-base md:text-lg animate-float pointer-events-none select-none hidden md:block font-bold tracking-wide"
          style={{
            left: `${snippet.x}%`,
            top: `${snippet.y}%`,
            animationDelay: `${snippet.delay}s`,
            animationDuration: `${6 + snippet.delay}s`,
            textShadow: isDarkMode ? '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)' : '0 0 10px rgba(59, 130, 246, 0.3)',
            opacity: isDarkMode ? 0.7 : 0.5,
            transform: 'rotate(0deg)'
          }}
        >
          {snippet.text}
        </div>
      ))}

      {/* Decorative grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(100,100,100,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,100,.08)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 z-10">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
          {/* Profile Photo */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
              <img 
                src="/mohit.jpeg" 
                alt="Mohit" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating rings around photo */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-ping-slow"></div>
            <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 animate-ping-slower"></div>
          </div>

          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-500/10 dark:to-purple-500/10 border border-blue-300 dark:border-blue-500/30 rounded-full mb-8 backdrop-blur-sm animate-fade-in">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-pulse" />
              <span className="text-sm text-blue-700 dark:text-blue-300">Available for Full Stack Developer & AI Engineer roles</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-100 dark:to-purple-200 bg-clip-text text-transparent animate-fade-in">
              Mohit Jain
            </h1>
            
            <p className="text-2xl md:text-3xl text-blue-700 dark:text-blue-200 mb-4 animate-fade-in animation-delay-200">
              AI Engineer & Full-Stack Developer
            </p>
            
            <div className="text-xl text-emerald-600 dark:text-emerald-300 mb-6 font-mono h-8 animate-fade-in animation-delay-300">
              {typedText}
            </div>
            
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mb-8 leading-relaxed animate-fade-in animation-delay-400">
              Software Engineer with 3+ years of experience building intelligent systems and scalable cloud solutions. 
              Master's student at Northeastern University specializing in AI engineering, RAG systems, and full-stack development. 
              Passionate about transforming complex problems into elegant, production-ready solutions.
            </p>

            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in animation-delay-500">
              <a href="#contact" className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                <Mail className="w-5 h-5" />
                Get in Touch
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://github.com/mhitjain/resume/blob/f159530623e2d4f66d1386f70e08be50d5b64e22/Mohit%20Jain.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-slate-400 dark:border-slate-600 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm">
                <ExternalLink className="w-5 h-5" />
                Download Resume
              </a>
              <a href="#projects" className="flex items-center gap-2 px-6 py-3 border border-slate-400 dark:border-slate-600 rounded-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-sm">
                <Code2 className="w-5 h-5" />
                View Projects
              </a>
            </div>

            <div className="flex gap-6 animate-fade-in animation-delay-600">
              <a href="https://github.com/mhitjain" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 transform">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/mohit-jain-3008" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 transform">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:mohitjain3099@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 transform">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 animate-fade-in">
            <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-900/80 dark:to-slate-800/50 backdrop-blur-sm border border-slate-300 dark:border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="relative">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-xl text-slate-700 dark:text-slate-300">{exp.company}</p>
                      {exp.location && (
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{exp.location}</p>
                      )}
                    </div>
                    <span className="text-slate-600 dark:text-slate-400 mt-2 md:mt-0 font-mono text-sm">{exp.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                        <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-300 dark:border-slate-700/50">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-500/10 border border-blue-300 dark:border-blue-500/20 rounded-md text-xs text-blue-800 dark:text-blue-300 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 animate-fade-in">
            <Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                className="group relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-900/80 dark:to-slate-800/50 backdrop-blur-sm border border-slate-300 dark:border-slate-700/50 rounded-2xl p-6 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-500 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors group-hover:rotate-45 duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {project.highlights && (
                    <div className="mb-4 space-y-1">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-400 text-xs">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-500/10 border border-blue-300 dark:border-blue-500/30 rounded-full text-xs text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-500/20 transition-all duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Terminal Style */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 animate-fade-in">
            <Terminal className="w-8 h-8 text-green-600 dark:text-green-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 dark:from-green-400 dark:to-cyan-400 bg-clip-text text-transparent">
              mohit@portfolio:~$ cat skills.sh
            </h2>
          </div>

          {/* Terminal Window */}
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-950 dark:to-slate-900 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700/50 shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-slate-200 dark:bg-slate-800/80 px-4 py-3 flex items-center gap-2 border-b border-slate-300 dark:border-slate-700/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-slate-600 dark:text-slate-400 text-sm ml-4 font-mono">skills.sh - bash</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm space-y-6">
              {Object.entries(skills).map(([category, items], idx) => (
                <div key={idx} className="animate-fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
                  {/* Command Line */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-600 dark:text-green-400">➜</span>
                    <span className="text-blue-700 dark:text-blue-400">echo</span>
                    <span className="text-yellow-600 dark:text-yellow-400">"${category}"</span>
                  </div>
                  
                  {/* Output */}
                  <div className="ml-4 pl-4 border-l-2 border-slate-300 dark:border-slate-700/50">
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, i) => (
                        <span 
                          key={i} 
                          className="group relative px-3 py-1.5 bg-white dark:bg-slate-800/60 border border-slate-300 dark:border-slate-600/40 rounded-md text-slate-700 dark:text-slate-300 hover:text-green-700 dark:hover:text-green-400 hover:border-green-600 dark:hover:border-green-500/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 cursor-default"
                        >
                          <span className="text-green-600 dark:text-green-500/60 mr-1">$</span>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Command Prompt at the end */}
              <div className="flex items-center gap-2 mt-8 pt-4 border-t border-slate-300 dark:border-slate-700/30">
                <span className="text-green-600 dark:text-green-400">➜</span>
                <span className="text-cyan-700 dark:text-cyan-400">~/portfolio</span>
                <span className="text-slate-500 dark:text-slate-500">git:(</span>
                <span className="text-red-600 dark:text-red-400">main</span>
                <span className="text-slate-500 dark:text-slate-500">)</span>
              </div>
            </div>
          </div>

          {/* Stats Cards Below Terminal */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-500/10 dark:to-cyan-500/10 border border-blue-300 dark:border-blue-500/20 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-1">70+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Technologies</div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-500/10 dark:to-pink-500/10 border border-purple-300 dark:border-purple-500/20 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-1">8</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Major Projects</div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-500/10 dark:to-emerald-500/10 border border-green-300 dark:border-green-500/20 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-green-700 dark:text-green-400 mb-1">3+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-500/10 dark:to-amber-500/10 border border-orange-300 dark:border-orange-500/20 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-orange-700 dark:text-orange-400 mb-1">70+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Skills & Tools</div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 animate-fade-in">
            <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
              Background
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white to-slate-100 dark:from-slate-900/70 dark:to-slate-800/50 backdrop-blur-sm border border-slate-300 dark:border-slate-700/50 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 p-8 md:p-10">
              {/* Photo Column - Larger Vertical Photo */}
              <div className="md:col-span-1 flex flex-col items-center justify-start">
                <div className="relative group w-full h-[500px] md:h-[600px]">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-slate-300 dark:border-slate-700">
                    <img 
                      src="/mohit2.jpg" 
                      alt="Mohit Jain" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center mt-6">
                  <p className="text-slate-600 dark:text-slate-300 text-base">Mechanical Engineer turned</p>
                  <p className="text-blue-700 dark:text-blue-400 font-semibold text-lg">Full Stack Developer & AI Engineer</p>
                </div>
              </div>

              {/* Content Column */}
              <div className="md:col-span-1 space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 flex items-center gap-2">
                    <span className="w-1 h-6 bg-blue-500 rounded"></span>
                    Mechanical Engineering Foundation
                  </h3>
                  <p className="text-base">
                    My technical journey began with a <span className="text-slate-900 dark:text-slate-200 font-medium">B.E. in Mechanical Engineering from IET DAVV, India</span>, where I developed a strong foundation in problem-solving and systems thinking. During my undergraduate years, I was part of the <span className="text-cyan-700 dark:text-cyan-400 font-medium">SAE Collegiate Club</span>, working in a 25-member team to design, fabricate, and test an all-terrain vehicle from scratch for the <span className="text-slate-900 dark:text-slate-200">SAE BAJA national competition</span>.
                  </p>
                  <p className="text-base">
                    My focus on optimization and component design led me to master CAD tools like <span className="text-slate-900 dark:text-slate-200">ANSYS and SolidWorks</span>. This experience with engineering software sparked a realization: <span className="text-blue-700 dark:text-blue-300 italic">software could be the ultimate tool for creation and innovation</span>.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-300 flex items-center gap-2">
                    <span className="w-1 h-6 bg-cyan-500 rounded"></span>
                    Transition to Software Development
                  </h3>
                  <p className="text-base">
                    During COVID-19, when industries shut down and my offer at FORCE Motors was put on hold, I made a pivotal decision: teach myself to code. Using online platforms like <span className="text-slate-900 dark:text-slate-200">Coursera and YouTube</span>, I dove into programming for the first time. What started as a productive use of time quickly became a passion.
                  </p>
                  <p className="text-base">
                    I joined <span className="text-blue-700 dark:text-blue-400 font-semibold">Accenture</span> where I spent <span className="text-cyan-700 dark:text-cyan-400 font-semibold">2.5 years</span> building production systems. I progressed from <span className="text-slate-900 dark:text-slate-200">Associate to Analyst</span>, gaining hands-on experience with:
                  </p>
                  <div className="grid grid-cols-2 gap-2 pl-4">
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm">Java/Spring Boot microservices</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm">React & Next.js applications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm">Apache Kafka & AWS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-sm">Data pipelines & cloud deployments</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 flex items-center gap-2">
                    <span className="w-1 h-6 bg-purple-500 rounded"></span>
                    Master's & Specialization in AI
                  </h3>
                  <p className="text-base">
                    To gain a formal computer science foundation and deepen my expertise, I pursued an <span className="text-blue-700 dark:text-blue-400 font-semibold">M.S. in Software Engineering at Northeastern University</span>. This program allowed me to dive into advanced topics in AI, distributed systems, and software architecture.
                  </p>
                  <p className="text-base">
                    During my studies, I completed a <span className="text-purple-700 dark:text-purple-400 font-semibold">6-month co-op at TekLink International</span> as a Software Development Engineer Intern, where I:
                  </p>
                  <div className="space-y-2 pl-4">
                    <div className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Built <span className="text-slate-900 dark:text-slate-200">RAG-based AI systems</span> for document analysis and chatbot applications</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Developed full-stack platforms with <span className="text-slate-900 dark:text-slate-200">React, TypeScript, and FastAPI</span></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Established <span className="text-slate-900 dark:text-slate-200">CI/CD pipelines</span> and development best practices</span>
                    </div>
                  </div>
                  <p className="text-base">
                    I'm graduating in <span className="text-cyan-700 dark:text-cyan-400 font-semibold">May 2026</span> and actively seeking full-time <span className="text-blue-700 dark:text-blue-400 font-semibold">Full Stack Developer & AI Engineer roles</span> where I can apply my unique blend of engineering problem-solving and modern software development skills.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Stats */}
            <div className="border-t border-slate-300 dark:border-slate-700/50 bg-slate-100 dark:bg-slate-900/40 p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-800/40 border border-blue-300 dark:border-blue-500/20 rounded-lg p-4 text-center hover:border-blue-500 dark:hover:border-blue-500/40 transition-all">
                  <div className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-1">2.5 Years</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Accenture • Full-Stack Development</div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">Mumbai, India</div>
                </div>
                <div className="bg-white dark:bg-slate-800/40 border border-purple-300 dark:border-purple-500/20 rounded-lg p-4 text-center hover:border-purple-500 dark:hover:border-purple-500/40 transition-all">
                  <div className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-1">6 Months</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">TekLink Co-op • AI Engineering</div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">Boston, MA</div>
                </div>
                <div className="bg-white dark:bg-slate-800/40 border border-cyan-300 dark:border-cyan-500/20 rounded-lg p-4 text-center hover:border-cyan-500 dark:hover:border-cyan-500/40 transition-all">
                  <div className="text-2xl font-bold text-cyan-700 dark:text-cyan-400 mb-1">May 2026</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">MS Graduation • Northeastern</div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">Boston, MA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies & Interests Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 animate-fade-in">
            <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Beyond Code
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Chess */}
            <div className="group relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-900/80 dark:to-slate-800/50 backdrop-blur-sm border border-slate-300 dark:border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-blue-600/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 bg-opacity-10 group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors">
                    Chess Enthusiast
                  </h3>
                </div>
                
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  Strategic thinking on the board translates to problem-solving in code. I love the mental challenge of chess - analyzing positions, calculating variations, and finding the best move under pressure. The game teaches patience, pattern recognition, and long-term planning - skills that directly benefit software development.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Analytical thinking and strategic planning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Pattern recognition and problem decomposition</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Decision making under time constraints</span>
                  </div>
                </div>

                <a 
                  href="https://www.chess.com/member/bellicose3" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 text-white font-semibold"
                >
                  <Trophy className="w-5 h-5" />
                  <span>Challenge Me to a Game! ♟️</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Photography */}
            <div className="group relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-900/80 dark:to-slate-800/50 backdrop-blur-sm border border-slate-300 dark:border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 bg-opacity-10 group-hover:scale-110 transition-transform duration-300">
                    <Camera className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 group-hover:text-purple-600 dark:group-hover:text-purple-200 transition-colors">
                    Photography
                  </h3>
                </div>
                
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  Capturing moments through the lens teaches me to see details others might miss - a skill invaluable in debugging and code review. Photography is about composition, lighting, and timing - much like architecting elegant software solutions. It's my creative outlet that balances the logical nature of programming.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Attention to detail and composition</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Creative problem-solving and visual thinking</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Patience and persistence for the perfect shot</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-600/20 dark:to-pink-600/20 border border-purple-300 dark:border-purple-500/30 rounded-lg text-purple-700 dark:text-purple-300">
                  <Camera className="w-5 h-5" />
                  <span>Street & Landscape Photography</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-white to-slate-100 dark:from-slate-900/80 dark:to-slate-800/50 backdrop-blur-sm border border-slate-300 dark:border-slate-700/50 rounded-3xl p-12 hover:border-blue-500/50 transition-all duration-500">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm currently seeking Full Stack Developer and AI Engineer positions where I can make an impact. Let's connect and discuss how we can create the future together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:jain.mohi@northeastern.edu" className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Email Me
              </a>
              <a href="https://linkedin.com/in/mohit-jain-3008" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-8 py-4 border border-slate-400 dark:border-slate-600 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm">
                <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                LinkedIn
              </a>
              <a href="https://github.com/mhitjain" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-8 py-4 border border-slate-400 dark:border-slate-600 rounded-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-sm">
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-500 dark:text-slate-500 border-t border-slate-300 dark:border-slate-800 relative z-10">
        <p className="font-mono text-sm">
          <span className="text-blue-600 dark:text-blue-400">const</span> portfolio = <span className="text-purple-600 dark:text-purple-400">"Built with ❤️ using React & Tailwind CSS"</span>
        </p>
        <p className="mt-2 text-xs">© 2024 Mohit. All rights reserved.</p>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        @keyframes ping-slower {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-ping-slower {
          animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
}