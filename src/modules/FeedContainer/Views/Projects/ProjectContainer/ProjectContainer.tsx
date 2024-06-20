/**
 * @file ProjectContainer.tsx
 * @description This component manages the state and UI for displaying a list of projects. It includes fetching project data, handling loading states, and displaying project details in a modal.
 */

import { useProjects } from "@/hooks/useProjects/useProjects";
import Spinner from "@/modules/Spinners/Spinner";
import { showErrorNotification } from "@/utils/notificationManager";
import { FC, useEffect, useState } from "react";
import ProjectItem from "./ProjectItem/ProjectItem";
import Modal from "@/modules/Modal/Modal";
import ModalDetailProject from "./ProjectItem/ModalDetail/ModalDetailProject";
import ModalProjectImages from "./ProjectItem/ModalProjectImages/ModalProjectImages";
import { RenderLanguage } from "@/utils/RenderLanguage";

interface IProjectItem {
  _id: string;
}

/**
 * @component
 * @name ProjectContainer
 * @description Functional component that renders a list of projects and handles the state for displaying a loading spinner and a modal with project details.
 * @returns {JSX.Element} A container with a list of project items and a modal for project details.
 */

interface IProjectContainerProps {
  category: string;
  title: {
    english: string;
    spanish: string;
  };
}
const ProjectContainer: FC<IProjectContainerProps> = ({
  category,
  title,
}): JSX.Element => {
  // Id of the project
  const [projectiD, setProjectID] = useState<string | undefined>();

  // State that manages the modal
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Modal handlers
  const handleModalOpen = (
    e: React.MouseEvent<HTMLButtonElement>,
    _id: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(true);
    setProjectID(_id);
  };

  const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setProjectID(undefined);
    setIsOpen(false);
  };

  // List of projects
  const [projectList, setProjectList] = useState<IProjectItem[]>([]);
  const [loadingProject, setLoadingProject] = useState<boolean>(true);

  // Fetching projects
  const { getprojectList } = useProjects();

  // Event handler
  const handleGetProjectList = async (category: string) => {
    try {
      const response = await getprojectList(category);
      if (response.status === 200) {
        setProjectList(response.payload);
      }
    } catch (error: any) {
      showErrorNotification(error.message);
    } finally {
      setLoadingProject(false);
    }
  };

  // Effect for loading projects
  useEffect(() => {
    handleGetProjectList(category);
  }, []);

  // Modal images
  const [isOpenModalImages, setIsOpenModalImages] = useState<boolean>(false);

  const handleOpenProjectImages = (
    e: React.MouseEvent<HTMLButtonElement>,
    _id: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpenModalImages(true);
    setProjectID(_id);
  };

  const handleCloseModalImages = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setProjectID(undefined);
    setIsOpenModalImages(false);
  };
  return (
    <>
      {loadingProject ? (
        <div className="project-loading_view">
          <Spinner />
        </div>
      ) : (
        <>
          <h2 className="projects-label_title">
            <RenderLanguage input={title} />
          </h2>
          <ul className="projects-list_container">
            {projectList.map((item) => (
              <ProjectItem
                key={item._id}
                item={item}
                onOpen={handleModalOpen}
                onOpenImages={handleOpenProjectImages}
              />
            ))}
          </ul>
        </>
      )}
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        <ModalDetailProject onClose={handleModalClose} id={projectiD} />
      </Modal>
      <Modal isOpen={isOpenModalImages} onClose={handleCloseModalImages}>
        <ModalProjectImages id={projectiD} />
      </Modal>
    </>
  );
};

export default ProjectContainer;
