import { experience } from "../assets";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Work() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle first="Work" second="Experience" sub="My professional journey so far" />
        <div className="relative pl-10 sm:pl-14">
          <div className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-0.5 bg-primary" />
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={0.1 * i} className="relative mb-10 last:mb-0">
              <span className="absolute -left-10 sm:-left-14 top-3 w-6 h-6 rounded-full bg-primary" />
              <div className="bg-card rounded-2xl p-7">
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
