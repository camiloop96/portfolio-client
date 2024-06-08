import Github from "@/assets/social/Github";
import Linkedin from "@/assets/social/Linkedin";
import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

const LinksContainer: FC = () => {
  const { VITE_LINK_GITHUB, VITE_LINK_LINKEDIN } = import.meta.env || {};
  const links = [
    {
      id: uuidv4(),
      title: "github",
      icon: <Github />,
      to: VITE_LINK_GITHUB as string,
    },
    {
      id: uuidv4(),
      title: "linkedin",
      icon: <Linkedin />,
      to: VITE_LINK_LINKEDIN as string,
    },
  ];
  return (
    <div className="links_container">
      <ul>
        {links.map((item) => (
          <li key={item.id} className="item-link">
            <a href={item?.to} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksContainer;
