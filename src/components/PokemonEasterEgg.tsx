import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface PokemonEasterEggProps {
  children: React.ReactNode;
}

const PokemonEasterEgg = ({ children }: PokemonEasterEggProps) => {
  const [showPokeball, setShowPokeball] = useState(false);
  // Dynamically determine which Pokémon page to show (50-50 chance)
  const randomPokemon = Math.random() < 0.5 ? "hisuian-zoroark" : "lurantis";

  return (
    <Link to={`/${randomPokemon}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div
        className="relative inline-block cursor-pointer"
        onMouseEnter={() => setShowPokeball(true)}
        onMouseLeave={() => setShowPokeball(false)}
      >
        {children}

        {showPokeball && (
          <motion.div
            className="absolute -top-3 -right-3"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, ease: "linear" }}
          >
            <div className="w-5 h-5 rounded-full bg-white border-2 border-red-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-red-500"></div>
              <div className="absolute top-[45%] left-0 w-full h-[10%] bg-black"></div>
              <div className="absolute top-[48%] left-[48%] transform -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-white rounded-full border border-black"></div>
            </div>
          </motion.div>
        )}
      </div>
    </Link>
  );
};

export default PokemonEasterEgg;
