import { useRef, useEffect } from "react";
import { Briefcase, School, ShieldCheck } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function HomeAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="bg-[#f8f5f0] py-24 px-6 text-slate-800">
      <div className="grid items-center max-w-6xl gap-16 mx-auto md:grid-cols-2">
        {/* Columna izquierda - Texto */}
        <div>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6 }}
            className="mb-6 text-4xl font-extrabold text-sky-700"
          >
            Sobre EduSystem
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-lg leading-relaxed text-slate-600"
          >
            Somos una plataforma educativa moderna enfocada en la transformación digital de instituciones. Nuestra misión es potenciar la gestión, la transparencia y el acceso a la información mediante tecnología intuitiva y confiable.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg leading-relaxed text-slate-600"
          >
            Con inteligencia artificial, diseño accesible y escalabilidad profesional, EduSystem es la herramienta ideal para colegios, universidades y redes educativas que desean avanzar hacia una gestión más eficiente y humana.
          </motion.p>
        </div>

        {/* Columna derecha - Detalles destacados */}
        <div className="space-y-6">
          {[ 
            {
              icon: <Briefcase size={24} />,
              title: "Enfoque Profesional",
              desc: "Adaptado para equipos administrativos, docentes y líderes institucionales.",
            },
            {
              icon: <School size={24} />,
              title: "Compromiso Educativo",
              desc: "Creado por expertos con experiencia real en instituciones educativas.",
            },
            {
              icon: <ShieldCheck size={24} />,
              title: "Transparencia y Seguridad",
              desc: "Todos los datos están protegidos con altos estándares de seguridad digital.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-5 bg-white border shadow-md rounded-xl border-slate-200"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-inner bg-sky-100 text-sky-600">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
