import Reveal from "./Reveal";
export default function SectionTitle({ first, second, sub }) {
  return (
    <Reveal className="text-center mb-14">
      <h2 className="text-4xl font-bold">{first} <span className="text-primary">{second}</span></h2>
      <p className="text-muted mt-4 text-lg">{sub}</p>
    </Reveal>
  );
}
