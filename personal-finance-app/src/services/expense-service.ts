import axios, { AxiosResponse } from "axios";
import Expense from "../contrasts/expense";
import Response from "../contrasts/base/response";
import { toast } from "material-react-toastify";
import { getBaseUrl } from "./base/base-service";

const baseUrl = `${getBaseUrl()}/expense`;

const get = async (userId: string): Promise<Expense[]> => {
  const response: AxiosResponse<Response<Expense[]>> = await axios.get(
    `${baseUrl}/user/${userId}`
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

const getById = async (id: string): Promise<Expense[]> => {
  const response: AxiosResponse<Response<Expense[]>> = await axios.get(
    `${baseUrl}/${id}`
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

const create = async (expense: Expense): Promise<Expense[]> => {
  const response: AxiosResponse<Response<Expense[]>> = await axios.post(
    `${baseUrl}`,
    expense
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

const update = async (expense: Expense): Promise<Expense[]> => {
  const response: AxiosResponse<Response<Expense[]>> = await axios.put(
    `${baseUrl}`,
    expense
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

const remove = async (id: string) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

export default { get, getById, create, update, remove };
