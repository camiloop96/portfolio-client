import { createContext, useEffect, useState } from "react";
import {
  ProfilePhotoTypes,
  UserDataContextProps,
  UserDataContextTypes,
} from "./UserDataContextTypes";

/**
 * UserDataContext
 *
 * This context provides state management for user data, including profile photo and username.
 */
export const UserDataContext = createContext({} as UserDataContextTypes);

/**
 * UserDataContextProvider Component
 *
 * This component provides the UserDataContext to its children, including state for profile photo and username.
 *
 * @param {UserDataContextProps} props - The children elements to be wrapped by the context provider.
 * @returns {JSX.Element} The context provider component wrapping the children.
 */
export const UserDataContextProvider = ({
  children,
}: UserDataContextProps): JSX.Element => {
  // State for profile photo
  const [profilePhoto, setProfilePhoto] = useState<ProfilePhotoTypes>();

  // Effect to load profile photo into state
  useEffect(() => {
    setProfilePhoto({
      thumbnail: {
        source:
          "https://res.cloudinary.com/devsy44f3/image/upload/f_auto,c_thumb,q_auto,fl_lossy/v1712242555/Portfolio/ProfilePhoto/Imagen_de_WhatsApp_2023-10-10_a_las_14.16_1_irhdsd.png",
        alt: "",
      },
      fullImage: {
        source:
          "https://res.cloudinary.com/devsy44f3/image/upload/v1712242555/Portfolio/ProfilePhoto/Imagen_de_WhatsApp_2023-10-10_a_las_14.16_1_irhdsd.png",
        alt: "",
      },
    });
  }, []);

  // State for username
  let [userName] = useState<string>("Camilo Polanía");

  // Context value object
  const UserDataContextValues: UserDataContextTypes = {
    profilePhoto,
    userName,
  };

  // Render the context provider
  return (
    <UserDataContext.Provider value={UserDataContextValues}>
      {children}
    </UserDataContext.Provider>
  );
};
