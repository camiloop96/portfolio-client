import Close from "@/assets/icon/Close";
import { useProjects } from "@/hooks/useProjects/useProjects";
import Spinner from "@/modules/Spinners/Spinner";
import { showErrorNotification } from "@/utils/notificationManager";
import { FC, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";

interface IModalDetailProjectProps {
  onClose: (close: any) => void;
  id: string | undefined;
}

const ModalDetailProject: FC<IModalDetailProjectProps> = ({ onClose, id }) => {
  // Loading del componente
  const [loading, setLoading] = useState<boolean>(true);

  // Data del proyecto
  const [projectDetail, setProjectDetail] = useState<any | {}>({});

  console.log(projectDetail);

  // Hook de detalle de producto
  const { getProjectDetail } = useProjects();

  // Detalle de producto
  const getDetailProject = async (_id: string) => {
    try {
      let response = await getProjectDetail(id);
      if (response.status === 200) {
        setProjectDetail(response.payload);
      }
    } catch (error: any) {
      showErrorNotification(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Efecto de carga de datos
  useEffect(() => {
    if (id !== undefined) {
      getDetailProject(id);
    }
  }, [id]);

  // Titles
  const titleList = {
    project: {
      english: "Project name",
      spanish: "Nombre del proyecto",
    },
    client: {
      english: "Customer",
      spanish: "Cliente",
    },
    description: {
      english: "Description",
      spanish: "Descripción",
    },
    requirements: {
      english: "Requirements",
      spanish: "Requerimientos",
    },
    features: {
      english: "Features",
      spanish: "Características",
    },
    technologies: {
      english: "Technologies",
      spanish: "Tecnologías",
    },
    roles: {
      english: "Roles and responsabilities",
      spanish: "Roles y responsabilidades",
    },
    challenges: {
      english: "Challenges",
      spanish: "Desafíos",
    },
    licence: {
      english: "License",
      spanish: "Licencia",
    },
  };
  return (
    <div className="detail-project-modal_container">
      <div className="detail-project_content">
        <div className="close_btn" onClick={onClose}>
          <Close />
        </div>
        {loading ? (
          <div className="pjc-detail_loading">
            <Spinner />
          </div>
        ) : (
          <div className="project-detail_content">
            <ul className="project-detail_list">
              <ItemDetail
                title={titleList.project}
                data={projectDetail.title}
                type="text"
              />
              <ItemDetail
                title={titleList.client}
                data={projectDetail.subtitle}
                type="text"
              />
              <ItemDetail
                title={titleList.description}
                data={projectDetail.description.full}
                type="text"
              />
              <ItemDetail
                title={titleList.requirements}
                data={projectDetail.detail.requirements}
                type="text"
              />
              <ItemDetail
                title={titleList.features}
                data={projectDetail.detail.features}
                type="list"
              />
              <ItemDetail
                title={titleList.technologies}
                data={projectDetail.tagList}
                type="tag"
              />
              <ItemDetail
                title={titleList.roles}
                data={projectDetail.detail.roles}
                type="list"
              />
              <ItemDetail
                title={titleList.challenges}
                data={projectDetail.detail.challenges}
                type="list"
              />
              <ItemDetail
                title={titleList.licence}
                data={projectDetail.license}
                type="text"
              />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalDetailProject;
