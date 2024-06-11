import Download from "@/assets/icon/Download";
import { RenderLanguage } from "@/utils/RenderLanguage";
import { FC } from "react";

const BtnsDownloadResources: FC = () => {
  const buttonTitles = {
    curriculum: {
      english: "Curriculum vitae",
      spanish: "Curriculum vitae",
    },
    coverLetter: {
      english: "Cover Letter",
      spanish: "Carta de presentación",
    },
  };
  return (
    <div className="btns-download-resources_container">
      <div className="btn-resources_container">
        <button className="resources_btn">
          <div className="resources-btn_icon">
            <Download />
          </div>
          <h3>
            <RenderLanguage input={buttonTitles.curriculum} />
          </h3>
        </button>
        <button className="resources_btn">
          <div className="resources-btn_icon">
            <Download />
          </div>
          <h3>
            <RenderLanguage input={buttonTitles.coverLetter} />
          </h3>
        </button>
      </div>
    </div>
  );
};

export default BtnsDownloadResources;
