import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion"; // Corrected import for framer-motion
import {AppContext} from '../context/AppContext'
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate()
  const onClickHandler =async()=> {
    if (user) {
      navigate("/result");
    }else{
      setShowLogin(true)
    }
  }

  // Variants for text and elements animation
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1 + 1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center my-20 px-4 sm:px-8 lg:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Badge with Slide-in */}
      <motion.div
        className="text-stone-500 inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full border border-neutral-500 shadow-lg"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-sm sm:text-base font-medium">
          Best text-to-image generator
        </p>
        <motion.img
          src={assets.star_icon}
          alt="Star Icon"
          className="w-5 h-5 sm:w-6 sm:h-6"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Main Header */}
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-semibold mt-8 text-center max-w-[600px] sm:max-w-[800px] mx-auto leading-tight"
        variants={textVariant}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Turn text to <span className="text-blue-600">image</span>, in seconds
      </motion.h1>

      {/* Subheader */}
      <motion.p
        className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
        variants={textVariant}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        Generate high-quality images from your creative text ideas in just a few
        seconds. Explore the power of AI-driven technology today.
      </motion.p>

      {/* Call to Action Button */}
      <motion.button
        className="text-lg text-white bg-black hover:bg-gray-800 transition-colors duration-300 w-auto mt-8 mx-12 py-3 px-8 flex items-center justify-center gap-3 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClickHandler}
      >
        Generate Images
        <motion.img
          src={assets.star_group}
          alt="Star Group"
          className="w-5 h-5"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.button>

      {/* Image Gallery */}
      <div className="flex flex-wrap justify-center mt-16 gap-6">
        {Array(6)
          .fill("")
          .map((item, index) => (
            <motion.img
              key={index}
              className="rounded-xl cursor-pointer"
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt={`Sample Image ${index}`}
              width="120"
              height="120"
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              custom={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
      </div>

      {/* Footer Text */}
      <motion.p
        className="mt-4 text-neutral-600 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Generated images from{" "}
        <span className="font-semibold text-black">Imagify</span>
      </motion.p>
    </motion.div>
  );
};

export default Header;
