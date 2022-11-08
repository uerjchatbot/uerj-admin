import { IHomeData } from "@/models/home";
import { AxiosPromise } from "axios";
import { api } from "../api";

export const HomeServices = {
  getHomeData(): AxiosPromise<IHomeData> {
    return api.get("/question/1");
  }
};
