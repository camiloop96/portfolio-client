import { FC } from "react";
import { TitleContainerPropTypes } from "./TitleContainerTypes";
import { RenderLanguage } from "@/utils/RenderLanguage";

const TitleContainer: FC<TitleContainerPropTypes> = ({ hasTitle, title }) => {
  return hasTitle && title ? (
    <div className="post_title">
      <h2 className="p_title">
        <RenderLanguage input={title} />
      </h2>
    </div>
  ) : (
    <></>
  );
};

export default TitleContainer;
