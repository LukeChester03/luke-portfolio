export interface Project {
  id: number;
  title: string;
  image: string;
  summary: string;
  details: string;
  techStack: string[];
  repoUrl: string | null;
  demoUrl: string | null;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "PathWise — AI-Powered Tourism Assistant",
    image: "/PathWise_ss_1.png",
    summary: "Mobile app combining real-time geolocation with AI-generated cultural stories.",
    details:
      "Built with React Native, Firebase, Google Maps SDK, and Google's Gemini AI. Features include caching for API cost optimization and gamified location-based learning.",
    techStack: [
      "React Native",
      "AI (Google Gemini)",
      "Firebase",
      "Google Maps SDK",
      "Google Cloud",
    ],
    repoUrl: null,
    demoUrl: null,
  },
  {
    id: 2,
    title: "Terminology Hub",
    image: "/TermHub_ss_1.png",
    summary: "Internal tool for employees to search and submit company terminology.",
    details:
      "Frontend in React, backend in Python with MongoDB. Includes real-time search and voting system.",
    techStack: ["React", "Python", "MongoDB"],
    repoUrl: null,
    demoUrl: null,
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: "/PW_ss_1.png",
    summary: "Interactive portfolio site with animations and 3D elements.",
    details:
      "Built with React, TypeScript, and Framer Motion. Designed for responsiveness and accessibility.",
    techStack: ["React", "TypeScript", "Framer Motion", "Three.js"],
    repoUrl: "https://github.com/LukeChester03/luke-portfolio",
    demoUrl: null,
  },
]; 