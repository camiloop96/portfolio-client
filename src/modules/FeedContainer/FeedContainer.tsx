import { FC, useState } from "react";
import FeedContent from "./FeedContent/FeedContent";
import TitleContainer, { renderViews } from "./TitleContainer/TitleContainer";

const FeedContainer: FC = () => {
  // Estado que maneja la seleccion de la pestaña
  const [selectedTitle, setSelectedTitle] = useState<string>("Feed");

  return (
    <div className="feed_container">
      <div className="title_container">
        <TitleContainer
          setTitleSelected={setSelectedTitle}
          titleSelected={selectedTitle}
        />
      </div>
      <FeedContent>{renderViews(selectedTitle)}</FeedContent>
    </div>
  );
};

export default FeedContainer;
