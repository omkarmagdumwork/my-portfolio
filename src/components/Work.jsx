import { motion } from "framer-motion";
import { experience } from "../assets";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Work() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle first="Work" second="Experience" sub="My professional journey so far" />
        <div className="relative pl-10 sm:pl-14">
          <motion.div
            className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-0.5 bg-primary origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={0.1 * i} dir="right" className="relative mb-10 last:mb-0">
              <motion.span
                className="absolute -left-10 sm:-left-14 top-3 w-6 h-6 rounded-full bg-primary"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              />
              <div className="bg-card rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold">{e.role}</h3>
                  <span className="bg-primary/20 text-violet-300 rounded-full px-4 py-1.5 text-sm">{e.period}</span>
                </div>
                <p className="text-muted text-lg mt-2">{e.company}</p>
                <p className="text-lg mt-3 leading-relaxed">{e.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
