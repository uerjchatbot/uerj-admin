import { IUserData } from "./user";

export interface ILoginFormData {
  email: string;
  password: string;
}

export interface ILoginResponseData {
  user: IUserData;
  token: string;
}
