/**
 * @file PostActionsComponent.tsx
 * @description This component renders the like button and, if applicable, the share button for a post.
 */

import { FC } from "react";
import { LikeButtonContainerPropTypes } from "./PostActionsContainerTypes";
import Share from "@/assets/icon/Share";
import { Link } from "react-router-dom";
import HeartStroked from "@/assets/icon/HeartStroked";

/**
 * PostActionsContainer Component
 *
 * @param {LikeButtonContainerPropTypes} props - The props for the PostActionsContainer component.
 * @returns {JSX.Element} The rendered PostActionsContainer component.
 */
const PostActionsContainer: FC<LikeButtonContainerPropTypes> = ({
  postId,
  type,
}) => {
  return (
    <div className="post-actions_container">
      <div
        className={`like-btn_container ${
          type === "detail" ? "lbc_detail" : ""
        }`}
      >
        <div className="like_btn">
          <HeartStroked />
        </div>
      </div>
      {type === "feed" && (
        <div className="share-btn_container">
          <Link className="share_btn" to={`/post/${postId}`}>
            <Share />
          </Link>
        </div>
      )}
    </div>
  );
};

export default PostActionsContainer;
