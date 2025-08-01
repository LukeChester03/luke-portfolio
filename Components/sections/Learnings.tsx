"use client";

import React from "react";
import { FiTrendingUp, FiUsers, FiCode, FiAward } from "react-icons/fi";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: <FiTrendingUp className="text-4xl" />,
    title: "AI Integration Expert",
    description: "Successfully integrated Google's Gemini AI into PathWise, reducing API costs by 40% through intelligent caching strategies.",
    metric: "40% Cost Reduction",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <FiUsers className="text-4xl" />,
    title: "User-Centric Developer",
    description: "Built cross-platform mobile apps with React Native, achieving 95% code reuse between iOS and Android platforms.",
    metric: "95% Code Reuse",
    color: "from-green-500 to-green-600"
  },
  {
    icon: <FiCode className="text-4xl" />,
    title: "Full-Stack Specialist",
    description: "Developed complete web applications from frontend to backend, including database design and cloud deployment.",
    metric: "End-to-End Solutions",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: <FiAward className="text-4xl" />,
    title: "Problem Solver",
    description: "Transformed complex business requirements into elegant technical solutions, consistently delivering ahead of deadlines.",
    metric: "100% On-Time Delivery",
    color: "from-orange-500 to-orange-600"
  }
];

const KeyAchievements = () => {
  return (
    <section
      id="learnings"
      className="min-h-screen snap-start flex flex-col justify-center items-center text-center relative px-4 sm:px-6 md:px-8 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl w-full"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 h1 text-center text-textPrimary"
        >
          Key Achievements
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-textSecondary mb-12 max-w-3xl mx-auto"
        >
          Proven track record of delivering impactful solutions and driving technical innovation
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <motion.div
                initial={{ rotate: -10, scale: 0.8 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  rotate: 5, 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-white mb-4 mx-auto shadow-lg`}
              >
                {achievement.icon}
              </motion.div>

              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="text-xl font-bold text-textPrimary mb-2"
              >
                {achievement.title}
              </motion.h3>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="text-textSecondary text-sm leading-relaxed mb-3"
              >
                {achievement.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="inline-block bg-accent/20 text-accent font-semibold px-3 py-1 rounded-full text-sm"
              >
                {achievement.metric}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-textSecondary text-lg">
            Ready to bring this level of expertise to your next project
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default KeyAchievements;
