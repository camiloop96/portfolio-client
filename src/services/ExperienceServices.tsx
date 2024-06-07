import axios from "axios";
import { SERVER } from "../../config";

const URL = SERVER;

let routes = {
  getExperienceList: "/experience/list",
};

export const GetExperienceListService = () => {
  let URLQuery = `${URL}${routes.getExperienceList}`;
  return axios.get(URLQuery);
};
