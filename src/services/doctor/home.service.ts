import { IDoctorDefaultData } from "@/models/doctor";
import { AxiosPromise } from "axios";
import { api } from "../api";

export const DoctorServices = {
  //? Home
  getHomeData(): AxiosPromise<IDoctorDefaultData> {
    return api.get("question/3");
  },
  updateHomeTitle(title: string): AxiosPromise<IDoctorDefaultData> {
    return api.put("question/3", { question: "Candidato Doutorado", title });
  }
};
