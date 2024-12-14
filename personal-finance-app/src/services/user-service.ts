import axios from "axios";
import Register from "../contrasts/dtos/register";
import Login from "../contrasts/dtos/login";
import { toast } from "material-react-toastify";
import { getBaseUrl } from "./base/base-service";

const baseUrl = `${getBaseUrl()}/user`;

export const login = async (model: Partial<Login>) => {
  const response = await axios.post(`${baseUrl}/login`, model);
  if (response?.data?.isSuccessful) {
    localStorage.setItem("accessToken", response.data.data.accessToken);
    localStorage.setItem("refreshToken", response.data.data.refreshToken);
    toast.success("Login is successful");
    return true;
  } else {
    toast.error(response.data.errors[0]);
    return false;
  }
};

export const register = async (model: Partial<Register>) => {
  debugger;
  const response = await axios.post(`${baseUrl}/register`, model);
  if (response.data.isSuccessful) {
    toast.success("Registered Successfuly");
  } else {
    toast.error(response.data.errors[0]);
  }
  return response.data;
};

export const isAuthenticated = () => {
  return localStorage.getItem("accessToken") ? true : false;
};

export const isTokenExpired = () => {
  isAuthenticated();
  const token = localStorage.getItem("accessToken");
  if (!token) return true;
  const payload = JSON.parse(atob(token.split(".")[1]));
  const currentTime = Math.floor(Date.now() / 1000);
  return payload.exp < currentTime;
};

export const currentUsername = () => {
  const token = localStorage.getItem("accessToken");
  if (!token) return;
  const payload = JSON.parse(atob(token.split(".")[1]));
  return payload.UserName;
};

export const currentUserId = () => {
  const token = localStorage.getItem("accessToken");
  if (!token) return;
  const payload = JSON.parse(atob(token.split(".")[1]));
  return payload.Id;
};

export const refreshTokenLogin = () => {
  axios
    .post(
      `${baseUrl}/auth/refresh-token-login`,
      localStorage.getItem("refreshToken")
    )
    .then((response) => {
      localStorage.setItem("accessToken", response.data.data.accessToken);
    })
    .catch((error) => {
      console.log(error);
      logout();
    });
};
export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  toast.warning("You have authenticate before doing something.");
};
