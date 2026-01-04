import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedItem = ({ children, className = "", delay = 0 }: AnimatedItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedItem;
