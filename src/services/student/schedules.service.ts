import { AxiosPromise } from "axios";
import { api } from "../api";
import { ISchedulesHomeData, ISchedulesHoursData } from "@/models/students/schedules";

export const SchedulesServices = {
  getHomeData(id = 0): AxiosPromise<ISchedulesHomeData> {
    return api.get(`question/${id}`);
  },

  getSchedulesHours(id = 0): AxiosPromise<ISchedulesHoursData[]> {
    return api.get(`hour/question/${id}`);
  },

  createHour(
    id = 0,
    group: string,
    mastermind: string,
    day_week: string,
    hour: string
  ): AxiosPromise<ISchedulesHoursData> {
    return api.put(`hour/question/${id}`, {
      hour,
      group,
      mastermind,
      day_week
    });
  },

  updateTitle(id = 0, title: string): AxiosPromise<ISchedulesHomeData> {
    return api.put(`question/${id}`, { title });
  },

  updateHourData(
    id = 0,
    hourId = 0,
    group: string,
    mastermind: string,
    day_week: string,
    hour: string
  ): AxiosPromise<ISchedulesHomeData> {
    return api.put(`/hour/${hourId}/question/${id}`, { hour, group, mastermind, day_week });
  },

  deleteHour(hourId = 0, id = 0): AxiosPromise<void> {
    return api.delete(`hour/${hourId}/question/${id}`);
  }
};
