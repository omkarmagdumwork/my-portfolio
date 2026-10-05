import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

export default function Hero() {
  const typed = useTypewriter(profile.role);
  return (
    <section id="home" className="min-h-screen pt-32 pb-16 bg-gradient-to-br from-bg via-[#2b2b2b] to-bg flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-primary">{profile.name}</span>
          </h1>
          <h2 className="text-3xl lg:text-4xl font-semibold mt-4 min-h-[3rem]">
            {typed}<span className="caret" />
          </h2>
          <p className="text-muted text-xl mt-6 max-w-xl leading-relaxed">{profile.tagline}</p>
          <div className="flex gap-4 mt-10">
            <a href="#projects" className="px-8 py-4 rounded-lg bg-primary font-semibold hover:bg-violet-600 hover:-translate-y-1 transition">View Work</a>
            <a href="#contact" className="px-8 py-4 rounded-lg border border-primary font-semibold hover:bg-primary/20 hover:-translate-y-1 transition">Contact Me</a>
          </div>
        </motion.div>

        <motion.div className="flex justify-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-b from-primary to-pink-600 p-0 pb-3 overflow-hidden"
          >
            <img src={profile.photo} alt={profile.name} onError={(e) => (e.currentTarget.style.opacity = 0)}
              className="w-full h-full rounded-full object-cover bg-card" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
