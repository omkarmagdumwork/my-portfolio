import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function SectionTitle({ first, second, sub }) {
  return (
    <Reveal className="text-center mb-14">
      <h2 className="text-4xl font-bold">{first} <span className="text-primary">{second}</span></h2>
      <motion.div
        className="h-1 rounded bg-gradient-to-r from-primary to-pink-500 mx-auto mt-3"
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      <p className="text-muted mt-4 text-lg">{sub}</p>
    </Reveal>
  );
}
