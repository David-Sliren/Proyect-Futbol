import { Routes, Route } from "react-router";
import { useState } from "react";
import Home from "./pages/Home";
import Equipos from "./pages/Equipos";
import Ligas from "./pages/Ligas";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="equipos" element={<Equipos />} />
        <Route path="ligas" element={<Ligas />} />
      </Routes>
    </>
  );
}

export default App;
