import { IEgressDefaultData } from "@/models/egress";
import { AxiosPromise } from "axios";
import { api } from "../api";

export const EgressHomeServices = {
  getHomeData(): AxiosPromise<IEgressDefaultData> {
    return api.get("/question/5");
  },

  updateHomeData(title: string): AxiosPromise<IEgressDefaultData> {
    return api.put("/question/5", { Question: "Egresso", title });
  }
};
