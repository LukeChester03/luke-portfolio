"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiReact,
  SiFirebase,
  SiTailwindcss,
  SiGooglemaps,
  SiPhp,
  SiSqlite,
  SiSupabase,
  SiGooglecloud,
} from "react-icons/si";
import { FiGlobe, FiSmartphone, FiCpu, FiServer } from "react-icons/fi";

// High-level coding skills with project highlights
const highLevelSkills = [
  {
    title: "Web Developer",
    description: "Full-stack web applications with modern frameworks and responsive design",
    icon: <FiGlobe className="text-3xl" />,
    highlight: "Built complete web applications from frontend to backend, including database design, API development, and cloud deployment.",
    badge: "End-to-End Solutions",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "App Developer",
    description: "Cross-platform mobile applications with React Native and native features",
    icon: <FiSmartphone className="text-3xl" />,
    highlight: "Successfully integrated Google's Gemini AI with intelligent caching strategies for cost optimization and enhanced user experience.",
    badge: "AI + Mobile Development",
    color: "from-green-500 to-green-600"
  },
  {
    title: "AI Integrations",
    description: "Integration of AI services and machine learning solutions",
    icon: <FiCpu className="text-3xl" />,
    highlight: "Experience AI integration, cost optimisation, and intelligent caching strategies for enhanced user experiences.",
    badge: "AI Integration",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Backend Design",
    description: "Robust backend systems with scalable architecture and efficient data management",
    icon: <FiServer className="text-3xl" />,
    highlight: "Designed and implemented scalable backend systems with optimized database structures and efficient API endpoints.",
    badge: "Scalable Architecture",
    color: "from-orange-500 to-orange-600"
  }
];

// Technical skills
const techIcons = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Google Maps API", icon: <SiGooglemaps /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "Google Cloud", icon: <SiGooglecloud /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "SQL", icon: <SiSqlite /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen snap-start flex items-center justify-center px-6 py-16"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.2 }}
        className="z-20 text-center max-w-7xl w-full"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-textPrimary mb-12 h1 text-center">
          Skills & Expertise
        </h1>

        {/* High-Level Skills Cards */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.2, delay: 0.05 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {highLevelSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 8, scale: 0.99 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.15, delay: 0.1 + index * 0.03 }}
                whileHover={{ 
                  scale: 1.005, 
                  y: -1,
                  transition: { duration: 0.1 }
                }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <motion.div
                  initial={{ rotate: -2, scale: 0.98 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.2, delay: 0.15 + index * 0.03 }}
                  whileHover={{ 
                    rotate: 1, 
                    scale: 1.02,
                    transition: { duration: 0.1 }
                  }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white mb-4 mx-auto shadow-lg`}
                >
                  {skill.icon}
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.15, delay: 0.2 + index * 0.03 }}
                  className="text-xl font-bold text-textPrimary mb-2"
                >
                  {skill.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.15, delay: 0.25 + index * 0.03 }}
                  className="text-textSecondary text-sm leading-relaxed mb-3"
                >
                  {skill.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.15, delay: 0.3 + index * 0.03 }}
                  className="inline-block bg-accent/20 text-accent font-semibold px-3 py-1 rounded-full text-sm mb-3"
                >
                  {skill.badge}
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.15, delay: 0.35 + index * 0.03 }}
                  className="text-textSecondary text-xs leading-relaxed italic"
                >
                  {skill.highlight}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-textPrimary mb-8">Technologies</h2>
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.15, delay: 0.15 }}
            whileHover={{ 
              scale: 1.002, 
              y: -1,
              transition: { duration: 0.1 }
            }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
              {techIcons.map(({ name, icon }, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.1, delay: 0.2 + index * 0.01 }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -1,
                    transition: { duration: 0.1 }
                  }}
                  className="flex flex-col items-center text-accent text-3xl hover:text-accent-hover transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ 
                      rotate: 3,
                      transition: { duration: 0.1 }
                    }}
                  >
                    {icon}
                  </motion.div>
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.1, delay: 0.25 + index * 0.01 }}
                    className="mt-2 text-xs text-textPrimary text-center"
                  >
                    {name}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
