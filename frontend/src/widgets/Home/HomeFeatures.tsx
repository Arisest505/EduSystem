export default function HomeFeatures() {
  return (
    <section className="py-16 bg-gray-100 text-gray-800 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">¿Qué ofrecemos?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-xl font-bold mb-2">Gestión inteligente</h3>
            <p>Optimiza procesos institucionales con IA integrada.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-xl font-bold mb-2">Diseño profesional</h3>
            <p>Interfaz intuitiva, accesible y moderna para todos los usuarios.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-xl font-bold mb-2">Soporte escalable</h3>
            <p>Adaptado para colegios, universidades y organizaciones.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
