import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion"; // Import Framer Motion

const Description = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-24 px-6 sm:px-10 md:px-20 lg:px-28"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl font-semibold text-center mb-4"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Create AI Images
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-gray-500 text-center mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Turn your imagination into stunning images in seconds with our
        AI-powered text-to-image generator.
      </motion.p>

      {/* Image and Text Section */}
      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center max-w-full mx-auto">
        {/* Image with zoom-in effect */}
        <motion.img
          src={assets.sample_img_1}
          className="w-80 xl:w-96 rounded-lg shadow-lg"
          alt="AI-generated image"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        />

        {/* Text Content */}
        <motion.div
          className="flex flex-col items-start md:items-center max-w-lg text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2 className="text-3xl font-medium mb-4 text-gray-800">
            Introducing the AI-Powered Text-to-Image Generator
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            With this cutting-edge technology, you can convert simple text
            descriptions into vivid, high-quality images.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Unlock endless creative possibilities and bring your ideas to life
            effortlessly.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Description;
