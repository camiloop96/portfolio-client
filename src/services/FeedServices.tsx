import axios, { AxiosResponse } from "axios";
import { SERVER } from "../../config";

const URL = SERVER;

let routes = {
  getPostList: "/feed/post/list",
  getPostDetail: "/feed/post/detail",
};

export interface GetFeedListServiceResponseTypes {
  status: number;
  data: any;
}

export const GetFeedPostsService = async (): Promise<AxiosResponse> => {
  let URLQuery = `${URL}${routes.getPostList}`;
  try {
    let response = await axios.get<GetFeedListServiceResponseTypes>(URLQuery);
    return response;
  } catch (error) {
    throw error;
  }
};

export const GetPostDetailService = async (id: string) => {
  let URLQuery = `${URL}${routes.getPostDetail}/${id}`;
  try {
    let response = await axios.get(URLQuery);
    return {
      status: response.status,
      payload: response.data,
    };
  } catch (error: any) {
    throw error;
  }
};
