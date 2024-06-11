import { AppContext } from "@/context/AppContext/AppContext";
import { formatDate } from "@/utils/formatDate";
import { FC, useContext } from "react";
import { Link } from "react-router-dom";

interface ICodePenItem {
  item: {
    title: string;
    link: string;
    date: Date;
  };
}

const PublicationItem: FC<ICodePenItem> = ({ item }) => {
  // Contexto
  const { language } = useContext(AppContext);

  // Return del componente
  return (
    <li className="publication_item">
      <h3 className="publication-item_title">
        <Link to={item.link}>{item.title}</Link>
      </h3>
      <h4 className="publication-item_subtitle">
        CODEPEN - {formatDate(item.date, language)}
      </h4>
    </li>
  );
};

export default PublicationItem;
