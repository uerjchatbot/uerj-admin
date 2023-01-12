import { IMasterDefaultData } from "@/models/master";
import { AxiosPromise } from "axios";
import { api } from "../api";

export const MasterServices = {
  //? Home
  getHomeData(): AxiosPromise<IMasterDefaultData> {
    return api.get("question/4");
  },
  updateHomeTitle(title: string): AxiosPromise<IMasterDefaultData> {
    return api.put("question/4", { question: "Candidato Mestrado", title });
  }
};
