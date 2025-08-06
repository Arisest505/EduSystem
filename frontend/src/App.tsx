// src/App.tsx
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import PlansPage from "./pages/Plans";
import HelpPage from "./pages/HelpPage";
import { Toaster } from "sonner";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <Toaster />
      <ScrollToTop />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/help" element={<HelpPage />} />

      {/* Puedes agregar más rutas aquí */}
    </Routes>
    </>
  );
}


export default App;
