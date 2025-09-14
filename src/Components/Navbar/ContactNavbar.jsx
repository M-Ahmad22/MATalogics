import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/MAT_LOGO_WEB-DizT3nQ9 (1) 1.png";
// import Logo from "../../assets/LOGO_MAT_WEB_SERF.png";

const Navbar = () => {
  const [isCareersOpen, setIsCareersOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCareersOpen, setMobileCareersOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsCareersOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsCareersOpen(false);
    }, 200); // Delay to allow smooth move to submenu
  };
  return (
    // <header className="w-full px-6 py-4 bg-white shadow-sm fixed top-0 z-50">
    <header className="w-full px-0 py-0 fixed top-0 z-50 bg-[#1E1D288C]/55   border-b border-white/20">
      <div className="max-w-[82rem] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-4xl font-bold text-primary tracking-tight flex justify-center items-center align-items-center">
          <div className="Logo">
            <img src={Logo} alt="" className="w-20 h-20 mr-2" />
          </div>
          <span className="text-[#1A2A4D]">MAT</span>
          <span className="text-[#2c5da9]">alogics</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium text-[#1A2A4D]">
          <Link to="/" className="hover:text-[#2c5da9] transition-colors">
            Home
          </Link>
          <Link
            to="/service"
            className="hover:text-[#2c5da9] transition-colors"
          >
            Services
          </Link>
          <a
            href="#portfolio"
            className="hover:text-[#2c5da9] transition-colors"
          >
            Portfolio
          </a>
          <Link
            to="/whoWeAre"
            className="hover:text-[#2c5da9] transition-colors"
          >
            About
          </Link>
          <a href="#blog" className="hover:text-[#2c5da9] transition-colors">
            Blog
          </a>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 hover:text-[#2c5da9] transition-colors focus:outline-none">
              Careers
              <FaChevronDown className="text-xs mt-1" />
            </button>

            {isCareersOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-sm shadow-lg border border-gray-100 z-50 w-44 overflow-hidden">
                <Link
                  to="/careers/join-us"
                  className="block px-4 py-2 text-sm hover:bg-[#f3f7fc] text-[#1A2A4D]"
                >
                  Join Us
                </Link>
                <Link
                  to="/careers/internships"
                  className="block px-4 py-2 text-sm hover:bg-[#f3f7fc] text-[#1A2A4D]"
                >
                  Internships
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="hover:text-[#2c5da9] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block ">
          <Link
            to="/quote"
            className="bg-[#2c5da9] text-white px-5 py-2 rounded-xl font-semibold text-sm hover:bg-[#990302] transition"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Icon (optional for future use) */}
        <div className="md:hidden mr-4">
          {/* Add hamburger icon or drawer here later */}
          <button
            className="md:hidden text-[#1A2A4D] text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 bg-white text-[#1A2A4D] shadow-md">
          <Link
            to="/"
            className="block py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/service"
            className="block py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <a href="#portfolio" className="block py-2">
            Portfolio
          </a>
          <Link
            to="/whoWeAre"
            className="block py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <a href="#blog" className="block py-2">
            Blog
          </a>

          {/* Careers Mobile Dropdown */}
          <div>
            <button
              className="flex justify-between items-center w-full py-2"
              onClick={() => setMobileCareersOpen(!mobileCareersOpen)}
            >
              <span>Careers</span>
              <FaChevronDown
                className={`ml-2 transition-transform duration-300 ${
                  mobileCareersOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileCareersOpen && (
              <div className="pl-4">
                <Link
                  to="/careers/join-us"
                  className="block py-1 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join Us
                </Link>
                <Link
                  to="/careers/internships"
                  className="block py-1 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Internships
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="block py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/quote"
            className="block mt-4 text-center bg-[#2c5da9] text-white py-2 rounded-xl font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
