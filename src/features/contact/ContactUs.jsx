import { motion } from 'framer-motion'
import { fadeUp, stagger } from "../../components/ui/motion";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { useEffect } from 'react'
import {
  Mail,
  Phone,
  MapPin
} from "lucide-react"
const ContactUs = () => {
  useEffect(() => {
    document.title = 'contact us | Techzmatrix Software Technologies'
  }, [])
  return (
    <section className='w-full h-auto relative overflow-hidden mx-auto text-white'>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
           linear-gradient(
               to right,
               rgba(355, 255, 255, 0.035) 1px,
                transparent 1px),
          linear-gradient( to bottom,   rgba(255, 255, 255, 0.055) 1px,  transparent 1px),
  radial-gradient(circle 800px at 0% 200px,rgba(95, 153, 196, 0.35),transparent 0%)
      `,
          backgroundSize: "96px 64px, 96px 64px, 100% 100%",
        }}
      />

      <motion.div
        className='p-15'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10  mx-auto">
          <motion.h2
            variants={fadeUp}
            className='text-white/70 text-lg'>
            Contact
          </motion.h2>
          <motion.h1
            variants={fadeUp}
            className='text-blue-400 text-4xl font-bold'>
            Talk to TechzMatrix
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className='py-2'>
            Send a quick message. We’ll respond with a plan, timeline, and a clear next step.
          </motion.p>
        </motion.div>
        <motion.div
          className='flex md:flex-row flex-col gap-3 pt-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="basis-3/5 rounded-2xl glow-edge tm-glass tm-noise 
             shadow-2xl shadow-blue-300/20 
             border border-white/10 bg-white/5 
             p-8 space-y-6"
          >
            <h1 className="text-3xl font-semibold text-white mb-4">
              Contact
            </h1>

            <form className="space-y-5">

              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col w-full">
                  <label className="text-sm text-white/70 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="rounded-lg bg-white/10 border border-white/10 
                     px-4 py-2 text-white placeholder-white/40
                     focus:outline-none focus:ring-2 focus:ring-blue-400/60
                     transition"
                    placeholder="First name"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="text-sm text-white/70 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="rounded-lg bg-white/10 border border-white/10 
                     px-4 py-2 text-white placeholder-white/40
                     focus:outline-none focus:ring-2 focus:ring-blue-400/60
                     transition"
                    placeholder="Last name"
                  />
                </div>
              </div>


              <div className="flex flex-col">
                <label className="text-sm text-white/70 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="rounded-lg bg-white/10 border border-white/10 
                   px-4 py-2 text-white placeholder-white/40
                   focus:outline-none focus:ring-2 focus:ring-blue-400/60
                   transition"
                  placeholder="example@gamil.com"
                />
              </div>


              <div className="flex flex-col">
                <label className="text-sm text-white/70 mb-1">
                  Phone
                </label>
                <input
                  type="number"
                  required
                  name='number'
                  className="rounded-lg bg-white/10 border border-white/10 
                   px-4 py-2 text-white placeholder-white/40
                   focus:outline-none focus:ring-2 focus:ring-blue-400/60
                   transition"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>


              <div className="flex flex-col">
                <label className="text-sm text-white/70 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className="rounded-lg bg-white/10 border border-white/10 
                   px-4 py-2 text-white placeholder-white/40
                   focus:outline-none focus:ring-2 focus:ring-blue-400/60
                   transition"
                  placeholder="Project inquiry"
                />
              </div>


              <div className="flex flex-col">
                <label className="text-sm text-white/70 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  type="text"
                  required
                  className="rounded-lg bg-white/10 border border-white/10 
                   px-4 py-2 text-white placeholder-white/40
                   focus:outline-none focus:ring-2 focus:ring-blue-400/60
                   transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>


              <button
                type="submit"
                className="mt-4 inline-flex items-center justify-center
                 rounded-lg bg-blue-500 hover:bg-blue-600
                 px-6 py-2 text-white font-medium
                 transition shadow-lg shadow-blue-500/30"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='basis-2/5 flex flex-col gap-3'>
            <div className='basis-1/2 fixed rounded-2xl glow-edge tm-glass tm-noise shadow-2xl shadow-blue-300 border border-white/10 bg-white/5'>
              <motion.div variants={fadeUp}
                className='px-10 py-10'>
                <h4 className="text-2xl font-semibold mb-3 text-blue-400">Contact Info</h4>
                <ul className="space-y-3 text-sm text-white">
                  <li className="flex items-center gap-2  cursor-pointer hover:text-cyan-400/80">
                    <Mail size={16} /><a
                      href="mailto:mail@techzmatrix.in"
                    >
                      mail@techzmatrix.in
                    </a>
                  </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:text-cyan-400/80">
                    <Phone size={16} /> <a href="tel:+919633764228">+91 96337 64228</a>

                  </li>
                  <li className="flex items-center gap-2  cursor-pointer hover:text-cyan-400/80">
                    <Phone size={16} /> <a href="tel:9995602526">+91 99956 02526</a>
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
                  <li className="flex items-center gap-2 cursor-pointer hover:text-cyan-400/80">
                    <PiWhatsappLogoDuotone size={26} /><a href="https://wa.me/9995602526">+91 99956 02526</a>
                  </li>

                </ul>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className='rounded-2xl basis-1/2 glow-edge tm-glass tm-noise overflow-hidden border border-white/10 shadow-xl'>
              <iframe
                className='rounded-2xl '
                src="https://www.google.com/maps?q=TechzMatrix+Trivandrum&output=embed"
                width="100%"
                style={{ border: 0 }}
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  )
}

export default ContactUs
