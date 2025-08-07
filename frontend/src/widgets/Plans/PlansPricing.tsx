import { motion } from "framer-motion";
import {
  BadgePercent,
  ScanEye,
  BrainCircuit,
  Trophy,
} from "lucide-react";
import { toast } from "sonner";


const handleSeleccionarPlan = (nombre: string) => {
  if (nombre === "Demo Gratuito") {
    toast("Solicitud de Plan Demo", {
      description: `Para activar el plan demo por 7 días, comunícate con nosotros a contacto@edusystem.com`,
      action: {
        label: "Copiar correo",
        onClick: () => {
          navigator.clipboard.writeText("contacto@edusystem.com");
          toast.success("Correo copiado al portapapeles");
        },
      },
    });
  } else {
    toast.success(`Has seleccionado el ${nombre}. Procede a realizar el pago para activarlo `);
  }
};

const planes = [
  {
    nombre: "Demo Gratuito",
    precio: 0,
    demo: true,
    color: "sky",
    descripcion:
      "Prueba gratuita con IA limitada: lectura de 10 cartillas y 1 examen creado. Ideal para explorar el sistema.",
    beneficios: [
      "Lectura de cartillas (10)",
      "1 Plantilla de examen",
      "Acceso temporal al sistema",
      "Corrección con IA (básica)"
    ]
  },
  {
    nombre: "Plan Básico",
    precio: 69.90,
    color: "green",
    descripcion:
      "Perfecto para docentes o instituciones pequeñas que desean automatizar la corrección de cartillas.",
    beneficios: [
      "Lectura IA: hasta 200 cartillas / mes",
      "Plantillas de examen ilimitadas",
      "Corrección 99.98% precisión",
      "Análisis por rendimiento",
      "Matriz de notas ponderadas",
      "Exportación para impresión"
    ]
  },
  {
    nombre: "Plan Avanzado",
    precio: 120.90,
    precioAnterior: 134.90,
    descuento: "10%",
    color: "yellow",
    descripcion:
      "Para instituciones que requieren mayor capacidad de evaluación automatizada.",
    beneficios: [
      "Lectura IA: hasta 500 cartillas / mes",
      "Simulacros y concursos automáticos",
      "Informe PDF por estudiante",
      "Estadísticas por sección o aula",
      "Comentarios automáticos por IA",
      "Corrección cronometrada"
    ]
  },
  {
    nombre: "Plan PRO IA",
    precio: 350.90,
    precioAnterior: 402.20,
    descuento: "13%",
    color: "purple",
    descripcion:
      "Ideal para instituciones que quieren aprovechar el potencial de la inteligencia artificial educativa.",
    beneficios: [
      "Lectura IA: hasta 1000 cartillas / mes",
      "Predicción de notas por IA",
      "Etiquetas inteligentes por cartilla",
      "Ranking por curso o salón",
      "Panel de análisis visual interactivo",
      "Retroalimentación personalizada"
    ]
  },
];

export default function PlansPricing() {
  return (
    <section className="py-24 px-6 bg-[#f9f6f1] text-slate-800">
      <div className="mx-auto text-center max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-10 text-4xl font-bold text-sky-700"
        >
          Elige el plan perfecto para tu institución
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {planes.map((plan, index) => (
            <motion.div
              key={plan.nombre}
              className={`relative w-full p-8 text-left bg-white rounded-3xl shadow-2xl ring-4 ring-${plan.color}-300 border-t-[10px] border-${plan.color}-500 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03]`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {plan.descuento && (
                <div className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold text-white bg-red-500 rounded-full shadow-md animate-bounce`}>🔥 {plan.descuento} OFF</div>
              )}

              <div className="flex items-center gap-3 mb-5">
                <div className={`p-3 rounded-full bg-${plan.color}-100 shadow-inner`}> 
                  {plan.nombre.includes("PRO") ? (
                    <BrainCircuit className="text-purple-600 w-7 h-7" />
                  ) : plan.nombre.includes("Avanzado") ? (
                    <Trophy className="text-yellow-500 w-7 h-7" />
                  ) : plan.nombre.includes("Demo") ? (
                    <ScanEye className="w-7 h-7 text-sky-500" />
                  ) : (
                    <BadgePercent className="text-green-500 w-7 h-7" />
                  )}
                </div>
                <h3 className="text-xl font-extrabold tracking-wide text-gray-800 uppercase">
                  {plan.nombre}
                </h3>
              </div>

              <p className="mb-4 text-sm italic leading-relaxed text-gray-600">
                {plan.descripcion}
              </p>

              <ul className="mb-6 space-y-2 text-sm text-gray-700 list-disc list-inside">
                {plan.beneficios.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              {plan.precio !== null ? (
                <div className="mb-5 text-left">
                  {plan.precioAnterior && (
                    <p className="text-sm font-semibold text-red-500 line-through">
                      S/ {plan.precioAnterior.toFixed(2)}
                    </p>
                  )}
                  <p className="text-2xl font-bold text-cyan-700">
                    S/ {plan.precio.toFixed(2)} / mes
                  </p>
                </div>
              ) : (
                <div className="text-sm font-medium text-gray-500">Contáctanos para cotización</div>
              )}

              {plan.nombre !== "Plan Enterprise" && (
               <button
                onClick={() => handleSeleccionarPlan(plan.nombre)}
                className="inline-block w-full px-5 py-2 mt-3 text-sm font-semibold text-white transition-all rounded-full bg-gradient-to-r from-cyan-600 to-sky-500 hover:brightness-110"
                >
                Seleccionar
                </button>

              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}