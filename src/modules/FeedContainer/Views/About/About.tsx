import { FC } from "react";
import BtnsDownloadResources from "./BtnsDownloadResources/BtnsDownloadResources";
import { RenderLanguage } from "@/utils/RenderLanguage";
import SkillsContainer from "./SkillsContainer/SkillsContainer";
import AcademicBackground from "./AcademicBackground/AcademicBackground";
import Languages from "./Languages/Languages";

const About: FC = () => {
  let titleAbout = {
    english: (
      <>
        <h4 className="parragraph_title">
          Hi there!👋 Let me introduce myself, my name is Camilo.
        </h4>
        I'm a software developer with a focus on developing corporate solutions
        that allow companies to automate and optimize processes. I love working
        with technologies like React, Express, and MongoDB to create amazing
        applications, although I adapt to any technology the project requires. I
        like to be practical and resourceful, making the most of available
        technologies to speed up development times and maximize product quality.
        <br />
        <strong>I love learning constantly</strong>, so I dedicate a lot of my
        time to acquiring tools that allow me to improve every day.
        <br />
        <strong>Each project is a unique challenge</strong>, so I give 100% of
        my skills to deliver to the client a reliable and robust solution that
        meets their expectations.
      </>
    ),
    spanish: (
      <>
        <h4 className="parragraph_title">
          Hola!👋 Déjame presentarme, mi nombre es Camilo.
        </h4>
        Soy desarrollador de software con un enfoque en desarrollo de soluciones
        corporativas que le permita a las empresas automatizar y optimizar
        procesos. Me encanta trabajar con tecnologías como React, Express y
        MongoDB para crear aplicaciones increíbles aunque me adapto a cualquier
        tecnologia que el proyecto requiera. Me gusta ser práctico y recursivo,
        le saco todo el provecho a las tecnologias disponibles para acelerar
        tiempos de desarrollo y maximizar la calidad del producto.
        <br />
        <strong>Me encanta aprender constantemente</strong>, así que dedico gran
        parte de mi tiempo a adquirir herramientas que me permitan mejorar cada
        día.
        <br />
        <strong>Cada proyecto es un reto único</strong>, asi que doy 100% de mis
        habilidades para entregar al cliente una solución confiable y robusta
        que cumpla sus espectativas.
      </>
    ),
  };

  return (
    <div className="about_container">
      <BtnsDownloadResources />
      <div className="about-text_container">
        <p className="about-text_parragraph">
          <RenderLanguage input={titleAbout} />
        </p>
      </div>
      <SkillsContainer />
      <AcademicBackground />
      <Languages />
    </div>
  );
};

export default About;
