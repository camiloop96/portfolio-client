/**
 * @file Flag.tsx
 * @description This file contains the Flag component which is responsible for rendering
 * individual flags with their respective emoji, title, and color in a post.
 */

import { FC } from "react";
import { IFlagProps } from "./FlagTypes";

/**
 * Flag Component
 *
 * Renders a flag with its emoji and title.
 *
 * @param {IFlagProps} props - The props for the Flag component.
 * @returns {JSX.Element} The rendered Flag component.
 */
const Flag: FC<IFlagProps> = ({ flag }: IFlagProps): JSX.Element => {
  return (
    <li key={flag?._id} className="post-flag_content">
      <div className="emoji_container">{flag?.emoji}</div>
      <div className="flag-title-container">
        <h5 className="flag_title" style={{ color: flag.color }}>
          {flag?.flagTitle}
        </h5>
      </div>
    </li>
  );
};

export default Flag;
