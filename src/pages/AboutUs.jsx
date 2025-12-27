import React from "react";
import papaimg from "../assets/papaimg.jpeg";
import companyimg from "../assets/company1.jpeg";

const AboutUs = () => {
  // ✅ RELIABLE SCROLL FUNCTION (WORKS WITH FIXED NAVBAR)
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -80; // navbar height
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
        bg-gradient-to-r from-transparent via-white/60 to-transparent
        shadow-[0_0_16px_rgba(255,255,255,0.25)]"
      >
        <div className="rounded-2xl bg-black px-6 py-6 md:px-10 md:py-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 w-full md:w-auto flex justify-center md:justify-start">
              <div
                className="w-full max-w-[360px] md:max-w-[280px] md:h-[260px]
                aspect-[4/3] rounded-2xl p-[3px]
                bg-gradient-to-br from-violet-600 to-purple-500"
              >
                <img
                  src={papaimg}
                  alt="Dharmatma Chaudhary - Founder"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-semibold text-sky-400">
                Meet the Founder
              </h3>

              <p className="mt-3 text-white leading-relaxed">
                <span className="text-violet-400 font-medium">
                  Dharmatma Chaudhary
                </span>{" "}
                founded Elite Engineering Works in{" "}
                <span className="text-sky-400 font-semibold">1995</span> with a
                clear goal to build strong, reliable, and long-lasting
                industrial machines.
              </p>

              <p className="mt-4 text-white leading-relaxed">
                With years of hands-on experience, he has guided the company to
                serve <span className="text-sky-400 font-semibold">1250+</span>{" "}
                clients and deliver{" "}
                <span className="text-sky-400 font-semibold">6785+</span>{" "}
                machines across India.
              </p>

              <div className="mt-6 flex gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-2.5 rounded-lg border border-white/30
                  text-white text-sm font-medium
                  hover:border-sky-400 hover:text-sky-400
                  hover:shadow-[0_0_12px_rgba(56,189,248,0.6)]
                  transition"
                >
                  Contact Us
                </button>
              </div>

              <div className="mt-4">
                <p className="text-violet-400 font-medium">
                  Dharmatma Chaudhary
                </p>
                <p className="text-white text-sm">
                  Founder · Elite Engineering Works
                </p>
                <p className="text-emerald-400 text-sm">📞 9998425657</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= COMPANY CARD ================= */}
      <div
        className="relative z-10 mx-auto max-w-5xl mt-12 rounded-2xl p-[1.5px]
        bg-gradient-to-r from-transparent via-white/60 to-transparent
        shadow-[0_0_16px_rgba(255,255,255,0.25)]"
      >
        <div className="rounded-2xl bg-black px-6 py-6 md:px-10 md:py-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 w-full md:w-auto flex justify-center md:justify-start">
              <div
                className="w-full max-w-[360px] md:max-w-[280px] md:h-[260px]
                aspect-[4/3] rounded-2xl p-[3px]
                bg-gradient-to-br from-violet-600 to-purple-500"
              >
                <img
                  src={companyimg}
                  alt="Elite Engineering Works Factory"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="flex-1 text-white">
              <h3 className="text-xl font-semibold text-sky-400">
                Know Our Company
              </h3>

              <p className="mt-3 leading-relaxed">
                We manufacture heavy-duty machines including Power Press,
                Hydraulic Press, Shearing Machines, Baling Press, Sheet & Circle
                Cutting Machines, Border Cutting Machines, Out Cutters, and
                Lifting Hand Garage systems.
              </p>

              <p className="mt-4 leading-relaxed">
                Our machines are known for strong build quality, precision, and
                long service life across industries in India.
              </p>

              <div className="mt-6 flex gap-4">
                <button
                  onClick={() => scrollToSection("products")}
                  className="px-6 py-2.5 rounded-lg border border-orange-400/60
                  text-white text-sm font-medium
                  hover:bg-orange-400 hover:text-white
                  transition"
                >
                  View Products
                </button>
              </div>

              <div className="mt-6">
                <p className="font-medium text-white">📍 Company Address</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  56, Krishna Industrial Estate,
                  <br />
                  Near Palm Hotel, S.P. Ring Road,
                  <br />
                  Odhav, Ahmedabad – 382415
                  <br />
                  <span className="text-orange-400">
                    GSTIN: 24AATPC6030H1ZW
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= VISION & MISSION ================= */}
      <div className="relative z-10 max-w-5xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-xl bg-[#0d0f12] border border-orange-400/40 px-7 py-7">
          <h4 className="text-orange-400 font-semibold text-lg uppercase tracking-wide">
            Our Vision
          </h4>
          <p className="mt-4 text-white text-sm leading-relaxed">
            To build strong and reliable industrial machines that support
            long-term growth and trust for manufacturers across India.
          </p>
        </div>

        <div className="rounded-xl bg-[#0d0f12] border border-orange-400/40 px-7 py-7">
          <h4 className="text-orange-400 font-semibold text-lg uppercase tracking-wide">
            Our Mission
          </h4>
          <p className="mt-4 text-white text-sm leading-relaxed">
            To deliver quality machines at fair prices with dependable service
            and long-term customer support.
          </p>
        </div>
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
              className="rounded-xl bg-[#0b0d10] border-l-4 border-orange-400 px-7 py-7"
            >
              <p className="text-sky-400 font-semibold text-lg">{title}</p>
              <p className="mt-2 text-white text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 rounded-xl bg-orange-400 text-white font-medium
            hover:bg-orange-500 transition"
          >
            Become Our Client
          </button>
        </div>
      </div>

      {/* ================= END DIVIDER ================= */}
      <div className="relative z-10 max-w-6xl mx-auto mt-28">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>
    </section>
  );
};

export default AboutUs;
