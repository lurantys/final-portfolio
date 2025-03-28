import React from 'react';
import { motion } from 'framer-motion';

const LurantisPage = () => {
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
          <div className="bg-gradient-to-r from-green-700 to-pink-700 p-6 mt-10 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-white font-mono">Lurantis</h1>
                <div className="mt-2 flex gap-2">
                  {/* Type badges with icons, Bulbapedia-inspired */}
                  <span className="px-3 py-1.5 bg-[#7AC74C] text-white rounded text-sm font-medium uppercase flex items-center">
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 512 512" fill="white">
                      <path d="M97.4,440.6c-1.6-2-9.8-11.2-16.8-22.5C34.8,344.8,14,277.1,14,215.4c0-17,1.4-32.7,4.3-46.9c0.8-4.2,1.8-8.8,3-13.6C33.1,97.6,83.9,51.9,151,36.8c14.6-3.3,32.9-5.2,52-5.2c52.3,0,101.5,11.8,138.3,33c36.8,21.2,60.8,51.3,66.6,83.8c0.4,1.3,0.8,2.6,1.1,3.9c10.6,39.2,7.8,76.9-8.1,108.7c-14.8,29.5-40.4,54.9-72.3,76.2c13.6-31.2,12.8-64.8,1.3-93.1c10,2.5,19.9,3.7,29.2,3.7c14.8,0,27.7-2.8,36.5-8.3c15.1-9.5,37.5-10.2,57.4,6.6c0,0,20.8,18.1,30.4,27.8c35,35.3,56.5,77.7,63.1,125.3C325.6,492.7,157.5,516.4,97.4,440.6z M328.1,222.3c0.5,1.2,0.9,2.4,1.3,3.6C328.9,224.7,328.5,223.5,328.1,222.3z M422.9,185.4c-6-8.2-12.6-15.4-19.5-21.5c0.2,0.9,0.4,1.8,0.6,2.7c0.9,5,1.6,10.6,1.8,16.8C412.2,183.2,417.8,183.8,422.9,185.4z" />
                    </svg>
                    Grass
                  </span>
                </div>
              </div>
              <div className="text-right mt-4 md:mt-0">
                <div className="text-xl font-mono text-green-300">The Bloom Sickle Pokémon</div>
                <div className="text-sm text-blue-300 font-mono">Alola Region • #754</div>
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
                src="https://img.pokemondb.net/sprites/scarlet-violet/normal/lurantis.png"
                alt="Lurantis"
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
                  "It requires a lot of effort to maintain Lurantis's vivid coloring. This Pokémon is popular among collectors."
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>
                      <h3 className="text-xl font-bold text-yellow-300 uppercase font-mono">Appearance</h3>
                    </div>
                    <p className="text-gray-300 font-mono text-sm">
                      Lurantis has a primarily pink body with green accents. It resembles an orchid mantis, with scythe-like arms that look like flower petals. The Pokémon has evolved to look like a beautiful flower to attract prey.
                    </p>
                  </div>
                  
                  <div className="bg-gray-700 p-3 rounded-lg border border-gray-600">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>
                      <h3 className="text-xl font-bold text-yellow-300 uppercase font-mono">Origin</h3>
                    </div>
                    <p className="text-gray-300 font-mono text-sm">
                      Lurantis is based on the orchid mantis, an insect known for its flower-like appearance. Unlike most Pokémon that resemble plants but are actually animals, Lurantis is a plant that evolved to look like an insect.
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
                        <span className="text-gray-300 font-mono">70</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3 border border-gray-600">
                        <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-300 font-mono">Attack</span>
                        <span className="text-gray-300 font-mono">105</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3 border border-gray-600">
                        <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-300 font-mono">Defense</span>
                        <span className="text-gray-300 font-mono">90</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3 border border-gray-600">
                        <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-300 font-mono">Speed</span>
                        <span className="text-gray-300 font-mono">45</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3 border border-gray-600">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
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

export default LurantisPage;