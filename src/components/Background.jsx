import { motion } from "framer-motion";

const blobs = [
  { color: "bg-primary/20", size: "w-96 h-96", pos: "top-20 -left-24", x: [0, 80, 0], y: [0, 60, 0], d: 18 },
  { color: "bg-pink-600/15", size: "w-[28rem] h-[28rem]", pos: "top-1/2 -right-32", x: [0, -90, 0], y: [0, -50, 0], d: 22 },
  { color: "bg-violet-500/15", size: "w-80 h-80", pos: "bottom-10 left-1/3", x: [0, 60, 0], y: [0, -70, 0], d: 20 },
];

// Slowly drifting gradient blobs behind the whole page
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${b.color} ${b.size} ${b.pos}`}
          animate={{ x: b.x, y: b.y }}
          transition={{ duration: b.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
