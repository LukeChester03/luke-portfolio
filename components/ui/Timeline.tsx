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
  FaPhp,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFirebase } from "react-icons/si";

const timelineData = [
  {
    section: "Education",
    items: [
      {
        date: "Sept 2021 - July 2025",
        title: "BSc (Hons) Computer Science with Industrial Experience",
        company: "University of Loughborough",
        description: [
          "Relevant Modules: Computer Systems (85%), Object Oriented Programming (83%), Software Engineering (75%), Maths for Computer Science (65%), Web Programming (77%).",
        ],
        icon: <FaLaptopCode />,
      },
      {
        date: "Sept 2019 - June 2021",
        title: "A Levels: Geography (A), Maths (B), Economics (B), EPQ (B)",
        company: "Reading Grammar School",
        icon: <FaLaptopCode />,
      },
    ],
  },
  {
    section: "Relevant Experience",
    items: [
      {
        date: "Sept 2023 - Aug 2024",
        title: "Software Engineer",
        company: "Accenture, London",
        description: [
          "Developed a React.js site for patient information display used as client demo.",
          "Worked in cross-functional teams developing full-stack applications including Generative AI features.",
          "Designed and deployed internal terminology site used by 100+ employees, saving 20% time.",
          "Visualised a sales presentation contributing to business growth.",
        ],
        icon: <FaBriefcase />,
        techStack: [<FaReact />, <FaPython />, <FaDatabase />, <FaGitAlt />],
      },
      {
        date: "Jan 2023 - Aug 2024",
        title: "Software Engineer",
        company: "AppAtree (Remote)",
        description: [
          "Built a React.js blog website now flagship site.",
          "Resolved 20+ critical bugs for mobile app, achieving 1000+ downloads and 5-star rating.",
          "Contributed to Agile sprints, reducing bug backlog by 70%.",
        ],
        icon: <FaBriefcase />,
        techStack: [<FaReact />, <FaNodeJs />, <FaGitAlt />],
      },
      {
        date: "July 2021 - Aug 2021",
        title: "Junior Developer (Intern)",
        company: "MMOB, Canary Wharf, London",
        description: [
          "Manipulated data into graph visualisations using Python and matplotlib.",
          "Used SQL queries to fetch client data, improving company data understanding.",
        ],
        icon: <FaBriefcase />,
        techStack: [<FaPython />, <FaDatabase />],
      },
    ],
  },
  {
    section: "Skills",
    items: [
      {
        title: "Coding Skills (Advanced):",
        description: ["JavaScript, TypeScript, Node.js, Python, SQL, React.js, CSS"],
        icon: <FaLaptopCode />,
      },
      {
        title: "Soft Skills:",
        description: [
          "Team Management, Data Visualisations, Workshops, Presentations, Teamwork, Brainstorming",
        ],
        icon: <FaLaptopCode />,
      },
    ],
  },
  {
    section: "Selected Projects",
    items: [
      {
        title: "Terminology Hub",
        description: [
          "Built React front-end with real-time search, term submission & voting integrated with Python REST APIs.",
        ],
        icon: <FaLaptopCode />,
      },
      {
        title: "Venue Booking Website",
        description: [
          "Developed PHP site with SQL database for real-time bookings, dynamic content using ES6 & AJAX.",
        ],
        icon: <FaPhp />,
      },
      {
        title: "AI Powered Mobile App",
        description: [
          "Built global tourism app using React Native, Firebase, Google Gemini AI, Google Maps API with caching system reducing API calls by 95%.",
        ],
        icon: <SiFirebase />,
      },
    ],
  },
];

const TechBadge = ({ icon }) => (
  <div className="text-red-600 bg-red-100 rounded-full p-2 mr-2 flex items-center justify-center text-xl shadow-sm">
    {icon}
  </div>
);

const CARD_WIDTH_PX = 480;

const TimelineItem = ({ item, index }) => {
  const isRightSide = index % 2 === 0;

  return (
    <motion.div
      className="relative mb-16 px-4"
      initial={{ opacity: 0, x: isRightSide ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        maxWidth: `${CARD_WIDTH_PX}px`,
        marginLeft: isRightSide ? "calc(50% + 1.5rem)" : undefined,
        marginRight: !isRightSide ? "calc(50% + 1.5rem)" : undefined,
        textAlign: "left",
      }}
    >
      {/* Icon bullet */}
      <div
        className="absolute top-5 w-14 h-14 bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg text-2xl"
        style={{
          left: isRightSide ? "-52px" : "calc(100% - 4px)",
        }}
      >
        {item.icon}
      </div>

      {/* Card content */}
      <div className="bg-white text-gray-900 rounded-xl shadow-lg p-8 dark:bg-gray-800 dark:text-white w-full text-left">
        {item.date && (
          <span className="text-gray-600 dark:text-gray-400 font-mono text-sm tracking-wide">
            {item.date}
          </span>
        )}
        {item.title && <h3 className="text-2xl font-semibold mt-1 mb-1">{item.title}</h3>}
        {item.company && (
          <h4 className="text-lg font-medium text-red-700 dark:text-red-500 mb-3">
            {item.company}
          </h4>
        )}

        {item.description && (
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
            {item.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}

        {item.techStack && (
          <div className="flex mt-5 flex-wrap justify-start">
            {item.techStack.map((icon, idx) => (
              <TechBadge key={idx} icon={icon} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const TimelineSection = ({ section }) => (
  <>
    <h2 className="text-4xl font-semibold mb-12 mt-20 border-b border-red-600 inline-block">
      {section.section}
    </h2>
    <div className="relative">
      {section.items.map((item, idx) => (
        <TimelineItem key={idx} item={item} index={idx} />
      ))}
    </div>
  </>
);

const Timeline = () => (
  <div className="relative max-w-5xl mx-auto mt-12 px-4">
    {/* Center vertical line */}
    <div className="hidden md:block absolute left-1/2 top-0 w-1 bg-red-600 h-full -translate-x-1/2" />
    {timelineData.map((section, idx) => (
      <TimelineSection key={idx} section={section} />
    ))}
  </div>
);

export default Timeline;
