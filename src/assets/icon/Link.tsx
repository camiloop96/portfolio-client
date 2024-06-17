/**
 * @file Link.tsx
 * @description This file contains the Link component which renders an SVG icon representing a link.
 */

import { FC } from "react";

/**
 * Link Component
 *
 * A functional component that renders an SVG icon representing a link.
 *
 * @returns {JSX.Element} The SVG element representing a link icon.
 */
const Link: FC = () => {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="InsertLinkIcon"
    >
      <path
        className="st0"
        d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5"
      ></path>
    </svg>
  );
};

export default Link;
