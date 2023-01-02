import { AxiosPromise } from "axios";

import { api } from "../api";
import { ITutorialHomeData } from "@/models/students/tutorials";

export const TutorialServices = {
  getHomeData(id = 0): AxiosPromise<ITutorialHomeData> {
    return api.get(`question/${id}`);
  },

  updateData(id = 0, question?: string, title?: string): AxiosPromise<ITutorialHomeData> {
    return api.put(`question/${id}`, { question, title });
  },

  updateDataChildren(id = 0, title: string): AxiosPromise<any> {
    return api.put(`question/${id}`, { title });
  },

  updateCalendarData(id = 0, initial_date: string): AxiosPromise<any> {
    return api.put(`calendar/question/${id}`, { initial_date });
  }
};
