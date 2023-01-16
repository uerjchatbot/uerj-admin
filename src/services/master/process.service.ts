import { IMasterDefaultData, IMasterUpdateData } from "@/models/master";
import { AxiosPromise } from "axios";
import { api } from "../api";

export const MasterProcessServices = {
  //? Home
  getData(id: number): AxiosPromise<IMasterDefaultData> {
    return api.get(`question/${id}`);
  },
  updateData(data: IMasterUpdateData): AxiosPromise<IMasterDefaultData> {
    return api.put(`question/${data.id}`, data);
  }
};
