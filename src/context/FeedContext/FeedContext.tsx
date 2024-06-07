import { createContext } from "react";
import { FeedContextProps, FeedContextType } from "./FeedContextTypes";
import { GetFeedPostsService } from "@/services/FeedServices";

/**
 * FeedContext
 *
 * This context provides functionality related to fetching feed posts.
 */
export const FeedContext = createContext({} as FeedContextType);

/**
 * FeedContextProvider Component
 *
 * This component provides the FeedContext to its children, including functionality to fetch feed posts.
 *
 * @param {FeedContextProps} props - The children elements to be wrapped by the context provider.
 * @returns {JSX.Element} The context provider component wrapping the children.
 */
export const FeedContextProvider = ({
  children,
}: FeedContextProps): JSX.Element => {
  /**
   * Fetches the list of feed posts.
   *
   * @returns {Promise<{status: number, data: any}>} The response status and data from the feed posts service.
   */
  const getFeedList = async (): Promise<{ status: number; data: any }> => {
    try {
      const response = await GetFeedPostsService();
      return {
        status: response.status,
        data: response.data,
      };
    } catch (error) {
      throw error;
    }
  };

  // Context value object
  const contextValue: FeedContextType = {
    getFeedList,
  };

  // Render the context provider
  return (
    <FeedContext.Provider value={contextValue}>{children}</FeedContext.Provider>
  );
};
