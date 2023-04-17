import { IHomeData } from "@/models/home";
import { formatTextForWhatsApp } from "@/utils/formarter";
import { AxiosPromise } from "axios";
import { api } from "../api";

export const HomeServices = {
  getHomeData(): AxiosPromise<IHomeData> {
    return api.get("/question/1");
  },

  updateHomeData(title: string): AxiosPromise<IHomeData> {
    return api.put("/question/1", { title: formatTextForWhatsApp(title) });
  }
};
