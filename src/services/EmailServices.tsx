import axios from "axios";
import { SERVER } from "../../config";
import { FormValues } from "@/hooks/useForm";

const URL = SERVER;

let routes = {
  registerEmail: "/email/register",
};

export const RegisterEmailService = (form: FormValues) => {
  let URLQuery = `${URL}${routes.registerEmail}`;
  return axios.post(URLQuery, form);
};
