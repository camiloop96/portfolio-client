/**
 * @file PostContentContainer.tsx
 * @description This file contains the PostContentContainer component, which displays the main content of a post and optionally includes a link.
 */

import { FC } from "react";
import { PostContentContainerPropTypes } from "./PostContentContainerTypes";
import Link from "@/assets/icon/Link";

/**
 * PostContentContainer Component
 *
 * Displays the main content of a post and optionally includes a link.
 *
 * @param {PostContentContainerPropTypes} props - The properties for the component, including content and link.
 * @returns {JSX.Element} The rendered PostContentContainer component.
 */
const PostContentContainer: FC<PostContentContainerPropTypes> = ({
  content,
  link,
  hasLink,
}) => {
  const { to, title } = link || {};
  return (
    <div className="post-content_container">
      <p className="post-text_content">
        {content}
        {hasLink && (
          <span className="link-action">
            <a href={to} target="_blank">
              <Link />
              {title}
            </a>
          </span>
        )}
      </p>
    </div>
  );
};

export default PostContentContainer;
