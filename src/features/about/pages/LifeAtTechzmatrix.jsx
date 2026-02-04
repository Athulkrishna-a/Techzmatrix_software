import { motion } from "framer-motion";
import CTA from "../../contact/components/CTA"

const LifeAtTechzmatrix = () => {
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
          Life @ TechzMatrix
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
          A culture built for builders
        </h1>

        <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-3xl">
          We’re a high-ownership team that values craft, learning, and momentum. The goal: ship meaningful software and keep raising the bar.
        </p>
      </motion.div>
      <CTA/>
    </section>
  );
};

export default LifeAtTechzmatrix