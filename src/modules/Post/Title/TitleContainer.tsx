import { FC } from "react";
import { TitleContainerPropTypes } from "./TitleContainerTypes";

const TitleContainer: FC<TitleContainerPropTypes> = ({ hasTitle, title }) => {
  return hasTitle ? (
    <div className="post_title">
      <h2 className="p_title">{title}</h2>
    </div>
  ) : (
    <></>
  );
};

export default TitleContainer;
