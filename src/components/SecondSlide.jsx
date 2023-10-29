import React from "react";
import { motion } from "framer-motion";

const SecondSlide = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        className="h-[75vh] contain w-full bg-cover"
        src="https://t3.ftcdn.net/jpg/01/23/52/24/360_F_123522471_XZe5ebqil1DFJRgOUJ6taDP4DnmHjtL7.jpg"
        alt="img"
      />
      <motion.div className="absolute flex justify-center items-center mt-[-400px]">
        <motion.h1
          className="font-bold text-2xl text-white"
          initial={{ opacity: 0 }} // Initial state (hidden)
          animate={{ opacity: 1.9 }} // Animation state (visible)
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Automotive parts & Accessories
        </motion.h1>
        <motion.h1
          className="font-bold text-6xl mt-10 text-white"
          initial={{ opacity: 0 }} // Initial state (hidden)
          animate={{ opacity: 1.9 }} // Animation state (visible)
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          FIND PARTS THAT FIT
        </motion.h1>
        <motion.button
          className="font-bold text-white bg-[#eab308] h-[50px] w-[150px] mt-8 rounded"
          initial={{ opacity: 0 }} // Initial state (hidden)
          animate={{ opacity: 1.9 }} // Animation state (visible)
          transition={{ duration: 2.5, delay: 2 }}
        >
          SHOP NOW
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SecondSlide;
