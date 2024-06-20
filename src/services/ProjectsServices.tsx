// Import Axios library
import axios from "axios";

// Import server configuration from config file
import { SERVER } from "../../config";

// Base URL for API requests
const baseURL = SERVER;

// Create an Axios instance with the base URL
const axiosInstance = axios.create({ baseURL });

// Routes for project API endpoints
let projectRoutes = {
  list: "/projects/list",
  detail: "/projects/detail",
  images: "/projects/get/images",
};

// Service function to get the list of projects
export const GetProjectListService = async (category: string) => {
  try {
    // Make a GET request to the project list endpoint
    const response = await axiosInstance.get(
      `${projectRoutes.list}/${category}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching project list:", error);
    throw error;
  }
};

// Service function to get the detail of a project by ID
export const GetProjectDetailService = async (_id: string | undefined) => {
  try {
    let URLQuery = `${projectRoutes.detail}/${_id}`;
    const response = await axiosInstance.get(URLQuery);
    return response;
  } catch (error) {
    console.error(`Error fetching project detail for ID ${_id}:`, error);
    throw error;
  }
};

// Service function to get the detail of a project by ID
export const GetProjectImagesService = async (_id: string | undefined) => {
  try {
    let URLQuery = `${projectRoutes.images}/${_id}`;
    const response = await axiosInstance.get(URLQuery);
    return response;
  } catch (error) {
    console.error(`Error fetching project detail for ID ${_id}:`, error);
    throw error;
  }
};
