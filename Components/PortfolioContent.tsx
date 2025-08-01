"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/Components/Button";
import Link from "next/link";

const projects = [
  {
    title: "PathWise — AI-Powered Tourism Assistant",
    image: "PathWise_ss_1.png",
    summary: "Mobile app combining real-time geolocation with AI-generated cultural stories.",
    details:
      "Built with React Native, Firebase, Google Maps SDK, and Google’s Gemini AI. Features include caching for API cost optimization and gamified location-based learning.",
    techStack: [
      "React Native",
      "AI (Google Gemini)",
      "Firebase",
      "Google Maps SDK",
      "Google Cloud",
    ],
    repoUrl: null,
  },
  {
    title: "Terminology Hub",
    image: "TermHub_ss_1.png",
    summary: "Internal tool for employees to search and submit company terminology.",
    details:
      "Frontend in React, backend in Python with MongoDB. Includes real-time search and voting system.",
    techStack: ["React", "Python", "MongoDB"],
    repoUrl: null,
  },
  {
    title: "Portfolio Website",
    image: "PW_ss_1.png",
    summary: "Interactive portfolio site with animations and 3D elements.",
    details:
      "Built with React, TypeScript, and Framer Motion. Designed for responsiveness and accessibility.",
    techStack: ["React", "TypeScript", "Framer Motion", "Three.js"],
    repoUrl: "https://github.com/LukeChester03/luke-portfolio",
  },
];

const fadeVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="snap-start min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-10 text-textPrimary"
    >
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        className="w-full h-full"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <motion.div
              className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto px-4"
              initial="initial"
              animate="animate"
              variants={fadeVariants}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl shadow-xl w-full md:w-1/2 object-contain max-h-[500px]"
                loading="lazy"
              />

              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-textSecondary mb-4">{project.summary}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                    >
                      ✦ {tech}
                    </span>
                  ))}
                </div>

                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="mt-6">
                      View Code
                    </Button>
                  </a>
                )}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
