import { AxiosPromise } from "axios";

import { api } from "../api";
import {
  IEditHomeDataResponse,
  IEventBoardData,
  IEventData,
  IEventsHomeData,
  IFirstStepEventData
} from "@/models/events";

export const EventServices = {
  //? Home
  getHomeData(id: number): AxiosPromise<IEventsHomeData> {
    return api.get(`question/${id}`);
  },

  getEventDateAndHour(id: number): AxiosPromise<any> {
    return api.get(`event/question/${id}`);
  },

  getEventData(id: number): AxiosPromise<IEventData | IFirstStepEventData> {
    return api.get(`event/question/${id}`);
  },

  getEventBoardData(id: number): AxiosPromise<IEventBoardData> {
    return api.get(`event/board/question/${id}`);
  },

  updateHomeData(id = 0, title: string): AxiosPromise<IEditHomeDataResponse> {
    return api.put(`question/${id}`, { title });
  },

  updateEventHourAndDate(id = 0, hour: string, date: string): AxiosPromise<IEditHomeDataResponse> {
    return api.put(`event/question/${id}`, { hour, date });
  }
};
