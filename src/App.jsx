import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";

import IntroScreen from "./components/IntroScreen";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CraneServices from "./pages/CraneServices";
import Contact from "./pages/Contact";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <AnimatePresence>{showIntro && <IntroScreen />}</AnimatePresence>

      {!showIntro && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/crane-services" element={<CraneServices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </div>
  );
}
