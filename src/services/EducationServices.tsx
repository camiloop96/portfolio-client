import axios from "axios";
import { SERVER } from "../../config";

const URL = SERVER;

let routes = {
  getEducationList: "/education/list",
};

export const GetEducationListService = () => {
  let URLQuery = `${URL}${routes.getEducationList}`;
  return axios.get(URLQuery);
};
