import { AxiosPromise } from "axios";
import { api } from "../api";

export const CalendarServices = {
  //? Home
  getTitle(): AxiosPromise<any> {
    return api.get("student/question?identifier=STUDENT_CALENDAR");
  },

  //? Period
  getPeriod(): AxiosPromise<any> {
    return api.get("student/calendar/question?identifier=CALENDAR_PERIOD");
  },

  //? Recess
  getRecess(): AxiosPromise<any> {
    return api.get("student/calendar/question?identifier=CALENDAR_RECESS");
  },

  //? Matters
  getMatters(): AxiosPromise<any> {
    return api.get("student/calendar/question?identifier=CALENDAR_MATTERS");
  },

  //? Vote
  getVote(): AxiosPromise<any> {
    return api.get("student/calendar/question?identifier=CALENDAR_VOTE");
  }
};
