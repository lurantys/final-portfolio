
import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Sparkles, Database, Bot } from "lucide-react";

const AIInterests = () => {
  const interests = [
    {
      icon: BrainCircuit,
      title: "Neural Networks",
      description:
        "Fascinated by deep learning architectures and their application in solving complex problems.",
    },
    {
      icon: Sparkles,
      title: "Natural Language Processing",
      description:
        "Exploring how AI can understand and generate human language to create more intuitive interfaces.",
    },
    {
      icon: Database,
      title: "Data Science",
      description:
        "Turning raw data into meaningful insights through statistical analysis and visualization.",
    },
    {
      icon: Bot,
      title: "AI Ethics",
      description:
        "Committed to developing AI systems that are fair, transparent, and beneficial to humanity.",
    },
  ];

  return (
    <div className="py-16">
      <h2 className="text-3xl md:text-4xl font-manrope lowercase mb-6 text-center text-portfolio-text">
        <span className="text-portfolio-blue">ai</span> interests
      </h2>
      <p className="text-center text-portfolio-text/70 mb-12 max-w-2xl mx-auto">
        Areas of artificial intelligence that capture my imagination and drive my learning journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {interests.map((interest, index) => (
          <motion.div
            key={interest.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-6 flex items-start gap-4 hover-lift"
          >
            <div className="p-3 bg-portfolio-blue/10 rounded-lg text-portfolio-blue">
              <interest.icon size={24} />
            </div>
            <div>
              <h3 className="text-lg font-manrope lowercase mb-2 text-portfolio-text">
                {interest.title}
              </h3>
              <p className="text-sm text-portfolio-text/70">
                {interest.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 glass-card p-8 border-l-4 border-l-portfolio-blue"
      >
        <blockquote className="italic text-portfolio-text/80">
          "The development of full artificial intelligence could spell the end of the human race... or it could be the best thing that's ever happened to us. We just don't know."
        </blockquote>
        <div className="mt-4 text-sm text-portfolio-text/60">
          — A perspective I keep in mind while working in AI
        </div>
      </motion.div>
    </div>
  );
};

export default AIInterests;
