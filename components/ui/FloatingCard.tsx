import React from 'react';
import { motion } from 'framer-motion';

interface FloatingCardProps {
  children: React.ReactNode;
  delay?: number;
  xRange?: [number, number];
  yRange?: [number, number];
  rotationRange?: [number, number];
  duration?: number;
  className?: string;
  drag?: boolean;
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  children,
  delay = 0,
  xRange = [-10, 10],
  yRange = [-15, 15],
  rotationRange = [-5, 5],
  duration = 5,
  className = "",
  drag = true,
}) => {
  return (
    <motion.div
      drag={drag}
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
      whileHover={{ scale: 1.05, zIndex: 10, cursor: 'grab' }}
      whileDrag={{ scale: 1.1, cursor: 'grabbing', zIndex: 20 }}
      animate={{
        y: yRange,
        x: xRange,
        rotate: rotationRange,
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: delay,
      }}
      className={`absolute ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default FloatingCard;
