import { FC, useContext } from "react";
import { EntryPropTypes } from "./EntryTypes";
import { AppContext } from "@/context/AppContext/AppContext";
import FormContainer from "./FormContainer/FormContainer";
import { UserDataContext } from "@/context/UserDataContext/UserDataContext";
import PinnedPost from "./Pinned/PinnedPost";
import AvatarImage from "./AvatarImage/AvatarImage";
import { formatDate } from "@/utils/formatDate";
import FlagsContainer from "./FlagsContainer/FlagsContainer";
import TitleContainer from "./Title/TitleContainer";
import PostContentContainer from "./PostContentContainer/EntryContentContainer";
import Star from "@/assets/icon/Star";

const Entry: FC<EntryPropTypes> = ({ dataPost }) => {
  // Destructing of data
  const { _id, pinned, postData, createdAt, guest } = dataPost || {};
  const { type, hasTitle, title, message, hasFlags, moodFlags } =
    postData || {};
  _id;

  // OGet language from context
  const { language } = useContext(AppContext);

  // Charge of posts
  const renderPostType = () => {
    switch (type) {
      case "form":
        return <FormContainer />;

      case "entry":
        return <></>;
      default:
        return <></>;
    }
  };
  // Get userName
  const { userName } = useContext(UserDataContext);

  return (
    <li className="entry_container">
      {pinned ? <PinnedPost /> : <></>}
      <div className="entry_content">
        <div className="entry-image_container">
          <AvatarImage guest={guest} />
        </div>
        <div className="entry-data_container">
          <div className="title_container">
            <div className="name_container">
              <h4 className="name_content">
                {guest?.isGuest === false ? userName : guest?.name}
              </h4>
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
          <div className="entry-data_content">
            <TitleContainer hasTitle={hasTitle} title={title} />
            <PostContentContainer content={message} type={type} />
            {renderPostType()}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Entry;
