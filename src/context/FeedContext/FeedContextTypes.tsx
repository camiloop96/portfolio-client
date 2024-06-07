import { GetFeedListServiceResponseTypes } from "@/services/FeedServices";
import { ReactNode } from "react";

/**
 * IGetFeedList Interface
 *
 * This interface defines the structure of the response object returned by the getFeedList function.
 *
 * @property {number} status - The HTTP status code of the response.
 * @property {object} data - The data object containing the payload.
 * @property {string[]} data.payload - An array of strings representing the payload data.
 */
export interface IGetFeedList {
  status: number;
  data: {
    payload: string[];
  };
}

/**
 * FeedContextType Interface
 *
 * This interface defines the structure of the FeedContext object.
 *
 * @property {() => Promise<GetFeedListServiceResponseTypes>} getFeedList - Function to fetch the list of feed posts.
 */
export interface FeedContextType {
  getFeedList: () => Promise<GetFeedListServiceResponseTypes>;
}

/**
 * FeedContextProps Interface
 *
 * This interface defines the structure of the props expected by the FeedContextProvider component.
 *
 * @property {ReactNode} children - The children elements to be wrapped by the context provider.
 */
export interface FeedContextProps {
  children: ReactNode;
}
