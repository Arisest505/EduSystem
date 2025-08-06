// src/widgets/Help/HelpContact.tsx
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

export default function HelpContact() {
  return (
    <section className="px-6 py-24 bg-white text-slate-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-bold text-center md:text-4xl"
        >
          ¿Necesitas ayuda directa?
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <Phone className="text-cyan-600" />
              <span className="text-base font-medium">+51 999 123 456</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-cyan-600" />
              <span className="text-base font-medium">soporte@edu-system.com</span>
            </div>
            <p className="text-sm text-slate-600">
              Nuestro equipo responderá a la brevedad. También puedes escribirnos directamente desde este formulario:
            </p>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full px-4 py-3 text-sm border rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <input
              type="email"
              placeholder="Correo institucional"
              className="w-full px-4 py-3 text-sm border rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <textarea
              placeholder="¿En qué podemos ayudarte?"
              rows={5}
              className="w-full px-4 py-3 text-sm border rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all rounded-full bg-gradient-to-r from-sky-500 to-cyan-600 hover:brightness-110"
            >
              <Send className="w-4 h-4" /> Enviar mensaje
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
