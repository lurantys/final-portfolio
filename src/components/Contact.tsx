import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import { Mail, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl md:text-4xl font-manrope lowercase mb-6 text-center text-portfolio-text">
        <span className="text-portfolio-blue">contact</span> me
      </h2>
      <p className="text-center text-portfolio-text/70 mb-12 max-w-2xl mx-auto">
        Interested in collaborating or just want to say hello? Reach out!
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
            <div className="glass-card p-8">
            <h3 className="text-xl font-manrope lowercase mb-6 text-portfolio-text flex items-center">
              let's connect
              <img
              src="/mew2.gif"
              alt="Mewtwo Sprite"
              className="w-12 h-auto ml-1" // Reduced margin-left
              />
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-portfolio-blue/10 rounded-lg text-portfolio-blue">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-portfolio-text/60 mb-1">Email</div>
                  <a 
                    href="mailto:a.nhaila@aui.ma" 
                    className="text-portfolio-text hover:text-portfolio-blue transition-colors"
                  >
                    a.nhaila@aui.ma
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-portfolio-blue/10 rounded-lg text-portfolio-blue">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-portfolio-text/60 mb-1">Location</div>
                  <p className="text-portfolio-text">
                    Ifrane, Morocco
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-portfolio-blue/10 rounded-lg text-portfolio-blue">
                  <Calendar size={20} />
                </div>
                <div>
                  <div className="text-sm text-portfolio-text/60 mb-1">Availability</div>
                  <p className="text-portfolio-text">
                    Open to collaborations and opportunities
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-sm text-portfolio-text/60 mb-4">Social Profiles</h4>
              <SocialLinks />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1"
        >
          <form className="glass-card p-8">
            <h3 className="text-xl font-manrope lowercase mb-6 text-portfolio-text">
              send a message
              <img
                src="/mew.gif"
                alt="Mew Sprite"
                className="w-16 h-auto inline-block ml-2 align-middle"
              />
            </h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-portfolio-text/60 mb-1">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded-lg border border-portfolio-gray bg-white focus:ring-2 focus:ring-portfolio-blue/30 focus:border-portfolio-blue outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-portfolio-text/60 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-lg border border-portfolio-gray bg-white focus:ring-2 focus:ring-portfolio-blue/30 focus:border-portfolio-blue outline-none transition-all"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-portfolio-text/60 mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-portfolio-gray bg-white focus:ring-2 focus:ring-portfolio-blue/30 focus:border-portfolio-blue outline-none transition-all resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
            </div>
            
            <div className="mt-6">
              <button 
                type="submit"
                className="w-full bg-portfolio-blue hover:bg-portfolio-blue/90 text-white font-medium rounded-lg px-6 py-3 transition-all duration-300 hover:shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
