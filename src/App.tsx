import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Servico from "./pages/Service";
import Diagnostico from "./pages/Diagnosis";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicos" element={<Servico />} />
      <Route path="/diagnostico" element={<Diagnostico />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
