import Pinned from "@/assets/icon/Pinned";
import { RenderLanguage } from "@/utils/RenderLanguage";
import { FC } from "react";

const PinnedPost: FC = () => {
  const postTextLabel = {
    english: "Pinned post",
    spanish: "Post fijado",
  };
  return (
    <div className="pinned_container">
      <div className="pinned_content">
        <div className="pinned_icon">
          <Pinned />
        </div>
        <div className="pinned_text">
          <h4 className="p_text">
            <RenderLanguage input={postTextLabel} />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PinnedPost;
