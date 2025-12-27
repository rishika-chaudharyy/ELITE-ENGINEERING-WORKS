import React from "react";
import { FaYoutube, FaInstagram, FaFacebookF, FaGlobe } from "react-icons/fa";

const FloatingLinks = () => {
  return (
    <div
      className="
        fixed right-4 bottom-24
        sm:right-5 sm:bottom-28
        md:bottom-32
        z-[998]
        flex flex-col gap-2 sm:gap-3
      "
    >
      {/* IndiaMART */}
      <a
        href="https://www.indiamart.com/eliteengineeringworks/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="IndiaMART"
        className="
          w-9 h-9 sm:w-11 sm:h-11
          rounded-full
          flex items-center justify-center
          bg-[#111]
          border border-white/40
          transition-all duration-300
          hover:scale-110
        "
      >
        <FaGlobe className="text-sm sm:text-lg text-orange-400" />
      </a>

      {/* YouTube */}
      <a
        href="https://youtube.com/@dharmatmachaudhary4970?si=SnVdbt-y2Y_A4BPS"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="
          w-9 h-9 sm:w-11 sm:h-11
          rounded-full
          flex items-center justify-center
          bg-[#111]
          border border-white/40
          transition-all duration-300
          hover:scale-110
        "
      >
        <FaYoutube className="text-sm sm:text-lg text-red-500" />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/14QKCMfahyz/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="
          w-9 h-9 sm:w-11 sm:h-11
          rounded-full
          flex items-center justify-center
          bg-[#111]
          border border-white/40
          transition-all duration-300
          hover:scale-110
        "
      >
        <FaFacebookF className="text-sm sm:text-lg text-blue-500" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/dharmatma185?igsh=bjJ6MWZ0YXpsazVj"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="
          w-9 h-9 sm:w-11 sm:h-11
          rounded-full
          flex items-center justify-center
          bg-[#111]
          border border-white/40
          transition-all duration-300
          hover:scale-110
        "
      >
        <FaInstagram className="text-sm sm:text-lg text-pink-500" />
      </a>
    </div>
  );
};

export default FloatingLinks;
