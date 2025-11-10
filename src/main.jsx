import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LigasDeFutbol from "./context/LigasDeFutbol.jsx";
import EquiposDeFutbol from "./context/EquiposDeFutbol.jsx";
import ClasificacionDeFutbol from "./context/ClasificacionDeFutbol.jsx";
import BotonData from "./context/BotonData.jsx";
import {BrowserRouter} from 'react-router';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <BotonData>
      <LigasDeFutbol>
        <EquiposDeFutbol>
          <ClasificacionDeFutbol>
            <App />
          </ClasificacionDeFutbol>
        </EquiposDeFutbol>
      </LigasDeFutbol>
    </BotonData>
    </BrowserRouter>
  </StrictMode>,
);
