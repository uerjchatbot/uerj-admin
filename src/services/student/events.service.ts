import { AxiosPromise } from "axios";

import { api } from "../api";
import { IEditHomeDataResponse, IEventData, IEventsHomeData } from "@/models/events";

export const EventServices = {
  //? Home
  getHomeData(id: number): AxiosPromise<IEventsHomeData> {
    return api.get(`question/${id}`);
  },

  getEventDateAndHour(id: number): AxiosPromise<any> {
    return api.get(`event/question/${id}`);
  },

  getEventData(id: number): AxiosPromise<IEventData> {
    return api.get(`event/question/${id}`);
  },

  updateHomeData(id = 0, title: string): AxiosPromise<IEditHomeDataResponse> {
    return api.put(`question/${id}`, { title });
  }
};
