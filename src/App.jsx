import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Background from "./components/Background";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import Home from "./pages/Home";
import { profile } from "./assets";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 1700); return () => clearTimeout(t); }, []);
  return (
    <>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <Background />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main><Routes><Route path="/" element={<Home />} /></Routes></main>
      <footer className="bg-card/60 text-center text-muted py-8">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
        <WhatsAppButton />
      </footer>
    </>
  );
}
