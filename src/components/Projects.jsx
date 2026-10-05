import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { projects } from "../assets";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const list = showAll ? projects : projects.slice(0, 3);
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle first="My" second="Projects" sub="A selection of my recent work" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {list.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>
        {projects.length > 3 && (
          <div className="text-center mt-14">
            <button onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg border border-primary font-semibold hover:bg-primary/20 transition cursor-pointer">
              {showAll ? "Show Less" : "View More Projects"} <FaArrowRight className={showAll ? "-rotate-90" : ""} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
