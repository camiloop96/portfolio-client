/**
 * @file LanguageMode.test.tsx
 * @description Test suite for the LanguageMode component.
 */

import { render, screen, fireEvent } from "@testing-library/react";
import LanguageMode from "./LanguageMode";
import { ReactNode } from "react";
import { AppContext } from "@/context/AppContext/AppContext";
import { AppContextType } from "@/context/AppContext/AppContextTypes";
import "@testing-library/jest-dom";

// Mock the AppContext
const mockSetLanguage = jest.fn();

// Partially mock the AppContextType
type PartialAppContextType = {
  setLanguage: typeof mockSetLanguage;
};

// Custom context provider for testing
const MockAppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const contextValue: PartialAppContextType = {
    setLanguage: mockSetLanguage,
  };

  return (
    <AppContext.Provider value={contextValue as unknown as AppContextType}>
      {children}
    </AppContext.Provider>
  );
};

/**
 * Test suite for the Header component - LanguageMode component.
 */
describe("Language Mode component - LanguageMode.tsx", () => {
  beforeEach(() => {
    render(
      <MockAppProvider>
        <LanguageMode />
      </MockAppProvider>
    );
  });
  /**
   * Test to verify that the Header component renders Logo
   */
  test("Renders language button with English icon by default", () => {
    const languageButton = screen.getByTestId("language-mode-btn");
    expect(languageButton).toBeInTheDocument();

    // Verify the default state with English Icon
    expect(screen.getByTestId("spanish-icon")).toBeInTheDocument();
  });
  /**
   * Test to verify if switches to spanish when button is clicked
   */
  test("Switches to spanish when button is clicked", () => {
    const languageButton = screen.getByTestId("language-mode-btn");

    // Click the button to switch language
    fireEvent.click(languageButton);

    // After click: English icon is displayed
    expect(screen.getByTestId("english-icon")).toBeInTheDocument();

    // Ensure the setLanguage function is called with the correct language
    expect(mockSetLanguage).toHaveBeenCalledWith("english");
  });

  /**
   * Test to verify that it switches back to English when the button is clicked again.
   */
  test("Switches back to English when button is clicked again", () => {
    const languageButton = screen.getByTestId("language-mode-btn");

    // Click the button to switch to Spanish
    fireEvent.click(languageButton);
    expect(screen.getByTestId("english-icon")).toBeInTheDocument();

    // Click the button again to switch back to English
    fireEvent.click(languageButton);
    expect(screen.getByTestId("spanish-icon")).toBeInTheDocument();

    // Ensure the setLanguage function is called with the correct language
    expect(mockSetLanguage).toHaveBeenLastCalledWith("english");
  });
});
