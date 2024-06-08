/**
 * @file Header.test.tsx
 * @description Test suite for the Header component.
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

// Mock LogoLinkBtn component
jest.mock("@/modules/Header/LogoLinkBtn/LogoLinkBtn", () => {
  return () => <div data-testid="logo-link-btn">Mock Logo Link Button</div>;
});

// Mock LanguageMode component
jest.mock("@/modules/Header/LanguageMode/LanguageMode", () => {
  return () => <div data-testid="language-mode-btn">Language Mode Btn</div>;
});

/**
 * Test suite for the Header global component.
 */
describe("Header global component", () => {
  /**
   * Test to verify that the Header component renders LogoLinkBtn and LanguageMode components.
   */
  test("Renders components", () => {
    render(<Header />);

    // Verify if LogoLinkBtn renders
    const logoLinkBtn = screen.getByTestId("logo-link-btn");
    expect(logoLinkBtn).toBeInTheDocument();

    // Verify if LanguageMode renders
    const LanguageMode = screen.getByTestId("language-mode-btn");
    expect(LanguageMode).toBeInTheDocument();
  });
});
