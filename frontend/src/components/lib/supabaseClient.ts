import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yhrajrolvcyknpcsrbig.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlocmFqcm9sdmN5a25wY3NyYmlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MDgzNDYsImV4cCI6MjA2OTk4NDM0Nn0.s1uCm403B7BIjzmlocsj6ff2T5wo-s6oqJKYjfE6yF0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
