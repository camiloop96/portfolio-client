import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { AppContextProvider } from "./context/AppContext/AppContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppContextProvider>
    <App />
    <Toaster />
  </AppContextProvider>
);
