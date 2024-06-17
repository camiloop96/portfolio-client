/**
 * @file App.tsx
 * @description Main component of the application that handles routing and main layout.
 */
import { useContext, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppContext } from "@/context/AppContext/AppContext";
import Header from "@/global/Header/Header";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";
import Index from "./scenes/Index/Index";
import PostDetail from "./scenes/PostDetail/PostDetail";
import Footer from "./global/Footer/Footer";

/**
 * App Component
 *
 * Main component of the application.
 */
function App() {
  // State that blocks scrollbar
  const { scrollLock } = useContext(AppContext);

  // Effect to block or unblock scrollbar
  useEffect(() => {
    const body = document.body;
    if (body) {
      if (scrollLock) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }
  }, [scrollLock]);

  // Return JSX
  return (
    <div className="app_container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
