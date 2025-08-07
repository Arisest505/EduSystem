// src/widgets/Help/HelpFAQ.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    pregunta: "¿Cómo puedo crear una cuenta?",
    respuesta:
      "Para crear una cuenta, haz clic en 'Registrarse' en la esquina superior derecha, completa el formulario con tus datos y confirma tu correo electrónico.",
  },
  {
    pregunta: "¿Qué incluye el plan gratuito?",
    respuesta:
      "El plan demo incluye lectura de 10 cartillas, un examen con IA básica y acceso temporal al sistema.",
  },
  {
    pregunta: "¿Cómo funciona la corrección con IA?",
    respuesta:
      "La IA analiza cartillas escaneadas y corrige automáticamente los errores con un 99.98% de precisión.",
  },
  {
    pregunta: "¿Puedo cambiar mi plan luego?",
    respuesta:
      "Sí. Desde tu perfil, puedes actualizar tu suscripción en cualquier momento y acceder a más beneficios.",
  },
];

export default function HelpFAQ() {
  const [activo, setActivo] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setActivo(activo === idx ? null : idx);
  };

  return (
    <section className="px-6 py-24 bg-white text-slate-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-bold text-center md:text-4xl"
        >
          Preguntas Frecuentes
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="overflow-hidden transition-all border shadow-sm border-slate-300 rounded-xl hover:shadow-md"
            >
              <button
                onClick={() => toggle(idx)}
                className="flex items-center justify-between w-full px-6 py-4 text-lg font-semibold text-left text-slate-700 hover:bg-slate-50"
              >
                {faq.pregunta}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activo === idx ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`px-6 pb-4 text-sm text-slate-600 transition-all duration-300 ease-in-out ${
                  activo === idx ? "block" : "hidden"
                }`}
              >
                {faq.respuesta}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
