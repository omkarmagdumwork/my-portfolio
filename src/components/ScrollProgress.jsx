import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

// Top progress bar + animated back-to-top button
export default function ScrollProgress() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  const [show, setShow] = useState(false);

  useEffect(() => scrollY.on("change", (v) => setShow(v > 600)), [scrollY]);

  return (
    <>
      <motion.div style={{ scaleX }} className="fixed top-0 inset-x-0 h-1 origin-left bg-gradient-to-r from-primary to-pink-500 z-[60]" />
      <motion.a
        href="#home"
        aria-label="Back to top"
        initial={false}
        animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.5, y: show ? 0 : 20 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        style={{ pointerEvents: show ? "auto" : "none" }}
        className="fixed bottom-28 right-7 z-50 w-12 h-12 rounded-full bg-primary flex items-center justify-center"
      >
        <FaArrowUp />
      </motion.a>
    </>
  );
}
