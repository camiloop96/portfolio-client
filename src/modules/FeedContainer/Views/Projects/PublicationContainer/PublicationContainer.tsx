import { FC, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PublicationItem from "./PublicationItem/PublicationItem";
import { RenderLanguage } from "@/utils/RenderLanguage";

interface IPublication {
  _id: string;
  title: string;
  link: string;
  date: Date;
}

interface IPublicationContainerProps {
  type: string;
}

interface ITitle {
  english: string;
  spanish: string;
}

const PublicationContainer: FC<IPublicationContainerProps> = ({ type }) => {
  // Publication List
  const [publicationList, setPublicationList] = useState<
    IPublication[] | undefined
  >();

  // Titulo de la sección
  const [title, setTitle] = useState<ITitle>({
    english: "",
    spanish: "",
  });

  // List de codepen
  const codepenItemList = [
    {
      _id: uuidv4(),
      title: "Codigo de prueba",
      link: "/",
      date: new Date(Date.now()),
    },
  ];

  // List de codepen
  const publicationItemList: IPublication[] = [
    {
      _id: uuidv4(),
      title: "Codigo de prueba",
      link: "/",
      date: new Date(Date.now()),
    },
  ];
  useEffect(() => {
    if (type === "codepen") {
      setPublicationList(codepenItemList);
      setTitle({
        english: "Codepen",
        spanish: "Codepen",
      });
    } else if (type === "article") {
      setTitle({
        english: "Articles",
        spanish: "Artículos",
      });
      setPublicationList(publicationItemList);
    } else {
      return;
    }
  }, []);

  // Return del componente
  return (
    <>
      <h2 className="projects-label_title">
        <RenderLanguage input={title} />
      </h2>
      <ul className="publication_list">
        {publicationList &&
          publicationList.map((item: IPublication) => (
            <PublicationItem key={item._id} item={item} />
          ))}
      </ul>
    </>
  );
};

export default PublicationContainer;
