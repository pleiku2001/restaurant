import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/loader.css";
const transition = { duration: 3, ease: [0.43, 0.13, 0.23, 0.96] };

const rowVariant = {
  hidden: { opacity: 0 },
  show: {
    transition: {
      staggerChildren: 0.1,
      duration: 3, ease: [0.43, 0.13, 0.23, 0.96]
    },
    opacity: [1, 1, 1, 1, 0.5, 0],
  },
  close: { opacity: 0 },
};

const colVariant = {
  hidden: { opacity: 0, transition },
  show: { opacity: [1, 1, 1, 1, 0.5, 0], transition },
  close: {
    opacity: 0,
    // x: -20,
    transition,
  },
};
function Loader({ setLoading }) {
  let navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/about");
  // };

  return (
    <>
      <motion.div
        variants={rowVariant}
        initial="hidden"
        animate="show"
        exit="close"
        onAnimationComplete={() => setLoading(false)}
        className="loading-page"
      >
        <motion.div className="loader" variants={colVariant}>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="cup">
            <span></span>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Loader;
