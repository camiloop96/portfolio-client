import { FC } from "react";
import { PostContentContainerPropTypes } from "./PostContentContainerTypes";

const PostContentContainer: FC<PostContentContainerPropTypes> = ({
  content,
}) => {
  return (
    <div className="post-content_container">
      <p className="post-text_content">{content}</p>
    </div>
  );
};

export default PostContentContainer;
