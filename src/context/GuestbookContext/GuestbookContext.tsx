import { createContext, useState } from "react";
import {
  IGuestbookContext,
  IGuestbookContextProps,
} from "./GuestbookContextTypes";

/**
 * GuestbookContext
 *
 * This context provides state management for guestbook comments and loading state.
 */
export const GuestbookContext = createContext({} as IGuestbookContext);

/**
 * GuestbookContextProvider Component
 *
 * This component provides the GuestbookContext to its children, including state for guestbook comments and loading.
 *
 * @param {IGuestbookContextProps} props - The children elements to be wrapped by the context provider.
 * @returns {JSX.Element} The context provider component wrapping the children.
 */
export const GuestbookContextProvider = ({
  children,
}: IGuestbookContextProps): JSX.Element => {
  // State for guestbook comments
  const [guestbookComments, setGuestbookComments] = useState();

  // State for guestbook loader
  const [loading, setLoading] = useState<boolean>(true);

  // Context value object
  const GuestbookContextValues: IGuestbookContext = {
    guestbookComments,
    setGuestbookComments,
    loading,
    setLoading,
  };

  // Render the context provider
  return (
    <GuestbookContext.Provider value={GuestbookContextValues}>
      {children}
    </GuestbookContext.Provider>
  );
};
