import { ReactNode } from "react";

/**
 * AppContextType Interface
 *
 * This interface defines the shape of the context object used in AppContext.
 * It includes state values and functions for managing language selection and scroll lock state.
 */
export interface AppContextType {
  /**
   * Function to set the language.
   *
   * @param language - The new language to set.
   */
  setLanguage: (language: string) => void;

  /**
   * The current language.
   */
  language: string;

  /**
   * Function to set the scroll lock state.
   *
   * @param lock - A boolean indicating whether to lock (true) or unlock (false) scrolling.
   */
  setScrollLock: (lock: boolean) => void;

  /**
   * The current scroll lock state.
   */
  scrollLock: boolean;
}

/**
 * AppContextProps Interface
 *
 * This interface defines the shape of the props expected by the AppContextProvider component.
 * It includes the children elements to be wrapped by the context providers.
 */
export interface AppContextProps {
  /**
   * The children elements to be wrapped by the context providers.
   */
  children: ReactNode;
}
