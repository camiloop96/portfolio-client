import axios from "axios";
import { SERVER } from "../../config";
import { FormValues } from "../hooks/useForm";

const URL = SERVER;

let routes = {
  createComment: "/guestbook/create",
  listComment: "/guestbook/list",
};

export const CreateCommentService = (form: FormValues) => {
  let URLQuery = `${URL}${routes.createComment}`;
  let response = axios.post(URLQuery, form);
  return response;
};

export const GetCommentListService = () => {
  let URLQuery = `${URL}${routes.listComment}`;
  let response = axios.get(URLQuery);
  return response;
};
