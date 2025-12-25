import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

/* ---------- CLEAN SLIDER ---------- */
function ImageSlider({ images, className, interval = 3500, fit = "contain" }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      interval
    );
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt=""
          className={`absolute inset-0 w-full h-full ${
            fit === "cover" ? "object-cover" : "object-contain"
          }`}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 3, ease: [0.4, 0, 0.2, 1] }}
        />
      </AnimatePresence>
    </div>
  );
}

/* ---------- CTA BUTTON ---------- */
function SnakeButton({ to, children, primary }) {
  return (
    <NavLink to={to} className="relative group">
      <div
        className={`absolute inset-0 rounded-md blur-md opacity-30 group-hover:opacity-50 transition ${
          primary ? "bg-sky-400" : "bg-white"
        }`}
      />

      <span className="absolute inset-0 rounded-md overflow-hidden">
        <span className="absolute inset-0 animate-borderSnake" />
      </span>

      <span
        className={`relative z-10 px-7 py-3 rounded-md font-medium transition ${
          primary
            ? "bg-sky-400 text-black hover:bg-sky-300"
            : "border border-white/30 text-white hover:bg-white/10"
        }`}
      >
        {children}
      </span>
    </NavLink>
  );
}

/* ---------- HERO ---------- */
export default function Hero({ leftImages, centerImages, rightImages }) {
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
    <section className="relative z-10 w-full pt-10 px-6 md:px-12 mb-24">
      {/* ================= DESKTOP + TABLET ================= */}
      <div className="hidden xl:grid grid-cols-[1.2fr_1.8fr_1.2fr] gap-8 min-h-[85vh]">
        {/* LEFT */}
        <ImageSlider
          images={leftImages}
          className="min-h-130 xl:min-h-162.5 bg-black/40 p-4"
        />

        {/* CENTER */}
        <div className="flex flex-col gap-8">
          <ImageSlider
            images={centerImages}
            fit="cover"
            className="min-h-105 xl:min-h-80 rounded-3xl"
          />

          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl xl:text-5xl font-semibold">
              Built for Heavy Work
            </h1>

            <p className="mt-4 text-gray-400 max-w-xl text-lg">
              We design and manufacture heavy-duty industrial machines used
              across fabrication, cutting, lifting and material handling.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 max-w-xl">
              {products.map((item) => (
                <div
                  key={item}
                  className="px-3 py-2 text-sm rounded-md border border-white/10 bg-white/5 text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-6 justify-center">
              <SnakeButton to="/products" primary>
                View Products
              </SnakeButton>
              <SnakeButton to="/contact">Contact Us</SnakeButton>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <ImageSlider
          images={rightImages}
          className="min-h-130 xl:min-h-162.5 bg-black/40 p-4"
        />
      </div>

      {/* ================= MOBILE ONLY ================= */}
      <div className="xl:hidden flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-4">
          <ImageSlider images={leftImages} className="h-72 bg-black/40 p-4" />
          <ImageSlider images={rightImages} className="h-72 bg-black/40 p-4" />
        </div>

        <div className="text-center px-2">
          <h2 className="text-4xl font-semibold">Built for Heavy Work</h2>

          <p className="mt-4 text-gray-400">
            Industrial machines engineered for real-world performance.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {products.map((item) => (
              <div
                key={item}
                className="px-3 py-1.5 text-xs rounded-md border border-white/10 bg-white/5 text-gray-300"
              >
                {item}
              </div>
            ))}
          </div>

          <div
            className="mt-8 flex justify-center gap-2
              max-[365px]:flex-col
              max-[365px]:items-center
              max-[365px]:gap-y-7"
          >
            <SnakeButton to="/products" primary>
              View Products
            </SnakeButton>
            <SnakeButton to="/contact">Contact Us</SnakeButton>
          </div>
        </div>

        <ImageSlider
          images={centerImages}
          fit="cover"
          className="h-72 rounded-3xl mb-10"
        />
      </div>

      <style>{`
        @keyframes borderSnake {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-borderSnake {
          width: 200%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #38bdf8, transparent);
          animation: borderSnake 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
