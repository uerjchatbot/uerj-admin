import { ICalendarTitleData, IDoctorUpdateData } from "@/models/doctor";
import { AxiosPromise } from "axios";
import { api } from "../api";

export const CalendarServices = {
  //? Home
  getTitle(titleId: number): AxiosPromise<ICalendarTitleData> {
    return api.get(`question/${titleId}`);
  },

  updateLink(titleId: number, data: IDoctorUpdateData[]): AxiosPromise<ICalendarTitleData> {
    return api.put(`/calendar/question/${titleId}`, data);
  }
};
