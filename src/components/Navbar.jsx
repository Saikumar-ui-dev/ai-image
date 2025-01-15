import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion"; // Import Framer Motion

const Navbar = () => {
  const { user, setUser, showLogin, setShowLogin, logout, credit } =
    useContext(AppContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();


  return (
    <motion.div
      className="flex items-center justify-between py-4 px-6"
      initial={{ opacity: 0, x: -30 }} // Start with hidden, sliding in from the left
      animate={{ opacity: 1, x: 0 }} // Fade in and slide to original position
      transition={{ duration: 0.5, ease: "easeOut" }} // Smooth animation
    >
      {/* Logo */}
      <Link to="/">
        <motion.img
          src={assets.logo}
          alt="Logo"
          className="w-28 sm:w-32 lg:w-40"
          initial={{ opacity: 0, y: -20 }} // Start with hidden and above
          animate={{ opacity: 1, y: 0 }} // Fade in and slide down to position
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </Link>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-4">
            {/* Credit Info */}
            <motion.button
              className="flex items-center gap-1 text-sm text-gray-700"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }} // Staggered animation for better effect
            >
              <img src={assets.credit_star} alt="Credit" className="w-5" />
              <p>Credit left: {credit}</p>
            </motion.button>

            {/* Welcome Text */}
            <motion.p
              className="text-sm text-gray-700"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }} // Staggered animation for better effect
            >
              Hi, {user.name}
            </motion.p>

            {/* Profile Dropdown */}
            <motion.div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <motion.img
                src={assets.profile_icon}
                alt="Profile"
                className="w-8 h-8 rounded-full cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  rotate: 15,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)", // Hover effect
                }}
                transition={{ duration: 0.3 }} // Hover transition
              />
              {isDropdownOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-24 bg-white border rounded shadow-md"
                  initial={{ opacity: 0, y: -10 }} // Dropdown starts offscreen
                  animate={{ opacity: 1, y: 0 }} // Slide and fade in smoothly
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <ul className="list-none m-0 p-2 text-sm">
                    <motion.li
                      onClick={logout}
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                      whileHover={{ backgroundColor: "#f0f0f0", scale: 1.05 }} // Hover effect for logout
                      transition={{ duration: 0.2 }}
                    >
                      Logout
                    </motion.li>
                  </ul>
                </motion.div>
              )}
            </motion.div>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <motion.p
              className="cursor-pointer text-sm text-gray-700 hover:text-teal-700"
              onClick={() => navigate("/buy")}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }} // Staggered animation
            >
              Pricing
            </motion.p>
            <motion.button
              onClick={() => setShowLogin(true)}
              className="bg-teal-700 text-white px-6 py-2 text-sm rounded-full hover:bg-teal-800"
              whileHover={{
                scale: 1.1, // Scaling up on hover
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)", // Subtle shadow
              }}
              transition={{ duration: 0.3 }} // Hover transition
            >
              Login
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
