import { IStudentHomeData } from "@/models/student";
import { AxiosPromise } from "axios";
import { api } from "../api";

export const MasterServices = {
  //? Home
  getHomeData(): AxiosPromise<IStudentHomeData> {
    return api.get("question/4");
  },
  updateHomeTitle(title: string): AxiosPromise<IStudentHomeData> {
    return api.put("question/4", { question: "Candidato Mestrado", title });
  }
};
