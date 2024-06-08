import ReactDOM from "react-dom/client"; // Import ReactDOM from react-dom/client for server rendering
import { Toaster } from "react-hot-toast"; // Import Toaster component from react-hot-toast
import { AppContextProvider } from "./context/AppContext/AppContext.tsx"; // Import AppContextProvider component
import App from "./App.tsx"; // Import App component

// Render the application
ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppContextProvider>
    <App /> {/* Render the App component */}
    <Toaster /> {/* Render the Toaster component */}
  </AppContextProvider>
);
