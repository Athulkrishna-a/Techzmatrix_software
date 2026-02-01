import { motion, AnimatePresence } from "framer-motion";
import hero from '../../../assets/images/hero-tech.png'
import texture from '../../../assets/images/texture-noise.png'
import { useMemo, useState, useEffect } from "react";
import {
    ArrowRight,
    LockIcon,
    RocketIcon,
    ShieldIcon,

} from "lucide-react";

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

const results = [
    {
        id: "1",
        title: 'Edge latency',
        subtitle: '12ms'
    }, {
        id: "2",
        title: 'Queue depth',
        subtitle: '1.3k'
    }, {
        id: "3",
        title: 'CPU',
        subtitle: '38%'
    }, {
        id: "4",
        title: 'Error rate',
        subtitle: '0.08%'
    },
]
const HeroSection = () => {



    const [active, setActive] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setActive((prev) => (prev + 1) % slides.length);
        }, 5200);
        return () => clearInterval(id);
    }, []);


    return (
        <section className="relative w-full h-auto overflow-hidden  mx-auto">
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
                    style={{ backgroundImage: `url(${texture})`, backgroundSize: "220px 220px" }}
                />
            </div>
            <div
                className="flex flex-col gap-20 md:flex-row my-10">
                <div className="basis-1/2">
                    <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 max-w-4xl">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-row"
                        >
                            <motion.span
                                className="inline-block  items-center gap-1 mb-6 rounded-full bg-white/10 px-4 py-1 text-sm text-white/70 border border-white/20 " >

                                <div className="flex flex-row items-center gap-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-red-600 mt-1" />
                                    <span>enterprise-ready delivery
                                        . web . android . cloud</span>
                                </div>
                            </motion.span>

                        </motion.div>
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={slides[active].id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // slower animation
                                className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
                            >
                                <span className="text-gradient">{slides[active].title}</span>
                            </motion.h1>
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            <motion.p
                                key={`subtitle-${slides[active].id}`}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} // slower than title
                                className="mt-5 max-w-xl text-base md:text-lg text-white/75 leading-relaxed"
                            >
                                {slides[active].subtitle}
                            </motion.p>
                        </AnimatePresence>
                        <motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="mt-10 flex flex-wrap gap-4"
                            >
                                <button className="rounded-xl bg-red-500 px-6 py-3 font-medium hover:bg-red-600">
                                    <div className="flex items-center gap-2 text-white group">
                                        <h1> Start Your Project</h1>
                                        <ArrowRight className="group-hover:translate-x-2 ease-linear duration-500" />
                                    </div>
                                </button>
                                <button className="rounded-xl border border-white/20 px-6 py-3 hover:bg-white/10">
                                    <div className="flex items-center gap-2 text-white group">
                                        <h1>Explore Services</h1>
                                        <ArrowRight className="group-hover:translate-x-2 ease-linear duration-500" />
                                    </div>
                                </button>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="flex gap-2 text-white text-sm pt-6">
                            <div className="flex gap-2 items-center">
                                <ShieldIcon className="text-green-400 " size={17} />
                                <h1>Secure by design</h1>
                            </div>
                            <div className="flex gap-2 items-center">
                                <LockIcon className="text-green-400" size={17} />
                                <h1>Secure by design</h1>
                            </div>
                            <div className="flex gap-2 items-center">
                                <RocketIcon className="text-green-400 " size={17} />
                                <h1>Secure by design</h1>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="basis-1/2 flex items-center justify-center">
                    <motion.div className="w-full mx-10 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl p-4 shadow-2xl shadow-white/30 text-white">
                        <div
                            className="absolute inset-0 rounded-2xl"
                            style={{
                                background:
                                    "radial-gradient(1200px 700px at 18% 20%, rgba(229,57,53,.22), rgba(11,30,58,0) 60%), radial-gradient(1000px 600px at 86% 10%, rgba(102,204,255,.18), rgba(11,30,58,0) 55%), linear-gradient(180deg, rgba(11,30,58,.68), rgba(11,30,58,.92)) ",
                            }}
                        />
                        <div>

                            <div className="flex text-white items-center justify-between">
                                <h1>
                                    live system
                                </h1>
                                <div className="flex  items-center justify-between">
                                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1" />
                                    <h1>uptime 99.99%</h1>
                                </div>
                            </div>
                            <div>
                                {
                                    results.map((item) => {
                                        return (
                                            <div
                                                className="mt-3 border shadow-2xl shadow-blue-200/20 rounded-2xl  border-white/20 bg-white/5 backdrop-blur-xl p-4 text-white"
                                                key={results.id}>

                                                <div
                                                    className="flex justify-between">
                                                    <h1
                                                     className="text-sm">{item.title}</h1>

                                                    <h2 className="text-sm">{item.id}/4</h2>
                                                </div>
                                                <div 
                                                className="py-3">
                                                    <h2
                                                    className="text-2xl">{item.subtitle}</h2>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div 
                            className="py-2">
                                <h1>Observability \u00b7 incident response \u00b7 cost controls</h1>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;


