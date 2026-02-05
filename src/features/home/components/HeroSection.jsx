import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import hero from "../../../assets/images/hero-tech.png";
import texture from "../../../assets/images/texture-noise.png";

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

const HeroSection = () => {
  const [active, setActive] = useState(0);
  const [openVideo, setOpenVideo] = useState(false);

  useEffect(() => {
    const id = setInterval(
      () => setActive((p) => (p + 1) % slides.length),
      5200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 700px at 18% 20%, rgba(229,57,53,.22), rgba(11,30,58,0) 60%), radial-gradient(1000px 600px at 86% 10%, rgba(102,204,255,.18), rgba(11,30,58,0) 55%), linear-gradient(180deg, rgba(11,30,58,.68), rgba(11,30,58,.92))",
          }}
        />
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url(${texture})`,
            backgroundSize: "220px 220px",
          }}
        />
      </div>

     
      <div className="relative z-10 flex flex-col md:flex-row gap-20 py-20 px-6 md:px-16">
      
        <div className="basis-1/2 flex flex-col justify-center max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.h1
              key={slides[active].id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl font-semibold text-white"
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
              className="mt-6 max-w-xl text-white/75 text-lg"
            >
              {slides[active].subtitle}
            </motion.p>
          </AnimatePresence>

          <div className="mt-10 flex gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-white/20 text-white flex items-center gap-2 hover:bg-white/10 transition"
            >
              Start Your Project <ArrowRight />
            </Link>
          </div>
        </div>

        
        <div className="basis-1/2 flex items-center justify-center">
          <motion.div
            onClick={() => setOpenVideo(true)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full max-w-xl aspect-video cursor-pointer rounded-2xl border border-white/20 bg-black/60 backdrop-blur-xl flex items-center justify-center shadow-2xl"
          >
            <span className="text-white text-lg font-semibold">
              ▶ Play Overview
            </span>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {openVideo && (
          <motion.div
            className="fixed inset-0 z-999 bg-black/80 backdrop-blur-md flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-[90%] max-w-5xl aspect-video rounded-2xl overflow-hidden bg-black"
              initial={{ scale: 0.85, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                onClick={() => setOpenVideo(false)}
                className="absolute top-4 right-4 z-10 text-white bg-black/60 rounded-full px-3 py-1"
              >
                ✕
              </button>

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Hgg7M3kSqyE?autoplay=1"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                title="Hero Video"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
