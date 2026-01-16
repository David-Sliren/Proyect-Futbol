import { Routes, Route } from "react-router";
import { useState } from "react";
import Home from "./pages/Home";
import Clasificacion from "./pages/Clasificacion";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="clasificacion" element={<Clasificacion />} />
      </Routes>
    </>
  );
}

export default App;
