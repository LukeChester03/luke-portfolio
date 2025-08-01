"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/Components/Button";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data/projects";

// Extended project data for detailed view
const extendedProjects = [
  {
    id: 1,
    title: "PathWise — AI-Powered Tourism Assistant",
    subtitle: "Mobile App Development",
    image: "/PathWise_ss_1.png",
    summary: "Mobile app combining real-time geolocation with AI-generated cultural stories.",
    details: [
      "Built with React Native, Firebase, Google Maps SDK, and Google's Gemini AI.",
      "Features include caching for API cost optimization and gamified location-based learning.",
      "Real-time geolocation tracking with cultural story generation.",
      "Optimized for performance with intelligent caching strategies.",
      "Gamified learning experience to enhance user engagement."
    ],
    techStack: [
      "React Native",
      "AI (Google Gemini)",
      "Firebase",
      "Google Maps SDK",
      "Google Cloud",
    ],
    repoUrl: null,
    demoUrl: null,
    images: [
      "/PathWise_ss_1.png",
      "/PathWise_ss_2.png",
      "/PathWise_ss_3.png"
    ],
    challenges: [
      "Integrating multiple APIs while maintaining performance",
      "Implementing efficient caching strategies",
      "Creating smooth user experience with real-time location updates"
    ],
    solutions: [
      "Implemented intelligent caching to reduce API calls",
      "Used React Native's performance optimizations",
      "Designed intuitive UI for seamless navigation"
    ]
  },
  {
    id: 2,
    title: "Terminology Hub",
    subtitle: "Internal Company Tool",
    image: "/TermHub_ss_1.png",
    summary: "Internal tool for employees to search and submit company terminology.",
    details: [
      "Frontend in React, backend in Python with MongoDB.",
      "Includes real-time search and voting system.",
      "Streamlined terminology management for large organizations.",
      "User-friendly interface for easy term submission and retrieval.",
      "Advanced search capabilities with filtering options."
    ],
    techStack: ["React", "Python", "MongoDB"],
    repoUrl: null,
    demoUrl: null,
    images: [
      "/TermHub_ss_1.png",
      "/TermHub_ss_2.png"
    ],
    challenges: [
      "Creating an intuitive search interface",
      "Implementing real-time updates",
      "Managing large datasets efficiently"
    ],
    solutions: [
      "Built responsive search with debouncing",
      "Used WebSocket connections for real-time updates",
      "Optimized database queries for performance"
    ]
  },
  {
    id: 3,
    title: "Portfolio Website",
    subtitle: "Interactive Portfolio",
    image: "/PW_ss_1.png",
    summary: "Interactive portfolio site with animations and 3D elements.",
    details: [
      "Built with React, TypeScript, and Framer Motion.",
      "Designed for responsiveness and accessibility.",
      "Modern animations and smooth transitions throughout.",
      "Optimized for performance and SEO.",
      "Showcases technical skills and creative design."
    ],
    techStack: ["React", "TypeScript", "Framer Motion", "Three.js"],
    repoUrl: "https://github.com/LukeChester03/luke-portfolio",
    demoUrl: null,
    images: [
      "/PW_ss_1.png",
      "/PW_ss_2.png"
    ],
    challenges: [
      "Creating smooth animations without performance issues",
      "Ensuring accessibility across all devices",
      "Balancing visual appeal with functionality"
    ],
    solutions: [
      "Used Framer Motion for optimized animations",
      "Implemented proper ARIA labels and keyboard navigation",
      "Designed with mobile-first responsive approach"
    ]
  },
];

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = parseInt(params.id as string);
  const [scrollRatio, setScrollRatio] = useState(0);
  
  const project = extendedProjects.find(p => p.id === projectId);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      const ratio = Math.min(scrollY / maxScroll, 1);
      setScrollRatio(ratio);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to interpolate between two hex colors
  const interpolateColor = (start: string, end: string, factor: number) => {
    const hexToRgb = (hex: string) => hex.match(/\w\w/g)?.map((c) => parseInt(c, 16)) ?? [0, 0, 0];
    const rgbToHex = (rgb: number[]) =>
      `#${rgb.map((x) => x.toString(16).padStart(2, "0")).join("")}`;

    const startRgb = hexToRgb(start);
    const endRgb = hexToRgb(end);
    const result = startRgb.map((startC, i) => Math.round(startC + factor * (endRgb[i] - startC)));
    return rgbToHex(result as number[]);
  };

  const topColor = interpolateColor("#ebf8ff", "#003c75", scrollRatio); // light → darker blue
  const bottomColor = interpolateColor("#bde4ff", "#001930", scrollRatio); // light → navy

  const bgStyle = {
    background: `linear-gradient(180deg, ${topColor} 0%, ${bottomColor} 100%)`,
    transition: "background 0.2s linear",
  };

  if (!project) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center text-black pattern-bg"
        style={bgStyle}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-textPrimary">Project Not Found</h1>
          <Button onClick={() => router.push('/projects')}>
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  const handleBackToProjects = () => {
    router.push('/projects');
  };

  return (
    <div 
      className="min-h-screen text-textPrimary pattern-bg"
      style={bgStyle}
    >
      {/* Back Button - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-8 right-8 z-50"
      >
        <Button
          variant="outline"
          onClick={handleBackToProjects}
          leftIcon={<FiArrowLeft />}
          className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:text-accent"
        >
          Back to Projects
        </Button>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="pt-24 pb-16"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-textPrimary mb-6">
              {project.title}
            </h1>
            
            <p className="text-xl text-accent font-medium mb-8">
              {project.subtitle}
            </p>
            
            <p className="text-lg text-textSecondary max-w-3xl mx-auto leading-relaxed">
              {project.summary}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Main Image Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </motion.section>

      {/* About Section with Integrated Images */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-textPrimary mb-12 text-center">
              About the Project
            </h2>
            
            <div className="space-y-16">
              {project.details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                >
                  <div className="lg:w-1/2">
                    <p className="text-textSecondary leading-relaxed text-lg">
                      {detail}
                    </p>
                  </div>
                  
                  {project.images[index + 1] && (
                    <div className="lg:w-1/2">
                      <img
                        src={project.images[index + 1]}
                        alt={`${project.title} feature ${index + 2}`}
                        className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="py-16 bg-white/5"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-textPrimary mb-12 text-center">
              Technologies Used
            </h2>
            
            <div className="flex flex-wrap gap-4 justify-center">
              {project.techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="bg-accent text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Challenges & Solutions Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-textPrimary mb-8">Challenges Faced</h2>
                <ul className="space-y-6">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="text-accent font-bold text-xl mt-1">•</span>
                      <span className="text-textSecondary text-lg leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Solutions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-textPrimary mb-8">Solutions Implemented</h2>
                <ul className="space-y-6">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="text-accent font-bold text-xl mt-1">•</span>
                      <span className="text-textSecondary text-lg leading-relaxed">{solution}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Action Buttons Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {project.repoUrl && (
                <Button
                  size="lg"
                  onClick={() => window.open(project.repoUrl!, "_blank")}
                  leftIcon={<FiGithub />}
                  className="text-lg px-8 py-4"
                >
                  View Code on GitHub
                </Button>
              )}
              
              {project.demoUrl && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(project.demoUrl!, "_blank")}
                  leftIcon={<FiExternalLink />}
                  className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
                >
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
} 