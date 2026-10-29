import { motion } from "framer-motion";

const from = { up: { y: 50 }, down: { y: -50 }, left: { x: -70 }, right: { x: 70 }, zoom: { scale: 0.8 } };

// One-time scroll animation wrapper (direction: up | down | left | right | zoom)
export default function Reveal({ children, delay = 0, dir = "up", className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...from[dir] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
