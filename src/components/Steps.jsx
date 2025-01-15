import React from "react";
import { stepsData } from "../assets/assets";
import { motion } from "framer-motion"; // Import Framer Motion

const Steps = () => {
  // Animation variant for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      className="flex items-center flex-col justify-center px-4 sm:px-8 lg:px-16 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading with fade-in */}
      <motion.h1
        className="text-3xl sm:text-4xl font-semibold mb-4 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        How it works
      </motion.h1>

      {/* Subheading with slight delay */}
      <motion.p
        className="text-lg sm:text-xl text-gray-600 mb-10 text-center"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Transform words into stunning images
      </motion.p>

      {/* Step Cards */}
      <div className="w-full max-w-4xl space-y-6">
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-6 p-6 bg-white rounded-lg shadow-lg border cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Icon with subtle hover effect */}
            <motion.img
              src={item.icon}
              alt={item.title}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            />

            {/* Title and Description */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;
