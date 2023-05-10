import { ILoginResponseData } from "@/models/login";
import { AxiosPromise } from "axios";
import { api } from "./api";

export const LoginService = {
  async login(formData: any): AxiosPromise<ILoginResponseData> {
    const response = await api.post("/sessions", formData);
    return response;
  },

  logout() {}
};
