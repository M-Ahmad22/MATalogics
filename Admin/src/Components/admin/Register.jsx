import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Lock, User, Eye, EyeOff } from "lucide-react";
import axios from "axios";
import UserPage from "./User";
import toast, { Toaster } from "react-hot-toast";
import NoAccess from "../../Pages/NoAccess";

const API_URL = import.meta.env.VITE_API_URL; // ✅ Your backend URL

const Register = () => {
  let userRole = "";

  try {
    const user = JSON.parse(localStorage.getItem("user"));
    userRole = user?.role || "";
  } catch (err) {
    userRole = ""; // No user or invalid JSON
  }

  // 🔹 If not Admin, show NoAccess page
  if (userRole.toLowerCase() !== "admin") {
    return <NoAccess />;
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Admin");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // ✅ Call backend API
      const res = await axios.post(`${API_URL}/api/auth/register`, {
        name: username,
        email,
        username,
        password,
        role: role.toLowerCase(),
      });

      // ✅ Save token and user in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // ✅ Success toast
      toast.success("User registered successfully!");

      // ✅ Reset form fields
      setUsername("");
      setEmail("");
      setPassword("");
      setRole("Admin");
      setShowPassword(false);
    } catch (err) {
      // ❌ Error toast
      const message =
        err.response?.data?.message || "Something went wrong. Try again.";
      setError(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex w-full h-auto tablet:flex-col mobile:flex-col ">
        <div className="w-[40%] h-auto flex justify-center items-center tablet:w-full tablet:h-auto mobile:w-full mobile:h-auto ">
          {" "}
          <div className="h-[90vh] bg-gradient-to-br flex items-center justify-center p-0 w-[90%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md z-50"
            >
              {/* Card */}
              <div className="rounded-2xl shadow-lg p-8 bg-[#f0f9ff] border border-[#bae6fd]">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center mb-8"
                >
                  <h1 className="text-5xl font-bold text-[#0b4899] mb-2">
                    MATalogics
                  </h1>
                  <p className="text-[#6b7280]">Admin Panel Registration</p>
                </motion.div>

                {/* Error message */}
                {error && (
                  <div className="mb-4 text-red-600 bg-red-100 border border-red-200 p-2 rounded">
                    {error}
                  </div>
                )}

                {/* Form */}
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  onSubmit={handleRegister}
                  className="space-y-6"
                >
                  {/* Username */}
                  <div className="space-y-2">
                    <label
                      htmlFor="username"
                      className="text-[#374151] font-medium"
                    >
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
                  {/* Email  */}

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-[#374151] font-medium"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] w-5 h-5" />
                      <input
                        id="email"
                        type="text"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-11 bg-[#f9fafb] border border-[#e5e7eb] focus:border-[#0045E6] focus:ring-2 focus:ring-[#0045E6] h-12 text-[#1f2937] rounded-lg focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <label
                      htmlFor="password"
                      className="text-[#374151] font-medium"
                    >
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

                  {/* Role Dropdown */}
                  <div className="space-y-2">
                    <label
                      htmlFor="role"
                      className="text-[#374151] font-medium"
                    >
                      Select Role
                    </label>
                    <div className="relative">
                      <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="appearance-none w-full bg-[#f9fafb] border border-[#e5e7eb] focus:border-[#0045E6] focus:ring-2 focus:ring-[#0045E6] h-12 text-[#1f2937] rounded-lg focus:outline-none pl-3 pr-10"
                        required
                      >
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                      </select>
                      <svg
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af] pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Submit */}
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-12 bg-[#0045E6] hover:bg-[#0039c7] text-[#ffffff] font-medium transition-all duration-200 shadow-lg hover:shadow-xl rounded-lg disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-4 h-4 border-2 border-[#ffffff] border-t-transparent rounded-full animate-spin"></div>
                          <span>Registering...</span>
                        </div>
                      ) : (
                        "Register"
                      )}
                    </button>
                  </motion.div>
                </motion.form>

                {/* Footer */}
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
        </div>
        <div className="w-[60%] h-auto flex justify-start items-center tablet:w-full tablet:h-auto mobile:w-full mobile:h-auto ">
          {" "}
          <UserPage />
        </div>
      </div>
    </>
  );
};

export default Register;
