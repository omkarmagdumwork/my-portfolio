import { motion } from "framer-motion";
import { about } from "../assets";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle first="About" second="Me" sub="Get to know more about my background and passion" />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden bg-card aspect-[3/4] lg:aspect-auto lg:h-[620px]"
          >
            <img src={about.photo} alt="About" onError={(e) => (e.currentTarget.style.opacity = 0)} className="w-full h-full object-cover" />
          </motion.div>

          <div>
            <Reveal><h3 className="text-3xl font-bold mb-6">My Journey</h3></Reveal>
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)}><p className="text-lg leading-relaxed mb-5">{p}</p></Reveal>
            ))}
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {about.cards.map(({ icon: Icon, title, text }, i) => (
                <Reveal key={title} delay={0.1 * i}>
                  <div className="bg-card rounded-2xl p-7 h-full transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20">
                    <Icon className="text-primary text-3xl mb-4" />
                    <h4 className="text-xl font-bold mb-2">{title}</h4>
                    <p className="text-muted">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
