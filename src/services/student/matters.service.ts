import { AxiosPromise } from "axios";
import { IMattersHomeData } from "@/models/matters";
import { api } from "../api";

const MattersService = {
  getHomeData(childrenId: number): AxiosPromise<IMattersHomeData> {
    return api.get(`question/${childrenId}`);
  }
};

export default MattersService;
