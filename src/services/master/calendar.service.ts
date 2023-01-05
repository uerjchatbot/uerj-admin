import { ICalendarTitleData } from "@/models/student";
import { AxiosPromise } from "axios";
import { api } from "../api";

export const CalendarServices = {
  //? Home
  getTitle(titleId: number): AxiosPromise<ICalendarTitleData> {
    return api.get(`question/${titleId}`);
  },

  updateLink(titleId: number, link: string): AxiosPromise<ICalendarTitleData> {
    console.log({ titleId, link });
    return api.put(`/calendar/question/${titleId}`, { link });
  }
};
