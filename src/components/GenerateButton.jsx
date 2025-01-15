import React,{useContext} from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion"; // Import Framer Motion

import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const GenerateButton = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const onClickHandler = async () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading with Fade-in Effect */}
      <motion.h1
        className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 py-6 md:py-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        See the magic. Try now.
      </motion.h1>

      {/* Button with Hover and Tap Effects */}
      <motion.button
        className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-black text-white m-auto hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none"
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={onClickHandler}
      >
        Generate Images
        <motion.img
          src={assets.star_group}
          alt="star group"
          className="h-6 md:h-7"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </motion.button>
    </motion.div>
  );
};

export default GenerateButton;
