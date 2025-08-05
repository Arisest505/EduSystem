import { Mail, Phone, MapPin } from "lucide-react";
import peruFlag from "/Flag_of_Peru.svg"; // debes tener una imagen PNG o SVG de la bandera en /public o /assets
import logo from "/logo.webp"; // tu logo aquí

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Marca y logo */}
        <div className="flex flex-col items-center md:items-start gap-3">
         <img
        src={logo}
        alt="EduSystem Logo"
        className="w-32 h-auto drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
        />

          <h2 className="text-xl font-semibold">EduSystem by <span className="text-cyan-400">ARISEI</span></h2>
          <p className="text-sm text-gray-400">Sistema de gestión institucional con tecnología avanzada.</p>
        </div>

        {/* Contacto */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold mb-2">Contacto</h3>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Mail className="w-4 h-4" />
            soporte@edusystem.pe
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Mail className="w-4 h-4" />
            contacto@edusystem.pe
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Phone className="w-4 h-4" />
            +51 987 654 321
          </div>
        </div>

        {/* Ubicación */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold mb-2">Ubicación</h3>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <MapPin className="w-4 h-4" />
            Lima, Perú
            <img src={peruFlag} alt="Bandera Perú" className="w-5 h-auto ml-1" />
          </div>
          <p className="text-sm text-gray-400">Atención de lunes a viernes, 9am - 6pm</p>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-500 text-xs border-t border-white/10 pt-6">
        © {new Date().getFullYear()} EduSystem. Todos los derechos reservados.
      </div>
    </footer>
  );
}
