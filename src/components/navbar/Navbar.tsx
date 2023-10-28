import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          XUAN TRUONG DO
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/truongdotd/" target="_blank">
            <img src="/facebook.png" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/truongdo___" target="_blank">
            <img src="/instagram.png" alt="instagram" />
          </a>
          <a href="https://twitter.com/truongdo___" target="_blank">
            <img src="/twitter.png" alt="twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
