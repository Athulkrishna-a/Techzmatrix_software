import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const mobileFeatures = [
  
  {
    title: "End-to-End Development",
    description: "From concept and prototyping to deployment and ongoing maintenance, we handle it all."
  },
  {
    title: "Advanced Technology Stack",
    description: "Leverage Swift, Kotlin, Flutter, React Native, AI/ML, and AR/VR to build innovative apps."
  },
  {
    title: "Scalable & Secure Solutions",
    description: "Apps designed to scale seamlessly while adhering to industry-leading security standards."
  },
  {
    title: "User-Focused Design",
    description: "Intuitive interfaces and engaging experiences that retain users and drive adoption."
  },
  {
    title: "Agile & Transparent Workflow",
    description: "Collaborate closely with our team through iterative sprints and regular progress updates."
  },
  {
    title: "Proven Track Record",
    description: "Delivering high-performance apps across multiple industries with measurable success."
  },
  
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FeatureMobile= () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-1 flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-cyan-300  mb-8">
            Why Choose Techzmatrix <br/> For Mobile App Development
          </h2>
          
        </motion.div>

        
        <motion.div
          className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {mobileFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-8 border rounded-2xl tm-glass   shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureMobile;
