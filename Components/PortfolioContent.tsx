"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/Components/Button";
import { FaGamepad, FaLaptopCode, FaCode, FaProjectDiagram, FaChevronDown } from "react-icons/fa";
import Link from "next/link";

interface Project {
  title: string;
  images: (string | null)[];
  description: string;
  details: string;
  techStack: string[];
  repoUrl?: string | null;
}

const placeholderIcons = [FaGamepad, FaLaptopCode, FaCode, FaProjectDiagram];

const projects: Project[] = [
  {
    title: "PathWise — AI-Powered Tourism Assistant",
    images: ["PathWise_ss_1.png", "PathWise_ss_2.png", "PathWise_ss_3.png"],
    description:
      "An innovative mobile app that combines real-time location tracking with AI-generated, personalised cultural stories and gamified experiences to enrich how users explore the world.",
    details:
      "Built with React Native, Firebase, Google Maps SDK, and Google’s Gemini AI, PathWise delivers tailored cultural stories and gamified learning based on user location and behaviour. Developed using Feature-Driven Development and validated through expert feedback and user testing, it optimizes API usage with caching strategies for a smooth, cost-effective experience.",
    techStack: [
      "React Native",
      "AI (Google Gemini)",
      "Firebase",
      "Google Maps SDK",
      "Google Cloud Platform",
    ],
    repoUrl: null,
  },
  {
    title: "Terminology Hub",
    images: ["TermHub_ss_1.png", "TermHub_ss_2.png", "TermHub_ss_3.png"],
    description:
      "A sophisticated internal tool displaying company terminology to employees, leveraging database connections.",
    details:
      "Developed with React frontend communicating with a Python backend, this hub uses MongoDB for storing terminology data. It provides employees with quick access and search functionality across company terms.",
    techStack: ["React", "Python", "MongoDB"],
    repoUrl: "",
  },
  {
    title: "Library Booking System",
    images: [null, null, null],
    description:
      "A fully Python-based system allowing users to borrow books from a managed database.",
    details:
      "Implemented exclusively in Python, this system manages book checkouts, availability, and user accounts through a command-line interface and backend logic.",
    techStack: ["Python"],
    repoUrl: "",
  },
  {
    title: "Machine Learning & Data Mining Algorithm",
    images: ["DM_ss_1.png", "DM_ss_2.png", "DM_ss_3.png"],
    description:
      "An image-input-based machine learning model training system that outputs detailed graphs and visualizations.",
    details:
      "Built using Jupyter Notebook and Python, this project processes image datasets to train models and generates comprehensive graphical reports on model performance and insights.",
    techStack: ["Python", "Jupyter Notebook", "Machine Learning", "Data Mining"],
    repoUrl: "https://github.com/LukeChester03/Data-Mining",
  },
  {
    title: "Portfolio Website",
    images: ["PW_ss_1.png", "PW_ss_2.png", "PW_ss_3.png"],
    description:
      "A clean, modern portfolio website showcasing skills, projects, and contact information.",
    details:
      "Developed with React, TypeScript, and Framer Motion, the portfolio features smooth animations, 3D elements, and responsive design following best practices for accessibility and performance.",
    techStack: ["React", "TypeScript", "Three.js", "Framer Motion"],
    repoUrl: "https://github.com/LukeChester03/luke-portfolio",
  },
];

const fadeSlideVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

function PlaceholderIcon({
  projectIndex,
  imageIndex,
}: {
  projectIndex: number;
  imageIndex: number;
}) {
  const Icon = placeholderIcons[(projectIndex + imageIndex) % placeholderIcons.length];
  return (
    <div className="flex items-center justify-center w-full h-[40vh] sm:h-[50vh] md:h-[70vh] rounded-xl bg-secondary text-textSecondary select-none">
      <Icon className="text-5xl sm:text-7xl md:text-9xl" aria-hidden="true" />
    </div>
  );
}

function ScrollIndicatorSection({ text }: { text: string }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.4, ease: "easeIn" } }}
      className="snap-start h-screen flex flex-col items-center justify-center px-4 sm:px-8 bg-transparent text-textPrimary text-center select-none"
    >
      <motion.p
        className="text-2xl sm:text-3xl md:text-4xl font-semibold max-w-xl mb-12 px-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {text}
      </motion.p>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className="text-accent text-4xl sm:text-5xl md:text-6xl"
        aria-hidden="true"
      >
        <FaChevronDown />
      </motion.div>
    </motion.section>
  );
}

