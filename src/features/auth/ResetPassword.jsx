import { useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
   const navigate = useNavigate();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();
  setError("");
  setSuccess("");

  // Validate password fields
  if (!password.trim() || !confirmPassword.trim()) {
    setError("Both password fields are required");
    return;
  }

  if (password.length < 8) {
    setError("Password must be at least 8 characters");
    return;
  }

  if (password !== confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  
  setSuccess("Password is valid. Ready to submit to backend.");
  console.log("Password ready to send:", password);
  navigate("/login/EmployeeLogin");
  
};


  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-slate-900 text-white">
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
        className="bg-white/10 backdrop-blur-lg p-8 rounded-xl w-full max-w-md z-10"
      >
        <h2 className="text-2xl font-bold mb-2">Reset Password</h2>
        <p className="text-white/70 mb-6">
          Enter your new password
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <input
            type="password"
            placeholder="New Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 mb-3 rounded-lg bg-white/10 border border-white/20 outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            Reset Password
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ResetPassword;
