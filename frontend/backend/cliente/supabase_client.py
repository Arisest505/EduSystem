import os
from dotenv import load_dotenv
from supabase import create_client, Client

# Cargar variables de entorno
load_dotenv()

# Configuración
url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_ANON_KEY")

# Crear cliente
supabase: Client = create_client(url, key)

def get_supabase_client():
    return supabase
