import { useRef, useEffect } from "react";
import { Lightbulb, MonitorSmartphone, ServerCog } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function HomeFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const features = [
    {
      icon: <Lightbulb size={30} strokeWidth={2} />,
      title: "Gestión inteligente",
      desc: "Implementamos algoritmos de IA para automatizar tareas administrativas, generar reportes en tiempo real y mejorar la toma de decisiones dentro de tu institución.",
    },
    {
      icon: <MonitorSmartphone size={30} strokeWidth={2} />,
      title: "Diseño profesional",
      desc: "Contamos con una interfaz limpia, minimalista y altamente accesible, pensada para usuarios administrativos, docentes, padres de familia y estudiantes.",
    },
    {
      icon: <ServerCog size={30} strokeWidth={2} />,
      title: "Soporte escalable",
      desc: "Nuestra infraestructura permite adaptarse desde pequeños colegios hasta universidades o redes institucionales completas. Siempre listo para crecer contigo.",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-[#f8f5f0] text-slate-800">
      <div className="mx-auto text-center max-w-7xl">
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6 }}
          className="mb-12 text-4xl font-extrabold text-sky-700"
        >
          ¿Qué ofrecemos en EduSystem?
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16 text-lg text-slate-600"
        >
          Nuestra plataforma está diseñada para revolucionar la gestión institucional educativa, integrando inteligencia artificial, diseño accesible y escalabilidad profesional para cualquier tipo de institución.
        </motion.p>

        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="p-6 transition-all bg-white border shadow-lg group rounded-2xl border-slate-200 hover:shadow-2xl hover:border-sky-300"
            >
              <div className="flex items-center justify-center mx-auto mb-4 transition-transform rounded-full shadow-inner w-14 h-14 bg-sky-100 text-sky-600 group-hover:rotate-6">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-800">{feature.title}</h3>
              <p className="text-sm text-slate-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
