interface RegisterUserData {
  correo: string;
  google_auth_id: string;
  rol_id?: number;
  nombre?: string;
  icon?: string;
}

export async function registerGoogleUser(userData: RegisterUserData) {
  const {
    correo,
    google_auth_id,
    rol_id = 1,
    nombre = "Usuario",
    icon = "000000",
  } = userData;

  const res = await fetch("http://localhost:8000/api/usuarios/registro", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      correo,
      google_auth_id,
      rol_id,
      nombre,
      icon,
    }),
  });

  if (!res.ok) throw new Error("Error al registrar usuario con Google");
  return await res.json();
}
