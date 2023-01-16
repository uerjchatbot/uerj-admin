import { IDoctorDefaultData, IDoctorUpdateData } from "@/models/doctor";
import { AxiosPromise } from "axios";
import { api } from "../api";

export const DoctorProcessServices = {
  //? Home
  getData(id: number): AxiosPromise<IDoctorDefaultData> {
    return api.get(`question/${id}`);
  },
  updateData(data: IDoctorUpdateData): AxiosPromise<IDoctorDefaultData> {
    return api.put(`question/${data.id}`, data);
  }
};
