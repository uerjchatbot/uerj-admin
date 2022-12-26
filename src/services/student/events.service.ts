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

  getEventBoardData(id = 0): AxiosPromise<IEventBoardData> {
    return api.get(`event/board/question/${id}`);
  },

  updateHomeData(id = 0, title: string): AxiosPromise<IEditHomeDataResponse> {
    return api.put(`question/${id}`, { title });
  },

  updateEventHourAndDate(id = 0, hour: string, date: string): AxiosPromise<IEditHomeDataResponse> {
    return api.put(`event/question/${id}`, { hour, date });
  },

  updateEventBoard(
    id = 0,
    hour: string,
    date: string,
    link: string,
    name: string
  ): AxiosPromise<any> {
    return api.put(`event/question/${id}`, { hour, date, link, name });
  },

  addTeacherToEvent(id = 0, teacher: string): AxiosPromise<any> {
    return api.put(`event/board/question/${id}`, { teacher });
  },

  deleteTeacher(teacherId: number, id: number): AxiosPromise<any> {
    return api.delete(`event/board/${teacherId}/question/${id}`);
  }
};
