import { FC } from "react";

const Star: FC = () => {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="StarRateIcon"
    >
      <path
        className="st0"
        d="M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z"
      ></path>
    </svg>
  );
};

export default Star;
