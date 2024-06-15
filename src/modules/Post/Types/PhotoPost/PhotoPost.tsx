import { FC } from "react";
import { PhotoPostPropTypes } from "./PhotoPostTypes";

const PhotoPost: FC<PhotoPostPropTypes> = ({ photo }) => {
  return (
    <div className="photo_container">
      <img src={photo?.source} alt={photo?.alt} />
    </div>
  );
};

export default PhotoPost;
