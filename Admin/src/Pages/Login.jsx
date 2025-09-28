import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Lock, User, Eye, EyeOff } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import WhiteLogo from "../assets/logoWhite.png";

const API_URL = import.meta.env.VITE_API_URL;
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user)); // just user info

        toast.success("Logged in successfully!", { duration: 5000 });

        navigate("/dashboard");
      } else {
        toast.error(data.message || "Invalid username or password");
      }
    } catch (err) {
      toast.error("Server error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8dc4fa] to-[#0b4899] mobile:flex-col flex medium:flex-row medium:w-full tablet:flex-row  items-center justify-center p-4 SpecificLarge:gap-[300px] medium:gap-[100px] gap-[50px] ">
      <img
        src={WhiteLogo}
        alt=""
        className="mobile:w-[50%] SpecificTablet:w-[40%] tablet:w-[40%] medium:w-[40%]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-50"
      >
        <div className="rounded-2xl shadow-lg p-8 bg-[#f0f9ff] border border-[#bae6fd] ">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl font-bold text-[#0b4899] mb-2">
              MATalogics
            </h1>
            <p className="text-[#6b7280]">Admin Panel Login</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleLogin}
            className="space-y-6"
          >
            {/* Username */}
            <div className="space-y-2">
              <label htmlFor="username" className="text-[#374151] font-medium">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] w-5 h-5" />
                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-11 bg-[#f9fafb] border border-[#e5e7eb] focus:border-[#0045E6] focus:ring-2 focus:ring-[#0045E6] h-12 text-[#1f2937] rounded-lg focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-[#374151] font-medium">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] w-5 h-5" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-11 bg-[#f9fafb] border border-[#e5e7eb] focus:border-[#0045E6] focus:ring-2 focus:ring-[#0045E6] h-12 text-[#1f2937] rounded-lg focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] hover:text-[#6b7280] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <motion.div whileTap={{ scale: 0.98 }}>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-[#0045E6] hover:bg-[#0039c7] text-[#ffffff] font-medium transition-all duration-200 shadow-lg hover:shadow-xl rounded-lg disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-[#ffffff] border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing In...</span>
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>
            </motion.div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-xs text-[#9ca3af]">
              Protected by MATalogics Security
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
