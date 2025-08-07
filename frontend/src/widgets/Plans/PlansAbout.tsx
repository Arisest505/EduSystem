import { motion, useInView } from "framer-motion";
import { BookText, BrainCog, Printer } from "lucide-react";
import { useRef } from "react";

const items = [
  {
    icono: <BookText className="w-7 h-7 text-sky-600" />,
    titulo: "Lectura inteligente de cartillas",
    texto:
      "Analiza automáticamente cartillas escaneadas o fotografiadas con una precisión del 99.98% para identificar y corregir errores en notas o registros académicos.",
  },
  {
    icono: <Printer className="w-7 h-7 text-sky-600" />,
    titulo: "Generación de exámenes",
    texto:
      "Crea exámenes personalizables en segundos con plantillas listas para imprimir, ideales para docentes y administrativos.",
  },
  {
    icono: <BrainCog className="w-7 h-7 text-sky-600" />,
    titulo: "IA institucional",
    texto:
      "Todas las funciones están potenciadas con inteligencia artificial para maximizar eficiencia, reducir errores y automatizar procesos tediosos.",
  },
];

export default function PlansAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: false,
    amount: 0.5,
  });

  return (
    <section
      ref={ref}
      className="py-24 px-6 bg-[#f8f5f0] text-slate-800 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-3xl font-bold md:text-4xl text-slate-900"
        >
          ¿Qué incluye tu suscripción?
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 60, scale: 0.95 }
              }
              transition={{
                delay: idx * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              className="p-6 text-left transition-all bg-white border border-slate-200 rounded-xl hover:shadow-xl hover:border-sky-300"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-sky-100">
                {item.icono}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-800">
                {item.titulo}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {item.texto}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
