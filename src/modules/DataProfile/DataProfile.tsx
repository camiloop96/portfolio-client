/**
 * @file DataProfile.tsx
 * @description DataProfile component.
 */
import ProfileImage from "./ProfileImage/ProfileImage";
import LinksContainer from "./LinksContainer/LinksContainer";
import ContainerFlags from "./ContainerFlags/ContainerFlags";
import TextContainer from "./TextContainer/TextContainer";
import { useContext } from "react";
import { UserDataContext } from "@/context/UserDataContext/UserDataContext";

/**
 * DataProfile Component
 *
 * This component renders the profile data including profile image, links container,
 * text container, user name, and container flags.
 *
 * @component
 * @returns {JSX.Element}
 */
const DataProfile = () => {
  // Access user name from context
  const { userName } = useContext(UserDataContext);

  // Return JSX
  return (
    <div className="data-profile_container">
      {/* Profile image and links container */}
      <div className="profile_content-1">
        <ProfileImage />
        <LinksContainer />
      </div>

      {/* User name and text container */}
      <div className="profile_content-2">
        <div className="name_container">{userName}</div>
        <TextContainer />
      </div>

      {/* Container flags */}
      <ContainerFlags />
    </div>
  );
};

export default DataProfile;

// QUEDE AQUI, FALTA HACER TODA LA SUITE DE TESTS PARA DATA PROFILE, SPINNER, MODAL Y RENDER LANGUAGE, Y OPTIMIZARLOS
