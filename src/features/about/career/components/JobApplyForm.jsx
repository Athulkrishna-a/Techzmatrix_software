import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const inputStyle =
  "w-full rounded-xl bg-white/10 border-2 border-white/40 px-4 py-2.5 " +
  "text-white placeholder-white/40 transition " +
  "hover:border-white/60 focus:outline-none focus:border-white " +
  "focus:ring-2 focus:ring-white/30";

const JobApplyForm = () => {
  return (
    <motion.form
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
      className="
        space-y-16
        bg-white/5 backdrop-blur-xl
        border border-white/15
        rounded-2xl
        p-8 md:p-10
        shadow-xl
      "
    >
      {/* Personal Information */}
      <motion.section
        variants={sectionVariant}
        className="space-y-6 bg-white/5 border border-white/15 rounded-2xl p-6 md:p-8"
      >
        <div>
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <p className="text-sm text-white/60">Your basic details</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className={inputStyle} placeholder="Full Name" />
          <input className={inputStyle} type="date" />
          <input className={inputStyle} placeholder="Phone Number" />
          <input className={inputStyle} placeholder="Email ID" />
          <input className={inputStyle} placeholder="Current Address" />
          <input className={inputStyle} placeholder="Permanent Address" />
          <input className={inputStyle} placeholder="Nationality" />
        </div>
      </motion.section>

      {/* Educational Details */}
      <motion.section
        variants={sectionVariant}
        className="space-y-6 bg-white/5 border border-white/15 rounded-2xl p-6 md:p-8"
      >
        <div>
          <h2 className="text-xl font-semibold">Educational Details</h2>
          <p className="text-sm text-white/60">Academic background</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className={inputStyle} placeholder="Highest Qualification" />
          <input className={inputStyle} placeholder="Degree / Course Name" />
          <input className={inputStyle} placeholder="College / University" />
          <input className={inputStyle} placeholder="Year of Passing" />
          <input className={inputStyle} placeholder="CGPA / Percentage" />
        </div>
      </motion.section>

      {/* Experience Details */}
      <motion.section
        variants={sectionVariant}
        className="space-y-6 bg-white/5 border border-white/15 rounded-2xl p-6 md:p-8"
      >
        <div>
          <h2 className="text-xl font-semibold">Experience Details</h2>
          <p className="text-sm text-white/60">
            Include internships if any
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className={inputStyle} placeholder="Company Name" />
          <input className={inputStyle} placeholder="Role" />
          <input className={inputStyle} placeholder="Duration" />
        </div>
      </motion.section>

      {/* Resume Upload */}
      <motion.section
        variants={sectionVariant}
        className="space-y-4 bg-white/5 border border-white/15 rounded-2xl p-6 md:p-8"
      >
        <div>
          <h2 className="text-xl font-semibold">Resume / CV</h2>
          <p className="text-sm text-white/60">
            Upload your latest resume
          </p>
        </div>

        <label
          className="
            flex flex-col items-center justify-center gap-2
            rounded-xl border-2 border-dashed border-white/30
            p-6 cursor-pointer transition
            hover:border-white/60
          "
        >
          <span className="text-sm text-white/70">
            Click to upload (PDF, DOC, DOCX)
          </span>
          <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
        </label>
      </motion.section>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="
          w-full rounded-xl
          bg-white text-black
          py-3.5
          font-semibold tracking-wide
          shadow-lg transition
          hover:shadow-xl
        "
      >
        Apply for Job
      </motion.button>
    </motion.form>
  );
};

export default JobApplyForm;
