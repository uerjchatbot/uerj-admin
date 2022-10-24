import { AxiosPromise } from "axios";
import { api } from "../api";

export const StudentServices = {
  getHomeData(): AxiosPromise<any> {
    return api.get("/student/question");
  }
};
