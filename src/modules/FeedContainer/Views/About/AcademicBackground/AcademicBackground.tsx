import { GetEducationListService } from "@/services/EducationServices";
import { FC, useEffect, useState } from "react";
import Academicitem, { IAcademicItem } from "./AcademicItem/Academicitem";
import { showSuccessNotification } from "@/utils/notificationManager";
import { RenderLanguage } from "@/utils/RenderLanguage";
import Spinner from "@/modules/Spinners/Spinner";

const AcademicBackground: FC = () => {
  const SectionTitle = {
    english: "Academic Background",
    spanish: "Formación académica",
  };

  // Estado que maneja la lista de academic background
  const [educationList, setEducationList] = useState<IAcademicItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Funcion que obtiene la lista de academic background
  const getEducationList = async () => {
    try {
      let response = await GetEducationListService();
      if (response.status === 200) {
        setEducationList(response.data);
      }
    } catch (error: any) {
      showSuccessNotification("Error interno, recarga la pagina");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEducationList();
  }, []);

  return (
    <div className="academic-background_container">
      <h3 className="academic-background_title">
        <RenderLanguage input={SectionTitle} />
      </h3>
      <div className="academic-background_content">
        {loading ? (
          <Spinner />
        ) : (
          <ul className="ab_list">
            {educationList.map((item: IAcademicItem) => (
              <Academicitem key={item._id} item={item} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AcademicBackground;
