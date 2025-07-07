"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/Components/Button";
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
import Link from "next/link";

const timelineData = [
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
  {
    section: "Skills",
    items: [
      {
        title: "Technical Skills",
        description: [
          "Advanced proficiency in JavaScript, TypeScript, Node.js, Python, SQL, React.js, and CSS.",
          "Experience with REST APIs, Git version control, Agile development, and cloud platforms.",
        ],
        icon: <FaLaptopCode />,
      },
      {
        title: "Professional & Soft Skills",
        description: [
          "Strong teamwork, communication, and problem-solving skills.",
          "Experience leading workshops, delivering presentations, and facilitating brainstorming sessions.",
          "Adaptable and quick learner with a passion for innovative technology solutions.",
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
          "Created a React front-end featuring real-time search, user term submission, and voting integrated with Python REST APIs.",
          "Improved internal knowledge sharing and reduced search time across teams.",
        ],
        icon: <FaLaptopCode />,
      },
      {
        title: "Venue Booking Website",
        description: [
          "Developed a PHP-based site with a SQL backend supporting real-time bookings and dynamic content using ES6 and AJAX.",
          "Enhanced booking efficiency and user experience through responsive design.",
        ],
        icon: <FaPhp />,
      },
      {
        title: "AI-Powered Mobile Tourism App",
        description: [
          "Built a global travel app using React Native, Firebase, Google Gemini AI, and Google Maps API.",
          "Implemented a caching system reducing API calls by 95%, improving performance and reducing costs.",
          "Enabled personalized, location-based cultural insights to enrich user travel experiences.",
        ],
        icon: <SiFirebase />,
      },
    ],
  },
];

const TechBadge = ({ icon }: { icon: React.ReactNode }) => (
  <div className="text-accent bg-accent/20 rounded-full p-2 mr-2 flex items-center justify-center text-xl shadow-sm">
    {icon}
  </div>
);

const CARD_WIDTH_PX = 480;

interface TimelineItemProps {
  item: {
    date?: string;
    title?: string;
    company?: string;
    description?: string[];
    icon?: React.ReactNode;
    techStack?: React.ReactNode[];
  };
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
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
        className="absolute top-5 w-14 h-14 bg-accent text-primary rounded-full flex items-center justify-center shadow-lg text-2xl"
        style={{
          left: isRightSide ? "-52px" : "calc(100% - 4px)",
        }}
      >
        {item.icon}
      </div>

      {/* Card content */}
      <div className="bg-primary text-textPrimary rounded-xl shadow-lg p-8 w-full text-left">
        {item.date && (
          <span className="text-textSecondary font-mono text-sm tracking-wide">{item.date}</span>
        )}
        {item.title && <h3 className="text-2xl font-semibold mt-1 mb-1">{item.title}</h3>}
        {item.company && <h4 className="text-lg font-medium text-accent mb-3">{item.company}</h4>}

        {item.description && (
          <ul className="list-disc list-inside space-y-2 text-textSecondary leading-relaxed">
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

interface TimelineSectionProps {
  section: {
    section: string;
    items: any[];
  };
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ section }) => (
  <>
    <h2 className="text-4xl font-semibold mb-12 mt-20 mr-8 border-b border-accent inline-block">
      {section.section}
    </h2>
    <div className="relative">
      {section.items.map((item, idx) => (
        <TimelineItem key={idx} item={item} index={idx} />
      ))}
    </div>
  </>
);

const MobileTimelineItem: React.FC<{ item: TimelineItemProps["item"] }> = ({ item }) => (
  <div className="bg-primary text-textPrimary rounded-xl shadow-lg p-6 mb-8 max-w-xl mx-auto">
    {item.date && (
      <span className="text-textSecondary font-mono text-sm tracking-wide">{item.date}</span>
    )}
    {item.title && <h3 className="text-xl font-semibold mt-1 mb-1">{item.title}</h3>}
    {item.company && <h4 className="text-md font-medium text-accent mb-3">{item.company}</h4>}

    {item.description && (
      <ul className="list-disc list-inside space-y-1 text-textSecondary leading-relaxed text-sm">
        {item.description.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    )}

    {item.techStack && (
      <div className="flex mt-3 flex-wrap justify-start">
        {item.techStack.map((icon, idx) => (
          <TechBadge key={idx} icon={icon} />
        ))}
      </div>
    )}
  </div>
);

const MobileTimelineSection: React.FC<TimelineSectionProps> = ({ section }) => (
  <>
    <h2 className="text-2xl font-semibold mb-6 mt-12 border-b border-accent inline-block px-4">
      {section.section}
    </h2>
    <div>
      {section.items.map((item, idx) => (
        <MobileTimelineItem key={idx} item={item} />
      ))}
    </div>
  </>
);

const Timeline = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkMobile() {
      setIsMobile(window.innerWidth < 768);
    }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="p-4 max-w-md mx-auto">
        {timelineData.map((section, idx) => (
          <MobileTimelineSection key={idx} section={section} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative max-w-5xl mx-auto mt-12 px-4">
      {/* Center vertical line */}
      <div className="hidden md:block absolute left-1/2 top-0 w-1 bg-accent h-full -translate-x-1/2" />
      {timelineData.map((section, idx) => (
        <TimelineSection key={idx} section={section} />
      ))}
    </div>
  );
};

export default Timeline;
