import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"


import techzmatrix from "../../assets/images/Techzmatrix_software.png";
import google1 from "../../assets/images/google1.jpeg";
import google2 from "../../assets/images/google2.jpeg";
import google3 from "../../assets/images/google3.jpeg";

const EmployeeLogin = () => {
  const images = [google1, google2, google3];
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    document.title = "Employee Login ";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  const validEmail = "admin@techzmatrix.com";
  const validPassword = "admin123";

  if (
    formData.email !== validEmail ||
    formData.password !== validPassword
  ) {
    alert("Invalid user details");
    return;
  }

  // console.log("Login success:", formData);

};


  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px),
            radial-gradient(circle 800px at 0% 200px, rgba(95,153,196,0.35), transparent 70%)
          `,
          backgroundSize: "96px 64px, 96px 64px, 100% 100%",
        }}
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 py-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-between mb-10">
          <img src={techzmatrix} alt="Company Logo" className="w-40" />

          <Link
            to="/"
            className="px-5 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
          >
            Go Home
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/5 backdrop-blur-xl rounded-2xl p-8">
          <div className="relative overflow-hidden rounded-xl h-80 md:h-auto">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt="Visual"
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
            <p className="text-white/70 mb-6">Login to your account</p>

            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:border-white"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:border-white"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-400">{errors.password}</p>
                )}
              </div>

              <p className="text-sm text-white/70">
                Don’t remember password?{" "}
                <span
                  className="text-blue-400 hover:underline cursor-pointer"
                  onClick={() => navigate("/login/ForgotPassword")}
                >
                  Reset
                </span>
              </p>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
              >
                Login
              </button>
            </form>

            <p className="text-sm text-white/70 mt-4">
              Don’t have an account?{" "}
              <span
                className="text-blue-400 hover:underline cursor-pointer"
                onClick={() => navigate("/login/EmployeeSignup")}
              >
                Signup
              </span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default EmployeeLogin;
