import { AxiosPromise } from "axios";
import { api } from "./api";

export const LoginService = {
  async login(formData: any): AxiosPromise<any> {
    return await api.post("/auth", formData);
  },

  logout() {}
};
