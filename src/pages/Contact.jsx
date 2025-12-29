import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
  FaFileInvoice,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaGlobe,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black px-6 md:px-20 py-24 scroll-mt-[80px]"
    >
      {/* ===============================
          HEADER
         =============================== */}
      <div className="text-center mb-20">
        <h1 className="text-3xl md:text-4xl font-bold text-sky-400 mb-4">
          Contact Elite Engineering Works
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Elite Engineering Works specializes in industrial machinery
          manufacturing and heavy-duty solutions. Contact us for machines, crane
          services, installation support, and quotations.
        </p>
      </div>

      {/* ===============================
          MAIN GRID
         =============================== */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT – COMPANY DETAILS */}
        <div className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-8 md:p-10 space-y-8">
          <h2 className="text-2xl font-semibold text-sky-400">
            Company Information
          </h2>

          <div className="flex gap-4 items-start">
            <FaPhoneAlt className="text-sky-400 text-xl mt-1" />
            <div>
              <p className="text-white font-semibold">Phone</p>
              <p className="text-gray-400">+91 99984 25657</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <FaWhatsapp className="text-sky-400 text-xl mt-1" />
            <div>
              <p className="text-white font-semibold">WhatsApp</p>
              <a
                href="https://wa.me/919998425657"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-sky-400 transition"
              >
                Chat with us instantly
              </a>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <FaMapMarkerAlt className="text-sky-400 text-xl mt-1" />
            <div>
              <p className="text-white font-semibold">Company Address</p>
              <p className="text-gray-400 leading-relaxed">
                Elite Engineering Works,
                <br />
                56, Krishna Industrial Estate,
                <br />
                Near Palm Hotel, S.P. Ring Road,
                <br />
                Odhav, Ahmedabad, Gujarat – 382415
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <FaClock className="text-sky-400 text-xl mt-1" />
            <div>
              <p className="text-white font-semibold">Working Hours</p>
              <p className="text-gray-400">
                Monday – Saturday: 9:00 AM – 7:00 PM
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <FaFileInvoice className="text-sky-400 text-xl mt-1" />
            <div>
              <p className="text-white font-semibold">GST Details</p>
              <p className="text-sky-400">GSTIN: 24AATPC6030H1ZW</p>
            </div>
          </div>
        </div>

        {/* RIGHT – QUICK CTA */}
        <div className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col justify-center text-center">
          <h2 className="text-2xl font-semibold text-sky-400 mb-6">
            Get in Touch Instantly
          </h2>

          <p className="text-white/80 mb-10">
            For immediate quotations, machine details, or crane service
            inquiries, contact us directly on WhatsApp or call us.
          </p>

          <a
            href="https://wa.me/919998425657"
            target="_blank"
            rel="noreferrer"
            className="mb-6 bg-gradient-to-r from-sky-400 to-sky-500
            text-black py-3 rounded-xl font-semibold
            hover:from-sky-300 hover:to-sky-400 transition"
          >
            WhatsApp Us Now
          </a>

          <p className="text-gray-400 text-sm">
            📞 Call: <span className="text-white">+91 99984 25657</span>
          </p>
        </div>
      </div>

      {/* ===============================
          GOOGLE MAP
     
      {/* ===============================
          FOOTER
         =============================== */}
      <footer className="mt-28 border-t border-white/10 pt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h3 className="text-sky-400 font-semibold mb-4">
              Elite Engineering Works
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Manufacturer of Power Press Machines, Shearing Machines, Garage
              Presses, Baling Presses, and provider of professional Crane
              Services for industrial applications.
            </p>
          </div>

          {/* ✅ IMPORTANT LINKS UPDATED */}
          <div>
            <h3 className="text-sky-400 font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#home" className="hover:text-sky-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-sky-400">
                  Products
                </a>
              </li>
              <li>
                <a href="#crane-services" className="hover:text-sky-400">
                  Crane Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-sky-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sky-400 font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.indiamart.com/eliteengineeringworks/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGlobe className="text-orange-400 text-xl" />
              </a>
              <a
                href="https://youtube.com/@dharmatmachaudhary4970"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube className="text-red-500 text-xl" />
              </a>
              <a
                href="https://www.facebook.com/share/1DPKFYNMzN/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="text-blue-500 text-xl" />
              </a>
              <a
                href="https://www.instagram.com/dharmatma185"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-pink-500 text-xl" />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} Elite Engineering Works. All Rights
          Reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
