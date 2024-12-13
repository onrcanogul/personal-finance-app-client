import axios, { AxiosResponse } from "axios";
import Response from "../contrasts/base/response";
import Budget from "../contrasts/budget";
import { toast } from "react-toastify";

const baseUrl = "asd";

const get = async (userId: string): Promise<Budget> => {
  const response: AxiosResponse<Response<Budget>> = await axios.get(
    `${baseUrl}/${userId}`
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error(response.data.errors[0]);
};

export default { get };
