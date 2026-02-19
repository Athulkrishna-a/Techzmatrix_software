import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ServiceCard = ({ title, description, technologies }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative px-6 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 rounded-3xl bg-gradient-to-br from-purple-700 via-blue-600 to-indigo-600 shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-full sm:max-w-3xl md:max-w-5xl mx-auto tm-glass tm-noise overflow-hidden"
    >
      
      <div className="absolute -top-10 -right-10 w-24 sm:w-32 h-24 sm:h-32 bg-purple-400 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-24 sm:w-32 h-24 sm:h-32 bg-blue-400 rounded-full opacity-20 blur-3xl pointer-events-none"></div>

     
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4 text-white">{title}</h2>

   
      <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">{description}</p>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 relative z-10">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start bg-white/10 p-3 sm:p-4 rounded-xl border border-gray-700 group hover:border-blue-400 hover:bg-white/20 transition-colors duration-300 w-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <div className="flex items-center mb-2 gap-3">
              <div className="w-10 h-10 flex items-center justify-center text-lg sm:text-xl text-white bg-gray-900/30 rounded-lg">
                {tech.icon}
              </div>
              <h4 className="text-white font-semibold text-sm sm:text-base">{tech.name}</h4>
            </div>
            <p className="text-white/70 text-xs sm:text-sm">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
