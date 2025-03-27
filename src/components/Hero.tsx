import React from "react";
import { motion } from "framer-motion";
import PokemonEasterEgg from "./PokemonEasterEgg";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <section className="text-center relative"> {/* Added relative positioning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto"
      >
        <div className="max-w-5xl mx-auto"> {/* Removed flex and centering from this div */}
          <h1 className="text-5xl md:text-7xl font-bold font-manrope lowercase text-slate-200 mb-4">
            hi, i'm <span className="text-blue-500">aymen nhaila</span>
          </h1>
          <p className="text-slate-300/70 max-w-2xl mx-auto">
            i'm a software engineer passionate about building things with code.
          </p>
          <img
            src="/barry.gif"
            alt="Barry Sprite"
            className="w-32 h-auto absolute top-0 right-0" // Absolute positioning
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
