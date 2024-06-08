import LogoLinkBtn from "@/modules/Header/LogoLinkBtn/LogoLinkBtn";
import LanguageMode from "@/modules/Header/LanguageMode/LanguageMode";
import { FC } from "react";

/**
 * Header Component
 *
 * Global header module of the application.
 * Renders a logo and a language mode button.
 *
 * @component
 * @example
 * ```jsx
 * <Header />
 * ```
 * @returns JSX.Element
 */
const Header: FC = () => {
  // Return JSX
  return (
    <div className="header_container">
      <div className="header_content">
        <LogoLinkBtn />
        <div className="side-btn_container">
          <LanguageMode />
        </div>
      </div>
    </div>
  );
};

export default Header;
