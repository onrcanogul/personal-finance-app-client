import axios, { AxiosResponse } from "axios";
import Activity from "../contrasts/activity";

const baseUrl = "asd";

const get = async (page: number, pageSize: number): Promise<Activity[]> => {
  const response: AxiosResponse<Activity[], any> = await axios.get(
    `${baseUrl}?page=${page}&pageSize=${pageSize}`
  );
  return response.data;
};

const getById = async (id: string): Promise<Activity> => {
  const response: AxiosResponse<Activity, any> = await axios.get(
    `${baseUrl}/${id}`
  );
  return response.data;
};

const create = async (activity: Activity): Promise<Activity> => {
  const response: AxiosResponse<Activity, any> = await axios.post(
    `${baseUrl}`,
    activity
  );
  return response.data;
};

const update = async (activity: Activity): Promise<Activity> => {
  const response: AxiosResponse<Activity, any> = await axios.put(
    `${baseUrl}`,
    activity
  );
  return response.data;
};

const remove = async (id: string) => {
  const response: any = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

export default { get, getById, create, update, remove };
