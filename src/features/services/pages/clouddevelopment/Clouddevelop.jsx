import React from "react";
import { motion } from "framer-motion";

const Clouddevelop = () => {
  return (
    <section className="relative py-24 px-6 bg-[#081a2f] text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-sm uppercase tracking-widest text-blue-300">
          Cloud Development
        </p>

        <h1 className="mt-4 text-3xl md:text-4xl font-semibold">
          Scalable, secure cloud-first systems
        </h1>

        <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-3xl">
          We design and build cloud-native applications with security,
          scalability, and cost efficiency in mind. From architecture to
          deployment, our focus is on systems that scale reliably under real
          production workloads.
        </p>
      </motion.div>
    </section>
  );
};

export default Clouddevelop;
