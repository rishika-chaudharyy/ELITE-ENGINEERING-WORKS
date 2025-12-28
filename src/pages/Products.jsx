import React, { useState, useRef } from "react";

import c1 from "../assets/c1.jpg";
import c5 from "../assets/c5.jpg";
import c4 from "../assets/c4.jpg";
import handgarage from "../assets/handgarage.jpg";
import shearing from "../assets/shearing.jpg";
import outcutter from "../assets/outcutter.jpg";

import PowerPress from "./PowerPress";
import GaragePress from "./GaragePress";
import ShearingMachine from "./ShearingMachine";
import OutCutter from "./OutCutter";
import BalingPress from "./BalingPress";

const Products = () => {
  const [activePage, setActivePage] = useState(null);
  const productsRef = useRef(null);
  const whatsappLink = "https://wa.me/919998425657";

  /* ===============================
     🔁 CLOSE DETAILS → GO TO PRODUCTS
     =============================== */
  const handleBackToProducts = () => {
    setActivePage(null);

    // ⏱ wait for DOM to re-render, then scroll
    setTimeout(() => {
      productsRef.current?.scrollIntoView({
        behavior: "instant",
        block: "start",
      });
    }, 0);
  };

  /* ===============================
     🔒 FULL SCREEN DETAIL OVERLAY
     =============================== */
  if (activePage) {
    return (
      <div className="fixed inset-0 bg-black z-[9999] overflow-y-auto">
        {activePage === "powerPress" && (
          <PowerPress onBack={handleBackToProducts} />
        )}
        {activePage === "garagePress" && (
          <GaragePress onBack={handleBackToProducts} />
        )}
        {activePage === "shearing" && (
          <ShearingMachine onBack={handleBackToProducts} />
        )}
        {activePage === "outCutter" && (
          <OutCutter onBack={handleBackToProducts} />
        )}
        {activePage === "balingPress" && (
          <BalingPress onBack={handleBackToProducts} />
        )}
      </div>
    );
  }

  /* ===============================
     📦 PRODUCTS GRID
     =============================== */
  return (
    <section ref={productsRef} className="bg-black px-6 md:px-16 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-sky-400 mb-6">
        Our Products & Services
      </h1>

      <p className="text-center text-white text-lg max-w-3xl mx-auto mb-16">
        Engineered solutions delivering reliability, performance, and precision
        for modern industrial manufacturing and material handling needs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <ProductCard
          title="Power Press Machines"
          desc="Precision-engineered power press machines for high-speed punching and stamping."
          img={c1}
          onView={() => setActivePage("powerPress")}
          whatsappLink={whatsappLink}
        />

        <ProductCard
          title="Hand / H-Frame Garage Press"
          desc="Heavy-duty garage presses for bending and assembly operations."
          img={handgarage}
          onView={() => setActivePage("garagePress")}
          whatsappLink={whatsappLink}
        />

        <ProductCard
          title="Shearing Machines"
          desc="Industrial shearing machines for clean and accurate metal cutting."
          img={shearing}
          onView={() => setActivePage("shearing")}
          whatsappLink={whatsappLink}
        />

        <ProductCard
          title="Out Cutter Machines"
          desc="Cut-to-length machines for smooth and consistent production flow."
          img={outcutter}
          onView={() => setActivePage("outCutter")}
          whatsappLink={whatsappLink}
        />

        <ProductCard
          title="Baling Press Machines"
          desc="High-compression baling machines for scrap and recycling industries."
          img={c4}
          onView={() => setActivePage("balingPress")}
          whatsappLink={whatsappLink}
        />

        <ProductCard
          title="Crane Services"
          desc="Professional crane services for heavy lifting and installation."
          img={c5}
          onView={() =>
            document
              .getElementById("crane-services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          whatsappLink={whatsappLink}
          isCrane
        />
      </div>

      <section id="crane-services" className="mt-32" />
      <div className="relative z-10 max-w-6xl mx-auto mt-28">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </div>
    </section>
  );
};

/* ===============================
   🔹 PRODUCT CARD
   =============================== */
const ProductCard = ({
  title,
  desc,
  img,
  onView,
  whatsappLink,
  isCrane = false,
}) => {
  return (
    <div className="bg-[#0b0b0b] border border-white/15 rounded-2xl overflow-hidden">
      <img src={img} alt={title} className="h-60 w-full object-cover" />

      <div className="p-8 flex flex-col text-center h-[300px]">
        <h2 className="text-2xl text-sky-400 font-semibold mb-3">{title}</h2>

        <p className="text-white mb-6 line-clamp-3">{desc}</p>

        <div className="mt-auto flex flex-col sm:flex-row gap-4">
          <button
            onClick={onView}
            className="w-full border border-sky-400 text-sky-300 py-3 rounded-xl font-semibold hover:border-sky-300 transition"
          >
            {isCrane ? "Explore Crane Services" : "View Product Details"}
          </button>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="w-full bg-sky-500 text-black py-3 rounded-xl text-center font-semibold hover:bg-sky-400 transition"
          >
            Get Quotation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
