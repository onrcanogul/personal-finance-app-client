import axios from "axios";
import Register from "../contrasts/dtos/register";
import Login from "../contrasts/dtos/login";
import { toast } from "react-toastify";

const baseUrl = "asd";

const login = async (model: Login) => {
  const response = await axios.post(`${baseUrl}/login`, model);
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

const register = async (model: Register) => {
  const response = await axios.post(`${baseUrl}/register`, model);
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
  return response.data;
};

export default { login, register };
