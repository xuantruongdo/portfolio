import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-650%",
      opacity: 1,
      transition: {
        repeatType: "mirror",
        duration: 40,
      },
    },
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>DO XUAN TRUONG</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              SEE MY CV
            </motion.button>
            <motion.a href="#Contact" variants={textVariants}>CONTACT ME</motion.a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        //@ts-ignore
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Hello! I'm Xuan Truong Do
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
