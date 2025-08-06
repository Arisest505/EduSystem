// src/widgets/Help/HelpHero.tsx
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

export default function HelpHero() {
  return (
    <section className="relative w-full h-[60vh] bg-[#f8f5f0] overflow-hidden">
      {/* Fondo difuminado */}
      <div className="absolute inset-0">
        <img
          src="/0026b2f0 mladlñfa d5f.jpg"
          alt="Fondo de ayuda"
          className="object-cover w-full h-full scale-105 brightness-90 blur-sm"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[3px]" />
      </div>

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <HelpCircle className="w-12 h-12 text-sky-600 animate-pulse drop-shadow" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl font-extrabold tracking-tight md:text-5xl text-slate-800 drop-shadow-md"
        >
          ¿Necesitas ayuda?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl mt-4 text-lg font-medium text-slate-700 md:text-xl"
        >
          Aquí encontrarás respuestas a tus preguntas y formas de contactar con nosotros.
        </motion.p>
      </div>
    </section>
  );
}