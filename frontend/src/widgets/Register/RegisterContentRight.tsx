import { useEffect, useState } from "react";
import { supabase } from "../../components/lib/supabaseClient";
import { registerGoogleUser } from "../../api/user";
import { Button } from "../../components/interface/buttons/button";

export default function RegisterContentRight({
  showLeftPanel,
}: {
  showLeftPanel: boolean;
}) {
  const [estado, setEstado] = useState<string | null>(null);
  const handleGoogleRegister = async () => {
    try {
      // Inicia el login con Google
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw new Error(error.message);
      // El usuario será redirigido a Google y luego de vuelta a tu app.
    } catch (error: any) {
      setEstado("Error: " + error.message);
      console.error("error;", estado);
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const getUserAndRegister = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        try {
          const correo = user.email!;
          const google_auth_id = user.id;

          // Obtener más información del perfil de Google
          const nombre =
            user.user_metadata?.full_name ||
            user.user_metadata?.name ||
            `${user.user_metadata?.first_name || ""} ${
              user.user_metadata?.last_name || ""
            }`.trim() ||
            "Usuario";

          console.log("Datos del usuario de Google:", user.user_metadata); // Para debug

          const result = await registerGoogleUser({
            correo,
            google_auth_id,
            nombre,
          });

          setEstado("Usuario registrado: " + JSON.stringify(result.data));
        } catch (error: any) {
          setEstado("Error: " + error.message);
        }
      }
    };
    getUserAndRegister();
  }, []);

  return (
    <div
      className={`flex items-center justify-center relative ${
        showLeftPanel ? "lg:w-1/2" : "w-full"
      }`}
      style={{ width: "1072px", height: "1054px" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-md mx-auto px-8">
        {/* Logo/Brand area */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-6">
            <svg
              className="w-10 h-10 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Bienvenido
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Únete a nuestra plataforma con un solo click
          </p>
        </div>

        {/* Google Sign In Card */}
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Crear Cuenta
            </h2>
            <p className="text-gray-400">Regístrate de forma rápida y segura</p>
          </div>

          {/* Google Button */}
          <Button
            className="w-full h-16 bg-white hover:bg-gray-50 text-gray-900 font-medium text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={handleGoogleRegister}
          >
            <svg className="mr-4 h-6 w-6" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continuar con Google
          </Button>

          {/* Features */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm">Acceso instantáneo y seguro</span>
            </div>
            <div className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-sm">
                Sin necesidad de recordar contraseñas
              </span>
            </div>
            <div className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
              <span className="text-sm">Protegido por Google</span>
            </div>
          </div>
        </div>

        {/* Login link */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            ¿Ya tienes una cuenta?{" "}
            <a
              href="/login"
              className="text-white hover:text-blue-400 font-medium transition-colors duration-200 hover:underline"
            >
              Inicia sesión
            </a>
          </p>
        </div>

        {/* Terms */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500 leading-relaxed">
            Al registrarte, aceptas nuestros{" "}
            <a
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Términos de Servicio
            </a>{" "}
            y{" "}
            <a
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Política de Privacidad
            </a>
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 right-8 w-4 h-4 bg-blue-500 rounded-full opacity-60 animate-ping"></div>
      <div className="absolute bottom-8 left-8 w-3 h-3 bg-purple-500 rounded-full opacity-60 animate-ping delay-700"></div>
      <div className="absolute top-1/3 right-12 w-2 h-2 bg-green-500 rounded-full opacity-60 animate-ping delay-1000"></div>
    </div>
  );
}
