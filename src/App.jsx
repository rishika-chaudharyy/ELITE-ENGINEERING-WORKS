import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import IntroScreen from "./components/IntroScreen";
import Home from "./pages/Home";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <AnimatePresence>{showIntro && <IntroScreen />}</AnimatePresence>
      {!showIntro && <Home />}
    </div>
  );
}
