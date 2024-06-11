import Education from "@/assets/skills/Education";
import { RenderLanguage } from "@/utils/RenderLanguage";
import { FC } from "react";

export interface IExperienceItem {
  _id: string;
  date: {
    english: string;
    spanish: string;
  };
  position: {
    english: string;
    spanish: string;
  };
  company: string;
  locationJob: string;
  responsabilities: [
    {
      english: string;
      spanish: string;
    }
  ];
}

interface IAcademicItemProps {
  item: IExperienceItem;
}

const ExperienceItem: FC<IAcademicItemProps> = ({ item }) => {
  // Titulo
  const responsabilitiesTitle = {
    english: "Responsabilities",
    spanish: "Responsabilidades",
  };
  return (
    <li className="ab-list_item">
      <div className="container_1">
        <div className="experience-date">
          <Education />
          <h4 className="experience-date_text">
            <RenderLanguage input={item.date} />
          </h4>
        </div>
      </div>
      <div className="container_2">
        <div className="experience-title_container">
          <h4 className="experience-text_title">
            <RenderLanguage input={item.position} />
          </h4>
        </div>
        <div className="experience-text_container">
          <h4 className="experience-text_item">{item.company}</h4>
        </div>
        <div className="experience-text_container">
          <h4 className="experience-text_item">{item.locationJob}</h4>
        </div>
        <div className="experience-res-title_container">
          <h3 className="experience-res_title">
            <RenderLanguage input={responsabilitiesTitle} />
          </h3>
        </div>
        <div className="experience-text_container">
          <ul className="experience-res_list">
            {item.responsabilities.map((item, key) => (
              <li className="experience-res-item" key={key}>
                <RenderLanguage input={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default ExperienceItem;
