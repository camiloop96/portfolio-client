import { RenderLanguage } from "@/utils/RenderLanguage";
import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

const Languages: FC = () => {
  const SectionTitle = {
    english: "Languages",
    spanish: "Idiomas",
  };
  const languageList = [
    {
      _id: uuidv4(),
      title: {
        english: "Spanish",
        spanish: "Español",
      },
      value: {
        english: "Native",
        spanish: "Nativo",
      },
    },
    {
      _id: uuidv4(),
      title: {
        english: "English",
        spanish: "Inglés",
      },
      value: {
        english: "B1",
        spanish: "B1",
      },
    },
  ];
  return (
    <div className="languages_container">
      <h3 className="languages_title">
        <RenderLanguage input={SectionTitle} />
      </h3>
      <div className="languages_content">
        {languageList.map((item) => (
          <div key={item._id} className="language_item">
            <div className="language-item_title">
              <h4 className="l-item-title_text">
                <RenderLanguage input={item.title} />
              </h4>
            </div>
            <div className="language-item_label">
              <h4 className="l-item-title_text">
                <RenderLanguage input={item.value} />
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
