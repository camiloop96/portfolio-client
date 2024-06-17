/**
 * @file PostDetail.tsx
 * @description This file contains the PostDetail component which serves as a container
 * for rendering detailed view of a specific post.
 */

import PostItem from "@/modules/PostDetail/PostItem/PostItem";

/**
 * PostDetail Component
 *
 * Renders the detailed view of a post inside a container.
 *
 * @returns {JSX.Element} The rendered PostDetail component.
 */
const PostDetail = (): JSX.Element => {
  return (
    <div className="post-detail_container">
      <PostItem />
    </div>
  );
};

export default PostDetail;
