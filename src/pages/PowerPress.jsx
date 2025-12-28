import {
  FaIndustry,
  FaTools,
  FaCogs,
  FaShieldAlt,
  FaQuoteLeft,
  FaCheckCircle,
} from "react-icons/fa";
import c1 from "../assets/c1.jpg";

const PowerPress = ({ onBack }) => {
  return (
    <section className="bg-black px-6 md:px-20 py-24 relative">
      {/* FIXED BACK BUTTON */}
      <button
        onClick={onBack}
        className="fixed top-10 left-4 md:left-20 z-[10000]
        bg-black/80 backdrop-blur border border-sky-400
        text-sky-400 px-4 py-2 rounded-lg text-sm md:text-base
        hover:bg-sky-400 hover:text-black transition"
      >
        ← Back to Products
      </button>

      {/* HERO IMAGE */}
      <div className="flex justify-center mb-16">
        <img
          src={c1}
          alt="Power Press Machine"
          className="rounded-2xl max-h-[420px] w-full max-w-4xl object-cover shadow-lg"
        />
      </div>

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold text-sky-400 text-center mb-6">
        Power Press Machines
      </h1>

      {/* DESCRIPTION */}
      <p className="text-white/90 text-base md:text-lg text-center max-w-4xl mx-auto mb-14 leading-relaxed">
        Our Power Press Machines are designed for heavy-duty industrial use
        where accuracy, strength, and reliability matter most. These machines
        are widely used for punching, stamping, bending, and metal forming
        operations. Built with robust frames and precision components, they
        ensure smooth performance, long service life, and minimal maintenance.
      </p>

      {/* KEY FEATURES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {[
          "Heavy-duty rigid frame",
          "High precision operation",
          "Low maintenance design",
          "Enhanced operator safety",
        ].map((feature) => (
          <div
            key={feature}
            className="bg-[#0b0b0b] border border-white/10 p-6 rounded-xl
            flex items-center gap-3"
          >
            <FaCheckCircle className="text-sky-400 text-xl flex-shrink-0" />
            <p className="text-white text-sm md:text-base">{feature}</p>
          </div>
        ))}
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 text-center">
        {[
          ["500+", "Machines Installed"],
          ["15+", "Years of Experience"],
          ["300+", "Industrial Clients"],
          ["24/7", "Support Available"],
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

      {/* APPLICATIONS */}
      <h2 className="text-2xl md:text-3xl text-sky-400 font-bold text-center mb-12">
        Applications of Power Press
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
        {[
          [
            FaIndustry,
            "Automobile Industry",
            "Manufacturing of auto parts and components",
          ],
          [
            FaTools,
            "Sheet Metal Work",
            "Punching, bending, and shaping metal sheets",
          ],
          [
            FaCogs,
            "Component Manufacturing",
            "Precision parts for machinery and equipment",
          ],
          [
            FaShieldAlt,
            "Heavy Engineering",
            "High-strength industrial fabrication work",
          ],
        ].map(([Icon, title, desc]) => (
          <div
            key={title}
            className="bg-[#0b0b0b] border border-white/10 p-6 rounded-xl
            text-center hover:border-sky-400 transition"
          >
            <Icon className="text-sky-400 text-3xl mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">{title}</h3>
            <p className="text-white/70 text-sm">{desc}</p>
          </div>
        ))}
      </div>

      {/* TESTIMONIALS */}
      <h2 className="text-2xl md:text-3xl text-sky-400 font-bold text-center mb-12">
        What Our Clients Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          "The power press machine delivers excellent accuracy and performs reliably even under continuous operation.",
          "Strong build quality and very smooth working. Ideal for our production requirements.",
          "Low maintenance cost and excellent service support from the team.",
        ].map((text, i) => (
          <div
            key={i}
            className="bg-[#0b0b0b] border border-white/10 p-6 rounded-xl"
          >
            <FaQuoteLeft className="text-sky-400 mb-4" />
            <p className="text-white/80 italic text-sm md:text-base">{text}</p>
          </div>
        ))}
      </div>

      {/* CONTACT INFO */}
      <div className="max-w-4xl mx-auto bg-[#0b0b0b] border border-white/10 p-8 rounded-2xl">
        <h2 className="text-2xl text-sky-400 font-bold mb-6 text-center">
          Contact Information
        </h2>

        <div className="text-center mb-6">
          <p className="text-white text-lg font-semibold">
            📞 Call Us: <span className="text-sky-400">+91 99984 25657</span>
          </p>
          <p className="text-gray-400 mt-2">
            Visit our company for product demonstrations and consultations.
          </p>
        </div>

        <p className="text-gray-400 leading-relaxed ml-6 text-center md:text-left">
          56, Krishna Industrial Estate,
          <br />
          Near Palm Hotel, S.P. Ring Road,
          <br />
          Odhav, Ahmedabad – 382415
          <br />
          <span className="text-sky-400">GSTIN: 24AATPC6030H1ZW</span>
        </p>
      </div>
    </section>
  );
};

export default PowerPress;
