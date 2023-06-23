import { CreatedFormResponse, FormQuestion, List } from "@/models/form";
import { AxiosPromise } from "axios";
import { api } from "../api";

interface CreateForm {
  title: string;
  questions: FormQuestion[];
}

export const FormService = {
  build(data: CreateForm): AxiosPromise<CreatedFormResponse> {
    return api.post(`/forms/build`, data);
  },

  list(): AxiosPromise<List> {
    return api.get(`/forms`);
  },

  send(data: { id: string; degree: "master" | "doctor" }): AxiosPromise<void> {
    return api.post(`/forms/${data.id}/send`, { degree: data.degree });
  }
};
