"use client";
import { motion } from "framer-motion";
import React from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  // Direction the element flies in from
  from?: "up" | "left" | "right" | "flip";
}

const variants = {
  up: { opacity: 0, y: 50 },
  left: { opacity: 0, x: -60 },
  right: { opacity: 0, x: 60 },
  flip: { opacity: 0, rotateX: -45, y: 40, transformPerspective: 800 },
};

// Fades/flies its children in once they scroll into view
const Reveal = ({ children, className, delay = 0, from = "up" }: RevealProps) => {
  return (
    <motion.div
      className={className}
      initial={variants[from]}
      whileInView={{ opacity: 1, x: 0, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
