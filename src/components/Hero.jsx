import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaJs } from "react-icons/fa";
import { profile } from "../assets";

function useTypewriter(text, speed = 110) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => { i++; setOut(text.slice(0, i)); if (i >= text.length) clearInterval(id); }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return out;
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } };
const item = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const chips = [
  { Icon: FaReact, pos: "top-2 left-2", delay: 0 },
  { Icon: FaNodeJs, pos: "top-16 -right-3", delay: 0.7 },
  { Icon: FaDatabase, pos: "bottom-12 -left-4", delay: 1.4 },
  { Icon: FaJs, pos: "bottom-2 right-8", delay: 2.1 },
];

export default function Hero() {
  const typed = useTypewriter(profile.role);
  return (
    <section id="home" className="min-h-screen pt-32 pb-16 flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            {["Hi,", "I'm"].map((w) => (
              <motion.span key={w} variants={item} className="inline-block mr-4">{w}</motion.span>
            ))}
            {profile.name.split(" ").map((w) => (
              <motion.span key={w} variants={item} className="inline-block mr-4 text-primary">{w}</motion.span>
            ))}
          </h1>
          <motion.h2 variants={item} className="text-3xl lg:text-4xl font-semibold mt-4 min-h-[3rem]">
            {typed}<span className="caret" />
          </motion.h2>
          <motion.p variants={item} className="text-muted text-xl mt-6 max-w-xl leading-relaxed">{profile.tagline}</motion.p>
          <motion.div variants={item} className="flex gap-4 mt-10">
            <motion.a href="#projects" whileHover={{ scale: 1.07, y: -3 }} whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg bg-primary font-semibold shadow-lg shadow-primary/30">View Work</motion.a>
            <motion.a href="#contact" whileHover={{ scale: 1.07, y: -3 }} whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg border border-primary font-semibold hover:bg-primary/20">Contact Me</motion.a>
          </motion.div>
        </motion.div>

        <motion.div className="flex justify-center" initial={{ opacity: 0, scale: 0.7, rotate: -8 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.9, delay: 0.3 }}>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]"
          >
            {/* spinning gradient ring */}
            <motion.div
              className="absolute -inset-1.5 rounded-full"
              style={{ background: "conic-gradient(from 0deg, #8b5cf6, #ec4899, #8b5cf6)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <img src={profile.photo} alt={profile.name} onError={(e) => (e.currentTarget.style.opacity = 0)}
              className="relative w-full h-full rounded-full object-cover bg-card" />
            {/* floating tech chips */}
            {chips.map(({ Icon, pos, delay }, i) => (
              <motion.span
                key={i}
                className={`absolute ${pos} w-12 h-12 rounded-full bg-card/90 backdrop-blur flex items-center justify-center text-primary text-2xl shadow-lg`}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
              >
                <Icon />
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
