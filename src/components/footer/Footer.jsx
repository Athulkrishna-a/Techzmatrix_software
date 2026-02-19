import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Techzmatrix from "../../assets/images/Techzmatrix_software.png"
import { PiWhatsappLogoDuotone } from "react-icons/pi";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon

} from "lucide-react";

/* Motion */
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

const Footer = () => {
  return (
    <footer className="bg-[#0B1E3A] relative overflow-hidden text-white inset-shadow-sm inset-shadow-cyan-500/30 ">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
      radial-gradient(circle, rgba(139,92,246,0.6) 1px, transparent 1px),
      radial-gradient(circle, rgba(59,130,246,0.4) 1px, transparent 1px),
      radial-gradient(circle, rgba(236,72,153,0.5) 1px, transparent 1px)
    `,
          backgroundSize: "20px 20px, 40px 40px, 60px 60px",
        }}
      />
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
                  z-10
        "
      >

        <motion.div variants={fadeUp}>
          <Link to="/" className="shrink-0">
            <img src={Techzmatrix} className="w-49 object-contain pb-3" />
          </Link>
          <p className="text-sm text-white/70 leading-relaxed">
            Techzmatrix delivers scalable, secure, and future-ready
            software solutions tailored for modern businesses.
          </p>
        </motion.div>


        <motion.div variants={fadeUp}>
          <h4 className="text-base font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </motion.div>


        <motion.div variants={fadeUp}>
          <h4 className="text-base font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/services/Webdevelopment" className="hover:text-white">Web Development</Link></li>
            <li><Link to="/services/Appdevelopment" className="hover:text-white">App Development</Link></li>
            <li><Link to="/services/CloudDevelopment" className="hover:text-white">Cloud Development</Link></li>
          </ul>
        </motion.div>


        <motion.div variants={fadeUp}>
          <h4 className="text-base font-semibold mb-3">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            
            <li className="flex items-center gap-2 cursor-pointer hover:text-cyan-400/80">
              <Phone size={16} /> <a href="tel:+919633764228">+91 96337 64228</a>

            </li>
            <li className="flex items-center gap-2  cursor-pointer hover:text-cyan-400/80">
              <Phone size={16} /> <a href="tel:9995602526">+91 99956 02526</a>
            </li>
             <li className="flex items-center gap-2 cursor-pointer hover:text-cyan-400/80">
              <PiWhatsappLogoDuotone size={22} /><a href="https://wa.me/+919995602526">+91 99956 02526</a>
            </li>
            <li className="flex items-center gap-2  cursor-pointer hover:text-cyan-400/80">
              <Mail size={20} /><a
                href="mailto:mail@techzmatrix.in"

              >
                mail@techzmatrix.in
              </a>
            </li>
            <li className="flex items-start gap-2  cursor-pointer hover:text-cyan-400/80">
              <MapPin size={26} />
              <a
                href="https://maps.app.goo.gl/wp6qNBH4zR5dsxNx5"
                target="_blank"
                rel="noopener noreferrer"

              >
                Technopark Road,<br />
                Kazhakkoottam,<br />
                Thiruvananthapuram, Kerala 695583
              </a>
            </li>
           
          </ul>
        </motion.div>
      </motion.div>


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
            © {new Date().getFullYear()} Techzmatrix Software Technologies. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-white/70">
            <a href="https://www.linkedin.com/company/techzmatrix/?originalSubdomain=in" aria-label="LinkedIn" className="hover:text-white">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/techzmatrix/" aria-label="LinkedIn" className="hover:text-white">
              <InstagramIcon size={18} />
            </a>
            <a href="https://www.youtube.com/@Techzmatrix" aria-label="Github" className="hover:text-white">
              < YoutubeIcon size={18} />
            </a>

            <a href="https://www.facebook.com/tst.career/#" aria-label="Github" className="hover:text-white">
              <FacebookIcon size={18} />
             
            </a>
             <a href="https://x.com/techzmatrixxx" aria-label="Twitter" className="hover:text-white">
                <Twitter size={18} />
              </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
