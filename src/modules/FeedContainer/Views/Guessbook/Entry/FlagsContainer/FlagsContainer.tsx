import { FC } from "react";
import { FlagsContainerPropTypes } from "./FlagsContainerTypes";
import Flag from "./Flag/Flag";

const FlagsContainer: FC<FlagsContainerPropTypes> = ({
  hasFlags,
  moodFlags,
}) => {
  return hasFlags ? (
    <div className="post-flags_container">
      <ul>
        {moodFlags?.map((flag) => (
          <Flag key={flag._id} flag={flag} />
        ))}
      </ul>
    </div>
  ) : (
    <></>
  );
};

export default FlagsContainer;
