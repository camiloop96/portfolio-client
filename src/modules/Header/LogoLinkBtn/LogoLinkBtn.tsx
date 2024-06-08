/**
 * @file LogoLinkBtn.tsx
 * @description LogoLinkBtn component.
 */

import Logo from "@/assets/identity/Logo";
import { FC } from "react";
import { Link } from "react-router-dom";

/**
 * LogoLinkBtn Component
 *
 * Renders a logo inside a link button that navigates to the home page.
 *
 * @component
 * @returns JSX.Element
 */
const LogoLinkBtn: FC = () => {
  // Return JSX
  return (
    <Link className="index-link_btn" to="/">
      <Logo />
    </Link>
  );
};

export default LogoLinkBtn;
