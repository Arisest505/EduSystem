import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Copy, Check, UserCircle2, ChevronDown } from "lucide-react";
import clsx from "clsx";
import { toast } from "sonner";

const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Planes", path: "/plans" },
  { name: "Ayuda", path: "/help" },
];

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const user = {
    nombre: "ARISE DEV",
    codigo: "USR-1549",
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCopy = (type: "nombre" | "codigo") => {
    const text = type === "nombre" ? user.nombre : user.codigo;
    navigator.clipboard.writeText(text);
    setCopied(type);
    toast.success(`${type === "nombre" ? "Nombre" : "Código"} copiado`);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md border-b border-neutral-200"
          : "bg-white/30 backdrop-blur-xl"
      )}
    >
      <nav className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-wide text-neutral-700">
          <img src="/logo.webp" alt="Logo" className="w-auto h-8" />
          EduSystem
        </Link>

        {/* Links */}
        <ul className="flex gap-6 text-sm font-semibold text-neutral-700">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={clsx(
                  "relative transition-colors duration-300 hover:text-cyan-700",
                  location.pathname === link.path && "text-cyan-700"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-cyan-700 rounded-full transition-all duration-300" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón + Usuario */}
        <div className="flex items-center gap-4">
          <Link
            to="/auth/login"
            className="px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 bg-black rounded-full shadow hover:bg-sky-400 hover:text-black"
          >
            Iniciar sesión
          </Link>

          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 text-sm transition text-neutral-700 hover:text-cyan-700"
            >
              <UserCircle2 className="w-6 h-6" />
              <ChevronDown className="w-4 h-4" />
            </button>

            {menuOpen && (
              <div className="absolute right-0 z-50 w-64 mt-2 bg-white border border-gray-200 shadow-xl rounded-xl animate-fade-in-fast">
                <div className="p-4">
                  <p className="text-sm font-medium text-gray-800"> {user.nombre}</p>
                  <button
                    onClick={() => handleCopy("nombre")}
                    className="flex items-center gap-1 mt-1 text-xs text-cyan-700 hover:underline"
                  >
                    {copied === "nombre" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />} Copiar nombre
                  </button>
                </div>
                <div className="p-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-800"> {user.codigo}</p>
                  <button
                    onClick={() => handleCopy("codigo")}
                    className="flex items-center gap-1 mt-1 text-xs text-cyan-700 hover:underline"
                  >
                    {copied === "codigo" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />} Copiar código
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}