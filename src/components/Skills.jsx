import { skills } from "../assets";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle first="My" second="Skills" sub="Technologies I work with to bring ideas to life" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map(({ icon: Icon, title, text, tags }, i) => (
            <Reveal key={title} delay={0.08 * i}>
              <div className="bg-card rounded-3xl p-8 h-full transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20">
                <div className="flex items-center gap-5 mb-5">
                  <Icon className="text-primary text-5xl shrink-0" />
                  <h3 className="text-2xl font-bold">{title}</h3>
                </div>
                <p className="text-muted text-lg mb-5">{text}</p>
                <div className="flex flex-wrap gap-3">
                  {tags.map((t) => <span key={t} className="bg-bg/60 rounded-full px-4 py-1.5">{t}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
