import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const menuVarients = {
    hidden: { x: "100%", opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        delay: 0.1,
      },
    },
  };
  return (
    <div>
      {/* background */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* desktop Navbar */}
      <nav className="z-30 fixed top-0 left-0 px-[6vw] py-[4vh] w-full flex justify-between items-center">
        <div className="text-3xl font-semibold tracking-wider uppercase bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Bishal
        </div>

        <div className="hidden lg:flex gap-4 text-lg font-bold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition-colors duration-200 cursor-pointer px-4 py-2 rounded ${
                isActive ? "bg-green-800 text-yellow-400" : "bg-transparent"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition-colors duration-200 cursor-pointer px-4 py-2 rounded ${
                isActive ? "bg-green-800 text-yellow-400" : "bg-transparent"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition-colors duration-200 cursor-pointer px-4 py-2 rounded ${
                isActive ? "bg-green-800 text-yellow-400" : "bg-transparent"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition-colors duration-200 cursor-pointer px-4 py-2 rounded ${
                isActive ? "bg-green-800 text-yellow-400" : "bg-transparent"
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* mobile menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            {isOpen ? (
              <IoMdClose className="cursor-pointer" />
            ) : (
              <RxHamburgerMenu className="cursor-pointer" />
            )}
          </button>
        </div>
      </nav>

      {/*mobile navlinks  */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVarients}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed z-20 top-0 right-0 w-[60%] h-screen bg-black"
          >
            <h1 className="h-full flex flex-col justify-center items-center gap-4 text-lg font-bold">
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/"
                className={({ isActive }) =>
                  `hover:text-yellow-400 transition-colors duration-200 cursor-pointer px-4 py-2 rounded ${
                    isActive ? " text-yellow-400" : "bg-transparent"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/about"
                className={({ isActive }) =>
                  `hover:text-yellow-400 transition-colors duration-200 cursor-pointer px-4 py-2 rounded ${
                    isActive ? " text-yellow-400" : "bg-transparent"
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/services"
                className={({ isActive }) =>
                  `hover:text-yellow-400 transition-colors duration-200 cursor-pointer px-4 py-2 rounded ${
                    isActive ? " text-yellow-400" : "bg-transparent"
                  }`
                }
              >
                Services
              </NavLink>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-yellow-400 transition-colors duration-200 cursor-pointer px-4 py-2 rounded ${
                    isActive ? " text-yellow-400" : "bg-transparent"
                  }`
                }
              >
                Contact
              </NavLink>
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
