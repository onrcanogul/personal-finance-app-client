import axios, { AxiosResponse } from "axios";
import ReportType from "../contrasts/enums/report-type";
import Report from "../contrasts/report";
import Response from "../contrasts/base/response";
import { toast } from "react-toastify";

const baseUrl = "asd";

const get = async (userId: string, reportType: ReportType): Promise<Report> => {
  const response: AxiosResponse<Response<Report>> = await axios.get(
    `${baseUrl}/${userId}/${reportType}`
  );
  if (response.data.isSuccessful) return response.data.data;
  toast.error("Error while loading Report");
};

export default { get };
