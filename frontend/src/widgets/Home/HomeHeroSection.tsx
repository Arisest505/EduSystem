import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function HomeHeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 }); // 60% del componente visible
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[90vh] overflow-hidden bg-[#f8f5f0]"
    >
      {/* Imagen de fondo con blur y sombra */}
      <div className="absolute inset-0">
        <img
          src="/65a4dsa46d56fdkmlnf.jpg"
          alt="Fondo institucional claro"
          className="object-cover w-full h-full scale-105 blur-md brightness-90"
        />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]" />
      </div>

      {/* Contenido animado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold tracking-tight text-slate-800 md:text-5xl drop-shadow-md"
        >
          Bienvenido a <span className="text-sky-600">EduSystem</span>
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-2xl mt-4 text-lg font-bold text-slate-700 md:text-xl"
        >
          La solución institucional moderna con{" "}
          <span className="font-bold text-blue-500">inteligencia artificial</span> integrada
        </motion.p>

        <motion.a
          href="#planes"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="px-6 py-3 mt-8 text-lg font-medium text-white transition-all duration-300 rounded-full shadow-md bg-sky-500 hover:bg-sky-600"
        >
          Ver planes disponibles
        </motion.a>
      </div>
    </section>
  );
}
