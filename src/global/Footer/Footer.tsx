/**
 * @file Footer.tsx
 * @description This file contains the Footer component, which renders social media links and a copyright message.
 */

import Github from "@/assets/social/Github";
import Linkedin from "@/assets/social/Linkedin";
import Youtube from "@/assets/social/Youtube";
import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

/**
 * Footer Component
 *
 * Renders social media links and a copyright message.
 *
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer: FC = (): JSX.Element => {
  const { VITE_LINK_GITHUB, VITE_LINK_LINKEDIN, VITE_LINK_YOUTUBE } =
    import.meta.env;
  const socialLinks = [
    { _id: uuidv4(), icon: <Github />, to: VITE_LINK_GITHUB },
    { _id: uuidv4(), icon: <Linkedin />, to: VITE_LINK_LINKEDIN },
    { _id: uuidv4(), icon: <Youtube />, to: VITE_LINK_YOUTUBE },
  ];
  // Copyright message
  const copyrightMessage = `Camilo Polania 2024®`;

  return (
    <div className="social-links_container">
      <ul className="social-links_list">
        {socialLinks.map((item) => (
          <li className="social-links_item" key={item._id}>
            <a href={item.to} className="social-links_link" target="_blank">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
      <div className="copyright_container">
        <p className="copyright_text">{copyrightMessage}</p>
      </div>
    </div>
  );
};

export default Footer;
