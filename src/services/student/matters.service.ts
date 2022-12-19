import { AxiosPromise } from "axios";
import { IMatterData, IMattersHomeData } from "@/models/matters";
import { api } from "../api";

const MattersService = {
  getHomeData(childrenId: number): AxiosPromise<IMattersHomeData> {
    return api.get(`question/${childrenId}`);
  },

  getMatterData(id: number): AxiosPromise<IMatterData[]> {
    return api.get(`matter/question/${id}`);
  },

  updateTitle(id = 0, title: string): AxiosPromise<IMattersHomeData> {
    return api.put(`question/${id}`, { title });
  }
};

export default MattersService;
