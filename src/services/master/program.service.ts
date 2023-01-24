import { IMasterDefaultData, IMasterTeacher, IMasterUpdateData } from "@/models/master";
import { AxiosPromise } from "axios";
import { api } from "../api";

export const MasterProgramServices = {
  //? Home
  getData(id: number): AxiosPromise<IMasterDefaultData> {
    return api.get(`question/${id}`);
  },
  updateData(data: IMasterUpdateData): AxiosPromise<IMasterDefaultData> {
    return api.put(`question/${data.id}`, data);
  },

  indexTeachers(data: IMasterDefaultData): AxiosPromise<IMasterTeacher[]> {
    return api.get(`teacher/question/${data.id}`);
  },

  createTeacher(data: {
    question: IMasterDefaultData;
    teacher: string;
  }): AxiosPromise<IMasterDefaultData> {
    return api.put(`teacher/question/${data.question.id}`, { name: data.teacher });
  },

  deleteTeacher(data: {
    teacher: IMasterTeacher;
    question: IMasterDefaultData;
  }): AxiosPromise<void> {
    return api.delete(`teacher/${data.teacher.index}/question/${data.question.id}`);
  }
};
