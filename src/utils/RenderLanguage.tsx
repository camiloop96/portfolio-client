import { AppContext } from "@/context/AppContext/AppContext";
import React, { useContext } from "react";

/**
 * Properties of RenderLanguage component
 */
interface RenderLanguageProps {
  //** Object who contains english and spanish texts */
  input?: {
    //** Text or element JSX in spanish */
    spanish?: string | JSX.Element;
    //** Text or element JSX in english */
    english?: string | JSX.Element;
  };
}

/**
 * Functional component for render text depending of selected language
 * @param {RenderLanguageProps} props - Props of RenderLanguage component
 * @returns {JSX.Element} Conditional rendering of text in selected language
 */

export const RenderLanguage: React.FC<RenderLanguageProps> = ({
  input,
}: RenderLanguageProps) => {
  // Context
  const { language } = useContext(AppContext);

  return <>{language === "english" ? input?.english : input?.spanish}</>;
};
