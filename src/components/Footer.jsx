import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion"; // Import Framer Motion

const Footer = () => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 sm:py-3 mt-20 px-6 sm:px-10"
      initial={{ opacity: 0, y: 20 }} // Initial state for animation
      animate={{ opacity: 1, y: 0 }} // Final state
      transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and smoother easing
    >
      {/* Logo with bouncing effect */}
      <motion.img
        src={assets.logo}
        width={150}
        alt="Logo"
        className="mb-4 sm:mb-0"
        initial={{ opacity: 0, y: -20 }} // Logo starts above and hidden
        animate={{ opacity: 1, y: 0 }} // Logo slides in smoothly
        transition={{
          duration: 0.7,
          delay: 0.3,
          type: "spring",
          stiffness: 100, // Spring effect for bouncy movement
        }}
      />

      {/* Copyright text with slide-in effect */}
      <motion.p
        className="flex-1 border-t sm:border-t-0 border-gray-400 pl-4 text-sm text-gray-500 text-center sm:text-left"
        initial={{ opacity: 0, x: 20 }} // Start slightly off-screen
        animate={{ opacity: 1, x: 0 }} // Slide in while fading
        transition={{
          duration: 0.6,
          delay: 0.5,
          ease: "easeOut",
        }}
      >
        Copyright || All rights reserved
      </motion.p>

      {/* Social Media Icons with staggered animation */}
      <motion.div
        className="flex gap-4 sm:gap-6 mt-4 sm:mt-0 justify-center sm:justify-end"
        initial={{ opacity: 0, x: 20 }} // Start slightly off-screen
        animate={{ opacity: 1, x: 0 }} // Final state
        transition={{
          duration: 0.6,
          delay: 0.7,
          ease: "easeOut",
        }}
      >
        <motion.img
          src={assets.facebook_icon}
          alt="Facebook"
          width={35}
          className="cursor-pointer"
          whileHover={{
            scale: 1.2, // Scale more on hover
            rotate: 15, // Slight rotation on hover
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)", // Enhanced shadow
          }}
          transition={{ duration: 0.4 }}
        />
        <motion.img
          src={assets.twitter_icon}
          alt="Twitter"
          width={35}
          className="cursor-pointer"
          whileHover={{
            scale: 1.2,
            rotate: 15,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.4 }}
        />
        <motion.img
          src={assets.instagram_icon}
          alt="Instagram"
          width={35}
          className="cursor-pointer"
          whileHover={{
            scale: 1.2,
            rotate: 15,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Footer;
