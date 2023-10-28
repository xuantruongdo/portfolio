import React from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const frontend = [
    {
      name: "HTML",
      desc: "Experienced",
    },
    {
      name: "CSS",
      desc: "Experienced",
    },
    {
      name: "Javascript",
      desc: "Experienced",
    },
    {
      name: "Bootstrap",
      desc: "Experienced",
    },
    {
      name: "Material UI",
      desc: "Experienced",
    },
    {
      name: "Ant Design",
      desc: "Experienced",
    },
    {
      name: "React JS",
      desc: "Experienced",
    },
    {
      name: "Next JS",
      desc: "Experienced",
    },
  ];

  const backend = [
    {
      name: "Express JS (Node)",
      desc: "Experienced",
    },
    {
      name: "Nest JS (Node)",
      desc: "Experienced",
    },
    {
      name: "Spring Boot (Java)",
      desc: "Experienced",
    },
    {
      name: "MongoDB (No SQL)",
      desc: "Experienced",
    },
    {
      name: "MySQL (SQL)",
      desc: "Experienced",
    },
  ];

  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <h1>Skills</h1>
      <motion.div className="container">
        <motion.div className="item">
          <motion.h3 variants={variants}>Frontend Developer</motion.h3>
          <motion.div className="content">
            {frontend.map((item, index) => (
              <motion.article
                variants={variants}
                className="details"
                key={index}
              >
                <motion.img src="/check.png" alt="check" />
                <div>
                  <motion.h4>{item.name}</motion.h4>
                  <motion.small className="text-light">
                    {item.desc}
                  </motion.small>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="item">
          <motion.h3 variants={variants}>Backend Developer</motion.h3>
          <motion.div className="content">
            {backend.map((item, index) => (
              <motion.article
                variants={variants}
                className="details"
                key={index}
              >
                <motion.img src="/check.png" alt="check" />
                <div>
                  <motion.h4>{item.name}</motion.h4>
                  <motion.small className="text-light">
                    {item.desc}
                  </motion.small>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
