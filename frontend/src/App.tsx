// src/App.tsx
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      {/* Puedes agregar más rutas aquí */}
    </Routes>
  );
}

export default App;
