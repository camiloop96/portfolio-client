import { RenderLanguage } from "@/utils/RenderLanguage";
import { FC } from "react";
import CardSkill from "./CardSkill/CardSkill";

interface ISkillList {
  icon: JSX.Element;
  title: string;
  value: number;
}

interface ISkillContent {
  title: {
    english: string;
    spanish: string;
  };
  skillList: ISkillList[];
}

const SkillContent: FC<ISkillContent> = ({ title, skillList }) => {
  return (
    <div className="skills_container">
      <div className="skills-content_title">
        <h3 className="skills-title_text">
          <RenderLanguage input={title} />
        </h3>
      </div>
      <div className="skills_content">
        <div className="skill_list">
          {skillList.map((item, index) => (
            <CardSkill
              key={index}
              icon={item.icon}
              title={item.title}
              value={item.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillContent;
