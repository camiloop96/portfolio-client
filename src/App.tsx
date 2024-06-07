import { useContext } from "react";
import "./App.css";
import Header from "./global/Header/Header";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppContext } from "./context/AppContext/AppContext";
import "react-loading-skeleton/dist/skeleton.css";
import Index from "./scenes/Index/Index";

function App() {
  // State that block scrollbar
  const { scrollLock } = useContext(AppContext);

  // Ref to body
  const body = document.getElementById("body");

  // Block scrollbar
  if (body) {
    if (scrollLock) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }

  // Return
  return (
    <div className="app_container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
