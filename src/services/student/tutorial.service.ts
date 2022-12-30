import { AxiosPromise } from "axios";

import { api } from "../api";
import { ITutorialHomeData } from "@/models/students/tutorials";

export const TutorialServices = {
  getHomeData(id = 0): AxiosPromise<ITutorialHomeData> {
    return api.get(`question/${id}`);
  }
};
