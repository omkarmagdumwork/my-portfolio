// All portfolio content lives here. Edit this file to make the site yours.
// Put your photo at public/profile.jpg (and optional project images in public/projects/).
import { FaReact, FaServer, FaDatabase, FaMobileAlt, FaCloud, FaTools, FaLightbulb, FaPaintBrush, FaCode, FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

export const profile = {
  name: "Omkar Magdum",
  firstName: "Omkar ",
  lastName: "Magdum",
  role: "Full Stack Developer",
 tagline: "I build full-stack web applications with the MERN stack and turn real-world problems into clean, scalable code.",
  photo: "/hero1.png",
};

export const about = {
  photo: "/about.png",
  paragraphs: [
    "I'm a Computer Science Engineering graduate and aspiring full-stack developer. I build web applications with the MERN stack (MongoDB, Express.js, React.js, Node.js), develop RESTful APIs, and have worked with AWS cloud computing and IT systems support.",
    "I'm currently strengthening my skills in Next.js, Vue.js and Tailwind CSS, and I'm looking for a full-time Full Stack Developer role where I can contribute and keep growing.",
  ],
  cards: [
    { icon: FaLightbulb, title: "Problem Solver", text: "I enjoy solving real-world problems with practical, working software." },
    { icon: FaPaintBrush, title: "Design Oriented", text: "I care about clean, responsive interfaces and a smooth user experience." },
    { icon: FaCode, title: "Clean Code", text: "I write readable, maintainable and scalable code." },
  ],
};

export const skills = [
  { icon: FaReact, title: "Frontend Development", text: "Building responsive and interactive user interfaces.", tags: ["React.js", "Next.js", "Vue.js", "Tailwind CSS", "Material-UI"] },
  { icon: FaServer, title: "Backend Development", text: "Creating server-side applications and RESTful APIs.", tags: ["Node.js", "Express.js", "FastAPI", "REST APIs"] },
  { icon: FaDatabase, title: "Database Management", text: "Designing and querying databases for web applications.", tags: ["MongoDB", "MongoDB Atlas", "MySQL", "SQL"] },
  { icon: FaCode, title: "Programming Languages", text: "Core languages I use for development and problem solving.", tags: ["JavaScript", "Java", "Python", "C/C++"] },
  { icon: FaCloud, title: "Cloud & IT Support", text: "Cloud basics and hands-on IT systems experience.", tags: ["AWS", "Networking", "Server Management", "Troubleshooting"] },
  { icon: FaTools, title: "Tools & Technologies", text: "Tools I use in my development workflow.", tags: ["Git & GitHub", "Postman", "JIRA", "Vite", "Appwrite"] },
];

export const projects = [
  {
    title: "Automated E-Waste Collection Analysis",
    text: "A system that analyzes e-waste collection data to track volumes and improve collection planning.",
    image: "/e waste.png",
    tags: ["React","MERN","Node.js","MongoDB", "Data Analysis", "Machine Learning"],   
    demo: "https://ewastepmc.appwrite.network/auth",
    code: "https://github.com/omkarmagdumwork/pune-ewaste-app",
  },
  {
    title: "Comet Website Clone",
    text: "A responsive clone of the Comet website, built to practice layout, styling and interactions.",
    image: "/comet.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Web Development", "UI/UX","Bootstrap"],           
    demo: "https://www.wearcomet.com/",
    code: "https://github.com/omkarmagdumwork/comet",
  },
  {
    title: "Portfolio Website",
    text: "My personal portfolio with animated sections for projects, skills and experience.",
    image: "/portfolio.png",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    demo: "#",
    code: "https://github.com/omkarmagdumwork/my-portfolio",
  },
  {
    title: "Android Accident Detection Simulation",
    text: "A simulation of an Android app that detects accidents from sensor data and triggers an alert.",
    image: "/accident.png",
    tags: ["Android", "Java", "Sensors"],         
    demo: "#",
    code: "https://github.com/omkarmagdumwork/AccidentDetectionApp",
  },
];

export const experience = [
  {
    role: "Trainee Software Engineer",
    company: "Rego Digital Solutions Pvt. Ltd., Pune",
    period: "Jul 2025 - Jan 2026",
    text: "Gained exposure to real-world software development practices and collaborated with the engineering team on assigned projects and tasks.",
  },
  {
    role: "Desktop Support Technician (Part-time)",
    company: "Computer World, Pune",
    period: "Apr 2020 - Jun 2022",
    text: "Provided technical support for hardware and software issues, diagnosed problems directly with customers, and handled installation and maintenance of computer systems alongside my studies.",
  },
];

export const contact = {
  location: "Pune, Maharashtra, India",
  email: "omkarmagdum.sae.comp@gmail.com",
  phone: "+91 9359988224",
  socials: [
    { icon: FaGithub, href: "https://github.com/omkarmagdumwork" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/omkar-magdum-0594bb313/" },
    { icon: FaTwitter, href: "https://twitter.com/" },
    { icon: FaDribbble, href: "https://dribbble.com/" },
  ],
};

export const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];
