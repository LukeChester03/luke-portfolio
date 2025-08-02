// TimelineSection.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaReact,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaNodeJs,
  FaLaptopCode,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFirebase } from "react-icons/si";

interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: string[];
  icon: React.ReactNode;
  techStack?: React.ReactNode[];
}

interface TimelineSection {
  section: string;
  items: TimelineItem[];
}

const timelineData: TimelineSection[] = [
  {
    section: "Education",
    items: [
      {
        date: "Sept 2021 – July 2025",
        title: "BSc (Hons) Computer Science with Industrial Experience",
        company: "Loughborough University",
        description: [
          "Graduated with a 2:1",
          "Key modules: Human Computer Interaction (82%), Object-Oriented Programming (83%), Software Engineering (75%), Data Mining and Machine Learning (70%), Web Programming (77%).",
          "Industrial placement: Hands-on experience applying full-stack development and AI integration in real-world projects.",
        ],
        icon: <FaLaptopCode />,
      },
    ],
  },
  {
    section: "Experience",
    items: [
      {
        date: "Sept 2023 – Aug 2024",
        title: "Software Engineer (Full-time Placement)",
        company: "Accenture, London",
        description: [
          "Designed and developed a React.js web app to display patient information, showcased in client demos.",
          "Collaborated in cross-functional Agile teams to deliver full-stack applications, including features powered by Generative AI.",
          "Led design and deployment of an internal terminology site used by 100+ employees, reducing search time by 20%.",
          "Created dynamic sales presentation visualisations contributing directly to new business wins.",
        ],
        icon: <FaBriefcase />,
        techStack: [<FaReact />, <FaPython />, <FaDatabase />, <FaGitAlt />],
      },
      {
        date: "Jan 2023 – Aug 2024",
        title: "Software Engineer (Remote)",
        company: "AppAtree",
        description: [
          "Developed a flagship React.js blog website, enhancing user engagement and content management.",
          "Resolved 20+ critical mobile app bugs, resulting in 1000+ downloads and a consistent 5-star rating.",
          "Contributed actively in Agile sprints, reducing bug backlog by 70% and improving app stability.",
        ],
        icon: <FaBriefcase />,
        techStack: [<FaReact />, <FaNodeJs />, <FaGitAlt />],
      },
      {
        date: "July 2021 – Aug 2021",
        title: "Junior Developer Intern",
        company: "MMOB, Canary Wharf, London",
        description: [
          "Processed and visualised complex datasets using Python and matplotlib for client reporting.",
          "Optimised SQL queries to extract actionable insights, improving company data accuracy.",
        ],
        icon: <FaBriefcase />,
        techStack: [<FaPython />, <FaDatabase />],
      },
    ],
  },
];

const TechBadge = ({ icon }: { icon: React.ReactNode }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="text-accent bg-accent/20 rounded-full p-2 mr-2 flex items-center justify-center text-xl shadow-sm"
  >
    {icon}
  </motion.div>
);

export default function TimelineSection() {
  return (
    <section className="snap-start w-full min-h-screen px-6 md:px-10 py-8 text-textPrimary">
      <div className="max-w-6xl mx-auto">
        {timelineData.map((section, idx) => (
          <div key={idx} className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-accent pl-4"
            >
              {section.section}
            </motion.h2>

            <div className="relative border-l-2 border-dashed border-accent/40 pl-8">
              {section.items.map((item, itemIdx) => (
                <motion.div
                  key={itemIdx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: itemIdx * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-12 relative"
                >
                  <div className="absolute left-[-1.15rem] top-2.5 w-5 h-5 bg-accent rounded-full border-4 border-background"></div>

                  <div>
                    <p className="text-sm text-textSecondary font-mono mb-1">{item.date}</p>
                    <h3 className="text-xl font-semibold text-accent mb-1">{item.title}</h3>
                    <h4 className="text-lg font-medium mb-3">{item.company}</h4>
                    <ul className="list-disc list-inside text-base space-y-1">
                      {item.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    {item.techStack && (
                      <div className="flex mt-4 flex-wrap">
                        {item.techStack.map((icon, idx) => (
                          <TechBadge key={idx} icon={icon} />
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
