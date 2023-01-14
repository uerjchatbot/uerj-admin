import { ICalendarTitleData, IMasterUpdateData } from "@/models/master";
import { AxiosPromise } from "axios";
import { api } from "../api";

export const ContactServices = {
  //? Home
  getData(titleId: number): AxiosPromise<ICalendarTitleData> {
    return api.get(`question/${titleId}`);
  },

  update(titleId: number, data: IMasterUpdateData): AxiosPromise<ICalendarTitleData> {
    return api.put(`question/${titleId}`, data);
  }
};
