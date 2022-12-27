import { AxiosPromise } from "axios";
import { api } from "../api";
import { ISchedulesHomeData, ISchedulesHoursData } from "@/models/students/schedules";

export const SchedulesServices = {
  getHomeData(id = 0): AxiosPromise<ISchedulesHomeData> {
    return api.get(`question/${id}`);
  },

  getSchedulesHours(id = 0): AxiosPromise<ISchedulesHoursData[]> {
    return api.get(`hour/question/${id}`);
  }
};
