import { FC } from "react";
import ProjectContainer from "./ProjectContainer/ProjectContainer";
// import PublicationContainer from "./PublicationContainer/PublicationContainer";
import { RenderLanguage } from "@/utils/RenderLanguage";

const Projects: FC = () => {
  const welcomeMessage = {
    english:
      "I enjoy new challenges, that's why in each project I leave a part of myself. Here is a list of projects I have completed 💪",
    spanish:
      "Distruto los nuevos retos, es por eso que en cada proyecto dejo una parte de mi. Este es un listado de proyectos que he realizado 💪",
  };

  // Titulo de proyectos
  const projectsTitle = {
    english: "Proyectos",
    spanish: "Projects",
  };

  return (
    <div className="projects-view_container">
      <h2 className="projects_subtitle">
        <RenderLanguage input={welcomeMessage} />
      </h2>
      <h2 className="projects-label_title">
        <RenderLanguage input={projectsTitle} />
      </h2>
      <ProjectContainer />
      {/* <PublicationContainer type="codepen" />
      <PublicationContainer type="article" /> */}
    </div>
  );
};

export default Projects;
