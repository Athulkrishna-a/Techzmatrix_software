import { motion } from 'framer-motion'
import { fadeUp, stagger } from "../../components/ui/motion";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { useEffect, useState } from "react"
import CountryCodeDropdown from './components/CountryCodeDropdown';
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin
} from "lucide-react"


const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us"
  }, [])

  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    subject: "",
    message: ""
  };
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState(initialFormData);

  const nameRegex = /^[A-Za-z\s]+$/
  const phoneRegex = /^[0-9]{6,15}$/

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === "firstName" || name === "lastName") {
      if (!/^[A-Za-z\s]*$/.test(value)) return
    }

    if (name === "phone") {
      if (!/^[0-9]*$/.test(value)) return
    }

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const validate = () => {
    let newErrors = {}

    if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName = "Only letters allowed"
    }

    if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName = "Only letters allowed"
    }

    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter valid phone number"
    }

    // Missing checks:
    if (!formData.email) newErrors.email = "Email is required"
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter valid email"
    if (!formData.subject) newErrors.subject = "Subject is required"
    if (!formData.message) newErrors.message = "Message is required"

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: `${formData.countryCode} ${formData.phone}`,
      subject: formData.subject,
      message: formData.message
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        setStatus("Email sent successfully!");
        setIsSuccess(true);
        setFormData(initialFormData); // clear fields
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("Failed to send email. Please try again.");
        setIsSuccess(false);
      });
  };

  useEffect(() => {
    document.title = 'contact us '
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
        className='px-5 py-10 md:p-15'>
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
          className='flex lg:flex-row flex-col gap-3 pt-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="basis-3/5 rounded-2xl glow-edge tm-glass edge-glow tm-noise 
             shadow-2xl shadow-blue-300/20 
             border border-white/10 bg-white/5 
             p-8 space-y-6"
          >
            <h1 className="text-3xl font-semibold text-white mb-4">
              Contact
            </h1>

            <form className="space-y-5" onSubmit={handleSubmit}>

              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col w-full">
                  <label className="text-sm text-white/70 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="rounded-lg bg-white/10 border border-white/10 px-4 py-2 text-white"
                    placeholder="First name"
                  />

                  {errors.firstName && (
                    <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
                  )}
                </div>

                <div className="flex flex-col w-full">
                  <label className="text-sm text-white/70 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="rounded-lg bg-white/10 border border-white/10 px-4 py-2 text-white"
                    placeholder="Last name"
                  />

                  {errors.lastName && (
                    <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>


              <div className="flex flex-col">
                <label className="text-sm text-white/70 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  Phone Number
                </label>

                <div className="flex gap-2 items-center">
                  <CountryCodeDropdown
                    value={formData.countryCode}
                    onChange={(code) =>
                      setFormData({ ...formData, countryCode: code })
                    }
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="flex-1 rounded-lg bg-white/10 border border-white/10 px-4 py-2 text-white"
                  />
                </div>

                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-white/70 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
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
            {status && (
              <p
                style={{
                  color: isSuccess ? "green" : "red",
                  marginTop: "10px",
                  fontWeight: "600"
                }}
              >
                {status}
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='basis-2/5 flex flex-col  gap-3'>
            <div className='basis-1/2 fixed rounded-2xl glow-edge tm-glass tm-noise shadow-2xl shadow-blue-300 border border-white/10 bg-white/5'>
              <motion.div variants={fadeUp}
                className='px-10 py-10'>
                <h4 className="text-2xl font-semibold mb-3 text-blue-400">Contact Info</h4>
                <ul className="space-y-3 text-sm text-white">

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
                    <Mail size={16} /><a
                      href="mailto:mail@techzmatrix.in"
                    >
                      mail@techzmatrix.in
                    </a>
                  </li>
                  <li className="flex items-start gap-2  cursor-pointer hover:text-cyan-400/80">
                    <MapPin size={22} />
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
