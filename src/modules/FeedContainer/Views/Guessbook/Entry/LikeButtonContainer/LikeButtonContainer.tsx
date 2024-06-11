import { FC, useState } from "react";
import { LikeButtonContainerPropTypes } from "./LikeButtonContainerTypes";
import HeartFilled from "../../../../../../assets/svg/HeartFilled";
import HeartStroked from "../../../../../../assets/svg/HeartStroked";
import Share from "../../../../../../assets/svg/Share";

const LikeButtonContainer: FC<LikeButtonContainerPropTypes> = ({ likes }) => {
  const [liked, setLiked] = useState<boolean>(false);

  const handleLikeButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLiked(!liked);
  };
  return (
    <div className="bottom-btn_container">
      <div className="like-btn_container">
        <button className="like_btn" onClick={handleLikeButton}>
          {liked ? <HeartFilled /> : <HeartStroked />}
        </button>
        <div className="like_label">{likes}</div>
      </div>
      <div className="share-btn_container">
        <button className="share_btn">
          <Share />
        </button>
      </div>
    </div>
  );
};

export default LikeButtonContainer;
