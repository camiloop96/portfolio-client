/**
 * @file ProjectItem.tsx
 * @description This component represents an individual project item within a list. It handles displaying project details such as title, subtitle, description, tags, and associated actions like viewing more details or navigating to project links.
 */

import Deploy from "@/assets/icon/Deploy";
import Photo from "@/assets/icon/Photo";
import PrivateDeploy from "@/assets/icon/PrivateDeploy";
import See from "@/assets/icon/See";
import Github from "@/assets/social/Github";
import { RenderLanguage } from "@/utils/RenderLanguage";
import { FC } from "react";

interface IProjectItem {
  item: any;
  onOpen: (e: React.MouseEvent<HTMLButtonElement>, _id: string) => void;
  onOpenImages: (e: React.MouseEvent<HTMLButtonElement>, _id: string) => void;
}

/**
 * @component
 * @name ProjectItem
 * @description Functional component that renders a single project item with its details and action buttons.
 * @param {Object} item - The project item data.
 * @param {Function} onOpen - Handler to open the project detail modal.
 * @param {Function} onOpenImages - Handler to open the project images modal.
 * @returns {JSX.Element} A list item representing the project with details and action buttons.
 */
const ProjectItem: FC<IProjectItem> = ({ item, onOpen, onOpenImages }) => {
  return (
    <li className="projects_item">
      <div className="pjc_container">
        <div className="pjc-title_container">
          <h3 className="pjc_title">
            <RenderLanguage input={item.title} />
          </h3>
          <h4 className="pjc_subtitle">
            <RenderLanguage input={item.subtitle} />
          </h4>
        </div>
        <p className="pjc_description">
          <RenderLanguage input={item.description.short} />
        </p>
      </div>

      <div className="pjc-link-btn_container">
        <button
          className="pjc-btn_item"
          onClick={(e) => onOpenImages(e, item._id)}
        >
          <Photo />
        </button>
        <button className="pjc-btn_item" onClick={(e) => onOpen(e, item._id)}>
          <See />
        </button>
        <a
          className={`pjc-btn_item ${item.isPrivate && "isPrivate"}`}
          href={item.deployLink}
          target="_blank"
        >
          <Github />
        </a>
        <a
          className={`pjc-btn_item ${item.isPrivate && "isPrivate"}`}
          href={item.deployLink}
          target="_blank"
        >
          {item.isPrivate ? <PrivateDeploy /> : <Deploy />}
        </a>
      </div>
    </li>
  );
};

export default ProjectItem;
