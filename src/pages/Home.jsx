import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../assets/company-logo.png";
import WhatsAppFloat from "../components/WhatsAppFloat";
import FloatingLinks from "../components/FloatingLinks";

import Hero from "../components/Hero";
import StatsCounter from "../components/StatsCounter";

import AboutUs from "./AboutUs";
import Products from "./Products";
import CraneServices from "./CraneServices";
import Applications from "./Applications";
import Contact from "./Contact";

// ----------------------------------
const colors = ["#38bdf8", "#22d3ee", "#a855f7", "#ec4899"];

const particles = Array.from({ length: 20 }).map(() => ({
  size: Math.random() * 6 + 4,
  color: colors[Math.floor(Math.random() * colors.length)],
  top: Math.random() * 100,
  left: Math.random() * 100,
  x: Math.random() * 200 - 100,
  y: Math.random() * 200 - 100,
  duration: Math.random() * 15 + 10,
}));

import left1 from "../assets/left1.jpg";
import left2 from "../assets/left2.jpg";
import c1 from "../assets/c1.jpeg";
import c2 from "../assets/c2.jpeg";
import c3 from "../assets/c3.jpeg";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Products", id: "products" },
    { name: "Crane Services", id: "crane" },
    { name: "Applications", id: "applications" },
    { name: "Contact Us", id: "contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  useEffect(() => {
    const NAVBAR_HEIGHT = 80;

    const handleScroll = () => {
      const scrollPos = window.scrollY + NAVBAR_HEIGHT + 1;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="relative w-full bg-black text-white overflow-x-hidden">
      {/* PARTICLES */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              top: `${p.top}%`,
              left: `${p.left}%`,
              boxShadow: `0 0 10px ${p.color}`,
            }}
            animate={{
              x: [0, p.x],
              y: [0, p.y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-black shadow-[0_4px_20px_rgba(56,189,248,0.7)]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 h-20">
          <img
            src={logo}
            alt="Elite Engineering Works"
            className="h-16 md:h-20"
          />

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex gap-8 xl:gap-12 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 transition ${
                    activeSection === item.id
                      ? "text-sky-400 after:w-full"
                      : "text-white hover:text-sky-400 after:w-0 hover:after:w-full"
                  }
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:bg-sky-400 after:transition-all`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* 🔥 MOBILE MENU BUTTON WITH MOVING STEEL BORDER */}
          {/* 🔥 MOBILE MENU BUTTON – STATIC ICON, MOVING SHINY BORDER */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative w-12 h-12 rounded-lg border border-orange-400/40 overflow-hidden"
          >
            {/* SHINY MOVING LINE */}
            <motion.span
              className="absolute inset-0 rounded-lg"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,165,0,0.9), transparent)",
              }}
              animate={{
                x: ["-100%", "100%"],
                y: ["0%", "0%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* ICON (STATIC) */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <div
                className={`h-0.5 w-6 bg-white mb-1 transition ${
                  open && "rotate-45 translate-y-1.5"
                }`}
              />
              <div
                className={`h-0.5 w-6 bg-white mb-1 transition ${
                  open && "opacity-0"
                }`}
              />
              <div
                className={`h-0.5 w-6 bg-white transition ${
                  open && "-rotate-45 -translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-black z-40"
          >
            <ul className="flex flex-col divide-y divide-sky-400/30 text-lg">
              {navItems.map((item) => (
                <li key={item.id} className="py-4 text-center">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full ${
                      activeSection === item.id
                        ? "text-sky-400"
                        : "text-white hover:text-sky-400"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>

      {/* SECTIONS */}
      <section id="home" className="scroll-mt-20 pt-20 relative z-10">
        <Hero images={[left1, left2, c1, c2, c3]} />
        <StatsCounter />
      </section>

      <section id="about">
        <AboutUs />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="crane">
        <CraneServices />
      </section>
      <section id="applications">
        <Applications />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <FloatingLinks />
      <WhatsAppFloat />
    </div>
  );
}
