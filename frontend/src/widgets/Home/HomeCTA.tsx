import { Link } from "react-router-dom";

export default function HomeCTA() {
  return (
    <section className="py-20 bg-blue-600 text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para empezar?</h2>
        <p className="mb-6">Crea tu cuenta y comienza a transformar tu institución con BETA-CART.</p>
        <Link to="/auth" className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition">
          Comenzar ahora
        </Link>
      </div>
    </section>
  );
}
