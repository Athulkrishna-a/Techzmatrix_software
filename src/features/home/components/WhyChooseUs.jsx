
import { fadeUp, stagger } from "../../../components/ui/motion";
import { motion } from "framer-motion";
import {
    Layers,
    ShieldCheck,
    Cpu,
    Zap,
} from "lucide-react";


const capabilities = [
    {
        id: "scalable-architecture",
        icon: Layers,
        title: "Scalable Architecture",
        subtitle:
            "Designed for growth, with clean boundaries and predictable performance.",
    },
    {
        id: "secure-by-design",
        icon: ShieldCheck,
        title: "Secure by Design",
        subtitle:
            "Hardened defaults, reviews, and threat-modeling in the build cycle.",
    },
    {
        id: "modern-tech-stack",
        icon: Cpu,
        title: "Modern Tech Stack",
        subtitle:
            "React, Flutter, Kotlin/Java, cloud primitives, and strong DX.",
    },
    {
        id: "performance-optimization",
        icon: Zap,
        title: "Performance Optimization",
        subtitle:
            "Budgets, profiling, and fast paths baked into delivery.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="relative py-20 px-6">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
         linear-gradient(
    to right,
    rgba(355, 255, 255, 0.035) 1px,
    transparent 1px
  ),
  linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.055) 1px,
    transparent 1px
  ),
  radial-gradient(
    circle 800px at 0% 200px,
    rgba(95, 153, 196, 0.35),
    transparent 0%
  )
      `,
                    backgroundSize: "96px 64px, 96px 64px, 100% 100%",
                }}
            />

            <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                className="md:mx-10 mx-1.5 my-10"
            >
                <motion.div>

                    <motion.h1
                        variants={fadeUp}
                        className="text-white text-sm">
                        Trust & execution
                    </motion.h1>
                    <motion.h2
                        variants={fadeUp}
                        className="text-blue-300 text-4xl">
                        Why teams choose Techzmatrix
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="text-white text-lg">
                        Enterprise-grade systems with startup speed: clarity, craft, and measurable outcomes.
                    </motion.p>
                </motion.div>
                <motion.div
                    variants={fadeUp}
                    className="flex md:flex-row flex-col pt-10 ">
                    <motion.div
                        className="basis-1/2 rounded-2xl mt-5 tm-glass tm-noise text-white/70 glow-edge  shadow-2xl shadow-black border border-white/10 bg-white/5 p-4">
                        <h1
                            className="p-4 ">
                            Build outcomes, not uncertainty.
                        </h1>
                        <div className=" flex items-center gap-3 ">
                            <div className="rounded-2xl w-1/2  text-white glow-edge  border border-white/10 bg-white/5 p-4">
                                <h2>years in delivery</h2>
                                <h1 className="text-3xl py-2 text-blue-400">10+</h1>
                            </div >
                            <div className="rounded-2xl w-1/2 text-white glow-edge  border border-white/10 bg-white/5 p-4">
                                <h2>Unknown</h2>
                                <h1 className="text-3xl py-2 text-blue-400">1/0</h1>

                            </div>
                        </div>
                        <div className="rounded-2xl mt-3 text-white glow-edge  border border-white/10 bg-white/5 p-4">
                            <h3>uptime target</h3>
                            <h1 className="text-3xl py-2 text-blue-400">99.99%</h1>
                            <h2 className="text-white/70">measured at edge + core services</h2>
                        </div>
                        <h1
                            className="p-4 ">We design and ship systems that perform under real conditions, not ideal ones.
                            Every release is measured by reliability, uptime, and outcomes after launch—not assumptions before it.</h1>
                    </motion.div>
                    <motion.div
                        variants={fadeUp}
                        className="grid  grid-cols-2 gap-4 basis-1/2 pt-6 md:p-6">
                        {
                            capabilities.map((item) => (
                                <motion.div key={item.id}
                                    whileHover={{ y: -4 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="rounded-2xl text-white tm-glass tm-noise  shadow-2xs shadow-blue-300  border border-white/10 bg-white/5 p-3 md:p-6">

                                    <item.icon size={30} className="my-3" />
                                    <h1 className="text-blue-400 text-lg">{item.title}</h1>
                                    <h2 className="text-white/70 text-sm py-2">{item.subtitle}</h2>
                                </motion.div>
                            ))
                        }

                    </motion.div>

                </motion.div>
            </motion.div>
        </section>
    )
}

export default WhyChooseUs