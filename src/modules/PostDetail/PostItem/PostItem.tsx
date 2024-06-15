/**
 * @file PostItem.tsx
 * @description Component for displaying a single post item.
 */

import Post from "@/modules/Post/Post";
import { PostTypes } from "@/modules/Post/PostTypes";
import Spinner from "@/modules/Spinners/Spinner";
import { GetPostDetailService } from "@/services/FeedServices";
import { showErrorNotification } from "@/utils/notificationManager";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/**
 * PostItem Component
 *
 * Component to display a single post item.
 */
const PostItem: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [postDetail, setPostDetail] = useState<PostTypes | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  /**
   * Function to fetch post detail data from the server.
   * @param id The ID of the post to fetch.
   */

  const getPostDetail = async (id: string) => {
    setLoading(true);
    try {
      const postDetailResponse = await GetPostDetailService(id);
      if (postDetailResponse.status === 200) {
        setPostDetail(postDetailResponse.payload);
      }
    } catch (error: any) {
      showErrorNotification("Error al obtener post, recarga nuevamente");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostDetail(id!);
  }, [id]);

  return (
    <div className="post-item_container">
      {loading ? (
        <Spinner />
      ) : (
        <Post dataPost={postDetail!} typePost="detail" />
      )}
    </div>
  );
};

export default PostItem;
