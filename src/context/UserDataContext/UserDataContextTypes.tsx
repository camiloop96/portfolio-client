import { ReactNode } from "react";

/**
 * ProfilePhotoTypes Interface
 *
 * This interface defines the structure of the profile photo object.
 *
 * @property {object} thumbnail - The thumbnail image details.
 * @property {string} thumbnail.source - The source URL of the thumbnail image.
 * @property {string} thumbnail.alt - The alt text for the thumbnail image.
 * @property {object} fullImage - The full-size image details.
 * @property {string} fullImage.source - The source URL of the full-size image.
 * @property {string} fullImage.alt - The alt text for the full-size image.
 */
export interface ProfilePhotoTypes {
  thumbnail: {
    source?: string;
    alt?: string;
  };
  fullImage: {
    source?: string;
    alt?: string;
  };
}

/**
 * UserDataContextProps Interface
 *
 * This interface defines the structure of the props expected by the UserDataContextProvider component.
 *
 * @property {ReactNode} children - The children elements to be wrapped by the context provider.
 */
export interface UserDataContextProps {
  children: ReactNode;
}

/**
 * UserDataContextTypes Interface
 *
 * This interface defines the structure of the UserDataContext object.
 *
 * @property {ProfilePhotoTypes | undefined} profilePhoto - The profile photo object.
 * @property {string} userName - The username.
 */
export interface UserDataContextTypes {
  profilePhoto: ProfilePhotoTypes | undefined;
  userName: string;
}
