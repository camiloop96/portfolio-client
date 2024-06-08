/**
 * @file LanguageMode.tsx
 * @description LanguageMode component.
 */
import English from "@/assets/icon/English";
import Spanish from "@/assets/icon/Spanish";
import { AppContext } from "@/context/AppContext/AppContext";
import { FC, useContext, useEffect, useState } from "react";

/**
 * LanguageMode Component
 *
 * This component handles the language mode toggle button.
 *
 * @component
 * @returns JSX.Element
 */
const LanguageMode: FC = () => {
  // App Context
  const { setLanguage } = useContext(AppContext);

  // State that handles language
  const [btnLanguage, setBtnLanguage] = useState<string>("english");

  // Update state to context
  useEffect(() => {
    setLanguage(btnLanguage);
  }, [btnLanguage]);

  // Handler for language button click
  const handlechangeBtn = () => {
    setBtnLanguage((prevLanguage) =>
      prevLanguage === "english" ? "spanish" : "english"
    );
  };

  // Return JSX
  return (
    <button
      className="language-mode_btn"
      data-testid="language-mode-btn"
      onClick={() => handlechangeBtn()}
    >
      {btnLanguage === "spanish" ? <English /> : <Spanish />}
    </button>
  );
};

export default LanguageMode;
