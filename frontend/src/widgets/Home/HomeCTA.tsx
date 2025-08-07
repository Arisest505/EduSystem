import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="px-6 py-24 bg-gradient-to-br bg-[#f9f6f1] via-[#e6f0fa] to-[#fdfaf5]">
      <motion.div
        className="relative max-w-4xl p-10 mx-auto text-center border border-gray-200 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Ícono de cohete */}
        <motion.div
          initial={{ y: 30, opacity: 0, rotate: -10 }}
          animate={{ y: -10, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute flex items-center justify-center w-16 h-16 mx-auto -translate-x-1/2 border rounded-full shadow-md -top-8 left-1/2 bg-cyan-100 border-cyan-300"
        >
          <Rocket className="w-7 h-7 text-cyan-700" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-4 text-3xl font-extrabold text-slate-800 md:text-4xl"
        >
          ¿Listo para transformar tu institución?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-8 text-lg text-slate-600"
        >
          Crea tu cuenta y descubre cómo <span className="font-semibold text-cyan-700">EduSystem</span> puede llevar la gestión institucional al siguiente nivel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          <Link
            to="/auth"
            className="inline-block px-8 py-3 font-semibold text-white transition-all duration-300 rounded-full shadow-md bg-cyan-600 hover:bg-cyan-700"
          >
            Comenzar ahora
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
