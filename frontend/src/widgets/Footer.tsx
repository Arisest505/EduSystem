import { Mail, Phone, MapPin } from "lucide-react";
import peruFlag from "/Flag_of_Peru.svg";
import logo from "/logo.webp";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full py-12 text-white bg-black border-t border-white/10"
    >
      <div className="grid grid-cols-1 gap-10 px-6 mx-auto max-w-7xl md:grid-cols-3">
        {/* Marca y logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex flex-col items-center gap-3 text-center md:items-start md:text-left"
        >
          <img
            src={logo}
            alt="EduSystem Logo"
            className="w-32 h-auto drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
          />
          <h2 className="text-xl font-semibold">
            EduSystem by <span className="text-cyan-400">ARISEI</span>
          </h2>
          <p className="text-sm text-gray-400">
            Sistema de gestión institucional con tecnología avanzada.
          </p>
        </motion.div>

        {/* Contacto */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex flex-col gap-3"
        >
          <h3 className="mb-2 text-lg font-semibold text-white">Contacto</h3>
          <div className="flex items-center gap-2 text-sm text-gray-300 transition hover:text-white">
            <Mail className="w-4 h-4" />
            soporte@edusystem.pe
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300 transition hover:text-white">
            <Mail className="w-4 h-4" />
            contacto@edusystem.pe
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300 transition hover:text-white">
            <Phone className="w-4 h-4" />
            +51 987 654 321
          </div>
        </motion.div>

        {/* Ubicación */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex flex-col gap-3"
        >
          <h3 className="mb-2 text-lg font-semibold text-white">Ubicación</h3>
          <div className="flex items-center gap-2 text-sm text-gray-300 transition hover:text-white">
            <MapPin className="w-4 h-4" />
            Lima, Perú
            <img
              src={peruFlag}
              alt="Bandera Perú"
              className="w-5 h-auto ml-1 rounded-sm shadow-sm"
            />
          </div>
          <p className="text-sm text-gray-400">
            Atención de lunes a viernes, 9am - 6pm
          </p>
        </motion.div>
      </div>

      <div className="pt-6 mt-10 text-xs text-center text-gray-500 border-t border-white/10">
        © {new Date().getFullYear()} EduSystem. Todos los derechos reservados.
      </div>
    </motion.footer>
  );
}
