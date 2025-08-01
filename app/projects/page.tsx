"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/Components/Button";
import { FiArrowLeft, FiEye, FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/projects";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {
  const router = useRouter();
  const [scrollRatio, setScrollRatio] = useState(0);

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

  const handleBackToHome = () => {
    router.push('/#portfolio');
  };

  const handleViewProject = (projectId: number) => {
    router.push(`/project/${projectId}`);
  };

  return (
    <div 
      className="min-h-screen text-textPrimary pattern-bg"
      style={bgStyle}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white/10 backdrop-blur-sm border-b border-white/20"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-textPrimary">All Projects</h1>
            <Button
              variant="outline"
              size="md"
              onClick={handleBackToHome}
              leftIcon={<FiArrowLeft />}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:text-black transition-all duration-300"
            >
              Back to Portfolio
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2 }
              }}
              className="bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 overflow-hidden group shadow-lg hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row">
                {/* Project Image */}
                <div className="relative overflow-hidden md:w-1/3 h-64 md:h-auto flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-textPrimary group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-textSecondary text-base mb-6 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Button
                      size="default"
                      onClick={() => handleViewProject(project.id)}
                      leftIcon={<FiEye />}
                      className="flex-1 text-xs hover:scale-102 transition-transform duration-200"
                    >
                      View Details
                    </Button>
                    
                    {project.repoUrl && (
                      <Button
                        variant="outline"
                        size="default"
                        onClick={() => window.open(project.repoUrl!, "_blank")}
                        leftIcon={<FiExternalLink />}
                        className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:text-black transition-all duration-300 text-xs hover:scale-102"
                      >
                        View Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 