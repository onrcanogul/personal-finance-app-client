import axios, { AxiosResponse } from "axios";
import Income from "../contrasts/income";
import Response from "../contrasts/base/response";
import { toast } from "react-toastify";

const baseUrl = "dsa";

const get = async (userId: string): Promise<Income[]> => {
  const response: AxiosResponse<Response<Income[]>> = await axios.get(
    `${baseUrl}/user/${userId}`
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

const getById = async (id: string): Promise<Income[]> => {
  const response: AxiosResponse<Response<Income[]>, any> = await axios.get(
    `${baseUrl}/${id}`
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

const create = async (expense: Income): Promise<Income[]> => {
  const response: AxiosResponse<Response<Income[]>, any> = await axios.post(
    `${baseUrl}`,
    expense
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

const update = async (expense: Income): Promise<Income[]> => {
  const response: AxiosResponse<Response<Income[]>, any> = await axios.put(
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
