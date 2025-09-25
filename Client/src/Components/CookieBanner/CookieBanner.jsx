import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Sparkles } from "lucide-react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShowBanner(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 max-w-sm w-full mobile:max-w-full mobile:right-0  mobile:flex mobile:justify-center "
    >
      <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl p-5 flex flex-col gap-3 mobile:w-[90%]">
        {/* Gradient Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-500/20 to-pink-500/20 opacity-70 blur-2xl"></div>

        {/* Header */}
        <div className="relative flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-white font-outfit text-lg font-semibold tracking-wide">
            We Respect Your Privacy
          </h3>
        </div>

        {/* Body */}
        <p className="relative text-sm text-white/80 font-montserrat leading-relaxed">
          We use cookies to improve your experience and for analytics. By using
          our site, you agree to our{" "}
          <a
            href="/privacy"
            className="underline decoration-purple-400 hover:text-purple-300 transition-colors"
          >
            Privacy & Cookies Policy
          </a>
          .
        </p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={acceptCookies}
          className="relative mt-1 inline-flex items-center justify-center px-6 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:shadow-lg transition-all duration-300"
        >
          <Sparkles className="mr-2 w-4 h-4" />
          Accept Cookies
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CookieBanner;
