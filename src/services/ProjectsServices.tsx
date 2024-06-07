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
  list: "/projects/list", // Route to get the list of projects
  detail: "/projects/detail", // Route to get the detail of a project
};

// Service function to get the list of projects
export const GetProjectListService = async () => {
  try {
    // Make a GET request to the project list endpoint
    const response = await axiosInstance.get(projectRoutes.list);
    return response.data; // Return the data received from the API
  } catch (error) {
    console.error("Error fetching project list:", error); // Log any errors to the console
    throw error; // Throw the error for handling at a higher level
  }
};

// Service function to get the detail of a project by ID
export const GetProjectDetailService = async (_id: string | undefined) => {
  try {
    // Construct the URL for fetching project detail by ID
    let URLQuery = `${projectRoutes.detail}/${_id}`;
    // Make a GET request to the project detail endpoint
    const response = await axiosInstance.get(URLQuery);
    return response.data; // Return the data received from the API
  } catch (error) {
    console.error(`Error fetching project detail for ID ${_id}:`, error); // Log any errors to the console
    throw error; // Throw the error for handling at a higher level
  }
};
