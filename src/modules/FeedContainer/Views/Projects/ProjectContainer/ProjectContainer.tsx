import { useProjects } from "@/hooks/useProjects/useProjects";
import Spinner from "@/modules/Spinners/Spinner";
import { showErrorNotification } from "@/utils/notificationManager";
import { FC, useEffect, useState } from "react";
import ProjectItem from "./ProjectItem/ProjectItem";
import Modal from "@/modules/Modal/Modal";
import ModalDetailProject from "./ProjectItem/ModalDetail/ModalDetailProject";

interface IProjectItem {
  _id: string;
}

const ProjectContainer: FC = () => {
  // Id del proyecto
  const [projectiD, setProjectID] = useState<string | undefined>();

  // Estado que maneja el modal
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Manejadores del model
  const handleModalOpen = (
    e: React.MouseEvent<HTMLButtonElement>,
    _id: string
  ) => {
    e.preventDefault();
    setIsOpen(true);
    setProjectID(_id);
  };

  const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setProjectID(undefined);
    setIsOpen(false);
  };

  // Lista de proyectos
  let [projectList, setProjectList] = useState<IProjectItem[]>([]);
  let [loadingProject, setLoadingProject] = useState<boolean>(true);

  // Obtencion de proyectos
  const { getprojectList } = useProjects();

  // Manejador del evento
  const handleGetProjectList = async () => {
    try {
      let response = await getprojectList();
      if (response.status === 200) {
        setProjectList(response.payload);
      }
    } catch (error: any) {
      showErrorNotification(error.message);
    } finally {
      setLoadingProject(false);
    }
  };

  // Efecto de carga de proyectos
  useEffect(() => {
    handleGetProjectList();
  }, []);

  return (
    <>
      {loadingProject ? (
        <div className="project-loading_view">
          <Spinner />
        </div>
      ) : (
        <ul className="projects-list_container">
          {projectList.map((item) => (
            <ProjectItem key={item._id} item={item} onOpen={handleModalOpen} />
          ))}
        </ul>
      )}
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        <ModalDetailProject onClose={handleModalClose} id={projectiD} />
      </Modal>
    </>
  );
};

export default ProjectContainer;
