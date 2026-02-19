import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const benefitsData = [
  {
    title: "Best-in-class learning and career experience",
    description:
      "Grow from new graduate to expert with our comprehensive training and development programs.",
  },
  { title: "Leave benefits", description: "Enjoy flexible leave policies." },
  { title: "Multicultural environment", description: "Work with diverse teams globally." },
  { title: "Social volunteering support", description: "Participate in community initiatives." },
  { title: "Comprehensive health insurance", description: "Access full healthcare benefits." },
  { title: "Curated wellness program", description: "Well-being programs to support you." },
  { title: "Appreciative environment", description: "A culture that values your work." },
  { title: "Uncapped growth", description: "Opportunities for unlimited career growth." },
  { title: "International exposure", description: "Gain experience working globally." },
];

const AccordionItem = ({ title, description, isOpen, onClick }) => {
  return (
    <div className="border-b  ">
      <button
        onClick={onClick}
        className="w-full text-left py-4 px-6 flex justify-between tm-glass tm-noise  items-center transition-colors"
      >
        <span className="text-white font-semibold">{title}</span>
        <span className="text-white text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden px-6 py-2 text-white/50 bg-cyan-300/30"
          >
            {description}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const BenefitsAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4 md:px-7">
      <h2 className="text-cyan-400 text-2xl md:text-3xl font-bold mb-2">
        Benefits that make a difference
      </h2>
      <p className="text-white mb-6">
        Not only will you be joining a company that is passionate about your success, but we will also reward
        you with a range of additional benefits that will help you grow your career and look after your well-being.
      </p>
      <div className="rounded-lg overflow-hidden shadow-lg">
        {benefitsData.map((benefit, index) => (
          <AccordionItem
            key={index}
            title={benefit.title}
            description={benefit.description}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BenefitsAccordion;
