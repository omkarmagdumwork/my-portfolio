import Reveal from "./Reveal";

export default function ProjectCard({ project, index }) {
  const { title, text, image, tags, demo, code } = project;
  return (
    <Reveal delay={0.08 * (index % 3)}>
      <article className="bg-card rounded-3xl overflow-hidden h-full cursor-pointer transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 group">
        <div className="h-[220px] overflow-hidden bg-gradient-to-br from-primary/40 to-pink-600/40">
          <img src={image} alt={title} onError={(e) => (e.currentTarget.style.display = "none")}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
        </div>
        <div className="p-7">
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-muted text-lg mb-5">{text}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((t) => <span key={t} className="bg-bg/60 rounded-full px-4 py-1.5 text-sm">{t}</span>)}
          </div>
          <div className="flex gap-3">
            <a href={demo} className="flex-1 text-center py-3 rounded-lg bg-primary font-semibold hover:bg-violet-600 transition">View Demo</a>
            <a href={code} className="flex-1 text-center py-3 rounded-lg border border-primary font-semibold hover:bg-primary/20 transition">Code</a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
