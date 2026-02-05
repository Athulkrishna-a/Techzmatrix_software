import { useState } from "react";
import { motion } from "framer-motion";
import { jobs } from "../career/data/Jobs";
import HiringProcess from "../career/components/HiringProcess";
import CTA from "../../contact/components/CTA";
import JobCard from "../career/components/JobCard"

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const Careers = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleJobs = showAll ? jobs : jobs.slice(0, 6);

    return (
        <motion.section
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="relative min-h-screen overflow-hidden text-white"
        >
           
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px),
            radial-gradient(circle 800px at 0% 200px, rgba(95,153,196,0.35), transparent 60%)
          `,
                    backgroundSize: "40px 40px, 40px 40px, cover",
                }}
            />

            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_60%)]" />


            <motion.div
                variants={itemVariants}
                className="
          relative z-10 max-w-6xl mx-auto
          px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
          pt-24 sm:pt-28 md:pt-32
          pb-20 sm:pb-24
        "
            >
                <p className="text-sm uppercase tracking-widest text-white/60">
                    Careers
                </p>

                <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold">
                    Build with us
                </h1>

                <p className="mt-6 text-base sm:text-lg text-white/70 max-w-3xl">
                    Join a team that values craft and momentum. We build high-trust products
                    across web, mobile, UI/UX, and cloud.
                </p>
            </motion.div>


            <div
                className="
          relative z-10 max-w-7xl mx-auto
          px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
          pb-24 sm:pb-28 md:pb-32
        "
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


                    <motion.div
                        variants={containerVariants}
                        className="lg:col-span-2 space-y-4"
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-xl sm:text-2xl font-semibold mb-4"
                        >
                            Open Positions
                        </motion.h2>

                        {jobs.length === 0 && (
                            <motion.p variants={itemVariants} className="text-white/60">
                                No open positions at the moment.
                            </motion.p>
                        )}

                        {visibleJobs.map(job => (
                            <motion.div
                                key={job.id}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <JobCard job={job} />
                            </motion.div>
                        ))}

                        {!showAll && jobs.length > 6 && (
                            <motion.button
                                variants={itemVariants}
                                whileHover={{ x: 6 }}
                                onClick={() => setShowAll(true)}
                                className="mt-6 text-blue-400 hover:text-blue-300 font-medium"
                            >
                                Load more →
                            </motion.button>
                        )}
                    </motion.div>

                   
                    <motion.div
                        variants={itemVariants}
                        className="mt-8 md:mt-0"
                    >
                        <HiringProcess />
                    </motion.div>

                </div>
            </div>


            <motion.div variants={itemVariants} className="relative z-10">
                <CTA />
            </motion.div>
        </motion.section>
    );
};

export default Careers;
