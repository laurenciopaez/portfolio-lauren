import React from "react";
import { motion } from "framer-motion";

const Arrow = () => (
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
    style={{
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "3px",
      cursor: "default",
    }}
  >
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="url(#arrowGrad)"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <defs>
        <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#6366f1" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path
        d="M12 5v14M5 12l7 7 7-7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </motion.div>
);

export default Arrow;
