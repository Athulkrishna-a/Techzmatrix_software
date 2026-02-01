import React from 'react'

import { motion } from "framer-motion";

const Career = () => {
  return (
    <section className="relative overflow-hidden">
      
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(135deg,
              #0b1d33 0%,
              #0e2a4d 35%,
              #1a1f3b 65%,
              #120d26 100%
            )
          `,
        }}
      />

     
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_60%)]" />

     
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-white"
      >
        <p className="text-sm uppercase tracking-widest text-white/60">
       Careers
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
        Build with us
        </h1>

        <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-3xl">
         Join a team that values craft and momentum. We build high-trust products across web, mobile, UI/UX, and cloud
        </p>
      </motion.div>
    </section>
  );
};

export default Career
