/**
 * @file LogoLinkBtn.test.tsx
 * @description Test suite for the LogoLinkBtn component.
 */

import { render, screen } from "@testing-library/react";
import LogoLinkBtn from "./LogoLinkBtn";
import { BrowserRouter } from "react-router-dom";

// Mock Logo component
jest.mock("@/assets/identity/Logo", () => {
  return () => <div data-testid="logo">Logo</div>;
});

/**
 * Test suite for the Header component - LogoLinkBtn component.
 */
describe("Header component - LogoLinkBtn.tsx", () => {
  /**
   * Test to verify that the Header component renders Logo
   */
  test("Renders components", () => {
    render(
      <BrowserRouter>
        <LogoLinkBtn />
      </BrowserRouter>
    );

    // Verify if Logo renders
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });
});
