import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const JobCard = ({ job }) => {
  return (
    <motion.article
      variants={variants}
      initial="hidden"
      animate="visible"
      layout
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="
        bg-white/5  tm-glass tm-noise backdrop-blur-xl
        border border-white/10
        rounded-2xl
        p-6
        flex items-center justify-between
        gap-6
        focus-within:ring-2 focus-within:ring-blue-400/40
      "
    >
     
      <div className="min-w-0 ">
        <h3 className="text-white font-semibold truncate">
          {job.role}
        </h3>

        <p className="mt-1 text-sm text-gray-400 truncate">
          {job.id} • {job.type} • {job.experience}
        </p>
      </div>

     
      <motion.div whileHover={{ x: 6 }}>
        <Link
          to={`/careers/${job.id}`}
          className="
            text-blue-400  font-medium
            hover:text-blue-300
            whitespace-nowrap
          "
        >
          Apply →
        </Link>
      </motion.div>
    </motion.article>
  );
};

export default JobCard;
