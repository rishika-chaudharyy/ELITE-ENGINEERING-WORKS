import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* ---------- IMAGE SLIDER ---------- */
function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      3500
    );
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl bg-black ring-1 ring-white/10">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt="Industrial Machinery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
    </div>
  );
}

/* ---------- CTA BUTTON (UNCHANGED) ---------- */
function SnakeButton({ targetId, children, primary }) {
  const handleClick = (e) => {
    e.preventDefault();

    const section = document.getElementById(targetId);
    if (!section) return;

    const NAVBAR_HEIGHT = 80;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <span onClick={handleClick} className="relative group cursor-pointer">
      <div
        className={`absolute inset-0 rounded-md blur-md opacity-30 group-hover:opacity-50 transition ${
          primary ? "bg-sky-400" : "bg-white"
        }`}
      />

      <span className="absolute inset-0 rounded-md overflow-hidden">
        <span className="absolute inset-0 animate-borderSnake" />
      </span>

      <span
        className={`relative z-10 px-6 py-2.5 rounded-md font-medium tracking-wide transition ${
          primary
            ? "bg-sky-400 text-black hover:bg-sky-300"
            : "border border-white/30 text-white hover:bg-white/10"
        }`}
      >
        {children}
      </span>
    </span>
  );
}

/* ---------- HERO ---------- */
export default function Hero({ images }) {
  const products = [
    "Power Press",
    "Hydraulic Press Machine",
    "Shearing Machine",
    "Baling Press (Bundle)",
    "Sheet Cutting Machine",
    "Circle Cutting Machine",
    "Border Cutting Machine",
    "Out Cutter",
    "Lifting Hand Garage",
  ];

  return (
    <section className="relative z-10 w-full px-4 sm:px-6 md:px-10 py-12">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
        {/* IMAGE */}
        <ImageSlider images={images} />

        {/* CONTENT */}
        <div className="mt-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
          >
            Built for{" "}
            <span className="text-sky-400 font-semibold">Heavy Work</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            <p>
              We design and manufacture{" "}
              <span className="text-gray-200 font-medium">
                heavy-duty industrial machinery
              </span>{" "}
              for{" "}
              <span className="text-sky-300 font-medium">
                fabrication, cutting, lifting & material handling
              </span>
              .
            </p>

            <p className="mt-2">
              We also provide{" "}
              <span className="text-sky-300 font-medium">
                dependable crane services
              </span>{" "}
              to support critical industrial operations.
            </p>
          </motion.div>

          {/* CAPSULES */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {products.map((item) => (
              <div
                key={item}
                className="
        px-5 py-2.5
        text-xs sm:text-sm md:text-base
        rounded-lg
        border border-white/20
        text-gray-200
        bg-[#0b0d10]
        shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]
        transition-all duration-300
        hover:border-sky-400
        hover:text-sky-400
        hover:shadow-[0_0_12px_rgba(56,189,248,0.25)]
      "
              >
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center gap-4 gap-y-7 flex-wrap">
            <SnakeButton targetId="products" primary>
              View Products
            </SnakeButton>

            <SnakeButton targetId="contact">Contact Us</SnakeButton>
          </div>
        </div>
      </div>

      {/* SNAKE ANIMATION */}
      <style>{`
        @keyframes borderSnake {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-borderSnake {
          width: 200%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            #38bdf8,
            transparent
          );
          animation: borderSnake 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
