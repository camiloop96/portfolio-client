/**
 * @file Post.tsx
 * @description This file contains the Post component and its subcomponents,
 * which are responsible for rendering individual posts in the application,
 * including different post types, profile images, headers, content, and actions.
 */

import { FC, useContext } from "react";
import { PostPropTypes } from "./PostTypes";
import { UserDataContext } from "@/context/UserDataContext/UserDataContext";
import { AppContext } from "@/context/AppContext/AppContext";
import PhotoPost from "./Types/PhotoPost/PhotoPost";
import PinnedPost from "./Pinned/PinnedPost";
import FlagsContainer from "./FlagsContainer/FlagsContainer";
import TitleContainer from "./Title/TitleContainer";
import PostContentContainer from "./PostContentContainer/PostContentContainer";
import { formatDate } from "@/utils/formatDate";
import Star from "@/assets/icon/Star";
import PostActionsContainer from "./LikeButtonContainer/PostActionsContainer";
import { PhotoPostTypes } from "./Types/PhotoPost/PhotoPostTypes";

/**
 * Class names for the different parts of the Post component.
 */
const classNames = {
  postContainer: (typePost: string) =>
    `post_container ${
      typePost === "detail"
        ? "post_detail"
        : typePost === "feed"
        ? "post_feed"
        : ""
    }`,
  profileImageContainer: "profile-image_container",
  imageContainer: "image_container",
  postContent: "post_content",
  postDataContainer: "post-data_container",
  titleContainer: "title_container",
  nameContainer: "name_container",
  nameContent: "name_content",
  separatorContainer: "separator_container",
  separatorIcon: "separator_icon",
  postDateContainer: "post-date_container",
  dateContent: "date_content",
};

/**
 * Renders the appropriate post type.
 *
 * @param {string} type - The type of the post (e.g., "image", "text").
 * @param {PhotoPostTypes | undefined} photoLink - The photo link for image posts.
 * @returns {JSX.Element | null} The rendered post type component.
 */
const renderPostType = (
  type: string,
  photoLink: PhotoPostTypes | undefined
) => {
  switch (type) {
    case "image":
      return <PhotoPost photo={photoLink} />;
    case "text":
      return null;
    default:
      return null;
  }
};

/**
 * ProfileImage Component
 *
 * Renders the profile image for the post.
 *
 * @param {{ profilePhoto: any }} props - The props for the ProfileImage component.
 * @returns {JSX.Element} The rendered ProfileImage component.
 */
const ProfileImage: FC<{ profilePhoto: any }> = ({ profilePhoto }) => (
  <div className={classNames.profileImageContainer}>
    <div className={classNames.imageContainer}>
      <img
        src={profilePhoto?.thumbnail?.source}
        alt={profilePhoto?.thumbnail?.alt}
      />
    </div>
  </div>
);

/**
 * PostHeader Component
 *
 * Renders the header for the post.
 *
 * @param {{ createdAt: Date; language: string }} props - The props for the PostHeader component.
 * @returns {JSX.Element} The rendered PostHeader component.
 */
const PostHeader: FC<{ createdAt: Date; language: string }> = ({
  createdAt,
  language,
}) => (
  <div className={classNames.titleContainer}>
    <div className={classNames.nameContainer}>
      <h4 className={classNames.nameContent}>Camilo Polanía</h4>
    </div>
    <div className={classNames.separatorContainer}>
      <div className={classNames.separatorIcon}>
        <Star />
      </div>
    </div>
    <div className={classNames.postDateContainer}>
      <h4 className={classNames.dateContent}>
        {formatDate(createdAt, language)}
      </h4>
    </div>
  </div>
);

/**
 * Post Component
 *
 * The main component for rendering a post.
 *
 * @param {PostPropTypes} props - The props for the Post component.
 * @returns {JSX.Element} The rendered Post component.
 */
const Post: FC<PostPropTypes> = ({
  dataPost,
  typePost,
}: PostPropTypes): JSX.Element => {
  const { _id, isPinned, postData, likes, createdAt } = dataPost || {};
  const { type, photoLink, hasTitle, title, content, hasFlags, moodFlags } =
    postData || {};

  const { profilePhoto } = useContext(UserDataContext);
  const { language } = useContext(AppContext);

  return (
    <li className={classNames.postContainer(typePost)}>
      {typePost === "feed" && isPinned && <PinnedPost />}
      <div className={classNames.postContent}>
        <ProfileImage profilePhoto={profilePhoto} />
        <div className={classNames.postDataContainer}>
          <PostHeader createdAt={createdAt} language={language} />
          <FlagsContainer hasFlags={hasFlags} moodFlags={moodFlags} />
          <div className="post-data_content">
            <TitleContainer hasTitle={hasTitle} title={title} />
            <PostContentContainer content={content} />
            {renderPostType(type, photoLink)}
          </div>
          <PostActionsContainer likes={likes} postId={_id} type={typePost} />
        </div>
      </div>
    </li>
  );
};

export default Post;
