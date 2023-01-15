export interface ITeachingStaffChildrenData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: ITeachingStaffChildrenData[];
}

export interface ITeachingStaffData {
  id: number;
  question: string;
  father_question: number;
  title: string;
  response: boolean;
  childrens: ITeachingStaffChildrenData[];
}

export interface IClassroomData {
  index: number;
  matter: string;
  students: string[];
}

export interface ITeacherData {
  index: number;
  teacher: string;
  link: string;
}

export interface IFirstStepData {
  notice: ITeachingStaffChildrenData;
  vacancies: ITeachingStaffChildrenData;
  quotas: ITeachingStaffChildrenData;
  registration: ITeachingStaffChildrenData;
}

export interface ISecondStepData {
  documentation: ITeachingStaffChildrenData;
  steps: ITeachingStaffChildrenData;
  discretion: ITeachingStaffChildrenData;
  registration: ITeachingStaffChildrenData;
}

export interface IThirdStepData {
  results: ITeachingStaffChildrenData;
  resources: ITeachingStaffChildrenData;
}
