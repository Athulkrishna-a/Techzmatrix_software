import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github
} from "lucide-react";

/* Motion */
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

const Footer = () => {
  return (
    <footer className="bg-[#0B1E3A] text-white">
      {/* Main Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
        className="
          max-w-7xl mx-auto
          px-5 sm:px-8 lg:px-12
          py-12
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10
        "
      >
        {/* Company */}
        <motion.div variants={fadeUp}>
          <h3 className="text-lg font-semibold mb-3">Techzmatrix</h3>
          <p className="text-sm text-white/70 leading-relaxed">
            Techzmatrix delivers scalable, secure, and future-ready
            software solutions tailored for modern businesses.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeUp}>
          <h4 className="text-base font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={fadeUp}>
          <h4 className="text-base font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Cloud Solutions</li>
            <li>UI / UX Design</li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeUp}>
          <h4 className="text-base font-semibold mb-3">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@techzmatrix.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} />
              <span>
                Thiruvananthapuram, Kerala<br />
                India
              </span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div
          className="
            max-w-7xl mx-auto
            px-5 sm:px-8 lg:px-12
            py-6
            flex flex-col
            sm:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          <p className="text-xs sm:text-sm text-white/60 text-center sm:text-left">
            © {new Date().getFullYear()} Techzmatrix. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-white/70">
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <Twitter size={18} />
            </a>
            <a href="#" aria-label="Github" className="hover:text-white">
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
