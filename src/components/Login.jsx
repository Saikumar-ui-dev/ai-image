import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets.js";
import { AppContext } from "../context/AppContext.jsx";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { showLogin, setShowLogin, url, setToken, setUser } =
    useContext(AppContext);
  const [state, setState] = useState("LogIn");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to toggle between LogIn and SignUp
  const toggleState = () => {
    setState(state === "LogIn" ? "SignUp" : "LogIn");
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const endpoint =
        state === "LogIn" ? "/api/user/login" : "/api/user/register";
      const payload =
        state === "LogIn" ? { email, password } : { name, email, password };
      const { data } = await axios.post(url + endpoint, payload);

      if (data.success) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem("token", data.token);
        setShowLogin(false);
        toast.success(
          `${state === "LogIn" ? "Logged in" : "Signed up"} successfully!`
        );
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-lg bg-black/30 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.form
        className="relative bg-white p-10 rounded-xl text-slate-500 shadow-2xl max-w-sm w-full"
        initial={{ scale: 0.8, opacity: 0, y: -50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onSubmit={submitHandler}
      >
        <motion.h1
          className="text-center text-2xl text-neutral-700 font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {state === "LogIn" ? "Log In" : "Sign Up"}
        </motion.h1>

        <p className="text-sm text-gray-600 mb-6">
          Welcome back! Please {state === "LogIn" ? "sign in" : "sign up"} to
          continue
        </p>

        {state === "SignUp" && (
          <motion.div
            className="border border-gray-300 px-6 py-3 flex items-center gap-4 rounded-full mt-4 focus-within:border-teal-500 transition-all"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <img
              src={assets.profile_icon}
              alt="Profile Icon"
              className="w-6 h-6"
            />
            <input
              type="text"
              placeholder="Full Name"
              required
              className="outline-none text-sm w-full placeholder:text-gray-400"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </motion.div>
        )}

        <motion.div
          className="border border-gray-300 px-6 py-3 flex items-center gap-4 rounded-full mt-4 focus-within:border-teal-500 transition-all"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <img src={assets.email_icon} alt="Email Icon" className="w-6 h-6" />
          <input
            type="email"
            placeholder="E-Mail Id"
            required
            className="outline-none text-sm w-full placeholder:text-gray-400"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </motion.div>

        <motion.div
          className="border border-gray-300 px-6 py-3 flex items-center gap-4 rounded-full mt-4 focus-within:border-teal-500 transition-all"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <img src={assets.lock_icon} alt="Lock Icon" className="w-6 h-6" />
          <input
            type="password"
            placeholder="Password"
            required
            className="outline-none text-sm w-full placeholder:text-gray-400"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </motion.div>

        <motion.button
          type="submit"
          className="mt-8 bg-teal-600 text-white py-2 px-8 rounded-full text-sm font-medium w-full hover:bg-teal-700 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {state === "LogIn" ? "Log In" : "Sign Up"}
        </motion.button>

        <p className="text-sm text-blue-600 my-4 cursor-pointer text-center hover:underline">
          Forget password?
        </p>

        <p className="mt-5 text-center">
          {state === "LogIn"
            ? "Don't have an account? "
            : "Already have an account? "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={toggleState}
          >
            {state === "LogIn" ? "Sign Up" : "Log In"}
          </span>
        </p>

        <motion.img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          className="absolute top-5 right-5 cursor-pointer"
          alt="Close"
          whileHover={{ rotate: 90, scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.form>
    </motion.div>
  );
};

export default Login;
