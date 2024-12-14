import axios, { AxiosResponse } from "axios";
import Activity from "../contrasts/activity";
import Response from "../contrasts/base/response";
import { toast } from "material-react-toastify";
import { getBaseUrl } from "./base/base-service";

const baseUrl = `${getBaseUrl()}/activity`;

const get = async (page: number, pageSize: number): Promise<Activity[]> => {
  const response: AxiosResponse<Response<Activity[]>, any> = await axios.get(
    `${baseUrl}?page=${page}&pageSize=${pageSize}`
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

const getById = async (id: string): Promise<Activity> => {
  const response: AxiosResponse<Response<Activity>, any> = await axios.get(
    `${baseUrl}/${id}`
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

const create = async (activity: Activity): Promise<Activity> => {
  const response: AxiosResponse<Response<Activity>, any> = await axios.post(
    `${baseUrl}`,
    activity
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

const update = async (activity: Activity): Promise<Activity> => {
  const response: AxiosResponse<Response<Activity>, any> = await axios.put(
    `${baseUrl}`,
    activity
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

const remove = async (id: string) => {
  const response: any = await axios.delete(`${baseUrl}/${id}`);
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

export default { get, getById, create, update, remove };
