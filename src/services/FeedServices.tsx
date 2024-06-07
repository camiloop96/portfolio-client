import axios, { AxiosResponse } from "axios";
import { SERVER } from "../../config";

const URL = SERVER;

let routes = {
  getPostList: "/feed/post/list",
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
