import { ILoginResponseData } from "@/models/login";
import { AxiosPromise, AxiosResponse } from "axios";
import { api } from "./api";

export const LoginService = {
  async login(formData: any): AxiosPromise<ILoginResponseData> {
    const response = await api.post("/auth/signin", formData);
    return response;
  },

  async validateToken(access_token: string): Promise<AxiosResponse<ILoginResponseData>> {
    const response = await api.get(`/google/validate/${access_token}`);
    return response;
  },

  logout() {}
};
