import { ICordinationData, IFfpData, IRepresentationData, ITeachersData } from "@/models/student";
import { AxiosPromise } from "axios";
import { api } from "../api";

export const StudentServices = {
  //? Home
  getHomeData(): AxiosPromise<any> {
    return api.get("student/question?identifier=STUDENT");
  },

  //? Teaching Staff Home
  getTeachingStaffData(): AxiosPromise<any> {
    return api.get("student/question?identifier=STUDENT_TEACHING_STAFF");
  },

  //? Teaching Staff Stages
  getTeachingStaffFFPData(): AxiosPromise<IFfpData> {
    return api.get("student/staff/name-link/question?identifier=STAFF_FFP");
  },

  getTeachingStaffCoordinationData(): AxiosPromise<ICordinationData> {
    return api.get("student/staff/name-link/question?identifier=STAFF_COORDINATION");
  },

  getTeachingStaffRepresentationData(): AxiosPromise<IRepresentationData> {
    return api.get("student/staff/name-link/question?identifier=STUDENT_TEACHING_STAFF");
  },

  getTeachingStaffTeacherData(): AxiosPromise<ITeachersData> {
    return api.get("student/staff/name-link/question?identifier=STAFF_TEACHERS");
  }
};
