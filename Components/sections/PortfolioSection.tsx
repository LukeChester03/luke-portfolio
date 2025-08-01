"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import { Button } from "@/Components/Button";
import { FiExternalLink, FiEye, FiGrid } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";

export default function PortfolioSection() {
  const router = useRouter();

  const handleViewProject = (projectId: number) => {
    // Navigate to detailed project page
    window.location.href = `/project/${projectId}`;
  };

  const handleViewAllProjects = () => {
    router.push('/projects');
  };

  return (
    <section
      id="portfolio"
      className="snap-start min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-textPrimary py-8"
    >
      <div className="container mx-auto px-6 flex flex-col h-full">
        <h1 className="h1 text-center text-textPrimary mb-12">Projects</h1>

        <Swiper
          modules={[A11y, Autoplay]}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          spaceBetween={50}
          slidesPerView={1}
          className="w-full flex-1"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title} className="flex items-center justify-center">
              <motion.div
                className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-7xl mx-auto px-4 h-full"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl shadow-xl w-full md:w-1/2 object-contain max-h-[70vh]"
                  loading="lazy"
                />

                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-3xl sm:text-4xl font-extrabold mb-6">{project.title}</h3>
                  <p className="text-lg text-textSecondary mb-6 leading-relaxed">{project.summary}</p>

                  <div className="flex flex-wrap gap-2 mt-4 mb-8">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-accent text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-sm"
                      >
                        ✦ {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="flex items-center gap-2"
                      onClick={() => handleViewProject(project.id)}
                      leftIcon={<FiEye />}
                    >
                      View Project
                    </Button>

                    {project.repoUrl && (
                      <Button
                        variant="outline"
                        size="lg"
                        className="flex items-center gap-2"
                        onClick={() => window.open(project.repoUrl!, "_blank")}
                        leftIcon={<FiExternalLink />}
                      >
                        View Code
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-4"
        >
          <Button
            size="lg"
            variant="outline"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:text-black transition-all duration-300"
            onClick={handleViewAllProjects}
            leftIcon={<FiGrid />}
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
