import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import matalogicsLogo from "@/assets/LOGO.png";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Remove all user-related info
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to login
    navigate("/login");
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#ffffff] border-b border-[#e5e7eb] px-6 py-4 flex items-center justify-between shadow-sm "
    >
      {/* Logo and Company Name */}
      <div className="flex items-center space-x-2  mobile:ml-[60px] tablet:ml-[110px]">
        <img
          src={matalogicsLogo}
          alt="MATalogics Logo"
          className="w-[50px] h-[50px] rounded-lg object-cover"
        />
        <h1 className="text-3xl font-bold text-[#1f2937]">MATalogics</h1>
      </div>

      {/* Sign Out Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSignOut}
        className="bg-[#ef4444] hover:bg-[#dc2626] text-[#ffffff] px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 font-medium"
      >
        <LogOut className="w-4 h-4" />
        <span className="mobile:hidden">Sign Out</span>
      </motion.button>
    </motion.header>
  );
};

export default Header;
