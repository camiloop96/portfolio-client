import { RenderLanguage } from "@/utils/RenderLanguage";
import { FC } from "react";

interface IItemDetailProps {
  title: any;
  data: any;
  type: string;
}

const ItemDetail: FC<IItemDetailProps> = ({ title, data, type }) => {
  if (type === "text") {
    return (
      <li className="project-detail_item">
        <div className="title">
          <h3 className="pjc-title_text">
            <RenderLanguage input={title} />:
          </h3>
        </div>
        <div className="value">
          <h4 className="pjc-title_text">
            <RenderLanguage input={data} />
          </h4>
        </div>
      </li>
    );
  }
  if (type === "list") {
    return (
      <li className="project-detail_item list">
        <div className="title">
          <h3 className="pjc-title_text">
            <RenderLanguage input={title} />:
          </h3>
        </div>
        <div className="value">
          <ul className="value_list">
            {data.map((item: any) => (
              <li className="value_item">
                • <RenderLanguage input={item} />
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  }
  if (type === "tag") {
    return (
      <li className="project-detail_item tag">
        <div className="title">
          <h3 className="pjc-title_text">
            <RenderLanguage input={title} />:
          </h3>
        </div>
        <div className="value">
          <ul className="value_list">
            {data.map((item: any) => (
              <li className="value_item">{item}</li>
            ))}
          </ul>
        </div>
      </li>
    );
  }
};

export default ItemDetail;
