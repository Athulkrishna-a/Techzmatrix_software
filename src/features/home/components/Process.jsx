import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { id: "01", title: "Discover & Plan", desc: "Align outcomes, constraints, and success metrics." },
  { id: "02", title: "Design & Prototype", desc: "Craft flows, systems, and motion that feel premium." },
  { id: "03", title: "Build & Test", desc: "Ship iteratively with performance and quality gates." },
  { id: "04", title: "Launch & Scale", desc: "Harden, monitor, and evolve with real data." },
];



const Process = () => {
  const ref = useRef(null);



  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 bg-[#0b1d33] text-white"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
           linear-gradient(
               to right,
               rgba(355, 255, 255, 0.035) 1px,
                transparent 1px),
          linear-gradient( to bottom,   rgba(255, 255, 255, 0.055) 1px,  transparent 1px),
  radial-gradient(circle 800px at 0% 200px,rgba(95, 153, 196, 0.35),transparent 0%)
      `,
          backgroundSize: "96px 64px, 96px 64px, 100% 100%",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-16"
      >
        <p className="text-sm tracking-widest text-white/70">METHOD</p>
        <h2 className="mt-2 text-4xl text-blue-400">
          A process built for complex systems
        </h2>
        <p className="mt-3 text-lg text-blue-100 max-w-3xl">
          Scroll-driven process with responsive layout and animated connectors.
        </p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto tm-glass tm-noise rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 overflow-visible">


        <div className="hidden md:block absolute top-17 left-10 right-10 h-0.5 bg-white/20" />

        <motion.div
          style={{ width: progress }}
          className="hidden md:block absolute top-17 left-10 h-0.5 bg-linear-to-r from-red-400 to-blue-400"
        />


        <div className="md:hidden absolute top-10 bottom-10 left-17 w-0.5 bg-white/20" />

        <motion.div
          style={{ height: progress }}
          className="md:hidden absolute top-10 left-17 w-0.5 bg-linear-to-b from-red-400 to-blue-400"
        />


        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-14 md:gap-10 ">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative flex md:block gap-6 "
            >

              <div className="relative z-10 w-14 h-14 shrink-0 rounded-2xl border border-white/20 bg-[#0b1d33] flex items-center justify-center text-lg font-semibold">
                {step.id}
              </div>


              <div>
                <h3 className="md:mt-6 text-xl font-medium text-blue-400">
                  {step.title}
                </h3>
                <p className="mt-2 text-blue-100/70 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process