import Deploy from "@/assets/icon/Deploy";
import ImageSearch from "@/assets/icon/ImageSearch";
import PrivateDeploy from "@/assets/icon/PrivateDeploy";
import See from "@/assets/icon/See";
import Github from "@/assets/social/Github";
import { RenderLanguage } from "@/utils/RenderLanguage";
import { FC } from "react";

interface IProjectItem {
  item: any;
  onOpen: (e: React.MouseEvent<HTMLButtonElement>, _id: string) => void;
}

const ProjectItem: FC<IProjectItem> = ({ item, onOpen }) => {
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
      <div className="pjc_container">
        <div className="pjc_image_container">
          <div className="pjc-hover_image">
            <ImageSearch />
          </div>
          <img src={item.images[0].source} alt={item.images[0].alt} />
        </div>
        <div className="pjc-tag_container">
          <ul className="pjc-tag_list">
            {item.tagList.map((item: any, index: number) => (
              <li key={index} className="pjc-tag_item">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="pjc-link-btn_container">
          <button className="pjc-btn_item" onClick={(e) => onOpen(e, item._id)}>
            <See />
          </button>
          <button
            className={`pjc-btn_item ${item.isPrivate && "isPrivate"}`}
            disabled={item.isPrivate}
          >
            <Github />
          </button>
          <button className={`pjc-btn_item ${item.isPrivate && "isPrivate"}`}>
            {item.isPrivate ? <PrivateDeploy /> : <Deploy />}
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
