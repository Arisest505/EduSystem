import { Code2, Sparkles, Wrench, UserCircle, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const updates = [
  {
    titulo: "Versión 2.1 - Integración IA",
    tipo: "feature",
    autor: "Arise",
    fecha: "04/08/2025",
    contexto: "Se incorporó inteligencia artificial para sugerencias automáticas en incidencias y formularios institucionales.",
  },
  {
    titulo: "Versión 2.0 - Rediseño completo",
    tipo: "improvement",
    autor: "Issei",
    fecha: "28/07/2025",
    contexto: "Se rediseñó por completo la interfaz del sistema con una experiencia más moderna, fluida y accesible.",
  },
  {
    titulo: "Versión 1.9.5 - Correcciones menores",
    tipo: "fix",
    autor: "Arise",
    fecha: "20/07/2025",
    contexto: "Se solucionaron errores en la carga masiva y mejora de seguridad en autenticación.",
  },
];

const iconosPorTipo: Record<string, JSX.Element> = {
  feature: <Sparkles className="text-sky-600" />,
  improvement: <Wrench className="text-yellow-500" />,
  fix: <Code2 className="text-red-500" />,
};

export default function HomeVersions() {
  return (
    <section className="py-24 px-6 bg-[#f8f5f0] text-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mb-12 text-4xl font-extrabold text-center text-sky-700"
        >
          Actualizaciones del Sistema
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {updates.map((update, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              whileHover={{ y: -6, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="p-6 transition-all duration-300 bg-white border shadow-md border-slate-200 rounded-2xl hover:shadow-lg group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full shadow-inner bg-slate-100">
                  {iconosPorTipo[update.tipo]}
                </div>
                <h3 className="text-lg font-semibold transition-colors text-slate-800 group-hover:text-sky-700">
                  {update.titulo}
                </h3>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                {update.contexto}
              </p>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <UserCircle className="w-4 h-4" />
                  {update.autor}
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  {update.fecha}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
