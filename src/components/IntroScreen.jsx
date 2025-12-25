import { motion } from "framer-motion";
import logo from "../assets/company-logo.png";

const spaceParticles = Array.from({ length: 200 });

export default function IntroScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden z-50"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {spaceParticles.map((_, i) => {
        const x = Math.random() * window.innerWidth - window.innerWidth / 2;
        const y = Math.random() * window.innerHeight - window.innerHeight / 2;

        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white"
            style={{ width: "2px", height: "2px" }}
            initial={{
              opacity: 0,
              scale: 0.2,
              x: 0,
              y: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.2, 1.8],
              x,
              y,
            }}
            transition={{
              duration: 2.5 + Math.random() * 1.5,
              repeat: Infinity,
              delay: Math.random() * 1.5,
              ease: "easeOut",
            }}
          />
        );
      })}

      <motion.div
        className="relative z-10 rounded-full overflow-hidden bg-black"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ scale: 1.04 }}
      >
        <img
          src={logo}
          alt="Elite Engineering Works"
          className="
            rounded-full
            object-contain
            w-44 h-44
            sm:w-52 sm:h-52
            md:w-60 md:h-60
            lg:w-72 lg:h-72
          "
        />
      </motion.div>
    </motion.div>
  );
}
