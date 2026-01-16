import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FutbolMania from "./FutbolMania.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FutbolMania />
  </StrictMode>
);
