import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { fadeInUp } from "../utils/animations";

const AnimatedSection = ({
  children,
  animation = fadeInUp,
  className = "",
}) => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animation}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
