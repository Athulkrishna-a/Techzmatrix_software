import { motion } from "framer-motion";
import { Code2, Smartphone, Cloud, Shield, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom'
import { fadeUp, stagger } from "../../../components/ui/motion";

const services = [
  {
    icon: Code2,
    title: "Web Applications",
    desc: "Build fast, resilient products with polished UX, performance budgets, and scalable architecture.",
    path: "/services/Webdevelopment",
  },
  {
    icon: Smartphone,
    title: "Android Apps",
    desc: "Native-feeling apps with secure storage, offline-first flows, and battery-conscious performance.",
    path: "/services/Appdevelopment",
  },
  
  {
    icon: Shield,
    title: "UI/UX Design",
    desc: "Design systems, motion, and conversion-ready interfaces that feel premium at every pixel..",
    path: "/services/Webdevelopment",
  },
  {
    icon: Cloud,
    title: "Cloud & Backend",
    desc: "Cloud infrastructure, observability, and reliability engineering for long-term scale.",
    path: "/services/Webdevelopment",
  },
];


export default function Services() {
  return (
    <section className="py-20 px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2 variants={fadeUp} className="text-3xl text-white md:text-xl font-semibold">
          Capabilities

        </motion.h2>
        <motion.h2 variants={fadeUp} className="text-3xl text-blue-300 md:text-4xl font-semibold">
          Services built for speed and precision
        </motion.h2>
        <motion.h2 variants={fadeUp} className=" text-white text-3xl md:text-2xl font-semibold">
          Every engagement is engineered around measurable outcomes, not billable hours.
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl glow-edge  border border-white/10 bg-white/5 p-6 flex flex-col"
            >
              <s.icon className="h-6 w-6 text-sky-400 bg-white/20 rounded-3xl p-1" />

              <h3 className="mt-4 font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70 grow">
                {s.desc}
              </p>

              <div
                className="mt-4  group text-sm font-medium text-sky-400 hover:text-sky-300 transition"
              >
                <Link

                  to={s.path}>
                  <div
                    className="flex items-center gap-2">
                    <h1>Learn more</h1>
                    <ArrowRight className="group-hover:translate-x-2 transition ease-linear duration-300" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
