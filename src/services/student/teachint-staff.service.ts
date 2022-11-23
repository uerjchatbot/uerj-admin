import { AxiosPromise } from "axios";

import { IClassroomData, ITeachingStaffData } from "@/models/teaching-staff";
import { api } from "../api";

export const TeachingStaffServices = {
  //? Home
  getHomeData(id: number): AxiosPromise<ITeachingStaffData> {
    return api.get(`question/${id}`);
  },

  //? Classroom Children
  getClassroomChildrenId(id: number): AxiosPromise<ITeachingStaffData> {
    return api.get(`question/${id}`);
  },

  getClassroomChildrenData(id = 0): AxiosPromise<IClassroomData[]> {
    return api.get(`class/question/${id}`);
  }
};
