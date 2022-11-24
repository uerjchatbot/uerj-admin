import { AxiosPromise } from "axios";

import { IClassroomData, ITeachingStaffData } from "@/models/teaching-staff";
import { api } from "../api";

export const TeachingStaffServices = {
  //? Home
  getHomeData(id: number): AxiosPromise<ITeachingStaffData> {
    return api.get(`question/${id}`);
  },

  updateHomeTitle(id: number, title: string): AxiosPromise<ITeachingStaffData> {
    return api.put(`question/${id}`, { title });
  },

  //? Classroom Children
  getClassroomChildrenId(id: number): AxiosPromise<ITeachingStaffData> {
    return api.get(`question/${id}`);
  },

  getClassroomChildrenData(id = 0): AxiosPromise<IClassroomData[]> {
    return api.get(`class/question/${id}`);
  },

  getTeachers(id: number): AxiosPromise<any> {
    return api.get(`teacher/question/${id}`);
  }
};
