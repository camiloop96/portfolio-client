import Birthday from "@/assets/icon/Birthday";
import Job from "@/assets/icon/Job";
import { RenderLanguage } from "@/utils/RenderLanguage";
import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

const ContainerFlags: FC = () => {
  const flags = [
    {
      id: uuidv4(),
      title: {
        english: "Available",
        spanish: "Disponible",
      },
      icon: <Job />,
    },
    {
      id: uuidv4(),
      title: {
        english: "May 11th",
        spanish: "11 de mayo",
      },
      icon: <Birthday />,
    },
  ];
  return (
    <div className="flags_container">
      <ul>
        {flags.map((item) => (
          <li key={item.id} className="flags">
            <div className="icon">{item.icon}</div>
            <h3>
              <RenderLanguage input={item.title} />
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContainerFlags;
