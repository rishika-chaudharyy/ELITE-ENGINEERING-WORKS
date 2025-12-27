import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ---------- COUNTER CARD ---------- */
function Counter({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += Math.ceil(end / 60);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(num >= 10000 ? 0 : 1)}K+`;
    }
    return `${num}+`;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="
        w-full max-w-[360px] mx-auto
        rounded-xl p-8 text-center
        bg-white/5 backdrop-blur-md
        border border-white/20
        shadow-[0_0_30px_rgba(255,255,255,0.15)]
        hover:shadow-[0_0_45px_rgba(255,255,255,0.35)]
        transition
      "
    >
      <div className="text-4xl sm:text-5xl font-bold text-sky-400">
        {formatNumber(count)}
      </div>
      <p className="mt-3 text-lg sm:text-xl text-white">{label}</p>
    </motion.div>
  );
}

/* ---------- STATS SECTION ---------- */
export default function StatsCounter() {
  return (
    <section className="relative z-10 pb-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-2xl sm:text-4xl font-semibold mb-10"
        >
          Our Impact in Numbers
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Counter value={1250} label="Clients Associated" />
          <Counter value={6785} label="Products Delivered" />
          <Counter value={200} label="Applications of Our Products" />
        </div>
      </div>

      {/* 🔹 STEEL DIVIDER */}
      <div className="relative mt-16 max-w-5xl mx-auto">
        <div
          className="
          h-[1.5px] w-full
          bg-gradient-to-r
          from-transparent via-white/60 to-transparent
          shadow-[0_0_12px_rgba(255,255,255,0.35)]
        "
        />
      </div>
    </section>
  );
}
