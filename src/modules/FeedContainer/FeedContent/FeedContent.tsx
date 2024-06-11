import { FC, ReactNode } from "react";

interface FeedContentPropTypes {
  children: ReactNode;
}

const FeedContent: FC<FeedContentPropTypes> = ({ children }) => {
  return <div className="feed_content">{children}</div>;
};

export default FeedContent;
