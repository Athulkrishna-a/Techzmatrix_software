import { motion } from "framer-motion";
import {
  PhoneCall,
  ListChecks,
  Code2,
  UserCheck,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    title: "Telephone Interview",
    desc: "An initial conversation to understand your background, goals, and role alignment.",
    icon: PhoneCall,
    color: "text-blue-400",
  },
  {
    title: "Shortlisting",
    desc: "We review your profile, experience, and portfolio to assess role fit.",
    icon: ListChecks,
    color: "text-indigo-400",
  },
  {
    title: "Technical Interview",
    desc: "A technical discussion or task to evaluate problem-solving and core skills.",
    icon: Code2,
    color: "text-purple-400",
  },
  {
    title: "HR Interview",
    desc: "Discussion around culture fit, expectations, compensation, and availability.",
    icon: UserCheck,
    color: "text-cyan-400",
  },
  {
    title: "Offer",
    desc: "Clear role details, compensation breakdown, and onboarding timeline.",
    icon: BadgeCheck,
    color: "text-green-400",
  },
];

export default function HiringProcess() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
    >
      <h2 className="text-white text-xl font-semibold mb-6">
        Hiring process
      </h2>

      <div className="space-y-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div
              key={i}
              className="
                flex gap-4 items-start
                bg-white/5 border border-white/10
                rounded-xl p-4
              "
            >
              <div
                className={`
                  flex items-center justify-center
                  w-10 h-10 rounded-lg
                  ${step.color}
                `}
              >
                <Icon size={20} />
              </div>

              <div>
                <h3 className="text-white font-medium">
                  {step.title}
                </h3>
                <p className="text-sm text-white/60 mt-1 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