export default function PortfolioContent() {
  return (
    <div className="w-full">
      <ScrollIndicatorSection text="Here are a few of my projects" />

      {projects.map((project, projIdx) => (
        <React.Fragment key={project.title}>
          {/* Section 1: Title + Description + Image */}
          <section className="snap-start h-screen flex flex-col md:flex-row items-center justify-center px-6 sm:px-10 md:px-20 text-center md:text-left max-w-7xl mx-auto w-full gap-6 md:gap-10">
            <motion.div
              className="md:w-1/2 flex flex-col justify-center items-center md:items-start"
              initial="hiddenLeft"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={fadeSlideVariants}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6 max-w-md text-textPrimary">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-textSecondary max-w-md">
                {project.description}
              </p>
            </motion.div>

            {project.images[0] ? (
              <motion.img
                src={project.images[0]}
                alt={`${project.title} screenshot 1`}
                loading="lazy"
                className="w-full sm:w-4/5 md:w-3/5 rounded-xl shadow-xl max-h-[40vh] sm:max-h-[50vh] md:max-h-[80vh] object-contain"
                initial="hiddenRight"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                variants={fadeSlideVariants}
              />
            ) : (
              <PlaceholderIcon projectIndex={projIdx} imageIndex={0} />
            )}
          </section>

          {/* Section 2: Details + Image */}
          <section className="snap-start h-screen flex flex-col md:flex-row items-center justify-center px-6 sm:px-10 md:px-20 bg-transparent text-center md:text-left max-w-7xl mx-auto w-full gap-6 md:gap-10">
            {project.images[1] ? (
              <motion.img
                src={project.images[1]}
                alt={`${project.title} screenshot 2`}
                loading="lazy"
                className="w-full md:w-1/2 rounded-xl shadow-xl max-h-[35vh] sm:max-h-[50vh] md:max-h-[70vh] object-cover order-2 md:order-1"
                initial="hiddenLeft"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                variants={fadeSlideVariants}
              />
            ) : (
              <PlaceholderIcon projectIndex={projIdx} imageIndex={1} />
            )}

            <motion.div
              className="md:w-1/2 flex flex-col justify-center order-1 md:order-2 items-center md:items-start"
              initial="hiddenRight"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={fadeSlideVariants}
            >
              <p className="text-sm sm:text-base md:text-lg text-textSecondary max-w-md">
                {project.details}
              </p>
            </motion.div>
          </section>

          {/* Section 3: Tech Stack + Image */}
          <section className="snap-start h-screen flex flex-col md:flex-row items-center justify-center px-6 sm:px-10 md:px-20 bg-transparent text-center md:text-left max-w-7xl mx-auto w-full gap-6 md:gap-10">
            <motion.div
              className="md:w-1/2 flex flex-col justify-center items-center md:items-start"
              initial="hiddenLeft"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={fadeSlideVariants}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6 text-textPrimary">
                Technologies Used
              </h3>
              <ul className="flex flex-wrap gap-3 sm:gap-4 max-w-md justify-center md:justify-start">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="bg-accent text-primary px-2 py-1 sm:px-3 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold select-none"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 md:mt-8 inline-block"
                >
                  <Button size="lg" variant="outline">
                    View Source Code
                  </Button>
                </a>
              )}
            </motion.div>

            {project.images[2] ? (
              <motion.img
                src={project.images[2]}
                alt={`${project.title} screenshot 3`}
                loading="lazy"
                className="w-full sm:w-4/5 md:w-3/5 rounded-xl shadow-xl max-h-[35vh] sm:max-h-[50vh] md:max-h-[70vh] object-contain"
                initial="hiddenRight"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                variants={fadeSlideVariants}
              />
            ) : (
              <PlaceholderIcon projectIndex={projIdx} imageIndex={2} />
            )}
          </section>

          {projIdx !== projects.length - 1 && (
            <ScrollIndicatorSection text="Scroll for my Next Project" />
          )}
        </React.Fragment>
      ))}

      <section className="snap-start h-screen flex flex-col items-center justify-center px-6 sm:px-8 bg-transparent text-textPrimary text-center select-none">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 max-w-xl text-textPrimary items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Stay tuned <br /> <h3>I'm building more awesome stuff!</h3>
        </motion.h2>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeOut" }}
          className="text-accent text-5xl sm:text-6xl md:text-7xl"
          aria-hidden="true"
        />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <Link href="/contact">
            <Button size="lg">Reach Out</Button>
          </Link>
          <Link href="/">
            <Button size="lg">Back to Home</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
