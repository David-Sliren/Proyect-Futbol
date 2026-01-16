import App from "./App.jsx";
import BotonData from "./context/BotonData.jsx";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryCLient = new QueryClient();

function FutbolMania() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <QueryClientProvider client={queryCLient}>
        <BotonData>
          <App />
        </BotonData>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default FutbolMania;
