import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { contact } from "../assets";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your backend / EmailJS / Formspree
    setSent(true);
    e.target.reset();
  };
  const field = "w-full bg-card rounded-lg px-4 py-4 outline-none border border-transparent focus:border-primary transition";
  const info = [
    { icon: FaMapMarkerAlt, label: "Location", value: contact.location },
    { icon: FaEnvelope, label: "Email", value: contact.email },
    { icon: FaPhoneAlt, label: "Phone", value: contact.phone },
  ];
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle first="Get In" second="Touch" sub="Have a project in mind or want to collaborate? Let's talk!" />
        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <form onSubmit={onSubmit} className="space-y-5">
              <label className="block text-lg">Your Name<input required name="name" className={`${field} mt-2`} /></label>
              <label className="block text-lg">Email Address<input required type="email" name="email" className={`${field} mt-2`} /></label>
              <label className="block text-lg">Your Message<textarea required name="message" rows={5} className={`${field} mt-2`} /></label>
              <button className="w-full py-4 rounded-lg bg-primary font-semibold hover:bg-violet-600 transition cursor-pointer">Send Message</button>
              {sent && <p className="text-violet-300">Message sent. Thanks for reaching out!</p>}
            </form>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="space-y-8">
              {info.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4">
                  <Icon className="text-2xl mt-1" />
                  <div><h4 className="text-xl font-bold">{label}</h4><p className="text-muted text-lg">{value}</p></div>
                </div>
              ))}
              <div>
                <h4 className="text-xl font-bold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {contact.socials.map(({ icon: Icon, href }) => (
                    <a key={href} href={href} target="_blank" rel="noreferrer"
                      className="w-14 h-14 rounded-full bg-card flex items-center justify-center text-xl hover:bg-primary hover:-translate-y-1 transition">
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
