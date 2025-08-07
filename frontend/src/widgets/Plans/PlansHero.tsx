import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function PlansHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: false, // ❗️ Permite reanimar cada vez que vuelve al viewport
    amount: 0.5          // 50% del componente debe ser visible para activar
  });

  return (
    <section ref={ref} className="relative w-full h-[60vh] bg-[#f8f5f0] overflow-hidden">
      {/* Fondo con imagen y blur */}
      <div className="absolute inset-0">
        <img
          src="/asdsad78g798g5sd45gd.jpg"
          alt="Fondo de planes"
          className="object-cover w-full h-full scale-105 brightness-90 blur-md"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[3px]" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold tracking-tight md:text-5xl text-slate-800 drop-shadow-md"
        >
          Explora nuestros planes de suscripción
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-2xl mt-4 text-lg font-bold text-slate-700 md:text-xl"
        >
          Elige el plan que mejor se adapte a tu institución y accede a nuestras herramientas con inteligencia artificial.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-8"
        >
          <Link
            to="#planes"
            className="inline-flex items-center gap-2 px-6 py-3 text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-sky-500 to-cyan-500 hover:brightness-110"
          >
            <Star className="w-5 h-5" /> Ver planes ahora
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
