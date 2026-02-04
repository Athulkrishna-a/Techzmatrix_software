import { motion } from "framer-motion";
import CTA from "../../../contact/components/CTA"

const AppDevelop = () => {
  return (
    <section className="relative overflow-hidden py-24 px-6 text-white">
     
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <p className="text-sm uppercase tracking-widest text-blue-300">
          App Development
        </p>

        <h1 className="mt-4 text-3xl md:text-4xl font-semibold">
          High-performance mobile & web applications
        </h1>

        <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-3xl">
          We build robust Android, web, and cross-platform applications focused
          on performance, security, and long-term maintainability. Every product
          is engineered to scale cleanly from MVP to production.
        </p>
      </motion.div>
      <CTA/>
    </section>
  );
};

export default AppDevelop;
