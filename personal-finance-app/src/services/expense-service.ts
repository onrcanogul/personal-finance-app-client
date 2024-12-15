import axios, { AxiosResponse } from "axios";
import Expense from "../contrasts/expense";
import Response from "../contrasts/base/response";
import { toast } from "material-react-toastify";
import { getBaseUrl } from "./base/base-service";

const baseUrl = `${getBaseUrl()}/expense`;

export const get = async (userId: string): Promise<Expense[]> => {
  const response: AxiosResponse<Response<Expense[]>> = await axios.get(
    `${baseUrl}/user/${userId}`
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

export const getById = async (id: string): Promise<Expense[]> => {
  const response: AxiosResponse<Response<Expense[]>> = await axios.get(
    `${baseUrl}/${id}`
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

export const create = async (expense: Partial<Expense>): Promise<void> => {
  await axios
    .post(`${baseUrl}`, expense)
    .then((response) => {
      if (response.data.isSuccessful)
        toast.success("Expense has created successfuly");
      else toast.error(response.data.errors[0]);
    })
    .catch((error) => {
      toast.error(error);
    });
};

export const update = async (expense: Partial<Expense>): Promise<void> => {
  await axios
    .put(`${baseUrl}`, expense)
    .then((response) => {
      if (response.data.isSuccessful)
        toast.success("Expense has updated successfuly");
      else toast.error(response.data.errors[0]);
    })
    .catch((error) => {
      toast.error(error);
    });
};

export const remove = async (id: string) => {
  await axios
    .delete(`${baseUrl}/${id}`)
    .then((response) => {
      if (response.data.isSuccessful)
        toast.success("Expense has deleted successfuly");
      else toast.error(response.data.errors[0]);
    })
    .catch((error) => {
      toast.error(error);
    });
};
