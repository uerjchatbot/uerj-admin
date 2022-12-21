import { AxiosPromise } from "axios";

import { api } from "../api";
import { IEventData, IEventsHomeData } from "@/models/events";

export const EventServices = {
  //? Home
  getHomeData(id: number): AxiosPromise<IEventsHomeData> {
    return api.get(`question/${id}`);
  },

  getEventDateAndHour(id: number): AxiosPromise<any> {
    return api.get(`event/question/${id}`);
  },

  getEventData(id: number): AxiosPromise<IEventData> {
    return api.get(`event/question/${id}`);
  }

  // updateHomeTitle(id: number, title: string): AxiosPromise<ITeachingStaffData> {
  //   return api.put(`question/${id}`, { title });
  // },

  // //? Classroom Children
  // getClassroomChildrenId(id: number): AxiosPromise<ITeachingStaffData> {
  //   return api.get(`question/${id}`);
  // },

  // getClassroomChildrenData(id = 0): AxiosPromise<IClassroomData[]> {
  //   return api.get(`class/question/${id}`);
  // },

  // getTeachers(id: number): AxiosPromise<ITeacherData[]> {
  //   return api.get(`teacher/question/${id}`);
  // },

  // //? Update FFP teachers
  // updateFfpQuestionAndTitle(
  //   id: number,
  //   title: string,
  //   question: string
  // ): AxiosPromise<ITeachingStaffData> {
  //   return api.put(`question/${id}`, { title, question });
  // },

  // updateFfpTeachers(id: number, teachers: any): AxiosPromise<ITeachingStaffData> {
  //   return api.put(`name-link/question/${id}`, { teachers });
  // },

  // //? update master data
  // updateMasterData(
  //   classId: number,
  //   questionId: number,
  //   matter: string,
  //   students: string[]
  // ): AxiosPromise<any> {
  //   return api.put(`class/${classId}/question/${questionId}`, { matter, students });
  // },

  // //? Create class
  // createClass(
  //   questionId: number,
  //   matter: string,
  //   students: string[]
  // ): AxiosPromise<ITeachingStaffData> {
  //   return api.put(`class/question/${questionId}`, { matter, students });
  // },

  // //? delete class
  // deleteClass(classId: number, questionId: number): AxiosPromise<void> {
  //   return api.delete(`class/${classId}/question/${questionId}`);
  // },

  // //? create teacher
  // createTeacher(questionId: number, name: string, link: string): AxiosPromise<void> {
  //   return api.put(`teacher/question/${questionId}`, { name, link });
  // },

  // //? update teacher data
  // updateTeacherData(
  //   teacherId: number,
  //   questionId: number,
  //   name: string,
  //   link: string
  // ): AxiosPromise<void> {
  //   return api.put(`teacher/${teacherId}/question/${questionId}`, { name, link });
  // },

  // //? delete teacher
  // deleteTeacher(teacherId: number, questionId: number): AxiosPromise<void> {
  //   return api.delete(`teacher/${teacherId}/question/${questionId}`);
  // }
};
