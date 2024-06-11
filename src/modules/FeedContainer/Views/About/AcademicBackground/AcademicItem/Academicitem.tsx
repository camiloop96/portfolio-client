import Education from "@/assets/skills/Education";
import { RenderLanguage } from "@/utils/RenderLanguage";
import { FC } from "react";

export interface IAcademicItem {
  _id: string;
  date: {
    english: string;
    spanish: string;
  };
  career: {
    english: string;
    spanish: string;
  };
  institute: string;
  locationCareer: string;
  description: {
    english: string;
    spanish: string;
  };
}

interface IAcademicItemProps {
  item: IAcademicItem;
}

const Academicitem: FC<IAcademicItemProps> = ({ item }) => {
  return (
    <li className="ab-list_item">
      <div className="container_1">
        <div className="ab-date">
          <Education />
          <h4 className="ab-date_text">
            <RenderLanguage input={item.date} />
          </h4>
        </div>
      </div>
      <div className="container_2">
        <div className="ab-title_container">
          <h4 className="ab-text_title">
            <RenderLanguage input={item.career} />
          </h4>
        </div>
        <div className="ab-text_container">
          <h4 className="ab-text_item">{item.institute}</h4>
        </div>
        <div className="ab-text_container">
          <h4 className="ab-text_item">{item.locationCareer}</h4>
        </div>
        <div className="ab-text_container">
          <h4 className="ab-text_item">
            <RenderLanguage input={item.description} />
          </h4>
        </div>
      </div>
    </li>
  );
};

export default Academicitem;
