import axios from "axios";
import Register from "../contrasts/dto/register";
import Login from "../contrasts/dto/login";

const baseUrl = "asd";

const login = async (model: Login) => {
  const response = await axios.post(`${baseUrl}/login`, model);
  return response.data;
};

const register = async (model: Register) => {
  const response = await axios.post(`${baseUrl}/register`, model);
  return response.data;
};

export default { login, register };
