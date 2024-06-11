import { FC, useContext, useMemo } from "react";
import { UserDataContext } from "@/context/UserDataContext/UserDataContext";
import { getInitials } from "@/utils/getInitials";

interface IAvatarImageProps {
  guest: any;
}

const AvatarImage: FC<IAvatarImageProps> = ({ guest }) => {
  // Contextos
  const { profilePhoto } = useContext(UserDataContext);

  // Renderización condicional
  const renderAvatar = useMemo(() => {
    if (!guest.isGuest) {
      return (
        <img
          src={profilePhoto?.thumbnail?.source}
          alt={profilePhoto?.thumbnail?.alt}
        />
      );
    } else {
      return (
        <div className="avatar_container">
          {guest.name && getInitials(guest.name)}
        </div>
      );
    }
  }, [guest, profilePhoto]);

  // Render
  return <div className="image_container">{renderAvatar}</div>;
};

export default AvatarImage;
