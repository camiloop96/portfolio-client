import Modal from "@/modules/Modal/Modal";
import Spinner from "@/modules/Spinners/Spinner";
import { FC, useState } from "react";

interface IModalProfileImageProps {
  openImageModal: boolean;
  profilePhoto?: {
    source?: string | undefined;
    alt?: string | undefined;
  };
  handleCloseModal: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const ModalProfileImage: FC<IModalProfileImageProps> = ({
  openImageModal,
  profilePhoto,
  handleCloseModal,
}) => {
  const [loading, setLoading] = useState<boolean>(true);

  const handleChargeLoading = () => {
    setLoading(false);
  };

  return (
    <Modal isOpen={openImageModal} onClose={handleCloseModal}>
      <div className="container-profile_photo">
        {loading && <Spinner />}
        <img
          className="modal-profile_photo"
          src={profilePhoto?.source}
          alt={profilePhoto?.alt}
          onLoad={handleChargeLoading}
        />
      </div>
    </Modal>
  );
};

export default ModalProfileImage;
