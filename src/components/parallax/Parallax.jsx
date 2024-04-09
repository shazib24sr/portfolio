import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref.current,
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);
  
  return (
    <div className="parallax" style={{ background: type === "services" ? "linear-gradient(180deg, #11111132, #0c0c1d)" : "linear-gradient(180deg, #11111132, #505064)" }}>
      <motion.h1 style={{ y: yText }}>{type === "services" ? "What I Do?" : "What I Did?"}</motion.h1>
      
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
