
import techzmatrix from "../../assets/images/Techzmatrix_software.png"
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import google1 from "../../assets/images/google1.jpeg"
import google2 from "../../assets/images/google2.jpeg"
import google3 from "../../assets/images/google3.jpeg"
import { Link } from 'react-router-dom'
const EmployeeLogin = () => {


    const images = [
        google1,
        google2,
        google3
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        document.title = 'Employee Signup | Techzmatrix Software Technologies'
    }, [])
    return (
        <section className="relative w-full min-h-screen overflow-hidden">

            {/* <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
            linear-gradient(135deg,
              #0b1d33 0%,
              #0e2a4d 35%,
              #1a1f3b 65%,
              #120d26 100%
            )
          `,
                }}
            /> */}
    <div
  aria-hidden
  className="absolute inset-0 z-0 pointer-events-none"
  style={{
    backgroundImage: `
      linear-gradient(135deg,
        #0b1d33 0%,
        #0e2a4d 35%,
        #1a1f3b 65%,
        #120d26 100%
      ),
      linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
      radial-gradient(circle 600px at 15% 35%, rgba(213,197,255,0.35), transparent 70%)
    `,
    backgroundSize: `
      100% 100%,
      120px 120px,
      120px 120px,
      100% 100%
    `,
    backgroundRepeat: "no-repeat, repeat, repeat, no-repeat",
  }}
/>


            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_60%)]" />


            <motion.div
                className="relative z-10 max-w-6xl mx-auto px-6 py-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >

                <div className="flex items-center justify-between mb-10">
                    <div className=" items-center ">
                        <img
                            src={techzmatrix}
                            alt="Company Logo"
                            className="w-40 h-15 rounded"
                        />

                    </div>

                    <button className="px-5 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition">
                        <Link to='/'>
                            Go Home
                        </Link>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/5 backdrop-blur-xl rounded-2xl p-8">

                    <div className="w-full h-auto relative overflow-hidden rounded-xl">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={index}
                                src={images[index]}
                                alt="Rotating visual"
                                className="absolute inset-0 w-full h-full object-cover"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                            />
                        </AnimatePresence>
                    </div>


                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col justify-center text-white"
                    >
                        <h2 className="text-3xl font-bold mb-2">Hello 👋</h2>
                        <p className="text-white/70 mb-6">
                            Login to your employee account
                        </p>

                        <form className="space-y-4">
                            <input
                                type="name"
                                placeholder="name"
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:border-white"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:border-white"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:border-white"
                            />

                            <button
                                type="submit"
                                className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
                            >
                                Sign up
                            </button>
                        </form>

                        <p className="text-sm text-white/70 mt-4">
                            Already have an account?{" "}
                            <span className="text-blue-400 cursor-pointer hover:underline">
                                <Link to='/login/EmployeeLogin'>Login</Link>
                            </span>
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default EmployeeLogin;
