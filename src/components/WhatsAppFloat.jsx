import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/919998425657"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 right-5 md:bottom-6 md:right-6 z-[999]
        flex items-center justify-center gap-3
        bg-[#25D366]
        w-12 h-12 md:w-auto md:h-auto
        md:px-4 md:py-3
        rounded-full
        shadow-[0_0_18px_rgba(37,211,102,0.45)]
        transition-all duration-300
        hover:scale-105
      "
    >
      {/* WhatsApp Icon */}
      <FaWhatsapp className="text-lg md:text-xl text-white" />

      {/* Text (hidden on small screens) */}
      <span className="hidden sm:block text-sm font-medium text-white whitespace-nowrap">
        WhatsApp Query
      </span>
    </a>
  );
};

export default WhatsAppFloat;
