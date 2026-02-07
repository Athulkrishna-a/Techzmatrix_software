import React from "react";
import { motion } from "framer-motion";

const HeaderSection = ({ title, subtitle, description, heroImage }) => {
  return (
    <section className="relative w-full h-auto text-white">
      
      
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={heroImage}
          alt={`${title} background`}
          className="w-full h-full object-cover filter blur-sm scale-105"
        />
     
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

     
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col py-15 justify-center items-start h-full px-6 md:px-12 lg:px-24"
      >
        <p className="text-sm uppercase tracking-widest text-blue-300">
          {subtitle}
        </p>

        <h1 className="mt-4 text-4xl md:text-4xl font-bold">{title}</h1>

        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
          {description}
        </p>
      </motion.div>
    </section>
  );
};

export default HeaderSection;
