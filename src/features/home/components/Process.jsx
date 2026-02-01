import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    id: "01",
    title: "Discover & Plan",
    desc: "Align outcomes, constraints, and success metrics.",
  },
  {
    id: "02",
    title: "Design & Prototype",
    desc: "Craft flows, systems, and motion that feel premium.",
  },
  {
    id: "03",
    title: "Build & Test",
    desc: "Ship iteratively with performance and quality gates.",
  },
  {
    id: "04",
    title: "Launch & Scale",
    desc: "Harden, monitor, and evolve with real data.",
  },
];



const Process = () => {
  const ref = useRef(null);

 
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });


  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 bg-[#0b1d33] text-white overflow-hidden"
    >
     
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-16"
      >
        <p className="text-sm  tracking-widest text-blue-300">
          Method
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold mt-3">
          A process built for complex systems
        </h2>
        <p className="mt-4 text-lg text-blue-100/80 max-w-3xl">
          Horizontal steps, animated on scroll, with a connecting progress line
          and active highlight.
        </p>
      </motion.div>

     
      <div className="relative max-w-6xl mx-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
       
        <div className="absolute top-17 left-10 right-10 h-0.5 bg-white/20" />

       
        <motion.div
          style={{ width: lineWidth }}
          className="absolute top-17  left-10 h-0.5 bg-linear-to-r from-red-400 to-blue-400"
        />

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Step circle */}
              <div className="relative z-10 w-14 h-14 rounded-2xl border border-white/20 bg-[#0b1d33] flex items-center justify-center text-lg font-semibold">
                {step.id}
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-medium">
                {step.title}
              </h3>
              <p className="mt-2 text-blue-100/70 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process