// src/App.tsx
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      {/* Puedes agregar más rutas aquí */}
    </Routes>
  );
}

export default App;
