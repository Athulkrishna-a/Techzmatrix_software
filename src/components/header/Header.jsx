import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, User } from "lucide-react";
import Techzmatrix from "../../assets/images/Techzmatrix_software.png";


const navItem = {
  rest: { scale: 1 },
  hover: {
    scale: 1.06,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};


const underline = {
  rest: { scaleX: 0, opacity: 0 },
  hover: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};


const desktopDropdown = {
  hidden: {
    opacity: 0,
    y: 14,
    scale: 0.96,
    pointerEvents: "none",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    pointerEvents: "auto",
    transition: {
      duration: 0.25,
      ease: "easeOut",
      staggerChildren: 0.05,
    },
  },
};


const dropdownItem = {
  hidden: { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0 },
};

/* Mobile */
const mobileMenu = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
  exit: { height: 0, opacity: 0, transition: { duration: 0.2 } },
};

const mobileItem = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0 },
};

const accordion = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const rotateIcon = {
  closed: { rotate: 0 },
  open: { rotate: 180 },
};



const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeClass =
    "bg-blue/50 backdrop-blur-md border border-blue/50";

  return (
    <motion.header
      animate={{
        backgroundColor: scrolled ? "rgba(11,30,58,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 border-b border-white/10"
    >
      <nav className="text-white font-bricolage">
      
        <div className="flex items-center h-20 px-4 md:px-12">
          <Link to="/" className="shrink-0">
            <img src={Techzmatrix} className="w-36 object-contain" />
          </Link>

          <div className="flex-1" />

       
          <ul className="hidden md:flex items-center gap-4">
          
            <motion.li
              variants={navItem}
              initial="rest"
              whileHover="hover"
              className="relative"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl inline-block ${isActive ? activeClass : ""
                  }`
                }
              >
                Home
              </NavLink>
              <motion.span
                variants={underline}
                initial="rest"
                whileHover="hover"
                className="absolute left-3 right-3 -bottom-1 h-0.5 bg-main origin-left"
              />
            </motion.li>

           
            <li
              className="relative"
              onMouseEnter={() => setDesktopMenu("who")}
              onMouseLeave={() => setDesktopMenu(null)}
            >
              <motion.span
                variants={navItem}
                initial="rest"
                whileHover="hover"
                className="px-3 py-2 cursor-pointer inline-block"
              >
                Who We Are
              </motion.span>

              <AnimatePresence>
                {desktopMenu === "who" && (
                  <motion.div
                    variants={desktopDropdown}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute left-0 top-full pt-4"
                  >
                    <motion.ul className="bg-cyan-400/70 backdrop-blur-md border border-blue/50 rounded-2xl min-w-56 py-2">
                      {[
                        ["About Us", "/about"],
                        ["Life@Techzmatrix", "/LifeAtTechzmatrix"],
                        ["Careers", "/careers"],
                        ["Software Training ", "/careers"],
                      ].map(([label, path]) => (
                        <motion.li
                          key={path}
                          variants={dropdownItem}
                        >
                          <Link
                            to={path}
                            className="block px-4 py-2 hover:text-white/70"
                          >
                            {label}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

         
            <li
              className="relative"
              onMouseEnter={() => setDesktopMenu("services")}
              onMouseLeave={() => setDesktopMenu(null)}
            >
              <motion.span
                variants={navItem}
                initial="rest"
                whileHover="hover"
                className="px-3 py-2 cursor-pointer inline-block"
              >
                Services
              </motion.span>

              <AnimatePresence>
                {desktopMenu === "services" && (
                  <motion.div
                    variants={desktopDropdown}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute left-0 top-full pt-4"
                  >
                    <motion.ul className="bg-cyan-400/70 backdrop-blur-md border border-blue/50 rounded-2xl min-w-56 py-2">
                      {[
                        ["Web Development", "/services/Webdevelopment"],
                        ["Mobile Apps", "/services/Appdevelopment"],
                        ["Cloud Solutions", "/services/CloudDevelopment"],
                      ].map(([label, path]) => (
                        <motion.li
                          key={path}
                          variants={dropdownItem}
                        >
                          <Link
                            to={path}
                            className="block px-4 py-2  hover:text-white/70"
                          >
                            {label}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

           
            <motion.li
              variants={navItem}
              initial="rest"
              whileHover="hover"
            >
              <NavLink to="/contact" 
            className={({ isActive }) =>
                  `px-3 py-2 rounded-xl inline-block ${isActive ? activeClass : ""
                  }`
                }>
                Contact
              </NavLink>
            </motion.li>


            <li
              className="relative"
              onMouseEnter={() => setDesktopMenu("user")}
              onMouseLeave={() => setDesktopMenu(null)}
            >
             
              <motion.span
                variants={navItem}
                initial="rest"
                whileHover="hover"
                className="px-3 py-2 cursor-pointer inline-block"
              >
                <User />
              </motion.span>

              
              <AnimatePresence>
                {desktopMenu === "user" && (
                  <motion.div
                    variants={desktopDropdown}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute right-0 top-full pt-4"
                  >
                    <motion.ul className="bg-cyan-400/70 backdrop-blur-md border border-blue/50 rounded-2xl min-w-52 py-2">
                      <motion.li variants={dropdownItem}>
                        <Link
                          to="/login/EmployeeLogin"
                          className="block px-4 py-2 hover:text-white/70"
                        >
                          Employee Login
                        </Link>
                      </motion.li>
                    </motion.ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>


          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <motion.div
              animate={{ rotate: mobileOpen ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {mobileOpen ? <X /> : <Menu />}
            </motion.div>
          </button>
        </div>


        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              variants={mobileMenu}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden overflow-hidden bg-blue/80 backdrop-blur-xl"
            >
              <motion.ul className="flex flex-col p-4 gap-4">
                <motion.li variants={mobileItem}>
                  <NavLink to="/" onClick={() => setMobileOpen(false)}>
                    Home
                  </NavLink>
                </motion.li>

               
                <motion.button
                  variants={mobileItem}
                  onClick={() =>
                    setMobileSub(mobileSub === "who" ? null : "who")
                  }
                  className="flex justify-between items-center"
                >
                  Who We Are
                  <motion.span
                    variants={rotateIcon}
                    animate={mobileSub === "who" ? "open" : "closed"}
                  >
                    <ChevronDown />
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {mobileSub === "who" && (
                    <motion.div
                      variants={accordion}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="pl-4 flex flex-col gap-2"
                    >
                      <Link to="/about">About Us</Link>
                      <Link to="/life">Life@Techzmatrix</Link>
                      <Link to="/careers">Careers</Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Mobile Services */}
                <motion.button
                  variants={mobileItem}
                  onClick={() =>
                    setMobileSub(
                      mobileSub === "services" ? null : "services"
                    )
                  }
                  className="flex justify-between items-center"
                >
                  Services
                  <motion.span
                    variants={rotateIcon}
                    animate={mobileSub === "services" ? "open" : "closed"}
                  >
                    <ChevronDown />
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {mobileSub === "services" && (
                    <motion.div
                      variants={accordion}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="pl-4 flex flex-col gap-2"
                    >
                      <Link to="/services/web">Web Development</Link>
                      <Link to="/services/mobile">Mobile Apps</Link>
                      <Link to="/services/cloud">Cloud Solutions</Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.li variants={mobileItem}>
                  <NavLink to="/contact">Contact</NavLink>
                </motion.li>

                <motion.li variants={mobileItem}>
                  <NavLink to="/login/EmployeeLogin">
                    Employee Login
                  </NavLink>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
