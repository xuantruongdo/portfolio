import React, { useRef } from "react";
import "./portfolio.scss";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    title: "IT VIEC",
    img: "/itviec.png",
    desc: "Job search support for developers",
    demo: "https://truongdo-itviec-frontend.vercel.app/"
  }
];

const Single = ({ item }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
      target: ref,
    //   offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="project" />
          </div>
          <motion.div
            className="textContainer"
            //@ts-ignore
            style={{ y }}
          >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.demo} target="_blank">See Demo</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
