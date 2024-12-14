import axios, { AxiosResponse } from "axios";
import Activity from "../contrasts/activity";
import Response from "../contrasts/base/response";
import { toast } from "material-react-toastify";
import { getBaseUrl } from "./base/base-service";

const baseUrl = `${getBaseUrl()}/activity`;

export const get = async (
  page: number,
  pageSize: number
): Promise<Activity[]> => {
  const response: AxiosResponse<Response<Activity[]>, any> = await axios.get(
    `${baseUrl}?page=${page}&pageSize=${pageSize}`
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

export const getById = async (id: string): Promise<Activity> => {
  const response: AxiosResponse<Response<Activity>, any> = await axios.get(
    `${baseUrl}/${id}`
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

export const getByActivityType = async (
  activityType: number
): Promise<Activity[]> => {
  const response: AxiosResponse<Response<Activity[]>> = await axios.get(
    `${baseUrl}/${activityType}`
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error("Error while loading activities");
};

export const create = async (activity: Activity): Promise<Activity> => {
  const response: AxiosResponse<Response<Activity>, any> = await axios.post(
    `${baseUrl}`,
    activity
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

export const update = async (activity: Activity): Promise<Activity> => {
  const response: AxiosResponse<Response<Activity>, any> = await axios.put(
    `${baseUrl}`,
    activity
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

export const remove = async (id: string) => {
  const response: any = await axios.delete(`${baseUrl}/${id}`);
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};
