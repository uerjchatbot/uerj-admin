import { ICalendarTitleData, ICalendarChildrenData } from "@/models/student";
import { AxiosPromise } from "axios";
import { api } from "../api";

export const CalendarServices = {
  //? Home
  getTitle(questionId: number): AxiosPromise<ICalendarTitleData> {
    return api.get(`question/${questionId}`);
  },

  updateTitle(questionId: number, title: string): AxiosPromise<ICalendarTitleData> {
    return api.put(`question/${questionId}`, { title });
  },

  getCalendarChildrenData(childrenId: number): AxiosPromise<ICalendarChildrenData> {
    return api.get(`question/${childrenId}`);
  }
};
