import { ReactNode } from "react";

/**
 * IGuestbookContext Interface
 *
 * This interface defines the structure of the GuestbookContext object.
 *
 * @property {any} guestbookComments - The guestbook comments state.
 * @property {(guestbook: any) => void} setGuestbookComments - Function to set the guestbook comments state.
 * @property {boolean} loading - The loading state.
 * @property {(loading: boolean) => void} setLoading - Function to set the loading state.
 */
export interface IGuestbookContext {
  guestbookComments: any;
  setGuestbookComments: (guestbook: any) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

/**
 * IGuestbookContextProps Interface
 *
 * This interface defines the structure of the props expected by the GuestbookContextProvider component.
 *
 * @property {ReactNode} children - The children elements to be wrapped by the context provider.
 */
export interface IGuestbookContextProps {
  children: ReactNode;
}
