
import React from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";

interface Project {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
}

interface ProjectsProps {
  projects: Project[];
  loading: boolean;
}

const Projects = ({ projects, loading }: ProjectsProps) => {
  // Fixed projects as requested
  const fixedProjects = [
    {
      name: "Sawti",
      description: "AI voice assistant for Moroccan Arabic",
      html_url: "https://github.com/lurantys/sawti",
      topics: ["Python", "Whisper", "GPT-3.5"],
      stargazers_count: 12,
      forks_count: 2
    },
    {
      name: "Pokedoro",
      description: "Pokémon-themed Pomodoro timer",
      html_url: "https://github.com/lurantys/pokedoro",
      topics: ["React", "Tailwind", "Framer Motion"],
      stargazers_count: 8,
      forks_count: 1
    },
    {
      name: "Zentype",
      description: "Minimalist Zen typing test",
      html_url: "https://github.com/lurantys/zentype",
      topics: ["TypeScript", "Next.js"],
      stargazers_count: 5,
      forks_count: 0
    }
  ];

  const displayProjects = fixedProjects;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="py-16">
      <h2 className="text-3xl md:text-4xl font-manrope lowercase mb-6 text-center text-slate-200">
        <span className="text-blue-500">featured</span> projects
      </h2>
      <p className="text-center text-slate-300/70 mb-12 max-w-2xl mx-auto">
        A collection of my work in AI, machine learning, and software development.
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {displayProjects.map((project, index) => (
          <motion.div
            key={project.name}
            variants={item}
            className="glass-card p-6 h-full flex flex-col hover-lift"
          >
            <h3 className="text-xl font-manrope lowercase mb-2 text-blue-500">
              {project.name}
            </h3>
            <p className="text-sm text-slate-300/80 mb-4">
              {project.description || "No description available"}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.topics.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-slate-700 rounded-full px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-500 mr-1" />
                  <span className="text-xs">{project.stargazers_count}</span>
                </div>
                <div className="flex items-center">
                  <GitFork size={16} className="text-slate-400 mr-1" />
                  <span className="text-xs">{project.forks_count}</span>
                </div>
              </div>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-500 flex items-center hover:underline"
              >
                <span className="mr-1">View</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-10">
        <a
          href="https://github.com/lurantys"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 inline-flex items-center"
        >
          <span>See all projects</span>
          <svg
            className="w-5 h-5 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;
