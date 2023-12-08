import React from 'react';
import { motion } from 'framer-motion';

const Arrow = () => {
  const arrowVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: [0, 10, 0], // Hacemos que la flecha suba y baje
      transition: {
        y: {
          duration: 1.5,
          repeat: Infinity, // Repetir la animación infinitamente
          repeatType: 'reverse', // Invertir la animación en cada repetición
        },
      },
    },
  };

  return (
    <motion.div
      className="arrow"
      variants={arrowVariants}
      initial="initial"
      animate="animate"
    >
      ▼
    </motion.div>
  );
};

export default Arrow;