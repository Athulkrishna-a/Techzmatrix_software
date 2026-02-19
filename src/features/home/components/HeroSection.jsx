import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import hero from "../../../assets/images/hero-tech.png";

const slides = [
  {
    id: "a",
    title: "Building Scalable Digital Products for the Future",
    subtitle:
      "Web applications, Android apps, cloud systems, and custom engineering—delivered with enterprise-grade rigor.",
  },
  {
    id: "b",
    title: "From prototype to platform — fast",
    subtitle:
      "Tight iteration loops, measurable performance, and design that ships without compromise.",
  },
  {
    id: "c",
    title: "Security-first architecture, by default",
    subtitle:
      "Threat modeling, hardening, and best practices baked into every delivery milestone.",
  },
];

const HomeSection = () => {
  const [active, setActive] = useState(0);

  // autoplay video on page load (muted – browser rule)
  const playVideo = true;

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 700px at 18% 20%, rgba(229,57,53,.22), rgba(11,30,58,0) 60%), radial-gradient(1000px 600px at 86% 10%, rgba(102,204,255,.18), rgba(11,30,58,0) 55%), linear-gradient(180deg, rgba(11,30,58,.68), rgba(11,30,58,.92))",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-20 py-20 px-6 md:px-16">
        {/* Left content */}
        <div className="basis-1/2 flex flex-col justify-center max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.h1
              key={slides[active].id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl font-semibold text-cyan-300"
            >
              {slides[active].title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${slides[active].id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-6 max-w-xl text-white text-lg"
            >
              {slides[active].subtitle}
            </motion.p>
          </AnimatePresence>

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/20 text-white hover:bg-white/10 transition"
            >
              Start Your Project <ArrowRight />
            </Link>
          </div>
        </div>

        {/* Right video card */}
        <div className="basis-1/2 flex items-center justify-center">
          <motion.div
            className="w-full max-w-xl aspect-video rounded-2xl border border-white/20 bg-black/60 backdrop-blur-xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {playVideo && (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Hgg7M3kSqyE?autoplay=1&mute=1&rel=0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                title="Hero Video"
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
