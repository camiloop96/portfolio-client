import { FC } from "react";
import { ITitleContainerProps, ITitleItem } from "./TitleContainerTypes";
import TitleItem from "./TitleItem/TitleItem";
import Feed from "../Views/Feed/Feed";
import About from "../Views/About/About";
import Projects from "../Views/Projects/Projects";
import Guessbook from "../Views/Guessbook/Guestbook";
import { v4 as uuidv4 } from "uuid";
import Experience from "../Views/Experience/Experience";

export const 
renderViews = (titleSelected: string) => {
  switch (titleSelected) {
    case "Feed":
      return <Feed />;
    case "About":
      return <About />;
    case "Projects":
      return <Projects />;
    case "Experience":
      return <Experience />;
    case "Guessbook":
      return <Guessbook />;

    default:
      return <Feed />;
  }
};

const TitleContainer: FC<ITitleContainerProps> = ({
  setTitleSelected,
  titleSelected,
}) => {
  const titleList: ITitleItem[] = [
    { id: uuidv4(), title: "Feed" },
    { id: uuidv4(), title: "Projects" },
    { id: uuidv4(), title: "About" },
    { id: uuidv4(), title: "Experience" },
    { id: uuidv4(), title: "Guessbook" },
  ];

  // Manejador del evento seleccionador de titulo
  const handleSelectTitle = (
    e: React.MouseEvent<HTMLButtonElement>,
    title: string
  ) => {
    e.preventDefault();
    setTitleSelected(title);
  };

  return (
    <ul>
      {titleList.map((item) => (
        <TitleItem
          key={item.id}
          item={item}
          titleSelected={titleSelected}
          onSelect={handleSelectTitle}
        />
      ))}
    </ul>
  );
};

export default TitleContainer;
