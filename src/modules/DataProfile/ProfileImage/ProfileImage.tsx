import { UserDataContext } from "@/context/UserDataContext/UserDataContext";
import { FC, useContext, useState } from "react";
import ModalProfileImage from "./ModalProfileImage/ModalProfileImage";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProfileImage: FC = () => {
  // Context imports
  const { profilePhoto } = useContext(UserDataContext);

  // Handle open/close modal
  const [openImageModal, setOpenImageModal] = useState<boolean>(false);

  //** Open Modal */
  const handleOpenModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOpenImageModal(true);
  };
  //** Close Modal */
  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOpenImageModal(false);
  };

  // Loading state that handle photo profile charge
  const [loading, setLoading] = useState<boolean>(true);
  const handleLoading = () => {
    setLoading(false);
  };

  return (
    <>
      <div className="profile_image" onClick={handleOpenModal}>
        {loading && (
          <SkeletonTheme baseColor="#E0E0E0" highlightColor="#F5F5F5">
            <div className="p-i-loading_skeleton">
              <Skeleton width={"100%"} height={"100%"} />
            </div>
          </SkeletonTheme>
        )}
        <img
          className="profile-image_resource"
          src={profilePhoto?.thumbnail?.source}
          alt={profilePhoto?.thumbnail?.alt}
          onLoad={handleLoading}
        />
      </div>
      <ModalProfileImage
        openImageModal={openImageModal}
        profilePhoto={profilePhoto?.fullImage}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default ProfileImage;
