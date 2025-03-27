import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import PokemonEasterEgg from "./PokemonEasterEgg";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 bg-portfolio-background`}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center justify-between py-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="relative">
              <PokemonEasterEgg>
                <span className="text-lg font-manrope font-extrabold lowercase text-portfolio-blue">
                  aymen nhaila
                </span>
              </PokemonEasterEgg>
            </div>
          </motion.div>
          
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            {["projects", "stats", "ai", "contact"].map((item, index) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm font-medium text-portfolio-text hover:text-portfolio-blue transition-colors lowercase"
              >
                {item}
              </a>
            ))}
          </motion.nav>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center"
          >
            <SocialLinks />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
