import { motion } from "framer-motion";
import { profile } from "../assets";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center gap-6"
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex text-4xl sm:text-6xl font-bold">
        {profile.name.split("").map((ch, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className={i >= profile.firstName.length ? "text-primary" : ""}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        ))}
      </div>
      <div className="w-48 h-1 bg-card rounded overflow-hidden">
        <motion.div className="h-full bg-primary" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.2, ease: "easeInOut" }} />
      </div>
    </motion.div>
  );
}
