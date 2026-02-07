import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Future-Proof Architecture",
    description:
      "Secure, scalable architecture with React, Angular, Node.js for blazing speed. Zero compromises on security or performance.",
  },
  {
    title: "Custom Features",
    description:
      "Custom CMS integrations, API solutions, and automation tools designed to solve your unique business challenges.",
  },
  {
    title: "Rich & Engaging Visuals",
    description:
      "Stunning CSS animations, JavaScript interactions, and multimedia that express your brand through modern design elements.",
  },
  {
    title: "Conversion-Focused Design",
    description:
      "UI/UX design optimization that strategically guides users toward seamless navigation to maximize user engagement.",
  },
  {
    title: "Flawless Responsiveness",
    description:
      "Responsive experiences across iOS, Android, Windows, and mobile devices. No user is left behind by our web design.",
  },
  {
    title: "Stress-Free Partnership",
    description:
      "Proactive website maintenance and dedicated technical support for your site while you focus on core business goals and objectives.",
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

const FeatureGrid = () => {
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
            Build Your Next Website <br /> with the Best
          </h2>
          
        </motion.div>

        
        <motion.div
          className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
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

export default FeatureGrid;
