import axios, { AxiosResponse } from "axios";
import Income from "../contrasts/income";
import Response from "../contrasts/base/response";
import { toast } from "material-react-toastify";
import { getBaseUrl } from "./base/base-service";

const baseUrl = `${getBaseUrl()}/income`;

export const get = async (userId: string): Promise<Income[]> => {
  const response: AxiosResponse<Response<Income[]>> = await axios.get(
    `${baseUrl}/user/${userId}`
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

export const getById = async (id: string): Promise<Income[]> => {
  const response: AxiosResponse<Response<Income[]>, any> = await axios.get(
    `${baseUrl}/${id}`
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

export const create = (expense: Partial<Income>): void => {
  axios
    .post(`${baseUrl}`, expense)
    .then((response) => {
      if (response.data.isSuccessful)
        toast.success("Income has created successfuly");
      else toast.error(response.data.errors[0]);
    })
    .catch((error) => {
      toast.error(error);
    });
};

export const update = (expense: Partial<Income>): void => {
  axios
    .put(`${baseUrl}`, expense)
    .then((response) => {
      if (response.data.isSuccessful)
        return toast.success("Income has updated successfuly");
      else toast.error(response.data.errors[0]);
    })
    .catch((error) => {
      toast.error(error);
    });
};

export const remove = (id: string): void => {
  axios
    .delete(`${baseUrl}/${id}`)
    .then((response) => {
      if (response.data.isSuccessful)
        toast.success("Income has deleted successfuly");
      else toast.error(response.data.errors[0]);
    })
    .catch((error) => {
      toast.error(error);
    });
};
