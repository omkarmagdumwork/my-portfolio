import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Soft purple glow that follows the mouse (desktop only)
export default function CursorGlow() {
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e) => { x.set(e.clientX - 150); y.set(e.clientY - 150); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="hidden md:block fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/20 blur-3xl pointer-events-none z-40"
    />
  );
}
