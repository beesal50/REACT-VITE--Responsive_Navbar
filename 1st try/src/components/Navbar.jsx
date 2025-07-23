import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen((prev) => !prev);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <div>
      <nav className="h-20 fixed top-0 w-full px-6 lg:px-16 flex justify-between items-center bg-black text-white shadow z-50">
        <div className="text-3xl font-semibold">Logo</div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-10 text-xl font-medium tracking-wide">
          <a href="#" className="hover:text-yellow-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            About
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Services
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Toggle Icon */}
        <div className="text-4xl lg:hidden">
          <button onClick={toggleIcon} className="cursor-pointer">
            {isOpen ? <IoCloseCircleOutline /> : <IoMdMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full h-screen fixed bg-black text-white flex flex-col justify-center items-center gap-10 text-xl font-semibold tracking-wide z-40"
          >
            <motio
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400 transition"
            >
              Home
            </motio>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400 transition"
            >
              About
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400 transition"
            >
              Services
            </a>
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400 transition"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
