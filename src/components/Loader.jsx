import { motion } from "framer-motion";
export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] bg-bg flex items-center justify-center">
      <motion.div
        className="w-14 h-14 rounded-full border-4 border-card border-t-primary"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
      />
    </div>
  );
}
