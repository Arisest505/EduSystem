import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FAQItem {
  pregunta: string;
  respuesta: string;
}

const faqs: FAQItem[] = [
  {
    pregunta: "¿Qué es EduSystem?",
    respuesta: "EduSystem es una plataforma de gestión institucional que integra inteligencia artificial para automatizar procesos y mejorar la eficiencia educativa.",
  },
  {
    pregunta: "¿A qué tipo de instituciones está dirigido?",
    respuesta: "Está diseñado para colegios, universidades, academias y organizaciones que deseen modernizar su gestión académica y administrativa.",
  },
  {
    pregunta: "¿Es seguro usar EduSystem?",
    respuesta: "Sí. Cumplimos con estándares de seguridad avanzados para garantizar la protección de la información de los estudiantes e instituciones.",
  },
  {
    pregunta: "¿Qué ventajas ofrece frente a otras plataformas?",
    respuesta: "Incluye herramientas inteligentes, diseño moderno, escalabilidad, personalización por módulos y soporte técnico especializado.",
  },
  {
    pregunta: "¿Cómo se puede contratar el servicio?",
    respuesta: "Puedes contactarnos directamente desde la sección de contacto o elegir un plan desde la sección 'Planes'. Ofrecemos pruebas gratuitas y asesoría personalizada.",
  },
];

export default function HomeFAQ() {
  const [activo, setActivo] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActivo((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#f9f6f1] py-24 px-6 text-slate-800">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-12 text-4xl font-extrabold text-center text-sky-700">
          Preguntas Frecuentes
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -2 }}
              className="transition-all duration-300 bg-white border shadow-sm border-slate-200 rounded-xl hover:shadow-md"
            >
              <button
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full p-5 text-left"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="text-sky-600" size={22} />
                  <span className="text-lg font-semibold">{faq.pregunta}</span>
                </div>
                <ChevronDown
                  className={`transform transition-transform ${
                    activo === index ? "rotate-180 text-sky-600" : "text-slate-400"
                  }`}
                />
              </button>

              <AnimatePresence>
                {activo === index && (
                  <motion.div
                    className="px-5 overflow-hidden text-slate-600"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: {
                        opacity: 1,
                        height: "auto",
                        transition: {
                          duration: 0.4,
                          ease: "easeInOut",
                          opacity: { duration: 0.3 },
                        },
                      },
                      collapsed: {
                        opacity: 0,
                        height: 0,
                        transition: {
                          duration: 0.3,
                          ease: "easeInOut",
                          opacity: { duration: 0.2 },
                        },
                      },
                    }}
                  >
                    <motion.p
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
                      className="pb-5"
                    >
                      {faq.respuesta}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
