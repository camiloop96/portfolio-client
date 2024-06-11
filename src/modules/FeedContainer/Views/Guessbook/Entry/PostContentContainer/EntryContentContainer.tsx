import { FC, ReactNode } from "react";
import { PostContentContainerPropTypes } from "./EntryContentContainerTypes";
import { RenderLanguage } from "@/utils/RenderLanguage";

const PostContentContainer: FC<PostContentContainerPropTypes> = ({
  content,
  type,
}) => {
  let renderedContent: ReactNode;
  if (type === "form" && content) {
    renderedContent = <RenderLanguage input={content} />;
  } else {
    renderedContent = content as ReactNode;
  }

  return (
    <div className="entry-content_container">
      <p className="entry-text_content">{renderedContent}</p>
    </div>
  );
};

export default PostContentContainer;
