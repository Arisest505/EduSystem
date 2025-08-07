# routes/usuarios.py
from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel
from typing import Optional
from cliente.supabase_client import get_supabase_client
import hashlib

router = APIRouter()
supabase = get_supabase_client()

class UsuarioRegistro(BaseModel):
    nombre: Optional[str] = "Usuario"  # Valor por defecto
    correo: str
    contraseña: Optional[str] = "ABC1234"  # Valor por defecto
    rol_id: int = 1
    google_auth_id: Optional[str] = None  # Para Google Auth
    icon: Optional[str] = "000000"  # Valor por defecto

@router.post("/usuarios/registro")
async def registrar_usuario(usuario: UsuarioRegistro):
    try:
        # Verificar si el usuario ya existe por correo
        existing_user = supabase.table('usuarios').select('*').eq('correo', usuario.correo).execute()
        if existing_user.data:
            raise HTTPException(status_code=400, detail="El usuario ya existe")
        
        # Verificar si ya existe un usuario con el mismo google_auth_id (si se proporciona)
        if usuario.google_auth_id:
            existing_google_user = supabase.table('usuarios').select('*').eq('google_auth_id', usuario.google_auth_id).execute()
            if existing_google_user.data:
                raise HTTPException(status_code=400, detail="Ya existe un usuario con este Google Auth ID")
        
        # Hash de la contraseña
        contraseña_hash = hashlib.sha256(usuario.contraseña.encode()).hexdigest()
        
        # Preparar datos del usuario
        user_data = {
            'nombre': usuario.nombre,
            'correo': usuario.correo,
            'contraseña': contraseña_hash,
            'rol_id': usuario.rol_id,
            'icon': usuario.icon
        }
        
        # Agregar google_auth_id si existe
        if usuario.google_auth_id:
            user_data['google_auth_id'] = usuario.google_auth_id
        
        # Insertar usuario
        result = supabase.table('usuarios').insert(user_data).execute()
        
        return {
            'success': True,
            'message': 'Usuario registrado exitosamente',
            'data': result.data
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error al registrar usuario: {str(e)}")

# Endpoint para obtener usuarios (para testing)
@router.get("/usuarios")
async def obtener_usuarios():
    try:
        result = supabase.table('usuarios').select('id, nombre, correo, creado_en, google_auth_id, rol_id, icon').execute()
        return {
            'success': True,
            'data': result.data
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error al obtener usuarios: {str(e)}")

# Endpoint para obtener un usuario específico por ID (útil para testing)
@router.get("/usuarios/{usuario_id}")
async def obtener_usuario_por_id(usuario_id: int):
    try:
        result = supabase.table('usuarios').select('id, nombre, correo, creado_en, google_auth_id, rol_id, icon').eq('id', usuario_id).execute()
        
        if not result.data:
            raise HTTPException(status_code=404, detail="Usuario no encontrado")
        
        return {
            'success': True,
            'data': result.data[0]
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error al obtener usuario: {str(e)}")
