import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Discover & Plan",
    description: "Align outcomes, constraints, and success metrics for your mobile or web application.",
    color: "from-pink-500 to-purple-500"
  },
  {
    id: "02",
    title: "Design & Prototype",
    description: "Craft user flows, design systems, and high-fidelity prototypes that feel premium.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "03",
    title: "Build & Test",
    description: "Ship iteratively with performance benchmarks and automated quality gates.",
    color: "from-gray-400 to-gray-600"
  },
  {
    id: "04",
    title: "Launch & Scale",
    description: "Harden, monitor, and evolve your application with real-world user data.",
    color: "from-gray-500 to-gray-700"
  }
];

const ProcessSection = () => {
  return (
    <section className=" py-24 px-6 md:px-12 min-h-screen font-sans text-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <span className="text-gray-400 uppercase tracking-widest text-sm font-semibold">Process</span>
          <h2 className="text-4xl md:text-4xl font-medium mt-4 mb-6 text-blue-400">
            A process built for complex systems
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Streamlined app development with a focus on scalability and user-centric design.
          </p>
        </div>

       
        <div className="relative tm-glass tm-noise border-gray-800 rounded-3xl p-8 md:p-12 overflow-hidden">
         
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#4a5568 1px, transparent 1px), linear-gradient(90deg, #4a5568 1px, transparent 1px)', size: '40px 40px' }} />

          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col group"
              >
                
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-xl bg-[#1e293b] border border-gray-700 flex items-center justify-center font-bold text-lg shadow-xl group-hover:border-blue-500 transition-colors">
                    {step.id}
                  </div>
                  
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block h-[1px] flex-grow mx-4 bg-gray-700" />
                  )}
                </div>

             
                <h3 className="text-xl font-bold mb-4 text-blue-300 group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;