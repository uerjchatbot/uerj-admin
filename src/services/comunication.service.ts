import { Degree } from "@/models/Degree";
import { Comunication, CreateComunication, List } from "@/models/comunication";
import { AxiosPromise } from "axios";
import { api } from "./api";

export const ComunicationService = {
  create(data: CreateComunication): AxiosPromise<Comunication[]> {
    return api.post(`/comunications`, data);
  },

  list(): AxiosPromise<List> {
    return api.get(`/comunications`);
  },

  send(data: Degree): AxiosPromise<void> {
    return api.post(`/comunications/${data.id}/send`, { degree: data.degree });
  }
};
