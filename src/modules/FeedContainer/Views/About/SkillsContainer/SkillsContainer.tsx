import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import React from "../../../../../assets/skills/React";
import Nodejs from "../../../../../assets/skills/Nodejs";
import Javascript from "../../../../../assets/skills/Javascript";
import Typescript from "../../../../../assets/skills/Typescript";
import HTMLCSS from "../../../../../assets/skills/HTMLCSS";
import Python from "../../../../../assets/skills/Python";
import Git from "../../../../../assets/skills/Git";
import Ubuntu from "../../../../../assets/skills/Ubuntu";
import SkillContent from "./SkillsContent/SkillContent";
import SpringBoot from "../../../../../assets/skills/SpringBoot";
import Docker from "../../../../../assets/skills/Docker";
import Java from "../../../../../assets/skills/Java";
import Kubernetes from "../../../../../assets/skills/Kubernetes";
import MongoDB from "../../../../../assets/skills/MongoDB";
import SASS from "../../../../../assets/skills/SASS";
import Illustrator from "../../../../../assets/skills/Illustrator";
import Figma from "../../../../../assets/skills/Figma";
import Postman from "../../../../../assets/skills/Postman";

const SkillsContainer: FC = () => {
  const skillList = [
    {
      _id: uuidv4(),
      title: "Reactjs",
      icon: <React />,
      value: 4,
    },
    {
      _id: uuidv4(),
      icon: <SASS />,
      title: "SASS",
      value: 4,
    },
    {
      _id: uuidv4(),
      icon: <Nodejs />,
      title: "Nodejs",
      value: 4,
    },
    {
      _id: uuidv4(),
      icon: <MongoDB />,
      title: "MongoDB",
      value: 4,
    },
    {
      _id: uuidv4(),
      icon: <Javascript />,
      title: "Javascript",
      value: 4,
    },
    {
      _id: uuidv4(),
      icon: <Typescript />,
      title: "Typescript",
      value: 4,
    },
    {
      _id: uuidv4(),
      icon: <HTMLCSS />,
      title: "HTML/CSS",
      value: 4,
    },
    {
      _id: uuidv4(),
      icon: <Python />,
      title: "Python",
      value: 3,
    },
    {
      _id: uuidv4(),
      icon: <Git />,
      title: "Git",
      value: 3,
    },
  ];
  const skillToImproveList = [
    {
      _id: uuidv4(),
      title: "SpringBoot",
      icon: <SpringBoot />,
      value: 2,
    },
    {
      _id: uuidv4(),
      title: "Java",
      icon: <Java />,
      value: 2,
    },
    {
      _id: uuidv4(),
      title: "Docker",
      icon: <Docker />,
      value: 2,
    },
    {
      _id: uuidv4(),
      icon: <Ubuntu />,
      title: "Ubuntu",
      value: 2,
    },
  ];

  const skillToLearnList = [
    {
      _id: uuidv4(),
      title: "Kubernetes",
      icon: <Kubernetes />,
      value: 1,
    },
  ];

  const softwareToolsList = [
    {
      _id: uuidv4(),
      title: "Figma",
      icon: <Figma />,
      value: 4,
    },
    {
      _id: uuidv4(),
      title: "Illustrator",
      icon: <Illustrator />,
      value: 3,
    },
    {
      _id: uuidv4(),
      title: "Postman",
      icon: <Postman />,
      value: 3,
    },
  ];

  const skillsTitle = {
    english: "Skills",
    spanish: "Habilidades",
  };
  const skillsToImproveTitle = {
    english: "Skills I'd like to improve",
    spanish: "Habilidades que me gustaría mejorar",
  };
  const skillsToLearnTitle = {
    english: "Skills I'd like to learn",
    spanish: "Habilidades que me gustaría aprender",
  };
  const softwareToolsTitle = {
    english: "Software and tools that I use",
    spanish: "Software y herramientas que utilizo",
  };
  return (
    <>
      <SkillContent skillList={skillList} title={skillsTitle} />
      <SkillContent
        skillList={skillToImproveList}
        title={skillsToImproveTitle}
      />
      <SkillContent skillList={skillToLearnList} title={skillsToLearnTitle} />
      <SkillContent skillList={softwareToolsList} title={softwareToolsTitle} />
    </>
  );
};

export default SkillsContainer;
