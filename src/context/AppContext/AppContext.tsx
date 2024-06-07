import { createContext, useState } from "react";
import { AppContextProps, AppContextType } from "./AppContextTypes";
import { UserDataContextProvider } from "../UserDataContext/UserDataContext";
import { GuestbookContextProvider } from "../GuestbookContext/GuestbookContext";
import { FeedContextProvider } from "../FeedContext/FeedContext";

/**
 * AppContext
 *
 * This context provides application-wide state management for language selection and scroll lock functionality.
 */
export const AppContext = createContext({} as AppContextType);

/**
 * AppContextProvider Component
 *
 * This component provides the AppContext to its children, managing the application's language setting and scroll lock state.
 * It also wraps the children with UserDataContextProvider, GuestbookContextProvider, and FeedContextProvider.
 *
 * @param {AppContextProps} props - The children elements to be wrapped by the context providers.
 * @returns {JSX.Element} The context provider components wrapping the children.
 */
export const AppContextProvider = ({ children }: AppContextProps) => {
  // Language selection state
  const [language, setLanguage] = useState<string>("english");

  // Scroll lock state
  const [scrollLock, setScrollLock] = useState<boolean>(false);

  // Context value object
  const contextValue: AppContextType = {
    language,
    setLanguage,
    setScrollLock,
    scrollLock,
  };

  // Render the context providers
  return (
    <AppContext.Provider value={contextValue}>
      <UserDataContextProvider>
        <GuestbookContextProvider>
          <FeedContextProvider>{children}</FeedContextProvider>
        </GuestbookContextProvider>
      </UserDataContextProvider>
    </AppContext.Provider>
  );
};
