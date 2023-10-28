import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./parallax.scss";

const Parallax = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={ref}
      className="parallax"
      style={{
        background: "linear-gradient(180deg, #111132, #505064)"
      }}
    >
      <motion.h1 style={{ y: yText }}>
        What I Did
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          //@ts-ignore
          backgroundImage: "url('/planets.png')"
        }}
      ></motion.div>
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </div>
  );
};

export default Parallax;
