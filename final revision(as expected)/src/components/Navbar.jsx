import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVarients = {
    hidden: { y: "-100%", opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.1,
      },
    },
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full">
        <nav className="relative z-30 flex justify-between mx-16 my-6 items-center">
          {/* Logo */}
          <div className="text-2xl font-semibold tracking-wide">Bishal</div>

          {/* Desktop Navigation NavLinks */}
          <div className="hidden lg:flex gap-6 font-bold text-zinc-600">
            {/* isActive is used to show which link is active */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-yellow-600 transition-colors duration-200 ${
                  isActive ? "text-yellow-600" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-yellow-600 transition-colors duration-200 ${
                  isActive ? "text-yellow-600" : ""
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `hover:text-yellow-600 transition-colors duration-200 ${
                  isActive ? "text-yellow-600" : ""
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-yellow-600 transition-colors duration-200 ${
                  isActive ? "text-yellow-600" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="text-3xl lg:hidden">
            <button
              className="cursor-pointer hover:scale-90 transition duration-200"
              onClick={toggleMenu}
            >
              {isOpen ? <IoCloseOutline className="text-4xl" /> : <FiMenu />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation NavLinks*/}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVarients}
              initial="hidden"
              animate="show"
              exit="exit"
              className="absolute z-20 w-full top-0 h-screen left-0 flex flex-col justify-center items-center gap-8 font-bold bg-green-500 text-zinc-600 text-xl"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-yellow-600 transition-colors duration-200 ${
                    isActive ? "text-yellow-600" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-yellow-600 transition-colors duration-200 ${
                    isActive ? "text-yellow-600" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `hover:text-yellow-600 transition-colors duration-200 ${
                    isActive ? "text-yellow-600" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-yellow-600 transition-colors duration-200 ${
                    isActive ? "text-yellow-600" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
