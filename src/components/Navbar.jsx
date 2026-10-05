import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { profile, navLinks } from "../assets";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach((l) => { const el = document.getElementById(l.toLowerCase()); el && obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bg/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
        <a href="#home" className="text-3xl font-bold relative">
          {profile.firstName}<span className="text-primary">{profile.lastName}</span>
          <span className="absolute -bottom-3 left-0 w-4 h-4 rounded-full bg-primary" />
        </a>

        <ul className="hidden md:flex gap-10">
          {navLinks.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}
                className={`text-lg pb-1 border-b-2 transition-all duration-300 hover:text-primary hover:-translate-y-0.5 inline-block ${active === l.toLowerCase() ? "text-primary border-primary" : "border-transparent"}`}>
                {l}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden bg-card px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-lg hover:text-primary">{l}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
