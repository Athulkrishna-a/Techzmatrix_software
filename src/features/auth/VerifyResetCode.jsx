import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyResetCode = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!email) {
      navigate("/login/VerifyResetCode");
    }
  }, [email, navigate]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const otp = code.join("");

    if (otp.length !== 6) {
      setError("Enter the complete 6-digit code");
      return;
    }

    // TEMP: navigation only (backend can be plugged later)
    navigate("/login/ResetPassword", {
      state: { email },
    });
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
        <h2 className="text-2xl font-bold mb-2">Verify Code</h2>
        <p className="text-white/70 mb-6">
          Enter the 6-digit code sent to your email
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-4">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-12 h-12 text-center text-xl rounded-lg bg-white/10 border border-white/20 outline-none"
              />
            ))}
          </div>

          {error && (
            <p className="text-red-400 text-sm mb-2">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
          >
            Verify Code
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default VerifyResetCode;
