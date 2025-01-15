import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion"; // Import Framer Motion
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const BuyCredit = () => {
  const { user, url, loadCreditData, token, setShowLogin } =
    useContext(AppContext);

  const navigate = useNavigate();

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (res) => {
        console.log(res);
      },
    };
    const rzp = new window.Razorpay(options)
    rzp.open()
  };

  const paymentRazorPay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
      }

      const { data } = await axios.post(
        url + "/api/user/pay",
        { planId },
        { headers: { token } }
      );

      if (data.success) {
        initPay(data.order);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      {/* Plans Button */}
      <motion.button
        className="border border-gray-400 px-10 py-2 rounded-full mb-6 hover:bg-gray-200 transition"
        whileHover={{ scale: 1.1, rotate: 5 }} // Hover with scale and slight rotation
        transition={{ duration: 0.3 }}
      >
        Our Plans
      </motion.button>

      {/* Heading */}
      <h1 className="text-center text-3xl font-medium mb-6 sm:mb-10">
        Choose the Plan
      </h1>

      {/* Plan Cards */}
      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white drop-shadow-xl border rounded-lg py-10 px-8 text-gray-600 max-w-xs w-full"
            initial={{ opacity: 0, scale: 0.95, y: 20 }} // Initial state for animation
            animate={{ opacity: 1, scale: 1, y: 0 }} // Final state
            transition={{
              duration: 0.6,
              delay: index * 0.15, // Stagger the animations
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Hover scale with shadow
            }}
            whileTap={{
              scale: 0.98, // Subtle tap effect
            }}
          >
            {/* Plan Icon */}
            <motion.img
              src={assets.logo_icon}
              alt="Plan Icon"
              className="mx-auto mb-6"
              width={40}
              whileHover={{ scale: 1.2 }} // Slightly scale the icon on hover
              transition={{ duration: 0.2 }}
            />

            {/* Plan Name */}
            <p className="mt-3 mb-1 text-xl font-semibold text-gray-800">
              {item.id}
            </p>

            {/* Plan Description */}
            <p className="text-sm text-gray-500 mb-4">{item.desc}</p>

            {/* Price and Credits */}
            <p className="mt-6 text-3xl font-medium text-teal-600">
              ${item.price}{" "}
              <span className="text-sm text-gray-500">/{item.credits}</span>
            </p>

            {/* Button */}
            <motion.button
              className="w-full bg-teal-600 text-white mt-8 text-sm rounded-md py-2.5 min-w-52 hover:bg-teal-700 transition"
              whileHover={{
                scale: 1.1, // Scale the button on hover
                backgroundColor: "#2d8775", // Change color slightly
              }}
              whileTap={{
                scale: 0.95, // Subtle shrink effect on click
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              onClick={() => paymentRazorPay(item.id)}
            >
              {user ? "Purchase" : "Get Started"}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
