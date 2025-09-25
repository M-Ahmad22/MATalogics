import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logoWhite.png";
import ArrowUp from "../../assets/arrow-up-right.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

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
    }, 200);
  };
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="w-full px-0 py-0 fixed top-0  bg-[#1E1D288C]/55 backdrop-blur-sm shadow-md z-[99999] mobile:w-full medium:w-full "
    >
      <div className="max-w-[full] mx-auto px-[150px] py-[20px] flex items-center justify-between mobile:px-3 tablet:px-5 medium:px-5 large:px-5">
        <div className="text-[36px] font-extrabold text-[#fff] tracking-[-0.7] flex justify-center items-center align-items-center font-manrope medium:w-auto ">
          <div className="Logo">
            <img src={Logo} alt="" className="w-[60px] h-[55px] mr-2" />
          </div>
          <h1>MATalogics</h1>
        </div>

        <nav className="hidden md:flex space-x-9 text-lg font-medium text-[white] font-outfit tablet:hidden medium:space-x-4 tablet:font-normal ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors ${isActive ? "text-[20px]" : "text-lg"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              `transition-colors ${isActive ? "text-[20px]" : "text-lg"}`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/About"
            className={({ isActive }) =>
              `transition-colors ${isActive ? "text-[20px]" : "text-lg"}`
            }
          >
            About
          </NavLink>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 hover:text-[white] transition-colors focus:outline-none">
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

          <NavLink
            to="/Portfolio"
            className={({ isActive }) =>
              `transition-colors ${isActive ? "text-xl" : "text-lg"}`
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/Courses"
            className={({ isActive }) =>
              `transition-colors ${isActive ? "text-xl" : "text-lg"}`
            }
          >
            Courses
          </NavLink>
          <Link
            to="/contact"
            className={({ isActive }) =>
              `transition-all ${isActive ? "text-xl" : "hover:text-xl"}`
            }
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block tablet:hidden ">
          <Link
            to="/quote"
            className=" text-white font-semibold text-sm hover:bg-[#252525]/[0.55] transition flex w-[181px] px-[14px] py-[15px] justify-center items-center gap-[6px] flex-shrink-0 rounded-[66px] bg-[#0045e6] medium:w-[141px] medium:px-[4px] medium:py-[15px]"
          >
            Get a Quote
            <img src={ArrowUp} alt="" />
          </Link>
        </div>

        <div className="md:hidden mr-4 tablet:block">
          <button
            className="md:hidden text-[#fff] text-2xl tablet:block "
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 bg-[#1E1D288C]/55 backdrop-blur-sm shadow-md text-[#fff] flex flex-col gap-6 font-outfit items-center tablet:flex">
          <Link to="/" className="" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              `transition-colors ${isActive ? "text-[20px]" : "text-lg"}`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </NavLink>

          <NavLink
            to="/About"
            className={({ isActive }) =>
              `transition-colors ${isActive ? "text-[20px]" : "text-lg"}`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </NavLink>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 hover:text-[white] transition-colors focus:outline-none">
              Careers
              <FaChevronDown className="text-xs mt-1" />
            </button>

            {isCareersOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-sm shadow-lg border border-gray-100 z-50 w-44 overflow-hidden">
                <Link
                  to="/careers/join-us"
                  className="block px-4 py-2 text-sm hover:bg-[#f3f7fc] text-[#1A2A4D]"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsCareersOpen(false);
                  }}
                >
                  Join Us
                </Link>
                <Link
                  to="/careers/internships"
                  className="block px-4 py-2 text-sm hover:bg-[#f3f7fc] text-[#1A2A4D]"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsCareersOpen(false);
                  }}
                >
                  Internships
                </Link>
              </div>
            )}
          </div>

          <NavLink
            to="/Portfolio"
            className={({ isActive }) =>
              `transition-colors ${isActive ? "text-xl" : "text-lg"}`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/Courses"
            className={({ isActive }) =>
              `transition-colors ${isActive ? "text-xl" : "text-lg"}`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Courses
          </NavLink>
          <Link
            to="/contact"
            className={({ isActive }) =>
              `transition-all ${isActive ? "text-xl" : "hover:text-xl"}`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>

          <div className="w-full mt-2">
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/quote"
              className=" text-white font-semibold text-sm hover:bg-[#252525] transition flex  px-[14px] py-[15px] justify-center items-center gap-[6px] flex-shrink-0 rounded-[10px] bg-[#0045e6] w-full "
            >
              Get a Quote
              <img src={ArrowUp} alt="" />
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
