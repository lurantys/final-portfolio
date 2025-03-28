
import React from "react";
import { motion } from "framer-motion";
import PokemonEasterEgg from "./PokemonEasterEgg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-8 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm text-slate-400">
              © {currentYear} aymen nhaila. all rights reserved.
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-slate-400 italic"
          >
            <PokemonEasterEgg>
              (Yes, I name all my cats after Pokémon.)
            </PokemonEasterEgg>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm"
          >
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              back to top ↑
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
