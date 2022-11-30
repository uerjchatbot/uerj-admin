import { AxiosPromise } from "axios";

import { IClassroomData, ITeachingStaffData } from "@/models/teaching-staff";
import { api } from "../api";

export const TeachingStaffServices = {
  //? Home
  getHomeData(id: number): AxiosPromise<ITeachingStaffData> {
    return api.get(`question/${id}`);
  },

  updateHomeTitle(id: number, title: string): AxiosPromise<ITeachingStaffData> {
    return api.put(`question/${id}`, { title });
  },

  //? Classroom Children
  getClassroomChildrenId(id: number): AxiosPromise<ITeachingStaffData> {
    return api.get(`question/${id}`);
  },

  getClassroomChildrenData(id = 0): AxiosPromise<IClassroomData[]> {
    return api.get(`class/question/${id}`);
  },

  getTeachers(id: number): AxiosPromise<any> {
    return api.get(`teacher/question/${id}`);
  },

  //? Update FFP teachers
  updateFfpQuestionAndTitle(
    id: number,
    title: string,
    question: string
  ): AxiosPromise<ITeachingStaffData> {
    return api.put(`question/${id}`, { title, question });
  },

  updateFfpTeachers(id: number, teachers: any): AxiosPromise<ITeachingStaffData> {
    return api.put(`name-link/question/${id}`, { teachers });
  },

  //? update master data
  updateMasterData(
    classId: number,
    questionId: number,
    matter: string,
    students: string[]
  ): AxiosPromise<any> {
    return api.put(`class/${classId}/question/${questionId}`, { matter, students });
  },

  //? Create class
  createClass(
    questionId: number,
    matter: string,
    students: string[]
  ): AxiosPromise<ITeachingStaffData> {
    return api.put(`class/question/${questionId}`, { matter, students });
  },

  //? delete class
  deleteClass(classId: number, questionId: number): AxiosPromise<void> {
    return api.delete(`class/${classId}/question/${questionId}`);
  }
};
