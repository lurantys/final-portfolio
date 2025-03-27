
import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Code2 } from "lucide-react";

interface SocialLinksProps {
  compact?: boolean;
}

const SocialLinks = ({ compact = false }: SocialLinksProps) => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/lurantys",
      icon: Github,
      color: "hover:bg-slate-700",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/lurantys",
      icon: Code2,
      color: "hover:bg-[#FFA116]",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/octopathic",
      icon: Twitter,
      color: "hover:bg-[#1DA1F2]",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aymen-nhaila",
      icon: Linkedin,
      color: "hover:bg-[#0077B5]",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 10, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  if (compact) {
    return (
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex items-center gap-4"
      >
        {socialLinks.map((link) => (
          <motion.a
            key={link.name}
            variants={item}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-300 hover:text-blue-500 transition-colors"
            aria-label={link.name}
          >
            <link.icon size={20} />
          </motion.a>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-wrap justify-center gap-3"
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          variants={item}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-700 hover:text-white transition-all duration-300 ${link.color}`}
        >
          <link.icon size={16} />
          <span className="text-sm">{link.name}</span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
