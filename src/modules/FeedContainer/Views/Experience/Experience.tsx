import Spinner from "@/modules/Spinners/Spinner";
import { GetExperienceListService } from "@/services/ExperienceServices";
import { RenderLanguage } from "@/utils/RenderLanguage";
import { FC, useEffect, useState } from "react";
import ExperienceItem, {
  IExperienceItem,
} from "./ExperienceItem/ExperienceItem";
import PaperFlight from "@/assets/icon/PaperFlight";
import { showSuccessNotification } from "@/utils/notificationManager";

const Experience: FC = () => {
  const SectionTitle = {
    english: "Experiencia laboral",
    spanish: "Work experience",
  };

  // Estado que maneja la lista de academic background
  const [experienceList, setExperienceList] = useState<IExperienceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Funcion que obtiene la lista de academic background
  const getExperienceList = async () => {
    try {
      let response = await GetExperienceListService();
      if (response.status === 200) {
        setExperienceList(response.data);
      }
    } catch (error: any) {
      showSuccessNotification("Error interno, recarga la pagina");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getExperienceList();
  }, []);

  // Footer text
  const footerText = {
    english:
      "This space is open for new stories, challenges, and goals to be written.",
    spanish:
      "Este espacio está abierto para nuevas historias, desafíos y metas por escribir.",
  };
  return (
    <div className="experience_container">
      <h3 className="experience_title">
        <RenderLanguage input={SectionTitle} />
      </h3>
      <div className="experience_content">
        {loading ? (
          <div className="experience-loading_container">
            <Spinner />
          </div>
        ) : (
          <ul className="experience_list">
            {experienceList.map((item: IExperienceItem, index: number) => (
              <ExperienceItem key={index} item={item} />
            ))}
          </ul>
        )}
      </div>
      <div className="experience-footer-text_container">
        <p className="experience-footer_text">
          <RenderLanguage input={footerText} />
        </p>
        <PaperFlight />
      </div>
    </div>
  );
};

export default Experience;
