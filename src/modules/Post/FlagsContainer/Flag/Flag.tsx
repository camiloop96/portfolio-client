import { FC } from "react";
import { IFlagProps } from "./FlagTypes";

const Flag: FC<IFlagProps> = ({ flag }) => {
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
