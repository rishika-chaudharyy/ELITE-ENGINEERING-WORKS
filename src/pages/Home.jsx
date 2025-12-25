import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-home.png";

// 👉 HERO COMPONENT
import Hero from "../components/Hero";

// ----------------------------------
const colors = ["#38bdf8", "#22d3ee", "#a855f7", "#ec4899"];
const particles = Array.from({ length: 55 });

// 👉 HERO IMAGES (9 DIFFERENT IMAGES)
import lv1 from "../assets/lv1.jpeg";
import lv2 from "../assets/lv2.jpeg";
import lv3 from "../assets/lv3.jpeg";

import c1 from "../assets/c1.jpeg";
import c2 from "../assets/c2.jpeg";
import c3 from "../assets/c3.jpeg";

import rv1 from "../assets/rv1.jpeg";
import rv2 from "../assets/rv2.jpeg";
import rv3 from "../assets/rv3.jpeg";

export default function Home() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Crane Services", path: "/crane-services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden text-white pt-20">
      {/* 🌌 FLOATING PARTICLES */}
      {particles.map((_, i) => {
        const size = Math.random() * 6 + 4;
        const color = colors[Math.floor(Math.random() * colors.length)];

        return (
          <motion.span
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 10px ${color}`,
            }}
            animate={{
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}

      {/* 🧭 NAVBAR */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-black shadow-[0_4px_20px_rgba(56,189,248,0.7)]">
        <div className="flex items-center justify-between px-6 md:px-10 h-20">
          {/* LOGO */}
          <img
            src={logo}
            alt="Elite Engineering Works"
            className="h-16 sm:h-18 md:h-20 object-contain"
          />

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-14 text-[15px] font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `relative text-white transition hover:text-sky-400
                     after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-sky-400 after:transition-all
                     ${
                       isActive
                         ? "after:w-full"
                         : "after:w-0 hover:after:w-full"
                     }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* 🍔 HAMBURGER */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`h-0.5 w-6 bg-white transition ${
                open && "rotate-45 translate-y-1.5"
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition ${open && "opacity-0"}`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition ${
                open && "-rotate-45 -translate-y-1.5"
              }`}
            />
          </button>
        </div>

        {/* 📱 MOBILE MENU */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-black"
          >
            <ul className="flex flex-col divide-y divide-sky-400/30 text-lg">
              {navItems.map((item) => (
                <li key={item.path} className="py-4 text-center">
                  <NavLink to={item.path} onClick={() => setOpen(false)}>
                    <span
                      className={`block transition ${
                        item.name === "Home"
                          ? "text-sky-400 font-medium"
                          : "text-white hover:text-sky-400"
                      }`}
                    >
                      {item.name}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>

      {/* 🏠 HERO SECTION */}
      <Hero
        leftImages={[lv1, lv2, lv3]}
        centerImages={[c1, c2, c3]}
        rightImages={[rv1, rv2, rv3]}
      />
    </div>
  );
}
