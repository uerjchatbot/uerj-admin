import { AxiosPromise } from "axios";

import { api } from "../api";
import { ISelectiveProcessHomeData } from "@/models/students/selective_process";

export const SelectiveProcessServices = {
  getHomeData(id = 0): AxiosPromise<ISelectiveProcessHomeData> {
    return api.get(`question/${id}`);
  },

  updateQuestion(id = 0, question?: string, title?: string): AxiosPromise<any> {
    return api.put(`question/${id}`, { question, title });
  }
};
