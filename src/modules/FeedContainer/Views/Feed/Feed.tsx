import { FeedContext } from "@/context/FeedContext/FeedContext";
import { FC, useContext, useEffect, useState } from "react";
import { PostTypes } from "./Post/PostTypes";
import Spinner from "@/modules/Spinners/Spinner";
import Post from "./Post/Post";

const Feed: FC = () => {
  // Importacion del contexto de posts
  let { getFeedList } = useContext(FeedContext);

  // Estado que maneja los posts
  const [posts, setPosts] = useState<PostTypes[]>();

  // Loading
  const [loading, setLoading] = useState<boolean>(true);
  // Obtencion de los posts
  const getPosts = async () => {
    try {
      setLoading(true);
      let response = await getFeedList();
      if (response.status === 200) {
        setPosts(response.data.payload);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Carga de posts
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="feed_container">
      {loading ? (
        <div className="feed_loading">
          <Spinner />
        </div>
      ) : (
        <ul>
          {posts?.map((post) => (
            <Post key={post._id} dataPost={post} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Feed;
