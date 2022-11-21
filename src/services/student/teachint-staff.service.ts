import { AxiosPromise } from "axios";

import { ITeachingStaffData } from "@/models/teaching-staff";
import { api } from "../api";

export const TeachingStaffServices = {
  //? Home
  getHomeData(id: number): AxiosPromise<ITeachingStaffData> {
    return api.get(`question/${id}`);
  }
};
