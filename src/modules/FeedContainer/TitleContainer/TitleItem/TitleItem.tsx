import { FC } from "react";
import { ITitleItemProps } from "../TitleContainerTypes";

const TitleItem: FC<ITitleItemProps> = ({ item, titleSelected, onSelect }) => {
  return (
    <li
      key={item.id}
      className={`title_item ${
        item.title === titleSelected ? "title_selected" : ""
      }`}
    >
      <button className="title_btn" onClick={(e) => onSelect(e, item.title)}>
        <h4>{item.title}</h4>
      </button>
    </li>
  );
};

export default TitleItem;
