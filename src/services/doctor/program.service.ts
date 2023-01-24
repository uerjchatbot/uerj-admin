import { IDoctorDefaultData, IDoctorTeacher, IDoctorUpdateData } from "@/models/doctor";
import { AxiosPromise } from "axios";
import { api } from "../api";

export const DoctorProgramServices = {
  //? Home
  getData(id: number): AxiosPromise<IDoctorDefaultData> {
    return api.get(`question/${id}`);
  },
  updateData(data: IDoctorUpdateData): AxiosPromise<IDoctorDefaultData> {
    return api.put(`question/${data.id}`, data);
  },

  indexTeachers(data: IDoctorDefaultData): AxiosPromise<IDoctorTeacher[]> {
    return api.get(`teacher/question/${data.id}`);
  },

  createTeacher(data: {
    question: IDoctorDefaultData;
    teacher: string;
  }): AxiosPromise<IDoctorDefaultData> {
    return api.put(`teacher/question/${data.question.id}`, { name: data.teacher });
  },

  deleteTeacher(data: {
    teacher: IDoctorTeacher;
    question: IDoctorDefaultData;
  }): AxiosPromise<void> {
    return api.delete(`teacher/${data.teacher.index}/question/${data.question.id}`);
  }
};
