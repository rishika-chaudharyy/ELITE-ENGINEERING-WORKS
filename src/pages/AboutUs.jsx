import React from "react";
import { FiPhone, FiMapPin } from "react-icons/fi";
import papaimg from "../assets/papaimg.jpeg";
import companyimg from "../assets/company1.jpeg";

const AboutUs = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -80;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="relative bg-black px-6 md:px-20 pt-20 pb-24 overflow-hidden">
      {/* GRID BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 
        bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-[size:90px_90px]"
      />

      {/* ================= FOUNDER CARD ================= */}
      <div
        className="relative z-10 mx-auto max-w-5xl rounded-2xl p-[1.5px]
        bg-gradient-to-r from-transparent via-white/40 to-transparent
        shadow-[0_0_16px_rgba(255,255,255,0.2)]"
      >
        <div className="rounded-2xl bg-black px-6 py-6 md:px-10 md:py-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 w-full md:w-auto flex justify-center md:justify-start">
              <div
                className="w-full max-w-[360px] md:max-w-[280px] md:h-[260px]
                aspect-[4/3] rounded-2xl p-[3px] border border-white/20"
              >
                <img
                  src={papaimg}
                  alt="Dharmatma Chaudhary - Founder"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-2xl font-semibold text-sky-400">
                Meet the Founder
              </h3>

              <p className="mt-3 text-gray-300 leading-relaxed">
                <span className="text-sky-400 font-semibold text-lg">
                  Dharmatma Chaudhary
                </span>{" "}
                founded Elite Engineering Works in{" "}
                <span className="text-sky-400 font-semibold">1995</span>.
              </p>

              <p className="mt-4 text-gray-300 leading-relaxed">
                Serving{" "}
                <span className="text-sky-400 font-semibold">1250+</span>{" "}
                clients and delivering{" "}
                <span className="text-sky-400 font-semibold">6785+</span>{" "}
                machines across India.
              </p>

              <div className="mt-6">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-2.5 rounded-lg border border-sky-400
                  text-white text-sm font-medium
                  hover:bg-sky-400 hover:text-black transition"
                >
                  Contact Us
                </button>
              </div>

              <div className="mt-4 space-y-1 text-sm">
                <p className="text-sky-400 font-medium">Dharmatma Chaudhary</p>
                <p className="text-gray-400">
                  Founder · Elite Engineering Works
                </p>
                <p className="text-orange-400 flex items-center gap-2">
                  <FiPhone className="text-sm" />
                  9998425657
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= COMPANY CARD ================= */}
      <div
        className="relative z-10 mx-auto max-w-5xl mt-12 rounded-2xl p-[1.5px]
        bg-gradient-to-r from-transparent via-white/40 to-transparent
        shadow-[0_0_16px_rgba(255,255,255,0.2)]"
      >
        <div className="rounded-2xl bg-black px-6 py-6 md:px-10 md:py-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 w-full md:w-auto flex justify-center md:justify-start">
              <div
                className="w-full max-w-[360px] md:max-w-[280px] md:h-[260px]
                aspect-[4/3] rounded-2xl p-[3px] border border-white/20"
              >
                <img
                  src={companyimg}
                  alt="Elite Engineering Works Factory"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="flex-1 text-gray-300">
              <h3 className="text-2xl font-semibold text-sky-400">
                Know Our Company
              </h3>

              <p className="mt-3 leading-relaxed">
                We manufacture heavy-duty industrial machines used across India.
              </p>

              <div className="mt-6">
                <button
                  onClick={() => scrollToSection("products")}
                  className="px-6 py-2.5 rounded-lg bg-sky-400
                  text-black text-sm font-medium
                  hover:bg-sky-500 transition"
                >
                  View Products
                </button>
              </div>

              <div className="mt-6 text-sm space-y-1">
                <p className="font-medium text-white flex items-center gap-2">
                  <FiMapPin className="text-sky-400" />
                  Company Address
                </p>
                <p className="text-gray-400 leading-relaxed ml-6">
                  56, Krishna Industrial Estate,
                  <br />
                  Near Palm Hotel, S.P. Ring Road,
                  <br />
                  Odhav, Ahmedabad – 382415
                  <br />
                  <span className="text-sky-400">GSTIN: 24AATPC6030H1ZW</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= HORIZONTAL TIMELINE ================= */}
      <div className="relative z-10 max-w-6xl mx-auto mt-24">
        <h3 className="text-2xl md:text-3xl font-semibold text-sky-400 text-center mb-14">
          Our Journey
        </h3>

        <div className="relative overflow-x-auto">
          <div className="relative min-w-[900px] flex justify-between items-start">
            {/* LINE THROUGH DOTS */}
            <div className="absolute top-[8px] left-0 right-0 h-[2px] bg-sky-400/40" />

            {[
              {
                year: "1995",
                title: "Foundation",
                desc: "Company founded with a vision to build reliable industrial machinery.",
              },
              {
                year: "2005",
                title: "Expansion",
                desc: "Expanded manufacturing capacity and introduced new machines.",
              },
              {
                year: "2015",
                title: "Pan-India Growth",
                desc: "Successfully served clients across multiple states in India.",
              },
              {
                year: "2025",
                title: "Industry Trust",
                desc: "1250+ clients served and 6785+ machines delivered nationwide.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center w-1/4 px-4"
              >
                <div className="w-4 h-4 rounded-full bg-sky-400 z-10" />

                <div className="mt-6 bg-[#0b0d10] border border-white/20 rounded-xl px-5 py-4 text-center">
                  <p className="text-gray-400 font-semibold text-sm">
                    {item.year}
                  </p>
                  <h4 className="text-sky-400 font-semibold text-lg mt-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= VISION & MISSION ================= */}
      <div className="relative z-10 max-w-5xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          [
            "Our Vision",
            "To build strong and reliable industrial machines that support long-term growth and trust.",
          ],
          [
            "Our Mission",
            "To deliver quality machines at fair prices with dependable service and long-term support.",
          ],
        ].map(([title, text], i) => (
          <div
            key={i}
            className="rounded-xl bg-[#0d0f12] border border-white/20 px-7 py-7"
          >
            <h4 className="text-sky-400 font-semibold text-xl uppercase tracking-wide">
              {title}
            </h4>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <div className="relative z-10 max-w-6xl mx-auto mt-28">
        <h3 className="text-2xl md:text-3xl font-semibold text-sky-400 text-center mb-10">
          Why Choose Elite Engineering Works
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            ["30+ Years of Experience", "Manufacturing expertise since 1995."],
            [
              "Strong Build Quality",
              "Heavy-duty machines built for long life.",
            ],
            ["Custom Manufacturing", "Machines designed as per requirements."],
            ["Trusted Nationwide", "1250+ clients across India."],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="rounded-xl bg-[#0b0d10] border-l-4 border-sky-400 px-7 py-7"
            >
              <p className="text-sky-400 font-semibold text-lg">{title}</p>
              <p className="mt-2 text-white text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 rounded-xl bg-sky-400 text-black font-medium
            hover:bg-sky-500 transition"
          >
            Become Our Client
          </button>
        </div>
      </div>

      {/* ================= END DIVIDER ================= */}
      <div className="relative z-10 max-w-6xl mx-auto mt-28">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </div>
    </section>
  );
};

export default AboutUs;
