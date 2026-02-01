import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import React from 'react'

const CTA = () => {
    return (
        <section className="relative py-28 px-6 bg-[#081a2f] overflow-hidden">
            {/* Outer glass container */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="
          max-w-6xl mx-auto
          rounded-4xl
          border border-white/10
          bg-linear-to-r
          from-[#2a1d3a]/60
          via-[#0f2b4a]/70
          to-[#0b3555]/80
          backdrop-blur-xl
          px-10 py-16
          flex flex-col lg:flex-row
          items-start lg:items-center
          justify-between
          gap-10
        "
            >
                {/* Left content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="max-w-2xl"
                >
                    <p className="text-sm uppercase tracking-widest text-white/60">
                        Next step
                    </p>

                    <h2 className="mt-4 text-2xl md:text-4xl font-semibold text-white leading-tight">
                        Let’s Build Something Powerful
                        <br />
                        Together
                    </h2>

                    <p className="mt-6 text-lg text-white/70">
                        Tell us what you’re building. We’ll map the fastest path to a
                        secure, scalable release.
                    </p>
                </motion.div>

                
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                  
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        className="
              inline-flex items-center gap-3
              rounded-2xl
              bg-linear-to-r from-red-500 to-red-600
              px-4 py-4
              text-white font-medium
              shadow-lg shadow-red-500/30
            "
                    >
                        Start Your Project
                        <ArrowRight size={18} />
                    </motion.button>

                   
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        className="
              inline-flex items-center justify-center
               rounded-2xl
              border border-blue-400/40
              px-4 py-4
              text-white/90
              hover:bg-white/5
            "
                    >
                        Explore Services
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default CTA