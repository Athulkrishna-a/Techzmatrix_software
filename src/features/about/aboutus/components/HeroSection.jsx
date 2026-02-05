import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";



const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
           linear-gradient(
    to right,
    rgba(355, 255, 255, 0.035) 1px,
    transparent 1px
  ),
  linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.055) 1px,
    transparent 1px
  ),
  radial-gradient(
    circle 800px at 0% 200px,
    rgba(95, 153, 196, 0.35),
    transparent 0%
  )
          `,
          backgroundSize: "60px 40px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_65%)]" />


      <motion.div
        
       
        className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-40 text-white"
      >
        <p className="text-sm uppercase tracking-widest text-white/60">
          Who we are
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-cyan-300 leading-tight">
          Built to deliver high-trust software
        </h1>

        <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-3xl">
          TechzMatrix Software Technologies builds scalable digital products
          with strong engineering discipline, secure architecture, and premium
          user experience.
        </p>
      </motion.div>


      <div className="relative py-5 p-4 md:px-15 ">

        <div className="relative z-10 max-w-7xl mx-auto space-y-36">
          <motion.div
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-cyan-300 text-center">
              Our Leadership Team
            </h3>
            <p className="mt-4 text-white text-center max-w-2xl mx-auto">
              Experienced professionals driving strategy, technology, and execution.
            </p>

            <motion.div
             
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {[
                {
                  name: "Arjun Nair",
                  role: "Chief Executive Officer",
                  img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
                },
                {
                  name: "Meera Krishnan",
                  role: "Director of Engineering",
                  img: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
                },
                {
                  name: "Rahul Menon",
                  role: "Head of Product",
                  img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
                },
              ].map((member) => (
                <motion.div
                  key={member.name}
                 
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 160 }}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-72 object-cover"
                  />

                  <div className="p-6 text-center">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {member.name}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {member.role}
                    </p>

                    <div className="mt-4 flex justify-center gap-4 text-gray-500">
                      <button className="hover:text-[#0B1D33] transition">
                        <Linkedin size={18} />
                      </button>
                      <button className="hover:text-[#0B1D33] transition">
                        <Twitter size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.img
              
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1497366216548-37526070297c"
              alt="Tech office"
              className="w-full h-90 object-cover rounded-2xl shadow-lg"
            />

            <motion.div
            
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-cyan-400">
                Our Mission
              </h3>
              <p className="mt-6 text-white leading-relaxed">
                To deliver secure, scalable, and well-engineered software
                solutions that businesses can rely on — from early-stage MVPs
                to enterprise-grade platforms.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
           
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-cyan-400">
                Our Vision
              </h3>
              <p className="mt-6 text-white leading-relaxed">
                To become a trusted global technology partner by building future-ready
                software that empowers businesses, drives innovation, and sets new
                standards in reliability, security, and user experience.
              </p>
            </motion.div>

            <motion.img
            
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Vision and innovation"
              className="w-full h-70 object-cover rounded-2xl shadow-lg"
            />
          </div>


          <div className="relative max-w-7xl mx-auto">

            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-cyan-400">
                Our Journey
              </h2>
              <p className="mt-6 text-white/70 leading-relaxed">
                Founded with a strong engineering mindset, we’ve grown into a technology
                partner trusted by businesses to deliver reliable, scalable, and
                high-quality digital solutions that drive real impact.
              </p>
            </div>

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "100+", label: "Projects Delivered" },
                { value: "40L+", label: "Lines of Code Written" },
                { value: "99%", label: "On-time Delivery" },
                { value: "10+", label: "Years of Experience" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#102A4A] tm-glass tm-noise border border-cyan-400/20 rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition"
                >
                  <h3 className="text-3xl font-bold text-cyan-400">
                    {item.value}
                  </h3>
                  <p className="mt-2 text-white/70 text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.12 } },
              }}
              className="mt-40 pb-32"
            >
             
              <motion.div
              
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
                  Trusted by 600+ World-Class Brands
                </h2>
                <p className="mt-4 text-white/70">
                  And organizations across industries worldwide
                </p>
              </motion.div>

              
              <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    name: "AnandRathi",
                    src: "https://upload.wikimedia.org/wikipedia/en/5/57/Anand_Rathi_logo.png",
                  },
                  {
                    name: "ArcelorMittal",
                    src: "https://upload.wikimedia.org/wikipedia/commons/4/4f/ArcelorMittal_logo.svg",
                  },
                  {
                    name: "SBI",
                    src: "https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg",
                  },
                  {
                    name: "Mahindra",
                    src: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Mahindra_Rise_Logo.png",
                  },
                  {
                    name: "DHL",
                    src: "https://upload.wikimedia.org/wikipedia/commons/b/b3/DHL_Logo.svg",
                  },
                  {
                    name: "Hitachi",
                    src: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Hitachi_logo.svg",
                  },
                  {
                    name: "OLX",
                    src: "https://upload.wikimedia.org/wikipedia/commons/9/9c/OLX_Logo.svg",
                  },
                  {
                    name: "Del Monte",
                    src: "https://upload.wikimedia.org/wikipedia/en/8/8b/Del_Monte_logo.svg",
                  },
                ].map((brand) => (
                  <motion.div
                    key={brand.name}
                    
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-6 flex items-center justify-center shadow-sm"
                  >
                    <img
                      src={brand.src}
                      alt={brand.name}
                      className="max-h-10 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <div className="mt-28">
              <h3 className="text-3xl font-bold text-center text-cyan-400">
                What Sets Us Apart
              </h3>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  {
                    title: "Custom-Built Solutions",
                    desc: "Every product is engineered around your business goals, not templates or shortcuts.",
                  },
                  {
                    title: "Secure by Design",
                    desc: "We bake security, scalability, and performance into every layer from day one.",
                  },
                  {
                    title: "Expert Engineering Team",
                    desc: "A focused team of developers and architects who value clean code and long-term maintainability.",
                  },
                  {
                    title: "End-to-End Ownership",
                    desc: "From ideation to deployment and support, we take full responsibility for outcomes.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#102A4A] tm-glass tm-noise border border-white/10 rounded-2xl p-8 shadow-md"
                  >
                    <h4 className="text-lg font-semibold text-cyan-400">
                      {item.title}
                    </h4>
                    <p className="mt-4 text-white/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
