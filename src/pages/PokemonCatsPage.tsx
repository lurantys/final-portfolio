import React from 'react';
import { motion } from 'framer-motion';

const HisuianZoroarkPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4">
      {/* Pokédex frame */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-red-500 rounded-xl shadow-2xl overflow-hidden border-8 border-gray-800"
      >
        {/* Display screen */}
        <div className="bg-gray-900 m-4 rounded-lg overflow-hidden border-4 border-gray-700 relative">
          {/* Status lights */}
          <div className="absolute top-4 left-4 flex space-x-2">
            <div className="w-4 h-4 rounded-full bg-red-500 border border-red-700 animate-pulse"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-500 border border-yellow-700"></div>
            <div className="w-4 h-4 rounded-full bg-green-500 border border-green-700"></div>
          </div>
          
          {/* Pokémon header */}
          <div className="bg-gradient-to-r from-indigo-800 to-purple-900 p-6 mt-10 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-white font-mono">Hisuian Zoroark</h1>
                <div className="mt-2 flex gap-2">
                  {/* Type badges with icons, Bulbapedia-inspired */}
                  <span className="px-3 py-1.5 bg-[#A8A878] text-white rounded text-sm font-medium uppercase flex items-center">
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 512 512" fill="white">
                      <path d="M248,56.35c-97.7,0-177,79.3-177,177c0,97.7,79.3,177,177,177s177-79.3,177-177C425,135.65,345.7,56.35,248,56.35z M248,386.35c-84.2,0-153-68.8-153-153c0-84.2,68.8-153,153-153s153,68.8,153,153C401,317.55,332.2,386.35,248,386.35z" />
                    </svg>
                    Normal
                  </span>
                  <span className="px-3 py-1.5 bg-[#705898] text-white rounded text-sm font-medium uppercase flex items-center">
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 512 512" fill="white">
                      <path d="M394.8,246.7c0-92.3-74.8-167.2-167.2-167.2c-92.3,0-167.2,74.8-167.2,167.2S135.3,413.8,227.7,413.8C319.9,413.8,394.8,339,394.8,246.7z M227.7,349.9c-57,0-103.2-46.2-103.2-103.2s46.2-103.2,103.2-103.2s103.2,46.2,103.2,103.2S284.6,349.9,227.7,349.9z" />
                      <path d="M96.1,246.7c0,72.5,59,131.5,131.5,131.5c72.5,0,131.5-59,131.5-131.5s-59-131.5-131.5-131.5C155.1,115.1,96.1,174.1,96.1,246.7z M227.7,133.4c62.5,0,113.2,50.7,113.2,113.2s-50.7,113.2-113.2,113.2c-62.5,0-113.2-50.7-113.2-113.2S165.1,133.4,227.7,133.4z" />
                    </svg>
                    Ghost
                  </span>
                </div>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <div className="text-xl font-mono text-green-300">The Baneful Fox Pokémon</div>
                <div className="text-sm text-blue-300 font-mono">Hisui Region Form • #571</div>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex flex-col md:flex-row p-6 bg-gray-800 text-gray-200">
            {/* Image without container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/3 flex justify-center items-center"
            >
              <img
                src="https://img.pokemondb.net/sprites/scarlet-violet/normal/zoroark-hisuian.png"
                alt="Hisuian Zoroark"
                className="w-64 h-64 object-contain drop-shadow-xl"
              />
            </motion.div>
            
            {/* Right side - details */}
            <div className="md:w-2/3 p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <h2 className="text-2xl font-bold text-green-400 font-mono border-b border-green-500/30 pb-2 uppercase">Pokédex Entry</h2>
                </div>
                <p className="text-blue-200 mb-6 italic font-mono text-sm border p-3 bg-gray-900 rounded">
                  "A vicious and aggressive Pokémon with ghostly traits. The long, writhing fur projects terrifying illusions, and it's said to curse those who harm it."
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>
                      <h3 className="text-xl font-bold text-yellow-300 uppercase font-mono">Appearance</h3>
                    </div>
                    <p className="text-gray-300 font-mono text-sm">
                      Hisuian Zoroark is primarily white with flowing white and pink fur that resembles hair. Its eyes are a piercing red, and it has a haunting, spectral appearance that instills fear in those who see it.
                    </p>
                  </div>
                  
                  <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>
                      <h3 className="text-xl font-bold text-yellow-300 uppercase font-mono">Origin</h3>
                    </div>
                    <p className="text-gray-300 font-mono text-sm">
                      The spirit of a Zoroark, perished and reborn in the snowy lands of Hisui. In its new form, the Pokémon projects its malice through illusions that can terrify even the bravest of trainers.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 bg-gray-700 p-4 rounded-lg border border-gray-600">
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                    <h3 className="text-xl font-bold text-blue-300 uppercase font-mono">Stats</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-300 font-mono">HP</span>
                        <span className="text-gray-300 font-mono">55</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3 border border-gray-600">
                        <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '55%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-300 font-mono">Attack</span>
                        <span className="text-gray-300 font-mono">100</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3 border border-gray-600">
                        <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-300 font-mono">Special Attack</span>
                        <span className="text-gray-300 font-mono">125</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3 border border-gray-600">
                        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-300 font-mono">Speed</span>
                        <span className="text-gray-300 font-mono">110</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3 border border-gray-600">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* D-Pad control */}
          <div className="bg-gray-700 p-4 flex justify-between items-center">
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-gray-900 rounded-full"></div>
              <div className="w-6 h-6 bg-gray-900 rounded-full"></div>
            </div>
            
            <div className="relative w-16 h-16">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gray-900"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gray-900"></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gray-900"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gray-900"></div>
              <div className="absolute inset-0 m-auto w-5 h-5 bg-gray-800 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-red-600 p-4 text-center text-sm text-white font-mono">
          <p>This is a hidden easter egg from the Pokédex archives.</p>
          <a href="/" className="text-yellow-300 hover:text-yellow-100 font-medium mt-2 inline-block border border-yellow-400 px-3 py-1 rounded-lg hover:bg-red-700 transition-colors">
            Return to Homepage ↩
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default HisuianZoroarkPage;