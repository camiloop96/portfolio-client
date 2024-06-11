import { FC, useContext } from "react";
import { PostPropTypes } from "./PostTypes";
import { UserDataContext } from "@/context/UserDataContext/UserDataContext";
import { AppContext } from "@/context/AppContext/AppContext";
import PhotoPost from "./Types/PhotoPost/PhotoPost";
import PinnedPost from "./Pinned/PinnedPost";
import FlagsContainer from "./FlagsContainer/FlagsContainer";
import TitleContainer from "./Title/TitleContainer";
import PostContentContainer from "./PostContentContainer/PostContentContainer";
import LikeButtonContainer from "./LikeButtonContainer/LikeButtonContainer";
import { formatDate } from "@/utils/formatDate";
import Star from "@/assets/icon/Star";

const Post: FC<PostPropTypes> = ({ dataPost }) => {
  // Desestructuracion de los datos
  const { _id, isPinned, postData, likes, createdAt } = dataPost || {};
  const { type, photoLink, hasTitle, title, content, hasFlags, moodFlags } =
    postData || {};
  _id;
  // Carga de contextos
  const { profilePhoto } = useContext(UserDataContext);
  const { language } = useContext(AppContext);
  // Carga de distintos tipos de post
  const renderPostType = () => {
    switch (type) {
      case "image":
        return <PhotoPost photo={photoLink} />;

      case "text":
        return <></>;

      default:
        return <></>;
    }
  };

  return (
    <li className="post_container">
      {isPinned ? <PinnedPost /> : <></>}
      <div className="post_content">
        <div className="profile-image_container">
          <div className="image_container">
            <img
              src={profilePhoto?.thumbnail?.source}
              alt={profilePhoto?.thumbnail?.alt}
            />
          </div>
        </div>
        <div className="post-data_container">
          <div className="title_container">
            <div className="name_container">
              <h4 className="name_content">Camilo Polanía</h4>
            </div>
            <div className="separator_container">
              <div className="separator_icon">
                <Star />
              </div>
            </div>
            <div className="post-date_container">
              <h4 className="date_content">
                {formatDate(createdAt, language)}
              </h4>
            </div>
          </div>
          <FlagsContainer hasFlags={hasFlags} moodFlags={moodFlags} />
          <div className="post-data_content">
            <TitleContainer hasTitle={hasTitle} title={title} />
            <PostContentContainer content={content} />
            {renderPostType()}
          </div>
          <LikeButtonContainer likes={likes} />
        </div>
      </div>
    </li>
  );
};

export default Post;
