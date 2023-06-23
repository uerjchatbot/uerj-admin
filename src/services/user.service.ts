import { Student } from "@/models/user";
import { AxiosPromise } from "axios";
import { api } from "./api";

export const UserService = {
  collect(): AxiosPromise<Student[]> {
    return api.get(`/users/collect`);
  }
};
