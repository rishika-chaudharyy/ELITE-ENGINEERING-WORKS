import React, { useState, useEffect } from "react";

// IMAGES
import crane1 from "../assets/c3.jpg";
import crane2 from "../assets/c5.jpg";
import craneSide from "../assets/craneSide.jpeg";

const CraneServices = () => {
  /* ===============================
     🔁 IMAGE FADE SLIDER
     =============================== */
  const images = [crane1, crane2];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  /* ===============================
     📞 CONTACT SCROLL
     =============================== */
  const handleContactScroll = () => {
    const section = document.getElementById("contact");
    if (!section) return;

    const yOffset = -80;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="bg-black px-5 sm:px-6 md:px-20 py-20 overflow-hidden">
      {/* ===============================
          HERO IMAGE
         =============================== */}
      <div className="relative max-w-7xl mx-auto mb-24 rounded-2xl overflow-hidden">
        {/* MOBILE */}
        <img
          src={images[index]}
          alt="Crane Services"
          className="w-full h-[260px] sm:h-[320px] object-cover md:hidden"
        />

        {/* DESKTOP */}
        <div className="hidden md:block relative h-[520px]">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Crane Services"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      {/* INTRO */}
      <p className="text-white/90 text-base md:text-lg text-center max-w-4xl mx-auto mb-24 leading-relaxed px-2">
        We provide professional crane services for lifting, shifting,
        installation, and relocation of heavy industrial machinery. With trained
        operators, modern equipment, and strict safety practices, we ensure
        smooth execution of complex lifting operations with maximum reliability
        and minimal downtime.
      </p>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-28 text-center max-w-6xl mx-auto">
        {[
          ["3000+", "Successful Lifts"],
          ["15+", "Years of Experience"],
          ["500+", "Industrial Clients"],
          ["24/7", "Service Availability"],
        ].map(([v, l]) => (
          <div
            key={l}
            className="bg-[#0b0b0b] border border-white/10 p-6 rounded-xl"
          >
            <h3 className="text-2xl md:text-3xl text-sky-400 font-bold">{v}</h3>
            <p className="text-white/70 text-sm md:text-base mt-1">{l}</p>
          </div>
        ))}
      </div>

      {/* SERVICE CARD */}
      <div className="max-w-7xl mx-auto bg-[#0b0b0b] border border-white/10 rounded-2xl mb-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT */}
          <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-bold text-sky-400 mb-4">
              Heavy Machinery Lifting & Installation
            </h2>

            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
              Our crane services support factory installations, machine
              shifting, plant relocation, and heavy equipment handling. Every
              lift is planned carefully to ensure safety, accuracy, and minimal
              operational disruption.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Safe machinery lifting & accurate positioning",
                "Factory, warehouse & plant relocation",
                "On-site installation & supervision",
                "Trained operators with safety compliance",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-black border border-white/10 rounded-xl px-4 py-3
                  text-white/85 text-sm flex gap-2"
                >
                  <span className="text-sky-400 font-bold">✔</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CENTERED BUTTON */}
            <div className="flex justify-center">
              <button
                onClick={handleContactScroll}
                className="bg-gradient-to-r from-sky-400 to-sky-500
                text-black px-8 py-3 rounded-xl font-semibold
                hover:from-sky-300 hover:to-sky-400 transition"
              >
                Contact Us for Crane Services
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full">
            <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full">
              <img
                src={craneSide}
                alt="Crane Operation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="text-center max-w-xl mx-auto mb-24 px-2">
        <p className="text-white text-lg font-semibold mb-2">
          📞 Contact:
          <span className="text-sky-400 ml-2">9998425657</span>
        </p>

        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
          Rameshwar Construction,
          <br />
          Shop No. 205, At: Kuha,
          <br />
          Daskroi, Ahmedabad, Gujarat – 382433
        </p>
      </div>

      {/* STEEL DIVIDER */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </div>
    </section>
  );
};

export default CraneServices;
