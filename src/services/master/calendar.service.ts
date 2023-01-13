import { ICalendarTitleData, IMasterUpdateData } from "@/models/master";
import { AxiosPromise } from "axios";
import { api } from "../api";

export const CalendarServices = {
  //? Home
  getTitle(titleId: number): AxiosPromise<ICalendarTitleData> {
    return api.get(`question/${titleId}`);
  },

  updateLink(titleId: number, data: IMasterUpdateData[]): AxiosPromise<ICalendarTitleData> {
    return api.put(`/calendar/question/${titleId}`, data);
  }
};
