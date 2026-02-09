import { useState } from "react";
import { motion } from "framer-motion";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    try {
     
      const res = await fetch("http://localhost:8080/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSuccess(
        "If this email exists, a password reset link has been sent."
      );
      setEmail("");
    } catch (err) {
      setError("Unable to process request. Try again later.");
    }
  };

  return (
     <section className="relative w-full min-h-screen overflow-hidden  flex items-center justify-center bg-slate-900 text-white">
      
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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-2">Forgot Password</h2>
        <p className="text-white/70 mb-6">
          Enter your registered email address
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 outline-none"
          />

          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          {success && (
            <p className="text-green-400 text-sm mt-2">{success}</p>
          )}

          <button
            type="submit"
            className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
          >
            Send Reset Link
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ForgotPassword;
